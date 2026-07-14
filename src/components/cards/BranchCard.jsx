import { Card } from './Card'
import { IconPin, IconPhone, IconClock } from '../../assets/icons'

export function BranchCard({ item }) {
  return (
    <Card className="branch-card">
      {item.image && (
        <div
          className="card-media card-media--image"
          style={{ backgroundImage: `url(${item.image})` }}
          role="img"
          aria-label={item.city}
        />
      )}
      <div className="branch-body">
        <div className="branch-city"><IconPin style={{ width: 20, height: 20, color: 'var(--amber)' }} />{item.city}</div>
        <div className="branch-row"><IconPin style={{ width: 17, height: 17, color: 'var(--blue)' }} /><span>{item.address}</span></div>
        <div className="branch-row"><IconPhone style={{ width: 17, height: 17, color: 'var(--blue)' }} /><span>{item.phone}</span></div>
        <div className="branch-row"><IconClock style={{ width: 17, height: 17, color: 'var(--blue)' }} /><span>{item.hours}</span></div>
        <span className="branch-status"><span className="dot" />Hozir ochiq</span>
        {item.mapUrl && (
          <a href={item.mapUrl} target="_blank" rel="noopener noreferrer" className="branch-row branch-map-link" style={{ marginTop: 8, fontWeight: 600, color: 'var(--blue)' }}>
            <IconPin style={{ width: 17, height: 17, color: 'var(--blue)' }} />
            <span>Xaritada ko'rish</span>
          </a>
        )}
      </div>
    </Card>
  )
}
