import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { NAV_LINKS } from '../../data/navigation'
import { PHONE_DISPLAY, PHONE_TEL } from '../../data/contacts'
import { IconPhone, IconMenu } from '../../assets/icons'
import { MobileNav } from './MobileNav'
import { ThemeToggle } from '../shared/ThemeToggle'
import { useTheme } from '../../hooks/useTheme'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container">
          <NavLink to="/" className="brand" onClick={() => setMenuOpen(false)}>
            <span className="brand-mark" aria-hidden="true" />
            <span>ELDE<small>MUDDATLI TO'LOVGA ELEKTRONIKA VA MAISHIY TEXNIKA</small></span>
          </NavLink>

          <nav className="main-nav" aria-label="Asosiy navigatsiya">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.key}
                to={l.path}
                end={l.path === '/'}
                className={({ isActive }) => (isActive ? 'is-active' : '')}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="header-actions">
            <a className="phone-chip" href={`tel:${PHONE_TEL}`}>
              <IconPhone style={{ width: 17, height: 17, color: 'var(--amber)' }} />
              <span>{PHONE_DISPLAY}</span>
            </a>
            <ThemeToggle theme={theme} onToggle={toggleTheme} className="theme-toggle--edge" />
            <button
              className="nav-toggle"
              aria-label="Menyuni ochish"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <IconMenu style={{ width: 20, height: 20, color: 'var(--navy)' }} />
            </button>
          </div>
        </div>
      </header>

      <MobileNav isOpen={menuOpen} onClose={() => setMenuOpen(false)} theme={theme} onToggleTheme={toggleTheme} />
    </>
  )
}
