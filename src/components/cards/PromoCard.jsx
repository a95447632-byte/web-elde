import { Card } from './Card'

export function PromoCard({ item }) {
  const Icon = item.icon

  return (
    <Card className="promo-card">
      {item.image ? (
        <div
          className="card-media card-media--image"
          style={{ backgroundImage: `url(${item.image})` }}
          role="img"
          aria-label={item.title}
        >
          <span className="badge badge--amber">{item.badge}</span>
          <span className="tag-off">{item.off}</span>
        </div>
      ) : (
        <div className="card-media card-media--icon card-media--icon-dark">
          <span className="badge badge--amber">{item.badge}</span>
          <span className="tag-off">{item.off}</span>
          <Icon style={{ width: 44, height: 44, color: 'rgba(255,255,255,0.85)' }} strokeWidth={1.4} />
        </div>
      )}
      <div className="card-body">
        <h3>{item.title}</h3>
        <p>{item.text}</p>
        <div className="card-meta"><span>{item.meta[0]}</span><span>{item.meta[1]}</span></div>
      </div>
    </Card>
  )
}
