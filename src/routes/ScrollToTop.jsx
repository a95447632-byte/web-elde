import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Original kodda navigate() ichida window.scrollTo(0,0) bor edi.
 * React Router'da bu funksionallikni location o'zgarishini kuzatib
 * qayta hosil qilamiz.
 */
export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])

  return null
}
