import { Card } from './Card'
import { getBadgeClass } from '../../data/newsCategoryStyle'

export function NewsCard({ item }) {
  const Icon = item.icon
  const badgeClass = getBadgeClass(item.category)

  return (
    <Card className="news-card">
      {item.image ? (
        <div
          className="card-media card-media--image"
          style={{ backgroundImage: `url(${item.image})` }}
          role="img"
          aria-label={item.title}
        >
          <span className={`badge ${badgeClass}`}>{item.badge}</span>
        </div>
      ) : (
        <div className="card-media card-media--icon">
          <span className={`badge ${badgeClass}`}>{item.badge}</span>
          <Icon style={{ width: 40, height: 40, color: 'var(--purple-700)', opacity: 0.7 }} strokeWidth={1.4} />
        </div>
      )}
      <div className="card-body">
        <h3>{item.title}</h3>
        <p>{item.text}</p>
        <div className="card-meta"><span>{item.date}</span></div>
      </div>
    </Card>
  )
}
