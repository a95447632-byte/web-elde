import { useEffect, useState } from 'react'
import { DEVICE_SLIDES } from '../../data/devices'

const SLIDE_INTERVAL_MS = 4200

export function DeviceSlider() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setActive((a) => (a + 1) % DEVICE_SLIDES.length)
    }, SLIDE_INTERVAL_MS)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="device-panel reveal is-visible">
      <div className="device-panel-cam"><span /></div>
      <div className="device-screen">
        {DEVICE_SLIDES.map((slide, i) => {
          const Icon = slide.icon
          return (
            <div key={i} className={`device-slide ${i === active ? 'is-active' : ''}`}>
              <span className="badge badge--amber">{slide.badge}</span>
              <Icon className="device-slide-icon" strokeWidth={1.6} />
              <h4>{slide.title}</h4>
              <p>{slide.text}</p>
              <div className="device-slide-price">{slide.price}</div>
            </div>
          )
        })}
      </div>
      <div className="device-dots">
        {DEVICE_SLIDES.map((_, i) => (
          <button
            key={i}
            aria-label={`Slayd ${i + 1}`}
            className={i === active ? 'is-active' : ''}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </div>
  )
}
