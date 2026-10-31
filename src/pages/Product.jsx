import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PRODUCTS, findProduct, imageForColour } from '../data/products.js'
import { collectionName } from '../data/collections.js'
import { formatNaira } from '../lib/format.js'
import { buildOrderMessage, whatsappLink } from '../lib/whatsapp.js'
import { useBag } from '../context/BagContext.jsx'
import OptionPicker from '../components/OptionPicker.jsx'
import QuantityStepper from '../components/QuantityStepper.jsx'
import OrderNote from '../components/OrderNote.jsx'
import ProductTile from '../components/ProductTile.jsx'
import Icon from '../components/Icon.jsx'
import NotFound from './NotFound.jsx'
import './Product.css'

const SIZE_GUIDE = {
  women: [
    ['XS', 'UK 6', '80', '62', '88'],
    ['S', 'UK 8', '84', '66', '92'],
    ['M', 'UK 10–12', '90', '72', '98'],
    ['L', 'UK 14', '96', '78', '104'],
    ['XL', 'UK 16', '102', '84', '110'],
  ],
  men: [
    ['S', '36', '92', '78', '94'],
    ['M', '38–40', '100', '84', '100'],
    ['L', '42', '108', '92', '106'],
    ['XL', '44', '116', '100', '112'],
    ['XXL', '46–48', '124', '108', '118'],
  ],
}

export default function Product() {
  const { slug } = useParams()
  const product = findProduct(slug)
  if (!product) return <NotFound what="piece" />
  // Keyed so every product starts with fresh selections.
  return <ProductView key={product.slug} product={product} />
}

