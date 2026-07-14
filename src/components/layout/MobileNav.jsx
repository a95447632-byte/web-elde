import { NavLink } from 'react-router-dom'
import { NAV_LINKS } from '../../data/navigation'
import { PHONE_DISPLAY, PHONE_TEL } from '../../data/contacts'
import { IconPhone } from '../../assets/icons'
import { ThemeToggle } from '../shared/ThemeToggle'

export function MobileNav({ isOpen, onClose, theme, onToggleTheme }) {
  return (
    <nav className={`mobile-nav ${isOpen ? 'is-open' : ''}`} aria-label="Mobil navigatsiya">
      {NAV_LINKS.map((l) => (
        <NavLink
          key={l.key}
          to={l.path}
          end={l.path === '/'}
          className={({ isActive }) => (isActive ? 'is-active' : '')}
          onClick={onClose}
        >
          {l.label}
        </NavLink>
      ))}
      <div className="mobile-nav-bottom">
        <a className="phone-chip" href={`tel:${PHONE_TEL}`}>
          <IconPhone style={{ width: 17, height: 17, color: 'var(--amber)' }} />
          <span>{PHONE_DISPLAY}</span>
        </a>
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>
    </nav>
  )
}
