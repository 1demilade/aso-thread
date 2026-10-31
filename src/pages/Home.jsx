import { Link } from 'react-router-dom'
import { PRODUCTS, findProduct } from '../data/products.js'
import { formatNaira } from '../lib/format.js'
import { useScaleOnScroll } from '../hooks/useScaleOnScroll.js'
import ProductTile from '../components/ProductTile.jsx'
import Icon from '../components/Icon.jsx'
import './Home.css'

const HERO_STRIPS = [
  { src: '/images/iro-olive.jpg', alt: 'A woman in an olive lace buba, iro and gele', grow: 5, shift: 0, pos: '50% 22%' },
  { src: '/images/alaari-wrap.jpg', alt: 'A woman in a red hat and crimson printed drape', grow: 2, shift: 28, pos: '48% 30%' },
  { src: '/images/jumpsuit-yellow-2.jpg', alt: 'A woman in a yellow leaf-print jumpsuit by the sea', grow: 3, shift: -14, pos: '50% 35%' },
  { src: '/images/agbada-olive.jpg', alt: 'A man in an olive aso-oke agbada', grow: 2, shift: 18, pos: '50% 25%' },
]

const PANELS = [
  { to: '/collections?c=traditional', title: 'Traditional', note: 'Agbada, iro and buba', src: '/images/couple-olive.jpg', pos: '50% 30%', grow: 5 },
  { to: '/collections?c=contemporary', title: 'Contemporary', note: 'Adire, kaftans, drape', src: '/images/adire-set.jpg', pos: '30% 40%', grow: 2 },
  { to: '/collections?c=ready-to-wear', title: 'Ready-to-Wear', note: 'Ankara for every day', src: '/images/jumpsuit-yellow.jpg', pos: '50% 40%', grow: 3 },
  { to: '/collections?for=men', title: 'Menswear', note: 'Kaftan to agbada', src: '/images/kaftan-green.jpg', pos: '50% 30%', grow: 2 },
]

const CLOTHS = [
  {
    name: 'Aso-oke',
    origin: 'Hand-woven in Iseyin, Oyo State',
    text: 'Woven on narrow looms in strips a hand’s width across, then sewn edge to edge. Sanyan, alaari and etu are its three classic colours, and ours.',
    src: '/images/couple-black.jpg',
    alt: 'A man in a black and gold agbada beside a woman in a black beaded gown',
  },
  {
    name: 'Adire',
    origin: 'Hand-dyed in Abeokuta, Ogun State',
    text: 'Indigo cloth patterned by resist: starch, wax or tied thread keeps the dye out. Every length comes out a little different, and we leave it that way.',
    src: '/images/adire-set.jpg',
    alt: 'Indigo and white adire shirts and trousers',
  },
  {
    name: 'Ankara',
    origin: 'Bought by the yard in Balogun market, Lagos',
    text: 'Wax print, the loudest cloth in the market. We cut it close and quiet, in panels and trims, so it reads as tailoring.',
    src: '/images/fabric-bolts.jpg',
    alt: 'Folded bolts of colourful wax-print fabric stacked for sale',
  },
  {
    name: 'Lace',
    origin: 'Cord and beaded lace',
    text: 'The cloth of the owambe. We bead it by hand along the seams, for iro and buba, for the bride and for the whole family in aso-ebi.',
    src: '/images/iro-olive.jpg',
    alt: 'Olive cord lace buba with bell sleeves and a gele',
  },
]

const ORDER_ROWS = [
  [
    ['Choose', 'Size, colour and quantity', 'On the product page'],
    ['Send', 'One pre-filled WhatsApp message', 'No account needed'],
    ['Confirm', 'We reply with delivery cost', 'Within studio hours'],
    ['Pay', 'Bank transfer to the studio', 'After you confirm'],
  ],
  [
    ['Lagos', 'Dispatch rider', '₦5,000 · 1–2 days'],
    ['Other states', 'Courier', '₦9,500 · 3–5 days'],
    ['Abroad', 'Express courier', 'Quoted on WhatsApp'],
    ['Made to measure', 'Measured by video call', '+7 working days'],
  ],
]

const prices = PRODUCTS.map((p) => p.price)
const newIn = PRODUCTS.filter((p) => p.isNew)
const newPrices = newIn.map((p) => p.price)

