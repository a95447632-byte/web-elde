import { useState } from 'react'
import { sendContactFormToTelegram } from '../utils/sender'

const INITIAL_STATE = {
  name: '',
  phone: '',
  branch: 'Andijon shahri — Markaz',
  message: '',
}

/**
 * ContactsPage'dagi forma state va handlerlarini ajratib chiqaradi,
 * shunda sahifa komponenti faqat render bilan shug'ullanadi.
 * Forma yuborilganda ma'lumotlar Telegram botga jo'natiladi
 * (src/utils/sender.js orqali).
 */
export function useContactForm() {
  const [form, setForm] = useState(INITIAL_STATE)
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(null)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError(null)
    setSending(true)
    try {
      await sendContactFormToTelegram(form)
      setSent(true)
      setForm(INITIAL_STATE)
    } catch (err) {
      setError(err.message || "Xabarni yuborishda xatolik yuz berdi. Qaytadan urinib ko'ring.")
    } finally {
      setSending(false)
    }
  }

  return { form, sent, sending, error, handleChange, handleSubmit }
}
