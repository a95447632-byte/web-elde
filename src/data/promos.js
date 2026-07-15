import { IconTv, IconWasher, IconPhoneDevice, IconFridge } from '../assets/icons'

/*
  `image` — mahsulot kategoriyasi banneri (16:9), `public/images/promotions/`
  papkasidan olinadi. Haqiqiy tovar fotosini xohlagan vaqtda shu papkadagi
  bir xil nomli faylni almashtirib qo'yish kifoya — kodga tegish shart emas.
*/
export const PROMOS = [
  { id: 1, category: 'tv', badge: 'Aksiya', off: '-20%', icon: IconTv, image: '/images/promotions/aksiyatv.png', title: 'Yozgi chegirmalar — Smart TV', text: 'Barcha 4K va 8K Smart televizorlarga 20% gacha chegirma. Bepul o\'rnatish xizmati mavjud.', meta: ['31.08.2026 gacha', 'Barcha filiallarda'] },
  { id: 2, category: 'maishiy', badge: 'Yangi', off: '0%', icon: IconWasher, image: '/images/promotions/aksiyakirmoshina.png', title: 'Kir yuvish mashinalari — 0% ustama', text: 'Tanlangan modellarga 12 oygacha ustamasiz muddatli to\'lov imkoniyati.', meta: ['Doimiy taklif', 'Onlayn va offlayn'] },
  { id: 3, category: 'mobil', badge: 'Trade-in', off: '-15%', icon: IconPhoneDevice, image: '/images/promotions/eskiyangi.png', title: 'Eskisini topshir, yangisini ol', text: 'Eski smartfoningizni topshiring va yangi model narxidan qo\'shimcha chegirma oling.', meta: ['15.09.2026 gacha', 'Tanlangan filiallarda'] },
  { id: 4, category: 'maishiy', badge: 'Chegirma', off: '-25%', icon: IconFridge, image: '/images/promotions/muzlatgich.png', title: 'Muzlatkichlar chegirmasi', text: 'A+++ energiya tejamkor muzlatkichlarga 25% gacha chegirma va bepul yetkazib berish.', meta: ['20.08.2026 gacha', 'Barcha filiallarda'] },
  { id: 5, category: 'tv', badge: 'Kombinatsiya', off: '-10%', icon: IconTv, image: '/images/promotions/tvsaundbar.png', title: 'TV + soundbar to\'plami', text: 'Smart TV bilan birga soundbar xarid qilganda qo\'shimcha 10% chegirma.', meta: ['10.09.2026 gacha', 'Barcha filiallarda'] },
  { id: 6, category: 'mobil', badge: 'Talaba aksiyasi', off: '-12%', icon: IconPhoneDevice, image: '/images/promotions/talaba.png', title: 'Talabalar uchun maxsus narx', text: 'Talaba guvohnomasi bilan noutbuk va planshetlarga 12% qo\'shimcha chegirma.', meta: ['01.10.2026 gacha', 'Barcha filiallarda'] },
  
]
