import { useNavigate } from 'react-router-dom'
import { Reveal } from '../components/shared/Reveal'
import { PageHeader } from '../components/shared/PageHeader'
import { FilterTabs } from '../components/shared/FilterTabs'
import { VacancyCard } from '../components/cards/VacancyCard'
import { IconPhone, IconSend } from '../assets/icons'
import { VACANCIES, DEPARTMENTS } from '../data/vacancies'
import { PHONE_DISPLAY, PHONE_TEL } from '../data/contacts'
import { useFilteredList } from '../hooks/useFilteredList'
import { usePageMeta } from '../hooks/usePageMeta'

export function VacanciesPage() {
  const navigate = useNavigate()
  const { filter, setFilter, filtered } = useFilteredList(VACANCIES, 'department')
  usePageMeta('Vakansiyalar', "ELDE jamoasiga qo'shiling — ochiq lavozimlar: sotuvchi, ombor xodimi, marketing va undiruv hodimi va boshqalar.")

  return (
    <>
      <PageHeader
        crumb="Vakansiyalar"
        eyebrow="Karyera"
        title="Ishni ELDEdan boshlang"
        text="Rivojlanishga tayyor bo'lganlarni jamoamizga taklif qilamiz. Quyida ochiq lavozimlar bilan tanishing."
      />

      <section className="section">
        <div className="container">
          <FilterTabs active={filter} onChange={setFilter} options={DEPARTMENTS} />
          <Reveal stagger className="card-grid">
            {filtered.map((v) => <VacancyCard item={v} key={v.id} />)}
          </Reveal>
        </div>
      </section>

      {/* Reference saytdagi yakuniy "Vakansiyalar haqida" bloki o'rniga — telefon raqamli CTA */}
      <section className="section section--navy">
        <Reveal className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow hero-eyebrow" style={{ justifyContent: 'center' }}>Vakansiyalar haqida</span>
          <h2 style={{ marginTop: 14, fontSize: 'clamp(24px,3vw,34px)' }}>Kerakli lavozimni topa olmadingizmi?</h2>
          <p style={{ marginTop: 12, color: 'rgba(255,255,255,0.65)' }}>Qo'ng'iroq qiling yoki ariza yuboring — mutaxassislarimiz sizga mos bo'sh o'rinlar haqida ma'lumot beradi.</p>
          <div style={{ marginTop: 28, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`tel:${PHONE_TEL}`} className="btn btn--amber">
              <IconPhone style={{ width: 18, height: 18 }} />
              {PHONE_DISPLAY}
            </a>
            <a href="#" className="btn btn--on-navy" onClick={(e) => { e.preventDefault(); navigate('/contacts') }}>
              Ariza yuborish
              <IconSend style={{ width: 18, height: 18 }} />
            </a>
          </div>
        </Reveal>
      </section>
    </>
  )
}
