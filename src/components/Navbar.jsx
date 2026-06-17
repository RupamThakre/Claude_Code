import { Link, useMatch } from 'react-router-dom'
import data from '../data'

function TopicLink({ topicName, topic }) {
  const firstSub = Object.values(topic.subs)[0]
  // useMatch with wildcard highlights this link for ANY subtopic of the topic
  const active = useMatch(`/${topic.slug}/*`)

  return (
    <Link
      to={`/${topic.slug}/${firstSub.slug}`}
      className={`nav-link${active ? ' nav-link--active' : ''}`}
    >
      <span className="nav-icon" aria-hidden="true">{topic.icon}</span>
      {topicName}
    </Link>
  )
}

export default function Navbar() {
  return (
    <nav className="site-nav" aria-label="Topics">
      {Object.entries(data).map(([topicName, topic]) => (
        <TopicLink key={topic.slug} topicName={topicName} topic={topic} />
      ))}
    </nav>
  )
}
