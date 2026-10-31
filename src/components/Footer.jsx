import { Link } from 'react-router-dom'
import { EMAIL, SOCIAL, WHATSAPP_DISPLAY } from '../config.js'
import { useScaleOnScroll } from '../hooks/useScaleOnScroll.js'
import './Footer.css'

export default function Footer() {
  const wordmark = useScaleOnScroll({ from: 0.92, to: 1, mode: 'enter' })

  return (
    <footer className="site-footer on-dark">
      <div className="site-footer__top">
        <div className="site-footer__invite" data-reveal>
          <h2 className="display site-footer__title">Find your cloth</h2>
          <Link to="/collections" className="btn btn--light">
            Browse every piece
          </Link>
        </div>

        <ul className="site-footer__links" data-reveal style={{ '--i': 1 }}>
          {SOCIAL.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer">
                {s.label} <span className="site-footer__soft">{s.handle}</span>
              </a>
            </li>
          ))}
          <li>
            <Link to="/contact">WhatsApp <span className="site-footer__soft">{WHATSAPP_DISPLAY}</span></Link>
          </li>
          <li>
            <a href={`mailto:${EMAIL}`}>Email <span className="site-footer__soft">{EMAIL}</span></a>
          </li>
        </ul>
      </div>

      <div className="site-footer__legal">
        <p>
          Aso &amp; Thread is a fictional label, built as a portfolio concept. Products and prices are samples; photography from{' '}
          <Link to="/about#credits">Unsplash, credited here</Link>.
        </p>
        <nav aria-label="Footer">
          <Link to="/collections">Collections</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>

      <div className="site-footer__name" aria-hidden="true">
        <span ref={wordmark}>Aso &amp; Thread</span>
      </div>
    </footer>
  )
}
