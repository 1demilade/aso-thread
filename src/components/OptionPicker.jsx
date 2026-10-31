import { useRef } from 'react'
import './OptionPicker.css'

/**
 * A radio group drawn as square options. Arrow keys move between enabled options,
 * as a native radio group would. `kind="swatch"` draws colour chips.
 */
export default function OptionPicker({ legend, name, options, value, onChange, kind = 'text', error, describedBy, groupRef }) {
  const localRef = useRef(null)
  const ref = groupRef ?? localRef

  const enabled = options.filter((o) => !o.disabled)

  const onKeyDown = (e) => {
    const keys = ['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp']
    if (!keys.includes(e.key)) return
    e.preventDefault()
    const dir = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : -1
    const index = enabled.findIndex((o) => o.value === value)
    const next = enabled[(index + dir + enabled.length) % enabled.length]
    onChange(next.value)
    requestAnimationFrame(() => ref.current?.querySelector(`[data-value="${CSS.escape(next.value)}"]`)?.focus())
  }

  // Roving tab stop: the selected option, or the first enabled one.
  const tabTarget = value ?? enabled[0]?.value

  return (
    <fieldset className={`picker picker--${kind}`} aria-describedby={describedBy}>
      <legend className="picker__legend">
        {legend}
        {value ? <span className="picker__value">{options.find((o) => o.value === value)?.label}</span> : null}
      </legend>
      <div ref={ref} className="picker__options" role="radiogroup" aria-label={legend} aria-invalid={error ? true : undefined} onKeyDown={onKeyDown}>
        {options.map((o) => {
          const checked = o.value === value
          return (
            <button
              key={o.value}
              type="button"
              role="radio"
              name={name}
              data-value={o.value}
              aria-checked={checked}
              aria-disabled={o.disabled || undefined}
              tabIndex={o.value === tabTarget && !o.disabled ? 0 : -1}
              className="picker__option"
              onClick={() => !o.disabled && onChange(o.value)}
            >
              {kind === 'swatch' ? <span className="picker__chip" style={{ background: o.hex }} aria-hidden="true" /> : null}
              <span className={kind === 'swatch' ? 'visually-hidden' : undefined}>{o.label}</span>
              {o.disabled ? <span className="visually-hidden">, sold out</span> : null}
            </button>
          )
        })}
      </div>
    </fieldset>
  )
}
