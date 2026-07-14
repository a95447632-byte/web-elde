// Vakansiyalar sahifasida ishlatiladigan ochiq lavozimlar ro'yxati.
// Yangi lavozim qo'shish uchun shu massivga obyekt qo'shish kifoya.
//
// `image` — lavozimga mos rasm (16:10), `public/images/vacancies/` papkasidan
// olinadi. Real xodim/ish joyi fotosini shu papkadagi bir xil nomli faylni
// almashtirib qo'ysangiz bo'ldi — kodga tegish shart emas.

export const DEPARTMENTS = [
  { value: 'all', label: 'Barchasi' },
  { value: 'savdo', label: 'Savdo' },
  { value: 'ombor', label: 'Ombor va logistika' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'undiruv', label: 'Undiruv' },
]

export const VACANCIES = [
   {
    id: 5,
    department: 'savdo',
    employmentType: "To'liq bandlik",
    title: 'Filial menejeri',
    image: '/images/vacancies/filialmenejeri.png',
    text: "Filial faoliyatini boshqarasiz, jamoa ishini muvofiqlashtirasiz va savdo ko'rsatkichlarini nazorat qilasiz.",
  },
  {
    id: 2,
    department: 'savdo',
    employmentType: "To'liq bandlik",
    title: 'Shartnoma hodimi',
    image: '/images/vacancies/shartnomachi.png',
    text: "Mijozlar bilan muddatli to'lov shartnomalarini rasmiylashtirasiz, hujjatlarni to'g'ri va o'z vaqtida tayyorlaysiz.",
  },
  {
    id: 1,
    department: 'savdo',
    employmentType: "To'liq bandlik",
    title: 'Sotuvchi',
    image: '/images/vacancies/sotuvchi.png',
    text: "Mijozlarga texnika tanlashda yordam berasiz, mahsulot xususiyatlari haqida maslahat berasiz va savdo bo'limida ishlaysiz.",
  },
 
  {
    id: 3,
    department: 'ombor',
    employmentType: "To'liq bandlik",
    title: 'Ombor xodimi',
    image: '/images/vacancies/omborhodimi.png',
    text: "Mahsulotlarni qabul qilish, saqlash va hisobga olish ishlarini yuritasiz, ombor tartibini nazorat qilasiz.",
  },
  {
    id: 4,
    department: 'ombor',
    employmentType: "To'liq bandlik",
    title: 'Yetkazib beruvchi',
    image: '/images/vacancies/yetkazibberuvchi.png',
    text: "Mijozlarga texnikani manzilga yetkazib berasiz, yetkazib berish jadvalini rejalashtirasiz.",
  },
 
  {
    id: 6,
    department: 'marketing',
    employmentType: "To'liq bandlik",
    title: 'Marketing hodimi',
    image: '/images/vacancies/marketing.png',
    text: "Reklama va aksiyalarni rejalashtirasiz, ijtimoiy tarmoqlarni yuritasiz va brend tanilishini oshirish uchun ishlaysiz.",
  },
  {
    id: 7,
    department: 'undiruv',
    employmentType: "To'liq bandlik",
    title: 'Undiruv hodimi',
    image: '/images/vacancies/undiruv.png',
    text: "Muddati o'tgan to'lovlar bo'yicha mijozlar bilan bog'lanasiz, qarzdorlikni undirish jarayonini yuritasiz va hujjatlarni nazorat qilasiz.",
  },
]
