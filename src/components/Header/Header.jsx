import { Link } from 'react-router-dom'
import sessions from '@/lib/data/mock-feed.json'
import { createSlug } from '@/lib/utils'
import Container from '../Container/Container'
import styles from './Header.module.css'

const ACTIVE_SESSIONS = sessions.filter((session) => session.timeline.finished === false)

export default function Header() {
  return (
    <Container>
      <header className={styles.header}>
        <Link to="/" className={`button primary-button ${styles.link}`}>
          Главная
        </Link>
        <nav>
          <ul className={styles.nav}>
            {ACTIVE_SESSIONS.map((session) => (
              <li key={session.id}>
                <Link
                  to={`/sessions/${createSlug(session.title)}`}
                  className={`button primary-button ${styles.link}`}
                >
                  {session.title}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/sessions" className={`button primary-button ${styles.link}`}>
                Все сессии
              </Link>
            </li>
          </ul>
        </nav>
        <button type="button" className={`button accent-button ${styles.addButton}`}>
          add task
        </button>
      </header>
    </Container>
  )
}
