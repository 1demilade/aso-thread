import Icon from './Icon.jsx'
import './QuantityStepper.css'

export default function QuantityStepper({ value, onChange, label = 'Quantity', min = 1, max = 10, compact = false, id }) {
  return (
    <div className={`stepper${compact ? ' stepper--compact' : ''}`} role="group" aria-label={label}>
      <button type="button" onClick={() => onChange(value - 1)} disabled={value <= min} aria-label="One fewer">
        <Icon name="minus" />
      </button>
      <output id={id} className="tabular" aria-live="polite">
        {value}
      </output>
      <button type="button" onClick={() => onChange(value + 1)} disabled={value >= max} aria-label="One more">
        <Icon name="plus" />
      </button>
    </div>
  )
}