function ProductView({ product }) {
  const { add } = useBag()
  const [colour, setColour] = useState(product.colours[0].name)
  const [size, setSize] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [sizeError, setSizeError] = useState(false)
  const sizeGroup = useRef(null)

  useEffect(() => {
    document.title = `${product.name} | Aso & Thread`
  }, [product.name])

  const colourInfo = product.colours.find((c) => c.name === colour)
  const mainSrc = imageForColour(product, colour)
  // A colour may have its own photograph outside the product's gallery list.
  const mainImage = product.images.find((img) => img.src === mainSrc) ?? { src: mainSrc, alt: `${product.name} in ${colour}` }
  const rest = product.images.filter((img) => img.src !== mainImage.src)
  const shownIn = product.colours.find((c) => c.image === mainImage.src)?.name ?? product.colours[0].name

  const related = PRODUCTS.filter((p) => p.collection === product.collection && p.slug !== product.slug).slice(0, 4)

  const item = {
    slug: product.slug,
    name: product.name,
    price: product.price,
    image: mainSrc,
    colour,
    size,
    quantity,
  }

  const requireSize = () => {
    if (size) return true
    setSizeError(true)
    sizeGroup.current?.querySelector('[role="radio"]:not([aria-disabled])')?.focus()
    return false
  }

  const onOrder = () => {
    if (!requireSize()) return
    window.open(whatsappLink(buildOrderMessage([item])), '_blank', 'noopener,noreferrer')
  }

  const onAdd = () => {
    if (!requireSize()) return
    add(item)
  }

  const sizeOptions = product.sizes.map((s) => ({ value: s, label: s, disabled: product.unavailable.includes(s) }))
  const colourOptions = product.colours.map((c) => ({ value: c.name, label: c.name, hex: c.hex }))
  const guide = SIZE_GUIDE[product.audience]

  return (
    <article className="pdp">
      <div className="pdp__layout page">
        <div
          className="pdp__gallery"
          data-count={rest.length}
          style={{ '--rest': Math.max(rest.length, 1) }}
          aria-label={`${product.name} photographs`}
          role="region"
          tabIndex={0}
        >
          <figure className="pdp__shot pdp__shot--main">
            <img key={mainImage.src} src={mainImage.src} alt={mainImage.alt} width="1000" height="1400" fetchPriority="high" />
          </figure>
          {rest.map((img, i) => (
            <figure key={img.src} className="pdp__shot" data-reveal="strip" style={{ '--i': i }}>
              <img src={img.src} alt={img.alt} width="1000" height="1400" loading="lazy" />
            </figure>
          ))}
        </div>

        <div className="pdp__info">
          <nav className="pdp__crumbs" aria-label="Breadcrumb" data-reveal>
            <Link to="/collections">Collections</Link>
            <span aria-hidden="true">/</span>
            <Link to={`/collections?c=${product.collection}`}>{collectionName(product.collection)}</Link>
          </nav>

          <h1 className="display pdp__name" data-reveal style={{ '--i': 1 }}>{product.name}</h1>
          <p className="pdp__price tabular" data-reveal style={{ '--i': 2 }}>{formatNaira(product.price)}</p>
          <p className="pdp__summary" data-reveal style={{ '--i': 3 }}>{product.summary}</p>

          <div className="pdp__choices" data-reveal style={{ '--i': 4 }}>
            <div>
              <OptionPicker legend="Colour" name="colour" kind="swatch" options={colourOptions} value={colour} onChange={setColour} />
              {colourInfo && !colourInfo.image && colour !== shownIn ? (
                <p className="pdp__hint">Photographed in {shownIn}. {colour} is the same cut in a different cloth.</p>
              ) : null}
            </div>

            <div>
              <OptionPicker
                legend="Size"
                name="size"
                options={sizeOptions}
                value={size}
                groupRef={sizeGroup}
                onChange={(s) => {
                  setSize(s)
                  setSizeError(false)
                }}
                error={sizeError}
                describedBy={sizeError ? 'size-error' : undefined}
              />
              {sizeError ? (
                <p id="size-error" className="pdp__error" role="alert">
                  Choose a size to continue.
                </p>
              ) : null}
              {size === 'Made to measure' ? (
                <p className="pdp__hint">We will ask for your measurements on WhatsApp and book a video fitting. Adds about 7 working days.</p>
              ) : null}
              <details className="pdp__guide">
                <summary>Size guide</summary>
                <table>
                  <caption className="visually-hidden">Body measurements in centimetres</caption>
                  <thead>
                    <tr>
                      <th scope="col">Size</th>
                      <th scope="col">{product.audience === 'men' ? 'Chest (in)' : 'UK'}</th>
                      <th scope="col">{product.audience === 'men' ? 'Chest' : 'Bust'}</th>
                      <th scope="col">Waist</th>
                      <th scope="col">Hip</th>
                    </tr>
                  </thead>
                  <tbody>
                    {guide.map((row) => (
                      <tr key={row[0]}>
                        {row.map((cell, i) => (i === 0 ? <th key={i} scope="row">{cell}</th> : <td key={i} className="tabular">{cell}</td>))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p>Measurements in centimetres. Between sizes, choose the larger, or choose made to measure where it is offered.</p>
              </details>
            </div>

            <div className="pdp__qty">
              <span className="pdp__qty-label" id="qty-label">
                Quantity
              </span>
              <QuantityStepper value={quantity} onChange={setQuantity} label="Quantity" />
            </div>
          </div>

          <OrderNote name={product.name} colour={colour} size={size} quantity={quantity} price={product.price} />

          <div className="pdp__actions">
            <button type="button" className="btn pdp__order" onClick={onOrder}>
              <Icon name="chat" />
              Order on WhatsApp
            </button>
            <button type="button" className="btn btn--quiet" onClick={onAdd}>
              Add to bag
            </button>
          </div>
          <p className="pdp__fine">WhatsApp opens with this message ready to send. Nothing is charged until you confirm with the studio.</p>

          <div className="pdp__more">
            <details open>
              <summary>The piece</summary>
              <p>{product.description}</p>
            </details>
            <details>
              <summary>Details and fabric</summary>
              <ul>
                <li>{product.fabric}</li>
                {product.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </details>
            <details>
              <summary>Delivery</summary>
              <p>
                Lagos by dispatch rider in 1–2 days after dispatch, other states by courier in 3–5 days, abroad by express courier. Cost is confirmed
                on WhatsApp before you pay.
              </p>
            </details>
          </div>
        </div>
      </div>

      {related.length ? (
        <section className="pdp__related page" aria-labelledby="related-title">
          <h2 id="related-title" className="display pdp__related-title" data-reveal>
            More {collectionName(product.collection)}
          </h2>
          <div className="pdp__related-grid">
            {related.map((p, i) => (
              <ProductTile key={p.slug} product={p} index={i} showCollection={false} />
            ))}
          </div>
        </section>
      ) : null}
    </article>
  )
}
