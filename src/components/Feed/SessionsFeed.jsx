import { Link } from 'react-router-dom'
import sessions from '@/lib/data/mock-feed.json'
import { createSlug } from '@/lib/utils'
import FeedCard from '../FeedCard/FeedCard'
import styles from './Feed.module.css'

export default function SessionsFeed() {
  return (
    <div className={styles.feed}>
      {sessions.map((session) => (
        <Link key={session.id} to={`/sessions/${createSlug(session.title)}`} title="Открыть сессию">
          <FeedCard
            title={session.title}
            description={session.description}
            timeline={session.timeline}
          />
        </Link>
      ))}
    </div>
  )
}
