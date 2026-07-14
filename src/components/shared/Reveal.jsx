import { useInView } from '../../hooks/useInView'

export function Reveal({ children, stagger = false, className = '', style }) {
  const [ref, visible] = useInView()
  const base = stagger ? 'reveal-stagger' : 'reveal'
  return (
    <div ref={ref} className={`${base} ${className} ${visible ? 'is-visible' : ''}`} style={style}>
      {children}
    </div>
  )
}
