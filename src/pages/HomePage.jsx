import { useNavigate } from 'react-router-dom'
import { Reveal } from '../components/shared/Reveal'
import { SectionHead } from '../components/shared/SectionHead'
import { DeviceSlider } from '../components/home/DeviceSlider'
import { PromoCard } from '../components/cards/PromoCard'
import { NewsCard } from '../components/cards/NewsCard'
import { BranchCard } from '../components/cards/BranchCard'
import { IconBolt, IconPin, IconHeadset, IconArrowRight } from '../assets/icons'
import { FEATURES } from '../data/features'
import { PROMOS } from '../data/promos'
import { NEWS } from '../data/news'
import { BRANCHES } from '../data/branches'
import { BRAND_PARTNERS } from '../data/partners'
import { usePageMeta } from '../hooks/usePageMeta'

export function HomePage() {
  const navigate = useNavigate()
  usePageMeta(null, "ELDE — Andijon viloyati bo'ylab filiallari orqali xizmat ko'rsatuvchi elektronika va maishiy texnika savdo tarmog'i. Rasmiy kafolat va tezkor yetkazib berish.")
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <svg className="hero-grid-lines" viewBox="0 0 1200 700" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <pattern id="gridPattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M60 0H0V60" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="1200" height="700" fill="url(#gridPattern)" />
          <circle cx="120" cy="560" r="2" fill="rgba(108,140,255,0.5)" />
          <circle cx="360" cy="620" r="2" fill="rgba(108,140,255,0.5)" />
          <circle cx="240" cy="500" r="2" fill="rgba(108,140,255,0.5)" />
          <path d="M120 560 L240 500 L360 620" stroke="rgba(108,140,255,0.25)" strokeWidth="1" fill="none" />
        </svg>

        <div className="container">
          <div className="hero-copy">
            <span className="eyebrow hero-eyebrow">O'zbekistonda 2019-yildan buyon</span>
            <h1>Uyingiz uchun <em>ishonchli</em><br />texnika, aniq narxda</h1>
            <p className="lead">Rasmiy kafolat va tezkor yetkazib berish — ELDE'da har bir xarid o'zini oqlaydi.</p>
            <div className="hero-actions">
              <a href="#" className="btn btn--amber" onClick={(e) => { e.preventDefault(); navigate('/promotions') }}>
                <IconBolt style={{ width: 18, height: 18 }} />
                Aksiyalarni ko'rish
              </a>
              <a href="#" className="btn btn--on-navy" onClick={(e) => { e.preventDefault(); navigate('/branches') }}>
                <IconPin style={{ width: 18, height: 18 }} />
                Filialni toping
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat"><span className="stat-num">5000+</span><span className="stat-label">mahsulot turi</span></div>
              <div className="stat"><span className="stat-num">120K+</span><span className="stat-label">mamnun mijoz</span></div>
              <div className="stat"><span className="stat-num">3</span><span className="stat-label">yil kafolat</span></div>
            </div>
          </div>

          <DeviceSlider />
        </div>
      </section>

      {/* QISQACHA KOMPANIYA */}
      <section className="section">
        <div className="container about-snippet">
          <Reveal className="about-visual">
              <img src="/images/about/elde-logo.jpg" alt="ELDE jamoasi" />
          </Reveal>
          <Reveal className="about-copy">
            <span className="eyebrow">Biz haqimizda</span>
            <h2>8 yildan ortiq tajriba, minglab mamnun oilalar</h2>
            <p>ELDE — 2019-yilda tashkil etilgan, Andijon viloyati bo'ylab filiallarga ega elektronika va maishiy texnika savdo tarmog'i. Biz faqat rasmiy import mahsulotlar bilan ishlaymiz va har bir xaridga uzoq muddatli kafolat beramiz.</p>
            <p>Malakali maslahatchilar, tezkor yetkazib berish xizmati va qulay muddatli to'lov tizimi — barchasi bitta joyda.</p>
            <a href="#" className="btn btn--ghost" onClick={(e) => { e.preventDefault(); navigate('/about') }}>
              Batafsil ma'lumot
              <IconArrowRight style={{ width: 18, height: 18 }} />
            </a>
          </Reveal>
        </div>
      </section>

      {/* NEGA BIZ */}
      <section className="section section--mist section--tight">
        <div className="container">
          <Reveal stagger className="feature-grid">
            {FEATURES.map((f, i) => {
              const Icon = f.icon
              return (
                <div className="feature-card" key={i}>
                  <div className="feature-icon"><Icon style={{ width: 24, height: 24, color: 'var(--blue)' }} /></div>
                  <h4>{f.title}</h4>
                  <p>{f.text}</p>
                </div>
              )
            })}
          </Reveal>
        </div>
      </section>

      {/* AKSIYALAR PREVIEW */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Aksiyalar" title="Joriy chegirmalar va takliflar" split linkLabel="Barcha aksiyalar" onLink={() => navigate('/promotions')} />
          <Reveal stagger className="card-grid">
            {PROMOS.slice(0, 3).map((p) => <PromoCard item={p} key={p.id} />)}
          </Reveal>
        </div>
      </section>

      {/* YANGILIKLAR PREVIEW */}
      <section className="section section--mist">
        <div className="container">
          <SectionHead eyebrow="Yangiliklar" title="Kompaniya yangiliklari" split linkLabel="Barcha yangiliklar" onLink={() => navigate('/news')} />
          <Reveal stagger className="card-grid">
            {NEWS.slice(0, 3).map((n) => <NewsCard item={n} key={n.id} />)}
          </Reveal>
        </div>
      </section>

      {/* FILIALLAR PREVIEW */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Filiallar" title="Sizga eng yaqin filialni toping" split linkLabel="Barcha filiallar" onLink={() => navigate('/branches')} />
          <Reveal stagger className="card-grid">
            {BRANCHES.slice(0, 3).map((b) => <BranchCard item={b} key={b.id} />)}
          </Reveal>
        </div>
      </section>

      {/* HAMKOR BRENDLAR */}
      <section className="section section--tight section--mist">
        <div className="container">
          <Reveal className="section-head" style={{ marginBottom: 32 }}>
            <span className="eyebrow">Hamkorlarimiz</span>
            <h2 style={{ fontSize: 26 }}>Yetakchi jahon brendlari bilan ishlaymiz</h2>
          </Reveal>
        </div>
        <Reveal className="marquee">
          <div className="marquee-track">
            {[...BRAND_PARTNERS, ...BRAND_PARTNERS].map((b, i) => (
              <span className="brand-chip" key={i}>{b}</span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="section section--navy">
        <Reveal className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow hero-eyebrow" style={{ justifyContent: 'center' }}>Savol tug'ildimi?</span>
          <h2 style={{ marginTop: 14, fontSize: 'clamp(24px,3vw,34px)' }}>Bizning mutaxassislarimiz sizga yordam berishga tayyor</h2>
          <div style={{ marginTop: 28 }}>
            <a href="#" className="btn btn--amber" onClick={(e) => { e.preventDefault(); navigate('/contacts') }}>Biz bilan bog'lanish</a>
          </div>
        </Reveal>
      </section>
    </>
  )
}
