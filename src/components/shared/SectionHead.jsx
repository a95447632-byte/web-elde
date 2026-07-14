import { Reveal } from './Reveal'
import { IconArrowRight } from '../../assets/icons'

export function SectionHead({ eyebrow, title, split, linkLabel, onLink }) {
  return (
    <Reveal className={`section-head ${split ? 'section-head--split' : ''}`}>
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {split && (
        <a href="#" className="btn--link" onClick={(e) => { e.preventDefault(); onLink() }}>
          {linkLabel}
          <IconArrowRight style={{ width: 16, height: 16 }} />
        </a>
      )}
    </Reveal>
  )
}
