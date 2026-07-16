import { IconClock, IconHandshake, IconCard, IconBuilding, IconStar, IconTruck } from '../assets/icons'

/*
  `image` — bannerda ko'rsatiladigan 16:9 rasm yo'li (masalan
  '/images/news/kafolat.jpg', public/images/news/ papkasiga qo'yiladi).
  Hozircha hech bir yangilikda rasm yo'q — shuning uchun NewsCard
  avtomatik ravishda kategoriya rangiga mos ikonka+gradient ko'rinishini
  ko'rsatadi. Real rasm qo'shish uchun public/images/news/ papkasini
  yarating va item'ga `image: '/images/news/...'` qo'shing.
*/
export const NEWS = [
  { id: 1, category: 'xizmat', badge: 'Xizmat', icon: IconClock, title: 'Kafolat xizmati muddati uzaytirildi', text: 'Endi barcha yirik maishiy texnikaga standart kafolat 3 yilgacha amal qiladi.', date: '28.06.2026' },
  { id: 2, category: 'hamkorlik', badge: 'Hamkorlik', icon: IconHandshake, title: 'Yetakchi brendlar bilan yangi shartnoma', text: '2026-yil uchun yirik ishlab chiqaruvchilar bilan rasmiy hamkorlik kengaytirildi.', date: '15.06.2026' },
  { id: 3, category: 'xizmat', badge: 'Xizmat', icon: IconCard, title: 'Muddatli to\'lov shartlari yaxshilandi', text: 'Endi birgina passport orqali 12 oygacha, passport va plastik karta orqali esa 24 oygacha bo\'lib to\'lash barcha filiallarda mavjud.', date: '02.06.2026' },
  { id: 4, category: 'filial', badge: 'Filial', icon: IconBuilding, title: 'Andijon filiali yangilandi', text: 'Andijon filialimiz kengaytirilib, yangi mahsulot turlari bilan boyitildi.', date: '20.05.2026' },
  { id: 6, category: 'xizmat', badge: 'Xizmat', icon: IconTruck, title: 'Yetkazib berish geografiyasi kengaydi', text: 'Endi bepul yetkazib berish xizmati barcha viloyat markazlarida ham mavjud.', date: '10.04.2026' },
]

export const FEATURED_NEWS = {
  badge: 'Filial',
  title: "Xonabod yangi filialimiz ishga tushdi",
  text: "ELDE tarmog'i endi Xonabod xaridorlariga ham yaqinroq: 800\u00A0m\u00B2 maydonda joylashgan yangi filialimizda barcha turdagi elektronika va maishiy texnika mavjud. Ochilish munosabati bilan birinchi hafta davomida barcha mahsulotlarga qo'shimcha 10% chegirma amal qiladi.",
  date: '15.07.2026',
  location: "Xonabod filiali",
}
