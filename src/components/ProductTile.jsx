import { Link } from 'react-router-dom'
import { collectionName } from '../data/collections.js'
import { formatNaira } from '../lib/format.js'
import './ProductTile.css'

export default function ProductTile({ product, index = 0, eager = false, showCollection = true }) {
  const [first, second] = product.images
  return (
    <article className="tile" data-reveal style={{ '--i': index % 4 }}>
      <Link to={`/product/${product.slug}`} className="tile__link">
        <div className="tile__media">
          <img
            src={first.src}
            alt={first.alt}
            width="600"
            height="880"
            loading={eager ? 'eager' : 'lazy'}
            decoding="async"
          />
          {second ? <img className="tile__alt" src={second.src} alt="" width="600" height="880" loading="lazy" decoding="async" /> : null}
          {product.isNew ? <span className="tile__new">New</span> : null}
        </div>
        <div className="tile__text">
          <h3 className="tile__name">{product.name}</h3>
          <p className="tile__price tabular">{formatNaira(product.price)}</p>
        </div>
      </Link>
      <div className="tile__sub">
        {showCollection ? <span>{collectionName(product.collection)}</span> : null}
        <span className="tile__dots" aria-label={`${product.colours.length} ${product.colours.length === 1 ? 'colour' : 'colours'}`}>
          {product.colours.map((c) => (
            <span key={c.name} className="tile__dot" style={{ background: c.hex }} title={c.name} />
          ))}
        </span>
      </div>
    </article>
  )
}
