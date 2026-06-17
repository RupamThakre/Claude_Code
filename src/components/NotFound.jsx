import { Link } from 'react-router-dom'
import data from '../data'

const firstTopic = Object.values(data)[0]
const firstSub   = Object.values(firstTopic.subs)[0]
const homePath   = `/${firstTopic.slug}/${firstSub.slug}`

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-inner">
        <p className="not-found-code" aria-hidden="true">404</p>
        <h1 className="not-found-title">Page not found</h1>
        <p className="not-found-text">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to={homePath} className="not-found-link">
          ← Back to home
        </Link>
      </div>
    </div>
  )
}
