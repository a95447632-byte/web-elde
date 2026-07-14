import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'elde-theme'

function getSystemTheme() {
  if (typeof window === 'undefined' || !window.matchMedia) return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light'
  const saved = window.localStorage.getItem(STORAGE_KEY)
  // Foydalanuvchi avval qo'lda tanlagan bo'lsa — o'shani hurmat qilamiz.
  // Aks holda telefon/kompyuter rejimiga (prefers-color-scheme) moslashamiz.
  return saved === 'dark' || saved === 'light' ? saved : getSystemTheme()
}

/**
 * Dark/Light mode: avtomatik (tizim sozlamasiga mos) + qo'lda tugma bilan
 * almashtirish. Tanlov localStorage'da saqlanadi, shuning uchun sahifani
 * yangilaganda ham eslab qoladi. Agar foydalanuvchi hali hech qachon
 * qo'lda tanlamagan bo'lsa, tizim rejimi o'zgarganda sayt ham avtomatik
 * moslashadi (masalan, kechqurun telefon dark mode'ga o'tsa).
 */
export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    if (!window.matchMedia) return
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (e) => {
      const hasManualChoice = window.localStorage.getItem(STORAGE_KEY)
      if (!hasManualChoice) setTheme(e.matches ? 'dark' : 'light')
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      window.localStorage.setItem(STORAGE_KEY, next)
      return next
    })
  }, [])

  return { theme, toggleTheme }
}
