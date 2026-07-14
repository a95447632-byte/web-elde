import { Reveal } from '../components/shared/Reveal'
import { PageHeader } from '../components/shared/PageHeader'
import { FilterTabs } from '../components/shared/FilterTabs'
import { BranchCard } from '../components/cards/BranchCard'
import { BranchesMap } from '../components/shared/BranchesMap'
import { BRANCHES } from '../data/branches'
import { useFilteredList } from '../hooks/useFilteredList'
import { usePageMeta } from '../hooks/usePageMeta'

const FILTER_OPTIONS = [
  { value: 'all', label: 'Barchasi' },
  { value: 'shahar', label: 'Andijon shahri' },
  { value: 'tuman', label: 'Tumanlar' },
]

export function BranchesPage() {
  const { filter, setFilter, filtered } = useFilteredList(BRANCHES, 'region')
  usePageMeta('Filiallar', "Andijon viloyati bo'ylab joylashgan ELDE filiallarining manzili, telefon raqami va xaritadagi joylashuvi.")

  return (
    <>
      <PageHeader
        crumb="Filiallar"
        eyebrow="Filiallarimiz"
        title="Sizga eng yaqin filialni toping"
        text="Andijon viloyati bo'ylab joylashgan filiallarimizdan birortasiga tashrif buyuring — mutaxassislarimiz sizni kutmoqda."
      />
      <section className="section">
        <div className="container">
          <FilterTabs active={filter} onChange={setFilter} options={FILTER_OPTIONS} />
          <Reveal stagger className="card-grid">
            {filtered.map((b) => <BranchCard item={b} key={b.id} />)}
          </Reveal>

          <Reveal style={{ marginTop: 48, marginBottom: 20 }}>
            <h3 style={{ fontSize: 22 }}>Filiallar xaritasi</h3>
            <p style={{ color: 'var(--muted)', marginTop: 6 }}>Ro'yxatdan filialni tanlang yoki joylashuvingizni aniqlab, eng yaqinini toping.</p>
          </Reveal>
          <Reveal>
            <BranchesMap branches={BRANCHES} />
          </Reveal>
        </div>
      </section>
    </>
  )
}
