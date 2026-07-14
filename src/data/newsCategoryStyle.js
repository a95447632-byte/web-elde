// Yangilik kategoriyasiga qarab badge rangini tanlash — bir xil ko'k
// badge o'rniga har bir turkum o'z rangiga ega bo'ladi, shu bilan
// bo'lim ko'zga yanada tashlanadi va tez skanerlash osonlashadi.
export const CATEGORY_BADGE_CLASS = {
  xizmat: 'badge--blue',
  hamkorlik: 'badge--amber',
  filial: 'badge--green',
}

export function getBadgeClass(category) {
  return CATEGORY_BADGE_CLASS[category] || 'badge--blue'
}
