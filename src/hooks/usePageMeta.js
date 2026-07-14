import { useEffect } from 'react'

const SITE_NAME = 'ELDE'

/**
 * Har bir sahifada haqiqiy, sahifaga mos <title> va meta-description
 * o'rnatadi. Shu hook bo'lmasa, barcha sahifalar index.html'dagi bitta
 * statik sarlavhani ko'rsatib qolaverar edi (qidiruv natijalarida va
 * ijtimoiy tarmoqqa ulashganda barcha havolalar bir xil ko'rinardi).
 */
export function usePageMeta(title, description) {
  useEffect(() => {
    const fullTitle = title ? `${title} — ${SITE_NAME}` : `${SITE_NAME} — Ishonchli elektronika va maishiy texnika`
    document.title = fullTitle

    if (description) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', 'description')
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', description)
    }
  }, [title, description])
}
