export const COLLECTIONS = [
  {
    id: 'ready-to-wear',
    name: 'Ready-to-Wear',
    short: 'Ankara and print pieces for every day in Lagos heat.',
    image: '/images/jumpsuit-yellow.jpg',
    band: ['/images/jumpsuit-yellow-2.jpg', '/images/shift-pink.jpg', '/images/gingham-shirt.jpg'],
    alt: 'A woman in a yellow leaf-print jumpsuit on rocks by the sea',
  },
  {
    id: 'contemporary',
    name: 'Contemporary',
    short: 'Adire, kaftans and drape cut for the city now.',
    image: '/images/adire-set.jpg',
    band: ['/images/adire-set.jpg', '/images/kaftan-green.jpg', '/images/alaari-wrap.jpg'],
    alt: 'Two women in indigo and white adire outfits outside a white house',
  },
  {
    id: 'traditional',
    name: 'Traditional',
    short: 'Agbada, iro and buba in aso-oke and lace, for the big days.',
    image: '/images/couple-olive.jpg',
    band: ['/images/couple-olive.jpg', '/images/agbada-black.jpg', '/images/fila-white.jpg'],
    alt: 'A man in an olive agbada and a woman in an olive lace iro and gele',
  },
]

export const AUDIENCES = [
  { id: 'all', name: 'Everyone' },
  { id: 'women', name: 'Women' },
  { id: 'men', name: 'Men' },
]

export function collectionName(id) {
  return COLLECTIONS.find((c) => c.id === id)?.name ?? 'All pieces'
}