export default function Home() {
  const monument = useScaleOnScroll({ from: 1, to: 0.94, mode: 'leave' })
  const prints = [findProduct('ewe-jumpsuit'), findProduct('osan-tiered-gown'), findProduct('adire-two-piece')]

  return (
    <>
      <section className="hero on-dark" aria-labelledby="hero-title">
        <div className="hero__strips">
          {HERO_STRIPS.map((s, i) => (
            <figure key={s.src} className="hero__strip" style={{ flexGrow: s.grow, '--shift': `${s.shift}px` }}>
              <img
                src={s.src}
                alt={s.alt}
                style={{ objectPosition: s.pos }}
                width="700"
                height="1000"
                fetchPriority={i === 0 ? 'high' : undefined}
              />
            </figure>
          ))}
        </div>

        <div className="hero__copy">
          <p className="hero__lead">
            Ready-to-wear, contemporary and traditional Nigerian dress, cut in Lagos from aso-oke, adire, ankara and lace.
          </p>
          <div className="hero__actions">
            <Link to="/collections" className="btn">
              Shop the collection
              <Icon name="arrow" />
            </Link>
          </div>
        </div>

        <h1 id="hero-title" className="hero__name">
          <span ref={monument} className="hero__name-inner">
            <span className="hero__line">Aso &amp;</span> <span className="hero__line">Thread</span>
          </span>
        </h1>
      </section>

      <section className="intro page" aria-labelledby="intro-title">
        <div className="intro__row">
          <h2 id="intro-title" className="display intro__title" data-reveal>
            Cloth first
          </h2>
          <div className="intro__note" data-reveal style={{ '--i': 1 }}>
            <p>
              Aso is Yoruba for cloth. We start with Nigerian cloth, woven in Iseyin, dyed in Abeokuta, bought by the yard in Balogun market, and cut
              it in our Yaba studio into clothes for now. Thread is what we add.
            </p>
            <p>
              Pieces run from {formatNaira(Math.min(...prices))} for a linen shirt to {formatNaira(Math.max(...prices))} for a ceremony agbada, in sizes
              XS to XXL, with traditional pieces also made to measure. You order on WhatsApp, not through a checkout.
            </p>
          </div>
        </div>
      </section>

      <section className="showcase" aria-labelledby="showcase-title">
        <h2 id="showcase-title" className="display showcase__title page" data-reveal>
          The collections
        </h2>
        <div className="showcase__band">
          {PANELS.map((p) => (
            <Link key={p.title} to={p.to} className="showcase__panel" style={{ '--grow': p.grow }}>
              <img src={p.src} alt="" style={{ objectPosition: p.pos }} loading="lazy" width="900" height="1200" />
              <span className="showcase__label">
                <span className="display showcase__name">{p.title}</span>
                <span className="showcase__note">{p.note}</span>
              </span>
            </Link>
          ))}
        </div>
        <p className="showcase__caption page">Four ways in. Every collection is sold in sizes, and most traditional pieces can also be made to measure.</p>
      </section>

      <section id="new" className="arrivals" aria-labelledby="arrivals-title">
        <div className="arrivals__field on-dark">
          <div className="arrivals__words">
            <h2 id="arrivals-title" className="display arrivals__title">
              <span>New</span> <span>arrivals</span>
            </h2>
            <p className="arrivals__note">
              {newIn.length} new pieces this season, from {formatNaira(Math.min(...newPrices))} to {formatNaira(Math.max(...newPrices))}.
            </p>
            <Link to="/collections?sort=new" className="btn btn--light arrivals__all">
              See all {newIn.length} new pieces
              <Icon name="arrow" />
            </Link>
          </div>
          <div className="arrivals__strips">
            {prints.map((p, i) => (
              <Link key={p.slug} to={`/product/${p.slug}`} className="arrivals__strip" style={{ '--grow': [5, 3, 4][i], '--i': i }} data-reveal="strip">
                <span className="arrivals__strip-media">
                  <img src={p.images[0].src} alt={p.images[0].alt} loading="lazy" width="600" height="900" />
                </span>
                <span className="arrivals__strip-label">
                  <span>{p.name}</span>
                  <span className="tabular">{formatNaira(p.price)}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="arrivals__rail page">
          {newIn.slice(0, 4).map((p, i) => (
            <ProductTile key={p.slug} product={p} index={i} showCollection={false} />
          ))}
        </div>
      </section>

      <section className="cloth page" aria-labelledby="cloth-title">
        <div className="cloth__pin">
          <h2 id="cloth-title" className="display cloth__title">
            The cloth
          </h2>
          <p className="cloth__intro">Four Nigerian cloths, and where each one comes from before it reaches our cutting table.</p>
          <Link to="/about" className="text-link">
            How we work
          </Link>
        </div>
        <ol className="cloth__list">
          {CLOTHS.map((c, i) => (
            <li key={c.name} className={`cloth__item cloth__item--${i % 2 ? 'right' : 'left'}`}>
              <div className="cloth__media" data-reveal="strip">
                <img src={c.src} alt={c.alt} loading="lazy" width="800" height="1000" />
              </div>
              <h3 className="cloth__name" data-reveal>
                {c.name}
              </h3>
              <p className="cloth__origin" data-reveal style={{ '--i': 1 }}>
                {c.origin}
              </p>
              <p className="cloth__text" data-reveal style={{ '--i': 2 }}>
                {c.text}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="ordering page" aria-labelledby="ordering-title">
        <h2 id="ordering-title" className="display ordering__title" data-reveal>
          <span>How a WhatsApp</span> <span>order works</span>
        </h2>
        <div className="ordering__body">
          <figure className="ordering__media" data-reveal="strip">
            <img src="/images/orange-water.jpg" alt="A woman in an orange jacket standing in shallow water at dusk" loading="lazy" width="800" height="1000" />
          </figure>
          <div className="ordering__table">
            {ORDER_ROWS.map((group, gi) => (
              <table key={gi} className="ordering__group">
                <caption className="visually-hidden">{gi === 0 ? 'Ordering steps' : 'Delivery options'}</caption>
                <tbody>
                  {group.map(([kind, what, value], ri) => (
                    <tr key={kind} data-reveal style={{ '--i': ri }}>
                      <th scope="row">{kind}</th>
                      <td>{what}</td>
                      <td className="tabular">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ))}
            <p className="ordering__fine">Delivery rates are quoted again on WhatsApp before you pay.</p>
          </div>
        </div>
      </section>
    </>
  )
}
