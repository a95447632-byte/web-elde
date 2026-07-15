import { useNavigate } from 'react-router-dom'
import { Reveal } from '../components/shared/Reveal'
import { PageHeader } from '../components/shared/PageHeader'
import { SectionHead } from '../components/shared/SectionHead'
import { ImageCarousel } from '../components/shared/ImageCarousel'
import { FilterTabs } from '../components/shared/FilterTabs'
import { PromoCard } from '../components/cards/PromoCard'
import { PROMOS } from '../data/promos'
import { ACTIVE_PROMO_BANNERS } from '../data/activePromoBanners'
import { useFilteredList } from '../hooks/useFilteredList'
import { usePageMeta } from '../hooks/usePageMeta'

const FILTER_OPTIONS = [
  { value: 'all', label: 'Barchasi' },
  { value: 'tv', label: 'Televizorlar' },
  { value: 'maishiy', label: 'Maishiy texnika' },
  { value: 'mobil', label: 'Mobil qurilmalar' },
]

export function PromotionsPage() {
  const navigate = useNavigate()
  const { filter, setFilter, filtered } = useFilteredList(PROMOS, 'category')
  usePageMeta('Aksiyalar', "ELDE'dagi joriy aksiya va chegirmalar: televizor, maishiy texnika va mobil qurilmalarga maxsus takliflar.")

  return (
    <>
      <PageHeader
        crumb="Aksiyalar"
        eyebrow="Maxsus takliflar"
        title="Joriy aksiya va chegirmalar"
        text="Har oyda yangilanadigan chegirmalar, muddatli to'lov shartlari va trade-in dasturlari bilan tanishing."
      />

      <section className="section section--tight">
        <div className="container">
          <SectionHead eyebrow="Faol aksiyalar" title="Hozirgi kunda amal qilayotgan takliflar" />
          <div className="promo-banner-layout">
            <p className="lead-sm promo-banner-text" style={{ fontSize: 16, marginBottom: 0 }}>
              "Elde" do'konidan yirik texnika sotib oling va bizning bonuslarimiz bilan mijozlaringizni lol qoldiring! 1 iyuldan 30 iyulgacha amal qiladigan bu aksiya orqali smartfonlar va televizorlarni mutlaqo bepul taqdim etiladi.
                <li>IYUL AKSIYASI BOSHLANDI!</li>🎁 

                <li>✨ Texnika xarid qiling va BONUS SOVG'ALARGA ega bo'ling!</li>

                <li>✅ Boshlang'ich to'lov — 0 SO'M</li>
                <li>✅ Qulay 12 oylik to'lov</li>
                <li>✅ Televizor, smartfon, changyutgich va boshqa sovg'alar sizni kutmoqda!</li>

                <li>⏳ Aksiya faqat 30-iyulgacha! Shoshiling!</li>
            </p>
            <Reveal>
              <ImageCarousel images={ACTIVE_PROMO_BANNERS} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FilterTabs active={filter} onChange={setFilter} options={FILTER_OPTIONS} />
          <Reveal stagger className="card-grid">
            {filtered.map((p) => <PromoCard item={p} key={p.id} />)}
          </Reveal>
        </div>
      </section>

      <section className="section section--navy">
        <Reveal className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(24px,3vw,34px)' }}>Aksiya shartlari haqida batafsil bilib oling</h2>
          <p style={{ marginTop: 12, color: 'rgba(255,255,255,0.6)' }}>Filialga qo'ng'iroq qiling yoki tashrif buyuring — mutaxassislarimiz barcha savollarga javob beradi.</p>
          <div style={{ marginTop: 28 }}>
            <a href="#" className="btn btn--amber" onClick={(e) => { e.preventDefault(); navigate('/contacts') }}>Biz bilan bog'lanish</a>
          </div>
        </Reveal>
      </section>
    </>
  )
}