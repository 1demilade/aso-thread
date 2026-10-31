import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useBag } from '../context/BagContext.jsx'
import { formatNaira } from '../lib/format.js'
import { buildOrderMessage, whatsappLink } from '../lib/whatsapp.js'
import Icon from './Icon.jsx'
import QuantityStepper from './QuantityStepper.jsx'
import './BagDrawer.css'

export default function BagDrawer() {
  const { items, total, count, open, closeBag, setQuantity, remove, clear } = useBag()
  const panel = useRef(null)
  const returnFocus = useRef(null)
  // Keep the drawer mounted through its exit so it can slide out.
  const [mounted, setMounted] = useState(open)

  if (open && !mounted) setMounted(true)

  useEffect(() => {
    if (open) returnFocus.current = document.activeElement
  }, [open])

  useEffect(() => {
    if (!open || !mounted) return
    const node = panel.current
    const frame = requestAnimationFrame(() => node?.querySelector('[data-autofocus]')?.focus())
    document.body.style.overflow = 'hidden'

    const onKey = (e) => {
      if (e.key === 'Escape') closeBag()
      if (e.key !== 'Tab' || !node) return
      const focusable = node.querySelectorAll('a[href], button:not([disabled]), input, select, textarea')
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, mounted, closeBag])

  const onTransitionEnd = (e) => {
    if (e.target !== panel.current || open) return
    setMounted(false)
    returnFocus.current?.focus?.()
  }

  if (!mounted) return null

  const message = buildOrderMessage(items)

  return (
    <div className="bag" data-open={open || undefined}>
      <div className="bag__scrim" onClick={closeBag} aria-hidden="true" />
      <section
        ref={panel}
        className="bag__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="bag-title"
        onTransitionEnd={onTransitionEnd}
      >
        <header className="bag__head">
          <h2 id="bag-title" className="display bag__title">
            Your bag <span className="tabular">({count})</span>
          </h2>
          <button type="button" className="bag__close" onClick={closeBag} data-autofocus>
            <Icon name="close" />
            <span className="visually-hidden">Close bag</span>
          </button>
        </header>

        {items.length === 0 ? (
          <div className="bag__empty">
            <p>Nothing here yet. Choose a piece, a size and a colour, and it will wait for you here.</p>
            <Link to="/collections" className="btn btn--ink" onClick={closeBag}>
              Browse the collections
            </Link>
          </div>
        ) : (
          <>
            <ul className="bag__items">
              {items.map((item) => (
                <li key={item.key} className="bag__item">
                  <Link to={`/product/${item.slug}`} onClick={closeBag} className="bag__thumb">
                    <img src={item.image} alt="" width="96" height="128" loading="lazy" />
                  </Link>
                  <div className="bag__info">
                    <Link to={`/product/${item.slug}`} onClick={closeBag} className="bag__name">
                      {item.name}
                    </Link>
                    <p className="bag__meta">
                      {item.colour} · Size {item.size}
                    </p>
                    <div className="bag__row">
                      <QuantityStepper
                        value={item.quantity}
                        onChange={(q) => setQuantity(item.key, q)}
                        label={`Quantity of ${item.name}`}
                        compact
                      />
                      <span className="bag__price tabular">{formatNaira(item.price * item.quantity)}</span>
                    </div>
                    <button type="button" className="bag__remove" onClick={() => remove(item.key)}>
                      Remove<span className="visually-hidden"> {item.name}</span>
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <footer className="bag__foot">
              <dl className="bag__total">
                <dt>Total before delivery</dt>
                <dd className="tabular">{formatNaira(total)}</dd>
              </dl>
              <p className="bag__note">
                Your order goes to the studio as one WhatsApp message. We reply with delivery cost and payment details; nothing is charged here.
              </p>
              <a className="btn bag__send" href={whatsappLink(message)} target="_blank" rel="noreferrer">
                <Icon name="chat" />
                Send order on WhatsApp
              </a>
              <button type="button" className="bag__clear" onClick={clear}>
                Empty bag
              </button>
            </footer>
          </>
        )}
      </section>
    </div>
  )
}
