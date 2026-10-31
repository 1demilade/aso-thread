import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { AUDIENCES, COLLECTIONS } from '../data/collections.js'
import { PRODUCTS } from '../data/products.js'
import ProductTile from '../components/ProductTile.jsx'
import './Collections.css'

const SORTS = [
  { id: 'featured', name: 'Featured' },
  { id: 'new', name: 'New first' },
  { id: 'price-asc', name: 'Price, low to high' },
  { id: 'price-desc', name: 'Price, high to low' },
]

const ALL = {
  id: 'all',
  name: 'All pieces',
  short: 'Every piece in the house, from a linen shirt to a ceremony agbada.',
  image: '/images/couple-black.jpg',
  band: ['/images/couple-black.jpg', '/images/kimono-print.jpg', '/images/tangerine-shirt.jpg'],
  alt: 'A man in a black embroidered agbada and a woman in a black beaded gown',
}

export default function Collections() {
  const [params, setParams] = useSearchParams()
  const collectionId = COLLECTIONS.some((c) => c.id === params.get('c')) ? params.get('c') : 'all'
  const audience = AUDIENCES.some((a) => a.id === params.get('for')) ? params.get('for') : 'all'
  const sort = SORTS.some((s) => s.id === params.get('sort')) ? params.get('sort') : 'featured'
  const current = COLLECTIONS.find((c) => c.id === collectionId) ?? ALL

  const update = (key, value, fallback) => {
    const next = new URLSearchParams(params)
    if (value === fallback) next.delete(key)
    else next.set(key, value)
    setParams(next, { replace: true, preventScrollReset: true })
  }

  const countFor = (cid) =>
    PRODUCTS.filter((p) => (cid === 'all' || p.collection === cid) && (audience === 'all' || p.audience === audience)).length

  const products = useMemo(() => {
    const list = PRODUCTS.filter(
      (p) => (collectionId === 'all' || p.collection === collectionId) && (audience === 'all' || p.audience === audience),
    )
    if (sort === 'new') return [...list].sort((a, b) => Number(b.isNew) - Number(a.isNew))
    if (sort === 'price-asc') return [...list].sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') return [...list].sort((a, b) => b.price - a.price)
    return list
  }, [collectionId, audience, sort])

  const audienceLabel = audience === 'all' ? '' : audience === 'men' ? ' for men' : ' for women'

  return (
    <div className="shop">
      <section className="shop__head page" aria-labelledby="shop-title">
        <div className="shop__intro">
          <h1 id="shop-title" className="display shop__title">
            {current.name}
          </h1>
          <p className="shop__short">{current.short}</p>
        </div>
        <figure className="shop__band" key={current.id}>
          {current.band.map((src, i) => (
            <img key={src} src={src} alt={i === 0 ? current.alt : ''} width="700" height="1000" style={{ animationDelay: `${i * 80}ms` }} />
          ))}
        </figure>
      </section>

      <div className="shop__filters page" role="region" aria-label="Filter and sort">
        <div className="filter-group" role="group" aria-label="Collection">
          {[ALL, ...COLLECTIONS].map((c) => (
            <button
              key={c.id}
              type="button"
              className="chip"
              aria-pressed={collectionId === c.id}
              onClick={() => update('c', c.id, 'all')}
            >
              {c.id === 'all' ? 'All' : c.name}
              <span className="chip__count tabular">{countFor(c.id)}</span>
            </button>
          ))}
        </div>

        <div className="shop__filters-right">
          <div className="filter-group filter-group--small" role="group" aria-label="Who it is for">
            {AUDIENCES.map((a) => (
              <button
                key={a.id}
                type="button"
                className="chip chip--small"
                aria-pressed={audience === a.id}
                onClick={() => update('for', a.id, 'all')}
              >
                {a.name}
              </button>
            ))}
          </div>

          <label className="sort">
            <span className="visually-hidden">Sort by</span>
            <select value={sort} onChange={(e) => update('sort', e.target.value, 'featured')}>
              {SORTS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <p className="shop__count page" aria-live="polite">
        {products.length} {products.length === 1 ? 'piece' : 'pieces'}
        {collectionId === 'all' ? '' : ` in ${current.name}`}
        {audienceLabel}
      </p>

      {products.length ? (
        <div className="shop__grid page">
          {products.map((p, i) => (
            <ProductTile key={p.slug} product={p} index={i} eager={i < 4} showCollection={collectionId === 'all'} />
          ))}
        </div>
      ) : (
        <div className="shop__empty page">
          <h2 className="display shop__empty-title">Nothing here yet</h2>
          <p>
            There is no {current.name.toLowerCase()} piece{audienceLabel} at the moment. Message the studio about a made-to-measure version, or
            see everything we have.
          </p>
          <button type="button" className="btn btn--ink" onClick={() => setParams({}, { replace: true })}>
            Show all pieces
          </button>
        </div>
      )}
    </div>
  )
}
