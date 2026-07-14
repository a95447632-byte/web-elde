/* =========================================================
   ICONS — bir xil chiziqli uslubdagi kichik SVG komponentlar.
   20 ta mayda komponent bo'lgani uchun alohida fayllarga
   bo'lmasdan bitta joyda saqlash o'qilishni osonlashtiradi.
   ========================================================= */

const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function IconPhone(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
export function IconPin(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
export function IconClock(props) {
  return (
    <svg {...iconProps} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  )
}
export function IconMail(props) {
  return (
    <svg {...iconProps} {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 6 12 13 2 6" />
    </svg>
  )
}
export function IconShield(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M12 22s8-4.5 8-11V5l-8-3-8 3v6c0 6.5 8 11 8 11z" />
    </svg>
  )
}
export function IconTruck(props) {
  return (
    <svg {...iconProps} {...props}>
      <rect x="1" y="7" width="15" height="11" rx="1.5" />
      <path d="M16 10h4l3 4v4h-7z" />
      <circle cx="6" cy="19.5" r="1.8" />
      <circle cx="18.5" cy="19.5" r="1.8" />
    </svg>
  )
}
export function IconCard(props) {
  return (
    <svg {...iconProps} {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
    </svg>
  )
}
export function IconHeadset(props) {
  return (
    <svg {...iconProps} {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
    </svg>
  )
}
export function IconTv(props) {
  return (
    <svg {...iconProps} {...props}>
      <rect x="2" y="4" width="20" height="13" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  )
}
export function IconWasher(props) {
  return (
    <svg {...iconProps} {...props}>
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <line x1="5" y1="8" x2="19" y2="8" />
      <circle cx="9" cy="15" r="3" />
    </svg>
  )
}
export function IconFridge(props) {
  return (
    <svg {...iconProps} {...props}>
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <line x1="4" y1="12" x2="20" y2="12" />
    </svg>
  )
}
export function IconPhoneDevice(props) {
  return (
    <svg {...iconProps} {...props}>
      <rect x="6" y="2" width="12" height="20" rx="2.5" />
      <line x1="10" y1="19" x2="14" y2="19" />
    </svg>
  )
}
export function IconStar(props) {
  return (
    <svg {...iconProps} {...props}>
      <polygon points="12 2 15 9 22 9.5 17 14.5 18.5 22 12 18 5.5 22 7 14.5 2 9.5 9 9" />
    </svg>
  )
}
export function IconBolt(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M13 2 3 14h7l-1 8 11-14h-7z" />
    </svg>
  )
}
export function IconBuilding(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
    </svg>
  )
}
export function IconHandshake(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M17 20h5v-2a4 4 0 0 0-3-3.87M9 20H4v-2a4 4 0 0 1 3-3.87M16 3.13a4 4 0 0 1 0 7.75M8 10.87a4 4 0 1 1 0-7.75" />
    </svg>
  )
}
export function IconArrowRight(props) {
  return (
    <svg {...iconProps} {...props}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}
export function IconMenu(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...props}>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}
export function IconSend(props) {
  return (
    <svg {...iconProps} strokeWidth={2} {...props}>
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  )
}
export function IconCheck(props) {
  return (
    <svg {...iconProps} strokeWidth={2} {...props}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}
export function IconTelegram(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M22 3 2 11l6 2.4M22 3l-4 18-8-6.6M22 3 8.4 13.4M8.4 13.4 8 20l3-4" />
    </svg>
  )
}
export function IconInstagram(props) {
  return (
    <svg {...iconProps} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" />
    </svg>
  )
}
export function IconFacebook(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}
export function IconBriefcase(props) {
  return (
    <svg {...iconProps} {...props}>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <line x1="2" y1="13" x2="22" y2="13" />
    </svg>
  )
}

export function IconSearch(props) {
  return (
    <svg {...iconProps} {...props}>
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}
export function IconNavigation(props) {
  return (
    <svg {...iconProps} {...props}>
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </svg>
  )
}

export function IconSun(props) {
  return (
    <svg {...iconProps} {...props}>
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2v2.5M12 19.5V22M4.22 4.22l1.77 1.77M18 18l1.78 1.78M2 12h2.5M19.5 12H22M4.22 19.78 6 18M18 6l1.78-1.78" />
    </svg>
  )
}
export function IconMoon(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}
