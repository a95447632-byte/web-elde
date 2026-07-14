import { useEffect, useRef, useState } from 'react'

/**
 * Elementga ref bog'lansa, u ko'rinishga kirganda `inView`ni true qiladi.
 * Reveal komponenti shu asosida .is-visible klassini qo'shadi.
 *
 * Xavfsizlik choralari (ba'zi mobil/in-app brauzerlarda IntersectionObserver
 * signal bermay qolishi mumkin, natijada kontent butunlay ko'rinmas holatda
 * qolib ketadi):
 *  1) IntersectionObserver mavjud bo'lmasa — darhol ko'rinadi.
 *  2) Belgilangan vaqt (900ms) ichida signal kelmasa — baribir ko'rinadi.
 */
export function useInView(options) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }

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

    // Fallback: signal kelmasa ham kontent abadiy yashirin qolib ketmasin
    const fallback = setTimeout(() => setInView(true), 900)

    return () => {
      io.disconnect()
      clearTimeout(fallback)
    }
  }, [])

  return [ref, inView]
}