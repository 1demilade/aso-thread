import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useBag } from '../context/BagContext.jsx'
import Icon from './Icon.jsx'
import './Header.css'

const LINKS = [
  { to: '/collections', label: 'Collections' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const { count, openBag } = useBag()
  const { pathname } = useLocation()
  // The menu belongs to the route it was opened on, so navigating closes it.
  const [menuRoute, setMenuRoute] = useState(null)
  const menuOpen = menuRoute === pathname
  const setMenuOpen = (next) => setMenuRoute(next ? pathname : null)
  const menuButton = useRef(null)
  const onDark = pathname === '/'

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        menuButton.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [menuOpen]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <header className={`site-header${onDark ? ' site-header--dark on-dark' : ''}${menuOpen ? ' is-menu-open' : ''}`}>
      <Link to="/" className="site-header__mark" aria-label="Aso & Thread, home">
        Aso &amp; Thread
      </Link>

      <nav className="site-header__nav" aria-label="Main">
        <ul>
          {LINKS.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} className="site-header__link">
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="site-header__actions">
        <button type="button" className="site-header__bag" onClick={openBag} aria-label={`Bag, ${count} ${count === 1 ? 'item' : 'items'}`}>
          <Icon name="bag" />
          <span>Bag</span>
          <span className="site-header__count tabular" aria-hidden="true" data-filled={count > 0 || undefined}>
            {count}
          </span>
        </button>
        <button
          ref={menuButton}
          type="button"
          className="site-header__menu-btn"
          aria-expanded={menuOpen}
          aria-controls="phone-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      <div id="phone-menu" className="phone-menu on-dark" hidden={!menuOpen}>
        <nav aria-label="Main, phone">
          <ul>
            <li>
              <NavLink to="/" end className="phone-menu__link display">
                Home
              </NavLink>
            </li>
            {LINKS.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} className="phone-menu__link display">
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <p className="phone-menu__note">Nigerian cloth, cut in Yaba, Lagos. Ordered on WhatsApp.</p>
      </div>
    </header>
  )
}
