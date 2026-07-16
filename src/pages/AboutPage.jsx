import { useNavigate } from 'react-router-dom'
import { Reveal } from '../components/shared/Reveal'
import { PageHeader } from '../components/shared/PageHeader'
import { VALUES } from '../data/features'
import { TIMELINE } from '../data/timeline'
import { usePageMeta } from '../hooks/usePageMeta'

export function AboutPage() {
  const navigate = useNavigate()
  usePageMeta('Biz haqimizda', "ELDE kompaniyasi haqida: 2019-yildan buyon Andijon viloyatida faoliyat yuritamiz, ko'plab filiallar va rasmiy kafolat bilan xizmat ko'rsatamiz.")
  return (
    <>
      <PageHeader
        crumb="Biz haqimizda"
        eyebrow="Kompaniya"
        title="Ishonch bilan qurilgan 8 yillik yo'l"
        text="ELDE — texnika olamini har bir oilaga yaqinlashtirish maqsadida tashkil etilgan, O'zbekistondagi eng yirik elektronika tarmoqlaridan biri."
      />

      <section className="section">
        <div className="container about-snippet">
          <Reveal className="about-copy">
            <span className="eyebrow">Bizning missiyamiz</span>
            <h2>Sifatli texnikani har bir uyga eltish</h2>
            <p>2019-yilda Andijonda bitta kichik do'kondan boshlangan ELDE, bugungi kunda Andijon viloyati bo'ylab zamonaviy filiallarga ega tarmoqqa aylandi. Bizning maqsadimiz — xaridorlarga faqat rasmiy, sifatli mahsulotlarni qulay narxlarda va yuqori xizmat darajasida taqdim etish.</p>
            <p>Har bir filialimizda malakali maslahatchilar ishlaydi, ular mijozlarga aynan ularning ehtiyojiga mos texnikani tanlashda yordam beradi. Shuningdek, biz mijozlarimiz uchun qulay muddatli to'lov va bepul yetkazib berish xizmatlarini taqdim etamiz.</p>
          </Reveal>
          <Reveal className="about-visual">
            <img src="/images/about/elde-logo.jpg" alt="ELDE jamoasi" />
          </Reveal>
        </div>
      </section>

      <section className="section section--mist section--tight">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Qadriyatlarimiz</span>
            <h2>Bizni boshqalardan ajratib turadigan narsa</h2>
          </Reveal>
          <Reveal stagger className="feature-grid">
            {VALUES.map((v, i) => {
              const Icon = v.icon
              return (
                <div className="feature-card" key={i}>
                  <div className="feature-icon"><Icon style={{ width: 24, height: 24, color: 'var(--blue)' }} /></div>
                  <h4>{v.title}</h4>
                  <p>{v.text}</p>
                </div>
              )
            })}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Bizning yo'limiz</span>
            <h2>Muhim bosqichlar</h2>
          </Reveal>
          <Reveal className="timeline">
            {TIMELINE.map((t, i) => (
              <div className="timeline-item" key={i}>
                <div className="timeline-year">{t.year}</div>
                <h4>{t.title}</h4>
                <p>{t.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--navy">
        <Reveal className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(24px,3vw,34px)' }}>Bizning jamoamizga qo'shiling yoki filialimizga tashrif buyuring</h2>
          <div style={{ marginTop: 28 }}>
            <a href="#" className="btn btn--amber" onClick={(e) => { e.preventDefault(); navigate('/branches') }}>Filiallarni ko'rish</a>
          </div>
        </Reveal>
      </section>
    </>
  )
}
