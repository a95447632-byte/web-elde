import { useMemo, useState } from 'react'

/**
 * BranchesPage, PromotionsPage va NewsPage'da bir xil "filter + filtered list"
 * pattern takrorlangan edi — shu hook o'sha takrorni yo'q qiladi.
 *
 * @param {Array} items - to'liq ro'yxat
 * @param {string} filterKey - har bir item ichidagi filtrlanadigan maydon nomi (masalan 'category')
 * @param {string} allValue - "barchasi" degan ma'noni bildiruvchi qiymat
 */
export function useFilteredList(items, filterKey, allValue = 'all') {
  const [filter, setFilter] = useState(allValue)

  const filtered = useMemo(
    () => items.filter((item) => filter === allValue || item[filterKey] === filter),
    [items, filter, filterKey, allValue]
  )

  return { filter, setFilter, filtered }
}
