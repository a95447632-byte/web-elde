/*
  `image` — filial binosi/do'koni banneri (16:9), `public/images/branches/`
  papkasidan olinadi. Real filial fotosini shu papkadagi bir xil nomli
  faylni almashtirib qo'ysangiz bo'ldi — kodga tegish shart emas.
  `mapUrl` — filialning Google Maps'dagi aniq joylashuvi (koordinatalar bo'yicha).
  `lat`, `lng` — filial koordinatalari, filiallar xaritasida (BranchesMap)
  markerlarni joylashtirish uchun ishlatiladi.
*/
export const BRANCHES = [
  { id: 1, region: 'shahar', image: '/images/branches/andijon.png', city: 'Andijon shahri — Markaz', address: 'Andijon shahri markazi', phone: '+998 55 201 80 00', hours: 'Dam olish kunlarisiz 09:00–19:00', mapUrl: 'https://www.google.com/maps?q=40.797476,72.332978&ll=40.797476,72.332978&z=16', lat: 40.797476, lng: 72.332978 },
  { id: 2, region: 'tuman', image: '/images/branches/xojoobod.png', city: 'Andijon viloyati — Xo\'jaobod', address: 'Xo\'jaobod tumani markazi', phone: '+998 55 201 80 00', hours: 'Dam olish kunlarisiz 09:00–19:00', mapUrl: 'https://www.google.com/maps?q=40.669524,72.558374&ll=40.669524,72.558374&z=16', lat: 40.669524, lng: 72.558374 },
  { id: 3, region: 'tuman', image: '/images/branches/buloqboshi.png', city: 'Andijon viloyati — Buloqboshi', address: 'Buloqboshi tumani markazi', phone: '+998 55 201 80 00', hours: 'Dam olish kunlarisiz  09:00–19:00', mapUrl: 'https://www.google.com/maps?q=40.626680,72.500870&ll=40.626680,72.500870&z=16', lat: 40.626680, lng: 72.500870 },
  { id: 4, region: 'tuman', image: '/images/branches/baliqchi.png', city: 'Andijon viloyati — Baliqchi', address: 'Baliqchi tumani markazi', phone: '+998 55 201 80 00', hours: 'Dam  olish kunlarisiz 09:00–19:00', mapUrl: 'https://www.google.com/maps?q=40.904254,71.847822&ll=40.904254,71.847822&z=16', lat: 40.904254, lng: 71.847822 },
  { id: 5, region: 'tuman', image: '/images/branches/qorgontepa.png', city: 'Andijon viloyati — Qo\'rg\'ontepa', address: 'Qo\'rg\'ontepa tumani markazi', phone: '+998 55 201 80 00', hours: 'Dam olish kunlarisiz 09:00–19:00', mapUrl: 'https://www.google.com/maps?q=40.727286,72.760329&ll=40.727286,72.760329&z=16', lat: 40.727286, lng: 72.760329 },
  { id: 6, region: 'tuman', image: '/images/branches/boz.png', city: 'Andijon viloyati — Boz', address: 'Boz tumani markazi', phone: '+998 55 201 80 00', hours: 'Dam olish kunlarisiz 09:00–19:00', mapUrl: 'https://www.google.com/maps?q=40.690127,71.926154&ll=40.690127,71.926154&z=16', lat: 40.690127, lng: 71.926154 },
  { id: 7, region: 'tuman', image: '/images/branches/paxtaobod.png', city: 'Andijon viloyati — Paxtaobod', address: 'Paxtaobod tumani markazi', phone: '+998 55 201 80 00', hours: 'Dam olish kunlarisiz 09:00–19:00', mapUrl: 'https://www.google.com/maps?q=40.931627,72.495867&ll=40.931627,72.495867&z=16', lat: 40.931627, lng: 72.495867 },
  { id: 8, region: 'tuman', image: '/images/branches/izboskan.png', city: 'Andijon viloyati — Izboskan', address: 'Izboskan tumani markazi', phone: '+998 55 201 80 00', hours: 'Dam olish kunlarisiz 09:00–19:00', mapUrl: 'https://www.google.com/maps?q=40.895607,72.252681&ll=40.895607,72.252681&z=16', lat: 40.895607, lng: 72.252681 },
  { id: 9, region: 'tuman', image: '/images/branches/qoshtepa.png', city: 'Andijon viloyati — Qo\'shtepa', address: 'Qo\'shtepa tumani markazi', phone: '+998 55 201 80 00', hours: 'Dam olish kunlarisiz 09:00–19:00', mapUrl: 'https://www.google.com/maps?q=40.827941,72.028488&ll=40.827941,72.028488&z=16', lat: 40.827941, lng: 72.028488 },
  { id: 10, region: 'tuman', image: '/images/branches/kulla.png', city: 'Andijon viloyati — Kulla', address: 'Kulla mahallasi', phone: '+998 55 201 80 00', hours: 'Dam olish kunlarisiz 09:00–19:00', mapUrl: 'https://www.google.com/maps?q=40.631892,72.375221&ll=40.631892,72.375221&z=16', lat: 40.631892, lng: 72.375221 },
  { id: 11, region: 'tuman', image: '/images/branches/oyim.png', city: 'Andijon viloyati — Oyim', address: 'Oyim mahallasi', phone: '+998 55 201 80 00', hours: 'Dam olish kunlarisiz 09:00–19:00', mapUrl: 'http://maps.google.com/maps?q=40.820537,72.741704&ll=40.820537,72.741704&z=16', lat: 40.820537, lng: 72.741704 },
]
