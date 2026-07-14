import { Reveal } from '../components/shared/Reveal'
import { PageHeader } from '../components/shared/PageHeader'
import { IconPhone, IconMail, IconPin, IconClock, IconTelegram, IconInstagram, IconSend, IconCheck } from '../assets/icons'
import { PHONE_DISPLAY, PHONE_TEL, EMAIL } from '../data/contacts'
import { INSTAGRAM_URL, TELEGRAM_URL } from '../data/socials'
import { BRANCHES } from '../data/branches'
import { BranchesMap } from '../components/shared/BranchesMap'
import { useContactForm } from '../hooks/useContactForm'
import { usePageMeta } from '../hooks/usePageMeta'

export function ContactsPage() {
  const { form, sent, sending, error, handleChange, handleSubmit } = useContactForm()
  usePageMeta('Kontaktlar', "ELDE bilan bog'lanish: telefon, elektron pochta va bosh ofis manzili. Savol va takliflaringizni qoldiring.")

  return (
    <>
      <PageHeader
        crumb="Kontaktlar"
        eyebrow="Aloqa"
        title="Biz bilan bog'laning"
        text="Savol yoki takliflaringiz bo'lsa, quyidagi ma'lumotlar orqali biz bilan bog'lanishingiz mumkin — javob berishdan xursand bo'lamiz."
      />

      <section className="section">
        <div className="container">
          <div className="contact-layout">
            <Reveal className="contact-info-card">
              <h3>Aloqa ma'lumotlari</h3>
              <p className="lead-sm">Har kuni, bayram kunlari ham, 09:00–20:00 oralig'ida qo'ng'iroqlaringizni kutamiz.</p>

              <div className="contact-line">
                <IconPhone style={{ width: 20, height: 20, color: 'var(--amber)' }} />
                <div><div className="label">Call-markaz</div><div className="value"><a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a></div></div>
              </div>
              <div className="contact-line">
                <IconMail style={{ width: 20, height: 20, color: 'var(--amber)' }} />
                <div><div className="label">Elektron pochta</div><div className="value">{EMAIL}</div></div>
              </div>
              <div className="contact-line">
                <IconPin style={{ width: 20, height: 20, color: 'var(--amber)' }} />
                <div><div className="label">Bosh ofis</div><div className="value">Andijon shahri,<br />markaziy hudud</div></div>
              </div>
              <div className="contact-line">
                <IconClock style={{ width: 20, height: 20, color: 'var(--amber)' }} />
                <div><div className="label">Ish vaqti</div><div className="value">Har kuni: 09:00–20:00<br />Bayram kunlari ham ishlaymiz</div></div>
              </div>

              <div className="social-row">
                <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Telegram"><IconTelegram style={{ width: 18, height: 18, color: '#fff' }} /></a>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><IconInstagram style={{ width: 18, height: 18, color: '#fff' }} /></a>
              </div>
            </Reveal>

            <Reveal className="form-card">
              <h3 style={{ fontSize: 20, fontWeight: 600 }}>Murojaat qoldiring</h3>
              <p className="form-note" style={{ marginBottom: 24 }}>Formani to'ldiring — mutaxassislarimiz 24 soat ichida siz bilan bog'lanadi.</p>

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="field">
                    <label htmlFor="name">Ismingiz</label>
                    <input type="text" id="name" name="name" placeholder="Ismingizni kiriting" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">Telefon raqam</label>
                    <input type="tel" id="phone" name="phone" placeholder="+998 __ ___ __ __" value={form.phone} onChange={handleChange} required />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="branch">Qaysi filial bo'yicha</label>
                  <select id="branch" name="branch" value={form.branch} onChange={handleChange}>
                    <option>Andijon shahri — Markaz</option>
                    <option>Xo'jaobod</option>
                    <option>Buloqboshi</option>
                    <option>Baliqchi</option>
                    <option>Qo'rg'ontepa</option>
                    <option>Boz</option>
                    <option>Paxtaobod</option>
                    <option>Izboskan</option>
                    <option>Qo'shtepa</option>
                    <option>Boshqa filial</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="message">Xabar</label>
                  <textarea id="message" name="message" placeholder="Savol yoki taklifingizni yozing..." value={form.message} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn--primary" style={{ width: '100%', justifyContent: 'center' }} disabled={sending}>
                  {sending ? 'Yuborilmoqda...' : 'Yuborish'}
                  <IconSend style={{ width: 18, height: 18 }} />
                </button>
                {error && (
                  <div className="form-success is-shown" style={{ background: 'var(--red-100, #fde2e1)', color: 'var(--red, #c0392b)' }}>
                    {error}
                  </div>
                )}
                <div className={`form-success ${sent ? 'is-shown' : ''}`}>
                  <IconCheck style={{ width: 18, height: 18 }} />
                  Xabaringiz qabul qilindi. Tez orada bog'lanamiz!
                </div>
              </form>
            </Reveal>
          </div>

          <Reveal style={{ marginTop: 40 }}>
            <BranchesMap branches={BRANCHES} />
          </Reveal>
        </div>
      </section>
    </>
  )
}
