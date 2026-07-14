import { Link } from 'react-router-dom'

export function PageHeader({ crumb, eyebrow, title, text }) {
  return (
    <section className="page-header">
      <div className="container">
        <div className="breadcrumbs"><Link to="/">Bosh sahifa</Link><span>/</span><span>{crumb}</span></div>
        <span className="eyebrow hero-eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  )
}
