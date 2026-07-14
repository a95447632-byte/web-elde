import { useMemo, useState } from 'react'
import { IconPin, IconPhone, IconClock, IconSearch, IconNavigation } from '../../assets/icons'

// Andijon viloyati filiallarining taxminiy geografik chegarasi (lat/lng),
// pinlarni xarita ustida foizli koordinatalarga aylantirish uchun ishlatiladi.
function buildBounds(branches) {
  const lats = branches.map((b) => b.lat)
  const lngs = branches.map((b) => b.lng)
  const pad = 0.06
  return {
    minLat: Math.min(...lats) - pad,
    maxLat: Math.max(...lats) + pad,
    minLng: Math.min(...lngs) - pad,
    maxLng: Math.max(...lngs) + pad,
  }
}

function toPercent(branch, bounds) {
  const x = ((branch.lng - bounds.minLng) / (bounds.maxLng - bounds.minLng)) * 100
  // lat oshgani sayin xaritada tepaga suriladi — shuning uchun teskari
  const y = 100 - ((branch.lat - bounds.minLat) / (bounds.maxLat - bounds.minLat)) * 100
  return { x, y }
}

// Ikki koordinata orasidagi masofa (km), Haversine formulasi.
function distanceKm(lat1, lng1, lat2, lng2) {
  const R = 6371
  const dLat = ((lat2 - lat1) * Math.PI) / 180
  const dLng = ((lng2 - lng1) * Math.PI) / 180
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLng / 2) ** 2
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}

export function BranchesMap({ branches }) {
  const [activeId, setActiveId] = useState(branches[0]?.id ?? null)
  const [query, setQuery] = useState('')
  const [userPos, setUserPos] = useState(null)
  const [geoStatus, setGeoStatus] = useState('idle') // idle | loading | granted | denied

  const bounds = useMemo(() => buildBounds(branches), [branches])

  const withDistance = useMemo(() => {
    return branches.map((b) => ({
      ...b,
      distance: userPos ? distanceKm(userPos.lat, userPos.lng, b.lat, b.lng) : null,
    }))
  }, [branches, userPos])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    let list = q
      ? withDistance.filter((b) => b.city.toLowerCase().includes(q) || b.address.toLowerCase().includes(q))
      : withDistance
    if (userPos) list = [...list].sort((a, b) => a.distance - b.distance)
    return list
  }, [withDistance, query, userPos])

  const active = filtered.find((b) => b.id === activeId) || filtered[0] || branches[0]
  const activePos = active ? toPercent(active, bounds) : null

  function handleLocate() {
    if (!navigator.geolocation) {
      setGeoStatus('denied')
      return
    }
    setGeoStatus('loading')
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserPos({ lat: pos.coords.latitude, lng: pos.coords.longitude })
        setGeoStatus('granted')
      },
      () => setGeoStatus('denied'),
      { timeout: 8000 }
    )
  }

  return (
    <div className="locator">
      <div className="locator-toolbar">
        <div className="locator-search">
          <IconSearch style={{ width: 18, height: 18, color: 'var(--muted)' }} />
          <input
            type="text"
            placeholder="Filial yoki tuman nomini qidiring..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <button type="button" className="locator-locate-btn" onClick={handleLocate}>
          <IconNavigation style={{ width: 16, height: 16 }} />
          {geoStatus === 'loading' ? 'Aniqlanmoqda…' : "Yaqinini toping"}
        </button>
      </div>

      <div className="locator-body">
        <div className="locator-map">
          <svg className="locator-map-art" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <pattern id="locatorGrid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M8 0H0V8" fill="none" stroke="var(--border)" strokeWidth="0.3" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#locatorGrid)" />
            <path d="M0 70 Q 25 55 45 65 T 100 50" stroke="var(--border)" strokeWidth="0.6" fill="none" />
            <path d="M10 0 Q 30 35 20 100" stroke="var(--border)" strokeWidth="0.6" fill="none" />
            <path d="M100 20 Q 60 30 55 75" stroke="var(--border)" strokeWidth="0.6" fill="none" />
          </svg>

          {filtered.map((b) => {
            const pos = toPercent(b, bounds)
            const isActive = b.id === activeId
            return (
              <button
                key={b.id}
                type="button"
                className={`locator-marker ${isActive ? 'is-active' : ''}`}
                style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                onClick={() => setActiveId(b.id)}
                aria-label={b.city}
                title={b.city}
              >
                <IconPin style={{ width: isActive ? 26 : 20, height: isActive ? 26 : 20 }} />
              </button>
            )
          })}

          {userPos && (() => {
            const p = toPercent({ lat: userPos.lat, lng: userPos.lng }, bounds)
            const clampedX = Math.min(100, Math.max(0, p.x))
            const clampedY = Math.min(100, Math.max(0, p.y))
            return (
              <span className="locator-you" style={{ left: `${clampedX}%`, top: `${clampedY}%` }} title="Sizning joylashuvingiz" />
            )
          })()}

          {active && activePos && (
            <div
              className="locator-popup"
              style={{
                left: `${Math.min(78, Math.max(2, activePos.x))}%`,
                top: `${Math.min(70, Math.max(2, activePos.y))}%`,
              }}
            >
              {active.image && (
                <div className="locator-popup-media" style={{ backgroundImage: `url(${active.image})` }} role="img" aria-label={active.city} />
              )}
              <div className="locator-popup-body">
                <h4>{active.city}</h4>
                <p>{active.address}</p>
                {active.distance != null && (
                  <span className="locator-popup-distance">{active.distance.toFixed(1)} km</span>
                )}
                <a href={active.mapUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary locator-popup-btn">
                  <IconNavigation style={{ width: 15, height: 15 }} />
                  Yo'nalish
                </a>
              </div>
            </div>
          )}
        </div>

        <div className="locator-list" role="list">
          {filtered.length === 0 && <p className="locator-empty">Hech narsa topilmadi.</p>}
          {filtered.map((b) => (
            <button
              type="button"
              key={b.id}
              role="listitem"
              className={`locator-item ${b.id === activeId ? 'is-active' : ''}`}
              onClick={() => setActiveId(b.id)}
            >
              <div className="locator-item-head">
                <span className="locator-item-city">{b.city}</span>
                {b.distance != null && <span className="locator-item-distance">{b.distance.toFixed(1)} km</span>}
              </div>
              <div className="locator-item-row"><IconPin style={{ width: 14, height: 14 }} />{b.address}</div>
              <div className="locator-item-row"><IconPhone style={{ width: 14, height: 14 }} />{b.phone}</div>
              <div className="locator-item-row"><IconClock style={{ width: 14, height: 14 }} />{b.hours}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
