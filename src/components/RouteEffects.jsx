import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal.js'

const TITLES = {
  '/': 'Aso & Thread | Nigerian cloth, cut in Lagos',
  '/collections': 'Collections | Aso & Thread',
  '/about': 'About | Aso & Thread',
  '/contact': 'Contact | Aso & Thread',
}

/** Scroll position, document title and entrances on every route change. */
export default function RouteEffects() {
  const { pathname, hash } = useLocation()
  useReveal()

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        requestAnimationFrame(() => target.scrollIntoView({ block: 'start' }))
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  useEffect(() => {
    if (TITLES[pathname]) document.title = TITLES[pathname]
  }, [pathname])

  return null
}
