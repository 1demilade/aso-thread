import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Staggered entrance for anything marked [data-reveal] on the current page.
 * Content is visible by default; the hidden start state only applies once
 * <html> carries .motion-ok, so nothing stays hidden if this never runs.
 */
export function useReveal() {
  const { pathname, search } = useLocation()

  useEffect(() => {
    const root = document.documentElement
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      root.classList.remove('motion-ok')
      return
    }
    root.classList.add('motion-ok')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-in')
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )

    // Wait a frame so freshly rendered route content is in the DOM.
    const frame = requestAnimationFrame(() => {
      document.querySelectorAll('[data-reveal]:not(.is-in)').forEach((el) => observer.observe(el))
    })

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
    }
  }, [pathname, search])
}
