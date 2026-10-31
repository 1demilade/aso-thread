import { formatNaira } from '../lib/format.js'
import './OrderNote.css'

/**
 * The live thing: the WhatsApp message, rewritten as the visitor chooses.
 * What is shown here is exactly what will be sent.
 */
export default function OrderNote({ name, colour, size, quantity, price }) {
  const missing = <span className="note__missing">choose a size</span>
  return (
    <figure className="note" aria-labelledby="note-caption">
      <figcaption id="note-caption" className="note__caption">
        Your WhatsApp message
      </figcaption>
      <div className="note__bubble">
        <p>Hello Aso &amp; Thread, I would like to order:</p>
        <p className="note__item">{name}</p>
        <dl className="note__lines">
          <div>
            <dt>Colour</dt>
            <dd key={colour} className="note__value">
              {colour}
            </dd>
          </div>
          <div>
            <dt>Size</dt>
            <dd key={size ?? 'none'} className="note__value">
              {size ?? missing}
            </dd>
          </div>
          <div>
            <dt>Quantity</dt>
            <dd key={quantity} className="note__value tabular">
              {quantity}
            </dd>
          </div>
          <div>
            <dt>Total</dt>
            <dd key={price * quantity} className="note__value tabular">
              {formatNaira(price * quantity)} before delivery
            </dd>
          </div>
        </dl>
      </div>
    </figure>
  )
}
