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
    employmentType: "Bo'sh ish o'rni",
    title: 'Filial menejeri',
    image: '/images/vacancies/filialmenejeri.png',
    text: "Filial  boshqarasiz, jamoa ishini muvofiqlashtirasiz va savdo ko'rsatkichlarini nazorat qilasiz.",
  },
  {
    id: 2,
    department: 'savdo',
    employmentType: "Bo'sh ish o'rni",
    title: 'Shartnoma hodimi',
    image: '/images/vacancies/shartnomachi.png',
   text: "Mijozlar bilan muddatli to‘lov shartnomalarini rasmiylashtirasiz, hujjatlarni to‘g‘ri va o‘z vaqtida tayyorlaysiz hamda shartnomalar bo‘yicha ma'lumotlarni tizimga kiritasiz.",
  },
  {
    id: 1,
    department: 'savdo',
    employmentType: "Bo'sh ish o'rni",
    title: 'Sotuvchi',
    image: '/images/vacancies/sotuvchi.png',
   text: "Mijozlarga mahsulot tanlashda yordam berasiz, mahsulotlarning xususiyatlari haqida maslahat berasiz, savdo jarayonini amalga oshirasiz va mijozlarga sifatli xizmat ko‘rsatasiz.",
  },
  {
    id: 3,
    department: 'ombor',
    employmentType: "Bo'sh ish o'rni",
    title: 'Ombor xodimi',
    image: '/images/vacancies/omborhodimi.png',
    text: "Mahsulotlarni qabul qilish, saqlash va hisobga olish ishlarini yuritasiz, ombordagi tartibni nazorat qilasiz hamda mahsulotlarni jo‘natishga tayyorlaysiz.",
  },
  {
    id: 4,
    department: 'ombor',
    employmentType: "Bo'sh ish o'rni",
    title: 'Yetkazib beruvchi',
    image: '/images/vacancies/yetkazibberuvchi.png',
    text: "Mahsulotlarni mijozlarga belgilangan manzilga o‘z vaqtida va xavfsiz yetkazib berasiz, yuklarni topshirish jarayonini nazorat qilasiz hamda transport vositasining soz holatini ta'minlaysiz.",
  },
 
  {
    id: 6,
    department: 'marketing',
    employmentType: "Bo'sh ish o'rni",
    title: 'Marketing hodimi',
    image: '/images/vacancies/marketing.png',
    text: "Reklama va marketing aksiyalarini rejalashtirasiz, hududlarda targ‘ibot ishlarini olib borasiz, ijtimoiy tarmoqlarni yuritasiz hamda brendning tanilishini oshirishga hissa qo‘shasiz.",
  },
  {
    id: 7,
    department: 'undiruv',
    employmentType: "Bo'sh ish o'rni",
    title: 'Undiruv hodimi',
    image: '/images/vacancies/undiruv.png',
    text: "Muddati o‘tgan to‘lovlar bo‘yicha mijozlar bilan bog‘lanasiz, qarzdorlikni undirish jarayonini olib borasiz, muzokaralar o‘tkazasiz hamda tegishli hujjatlarni nazorat qilasiz.",
  },
]
