import { Link } from 'react-router-dom'
import { CREDITS } from '../data/credits.js'
import './About.css'

const BELIEFS = [
  {
    word: 'Cloth first',
    text: 'We design from the cloth outward. A length of aso-oke decides its own garment: how wide the agbada, where the seam falls, which side faces out.',
  },
  {
    word: 'Cut for now',
    text: 'Tradition is a living thing. We keep the forms people know, the agbada, the iro and buba, the kaftan, and cut them for the way Lagos dresses today.',
  },
  {
    word: 'Made to order',
    text: 'Ceremony pieces are made for the person who will wear them. It takes longer, and nothing sits unsold in a warehouse.',
  },
]

const PROCESS = [
  { title: 'Sourcing', text: 'Ankara and lace bought by the yard in Balogun market; aso-oke ordered from weavers by colour and strip count.', src: '/images/fabric-bolts.jpg', alt: 'Folded bolts of wax-print fabric stacked for sale' },
  { title: 'Cutting', text: 'Patterns are drafted in the Yaba studio and laid out to respect each strip and print repeat.', src: '/images/fabric-hanging.jpg', alt: 'Lengths of printed cloth hanging on a rail' },
  { title: 'Finishing', text: 'Embroidery, beading and hems are finished by hand. An agbada breastplate takes about forty hours.', src: '/images/agbada-black.jpg', alt: 'Gold-thread embroidery on a black agbada' },
  { title: 'Fitting', text: 'Made-to-measure clients are measured on a video call and fitted before the final press.', src: '/images/portrait-afro.jpg', alt: 'A woman in a coral bead necklace and print top' },
]

const SOURCES = [
  ['Aso-oke', 'Iseyin, Oyo State', 'Strip-woven on narrow looms'],
  ['Adire', 'Abeokuta, Ogun State', 'Indigo, resist-dyed by hand'],
  ['Ankara', 'Balogun market, Lagos', 'Cotton wax print'],
  ['Lace', 'Lagos', 'Cord and beaded lace'],
]

export default function About() {
  return (
    <div className="about">
      <section className="about__hero page" aria-labelledby="about-title">
        <h1 id="about-title" className="display about__title" data-reveal>
          <span>Cut in</span> <span>Lagos</span>
        </h1>
        <p className="about__lead" data-reveal style={{ '--i': 1 }}>
          Aso &amp; Thread makes ready-to-wear, contemporary and traditional clothes from the cloths Nigeria has always worn well: aso-oke, adire, ankara and lace.
        </p>
        <figure className="about__band">
          <img src="/images/couple-olive.jpg" alt="A man in an olive agbada and a woman in olive lace and gele, arm in arm" width="1400" height="1000" />
          <img src="/images/umbrella.jpg" alt="A woman with a black umbrella beside a man holding a carved staff" width="1000" height="1400" />
          <img src="/images/wedding-white.jpg" alt="A couple in white and gold traditional wedding dress" width="1000" height="1400" />
        </figure>
      </section>

      <section className="about__name page" aria-labelledby="name-title">
        <h2 id="name-title" className="visually-hidden">
          The name
        </h2>
        <dl className="about__defs">
          <div data-reveal>
            <dt className="display">Aso</dt>
            <dd>Yoruba for cloth. The beginning of everything we make, and the reason we make it in Nigeria.</dd>
          </div>
          <div data-reveal style={{ '--i': 1 }}>
            <dt className="display">&amp; Thread</dt>
            <dd>What we add: the cut, the seam, the hand-finished hem, the bead sewn on at two in the morning before a wedding.</dd>
          </div>
        </dl>
      </section>

      <section className="about__beliefs on-dark" aria-labelledby="beliefs-title">
        <div className="page about__beliefs-inner">
          <h2 id="beliefs-title" className="display about__beliefs-title" data-reveal>
            What we believe
          </h2>
          <ul className="about__beliefs-list">
            {BELIEFS.map((b, i) => (
              <li key={b.word} data-reveal style={{ '--i': i }}>
                <h3 className="display">{b.word}</h3>
                <p>{b.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="about__process page" aria-labelledby="process-title">
        <h2 id="process-title" className="display about__section-title" data-reveal>
          From market to fitting
        </h2>
        <ol className="about__process-strips">
          {PROCESS.map((p, i) => (
            <li key={p.title} className="about__step">
              <div className="about__step-media" data-reveal="strip" style={{ '--i': i }}>
                <img src={p.src} alt={p.alt} loading="lazy" width="700" height="1100" />
              </div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="about__sources page" aria-labelledby="sources-title">
        <h2 id="sources-title" className="display about__section-title" data-reveal>
          Where the cloth comes from
        </h2>
        <table className="about__table">
          <caption className="visually-hidden">The cloths we use and where they come from</caption>
          <thead>
            <tr>
              <th scope="col">Cloth</th>
              <th scope="col">From</th>
              <th scope="col">Made by</th>
            </tr>
          </thead>
          <tbody>
            {SOURCES.map(([cloth, from, how], i) => (
              <tr key={cloth} data-reveal style={{ '--i': i }}>
                <th scope="row">{cloth}</th>
                <td>{from}</td>
                <td>{how}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/collections" className="btn btn--ink about__cta">
          See it cut into clothes
        </Link>
      </section>

      <section id="credits" className="about__credits page" aria-labelledby="credits-title">
        <div className="about__credits-head">
          <h2 id="credits-title" className="about__credits-title">
            About this site
          </h2>
          <p>
            Aso &amp; Thread is a fictional label, designed as a portfolio concept. The products, prices, studio details and delivery terms are
            samples. The photographs are by independent photographers on Unsplash, used under the Unsplash licence; the people in them are wearing
            their own clothes.
          </p>
        </div>
        <ul className="about__credits-list">
          {CREDITS.map((c) => (
            <li key={c.file}>
              <a href={c.url} target="_blank" rel="noreferrer">
                {c.photographer}
              </a>
              <span>{c.file.replace('.jpg', '').replace(/-/g, ' ')}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
