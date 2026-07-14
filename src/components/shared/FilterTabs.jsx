export function FilterTabs({ options, active, onChange }) {
  return (
    <div className="filter-tabs reveal is-visible">
      {options.map((opt) => (
        <button
          key={opt.value}
          className={`filter-tab ${active === opt.value ? 'is-active' : ''}`}
          onClick={() => onChange(opt.value)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}
