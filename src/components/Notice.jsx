import { useEffect, useState } from 'react'
import { useBag } from '../context/BagContext.jsx'
import Icon from './Icon.jsx'
import './Notice.css'

/** Confirms an add-to-bag. Pauses its timer while hovered or focused. */
export default function Notice() {
  const { notice, dismissNotice, openBag } = useBag()
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (!notice || paused) return
    const t = setTimeout(dismissNotice, 4200)
    return () => clearTimeout(t)
  }, [notice, paused, dismissNotice])

  return (
    <div className="notice-region" role="status" aria-live="polite">
      {notice ? (
        <div
          key={notice.id}
          className="notice"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <Icon name="check" />
          <p>{notice.text}</p>
          <button
            type="button"
            className="notice__action"
            onClick={() => {
              dismissNotice()
              openBag()
            }}
          >
            View bag
          </button>
        </div>
      ) : null}
    </div>
  )
}
