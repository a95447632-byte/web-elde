import { useEffect, useState } from 'react'

const SLIDE_INTERVAL_MS = 5000

/**
 * Umumiy (qayta ishlatiladigan) aylanadigan rasm-banner.
 * `images` — [{ image, alt }] ko'rinishidagi massiv.
 * Sichqoncha ustiga qo'yilganda avtomatik aylanish to'xtaydi.
 */
export function ImageCarousel({ images }) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || images.length < 2) return
    const t = setInterval(() => {
      setActive((a) => (a + 1) % images.length)
    }, SLIDE_INTERVAL_MS)
    return () => clearInterval(t)
  }, [paused, images.length])

  if (!images.length) return null

  return (
    <div
      className="image-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="image-carousel-frame">
        {images.map((slide, i) => (
          <img
            key={slide.id ?? i}
            src={slide.image}
            alt={slide.alt}
            className={`image-carousel-slide ${i === active ? 'is-active' : ''}`}
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        ))}
      </div>

      {images.length > 1 && (
        <div className="image-carousel-dots">
          {images.map((_, i) => (
            <button
              key={i}
              aria-label={`Banner ${i + 1}`}
              className={i === active ? 'is-active' : ''}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      )}
    </div>
  )
}