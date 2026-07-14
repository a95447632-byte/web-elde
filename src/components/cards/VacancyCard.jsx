import { useNavigate } from 'react-router-dom'
import { Card } from './Card'
import { IconBriefcase, IconPhone, IconSend } from '../../assets/icons'
import { PHONE_DISPLAY, PHONE_TEL } from '../../data/contacts'

export function VacancyCard({ item }) {
  const navigate = useNavigate()
  return (
    <Card className="vacancy-card">
      {item.image ? (
        <div
          className="card-media card-media--image"
          style={{ backgroundImage: `url(${item.image})` }}
          role="img"
          aria-label={item.title}
        >
          <span className="badge badge--amber">{item.employmentType}</span>
        </div>
      ) : (
        <div className="card-media card-media--icon card-media--icon-dark">
          <span className="badge badge--amber">{item.employmentType}</span>
          <IconBriefcase style={{ width: 30, height: 30, color: 'var(--white)' }} strokeWidth={1.5} />
        </div>
      )}
      <div className="card-body">
        <h3>{item.title}</h3>
        <p>{item.text}</p>

        {/* Reference saytdagi "Vakansiyalar haqida" havolasi o'rniga — to'g'ridan-to'g'ri qo'ng'iroq */}
        <a className="vacancy-contact" href={`tel:${PHONE_TEL}`}>
          <IconPhone style={{ width: 16, height: 16 }} />
          Qo'ng'iroq qiling: {PHONE_DISPLAY}
        </a>
        <a className="vacancy-contact" href="#" onClick={(e) => { e.preventDefault(); navigate('/contacts') }}>
          <IconSend style={{ width: 16, height: 16 }} />
          Ariza qoldiring
        </a>
      </div>
    </Card>
  )
}