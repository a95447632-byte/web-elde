import { IconSun, IconMoon } from '../../assets/icons'

export function ThemeToggle({ theme, onToggle, className = '' }) {
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className={`theme-toggle ${className}`}
      onClick={onToggle}
      aria-label={isDark ? "Yorug' rejimga o'tish" : "Tungi rejimga o'tish"}
      aria-pressed={isDark}
    >
      {isDark ? (
        <IconSun style={{ width: 18, height: 18 }} />
      ) : (
        <IconMoon style={{ width: 18, height: 18 }} />
      )}
    </button>
  )
}
