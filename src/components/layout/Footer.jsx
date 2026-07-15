import { NavLink } from 'react-router-dom'
import { NAV_LINKS } from '../../data/navigation'
import { PHONE_DISPLAY, PHONE_TEL, EMAIL } from '../../data/contacts'
import { INSTAGRAM_URL, TELEGRAM_URL } from '../../data/socials'
import { IconTelegram, IconInstagram } from '../../assets/icons'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <NavLink to="/" className="brand">
              <span className="brand-mark" aria-hidden="true" />
              <span>ELDE</span>
            </NavLink>
            <p>Andijon viloyati bo'ylab 12 filial orqali sifatli elektronika va maishiy texnika yetkazib beramiz. 2019-yildan beri xizmatingizdamiz.</p>
          </div>

          <div className="footer-col">
            <h5>Sahifalar</h5>
            {NAV_LINKS.map((l) => (
              <NavLink key={l.key} to={l.path}>{l.label}</NavLink>
            ))}
          </div>

          <div className="footer-col">
            <h5>Aloqa</h5>
            <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <li>Andijon shahri, markaziy hudud</li>
            <div className="social-row" style={{ marginTop: 14 }}>
              <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Telegram"><IconTelegram style={{ width: 18, height: 18, color: '#fff' }} /></a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><IconInstagram style={{ width: 18, height: 18, color: '#fff' }} /></a>
            </div>
          </div>

          <div className="footer-col">
            <h5>Ish vaqti</h5>
            <li>Dam olish kunlarisz: 09:00–20:00</li>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {year} ELDE. Barcha huquqlar himoyalangan.</span>
          <span>Ishonch va sifat — har bir xaridda.</span>
        </div>
      </div>
    </footer>
  )
}
