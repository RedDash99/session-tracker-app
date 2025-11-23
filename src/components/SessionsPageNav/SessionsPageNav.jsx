import { NavLink } from 'react-router-dom'
import { SESSION_TYPES } from '@/lib/config'
import styles from './SessionsPageNav.module.css'

const setActive = ({ isActive }) =>
  isActive ? `button primary-button active ${styles.link}` : `button primary-button ${styles.link}`

export default function SessionsPageNav() {
  return (
    <nav className={styles.nav}>
      {SESSION_TYPES.map((link) => (
        <NavLink
          key={link.type}
          to={link.type === 'all' ? '' : link.type}
          end={link.type === 'all'}
          className={setActive}
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  )
}
