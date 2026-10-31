import { useEffect, useRef } from 'react'

/**
 * The signature move: the monument wordmark carries weight on scroll.
 * mode 'leave': scales from `from` toward `to` as its section scrolls away.
 * mode 'enter': grows from `from` to `to` as it scrolls into view.
 * Writes transform straight onto the element (no inherited custom properties).
 */
export function useScaleOnScroll({ from = 1, to = 0.94, mode = 'leave' } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    const update = () => {
      frame = 0
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      let progress
      if (mode === 'leave') {
        // 0 while the hero fills the screen, 1 once it has scrolled a full screen away.
        progress = Math.min(1, Math.max(0, window.scrollY / vh))
      } else {
        progress = Math.min(1, Math.max(0, (vh - rect.top) / (vh * 0.7)))
      }
      const scale = from + (to - from) * progress
      el.style.transform = `scale(${scale.toFixed(4)})`
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [from, to, mode])

  return ref
}
