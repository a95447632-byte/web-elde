import { useEffect, useRef, useState } from 'react'

/**
 * Elementga ref bog'lansa, u ko'rinishga kirganda `inView`ni true qiladi.
 * Reveal komponenti shu asosida .is-visible klassini qo'shadi.
 */
export function useInView(options) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.unobserve(el)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px', ...options }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return [ref, inView]
}
