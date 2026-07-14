// Kontaktlar formasidan kelgan ma'lumotlarni Telegram bot orqali
// belgilangan chatga (guruh yoki shaxsiy) yuboradi.
//
// SOZLASH: loyihaning eng tepasidagi (package.json bilan bir joyda) .env
// faylini oching (yo'q bo'lsa .env.example'dan nusxa oling) va quyidagilarni
// to'ldiring:
//   VITE_TG_BOT_TOKEN=123456789:AA...bot-tokeningiz
//   VITE_TG_CHAT_ID=-1001234567890
//
// Bot tokenini @BotFather orqali, chat_id'ni esa botni guruhga/kanalga
// qo'shib, https://api.telegram.org/bot<TOKEN>/getUpdates orqali olasiz.
//
// MUHIM: Bu loyiha faqat frontend (Vite/React) bo'lgani uchun bu qiymatlar
// saytning JS bundle'iga qo'shilib, browser orqali ko'rinadi (istalgan kishi
// dev-tools orqali tokenni ko'rishi mumkin). Xavfsizroq yechim — bu so'rovni
// backend/serverless funksiyaga o'tkazish. Ichki/kichik loyiha uchun bu usul
// yetarli, lekin buni bilib turing.

const BOT_TOKEN = import.meta.env.VITE_TG_BOT_TOKEN
const CHAT_ID = import.meta.env.VITE_TG_CHAT_ID

/**
 * Kontakt formasi ma'lumotlarini Telegram botga yuboradi.
 * @param {{ name: string, phone: string, branch: string, message: string }} form
 * @returns {Promise<void>}
 */
export async function sendContactFormToTelegram(form) {
  if (!BOT_TOKEN || !CHAT_ID) {
    throw new Error(
      "Telegram bot sozlanmagan: .env faylida VITE_TG_BOT_TOKEN va VITE_TG_CHAT_ID ni to'ldiring."
    )
  }

  const text = [
    "🆕 <b>Yangi murojaat — ELDE sayti</b>",
    "",
    `👤 <b>Ism:</b> ${escapeHtml(form.name)}`,
    `📞 <b>Telefon:</b> ${escapeHtml(form.phone)}`,
    `🏢 <b>Filial:</b> ${escapeHtml(form.branch)}`,
    `💬 <b>Xabar:</b> ${escapeHtml(form.message) || '—'}`,
  ].join('\n')

  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text,
      parse_mode: 'HTML',
    }),
  })

  if (!response.ok) {
    const errData = await response.json().catch(() => null)
    throw new Error(errData?.description || "Telegramga yuborishda xatolik yuz berdi.")
  }
}

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}
