import { Reveal } from '../components/shared/Reveal'
import { PageHeader } from '../components/shared/PageHeader'
import { FilterTabs } from '../components/shared/FilterTabs'
import { NewsCard } from '../components/cards/NewsCard'
import { IconBuilding } from '../assets/icons'
import { NEWS, FEATURED_NEWS } from '../data/news'
import { useFilteredList } from '../hooks/useFilteredList'
import { usePageMeta } from '../hooks/usePageMeta'

const FILTER_OPTIONS = [
  { value: 'all', label: 'Barchasi' },
  { value: 'filial', label: 'Filiallar' },
  { value: 'xizmat', label: 'Xizmatlar' },
  { value: 'hamkorlik', label: 'Hamkorlik' },
]

export function NewsPage() {
  const { filter, setFilter, filtered } = useFilteredList(NEWS, 'category')
  usePageMeta('Yangiliklar', "ELDE kompaniyasining so'nggi yangiliklari: yangi filiallar, xizmatlar va hamkorliklar haqida e'lonlar.")

  return (
    <>
      <PageHeader
        crumb="Yangiliklar"
        eyebrow="Kompaniya yangiliklari"
        title="So'nggi yangiliklar va e'lonlar"
        text="Yangi filiallar, xizmatlar va hamkorliklar haqida birinchilardan bo'lib xabardor bo'ling."
      />

      <section className="section section--tight">
        <div className="container">
          <Reveal className="card featured-article">
            {FEATURED_NEWS.image ? (
              <div
                className="card-media featured-article-media"
                style={{ backgroundImage: `url(${FEATURED_NEWS.image})` }}
                role="img"
                aria-label={FEATURED_NEWS.title}
              >
                <span className="badge badge--green">{FEATURED_NEWS.badge}</span>
              </div>
            ) : (
              <div className="card-media featured-article-media featured-article-media--icon">
                <span className="badge badge--green">{FEATURED_NEWS.badge}</span>
                <IconBuilding style={{ width: 72, height: 72, color: 'var(--white)', opacity: 0.85 }} strokeWidth={1.3} />
              </div>
            )}
            <div className="card-body featured-article-body">
              <h3 style={{ fontSize: 24, marginTop: 4 }}>{FEATURED_NEWS.title}</h3>
              <p style={{ marginTop: 12 }}>{FEATURED_NEWS.text}</p>
              <div className="card-meta" style={{ marginTop: 20 }}><span>{FEATURED_NEWS.date}</span><span>{FEATURED_NEWS.location}</span></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--mist">
        <div className="container">
          <FilterTabs active={filter} onChange={setFilter} options={FILTER_OPTIONS} />
          <Reveal stagger className="card-grid">
            {filtered.map((n) => <NewsCard item={n} key={n.id} />)}
          </Reveal>
        </div>
      </section>
    </>
  )
}
