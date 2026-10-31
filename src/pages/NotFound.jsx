import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound({ what = 'page' }) {
  useEffect(() => {
    document.title = 'Not found | Aso & Thread'
  }, [])

  return (
    <section className="missing page" aria-labelledby="missing-title">
      <h1 id="missing-title" className="display missing__title">
        Loose thread
      </h1>
      <div className="missing__body">
        <p>We could not find that {what}. It may have sold through, or the link is mistyped.</p>
        <div className="missing__actions">
          <Link to="/collections" className="btn btn--ink">
            Browse the collections
          </Link>
          <Link to="/" className="text-link">
            Back to the home page
          </Link>
        </div>
      </div>
      <img className="missing__img" src="/images/fabric-hanging.jpg" alt="Lengths of printed cloth hanging on a rail" width="900" height="1200" />
    </section>
  )
}
