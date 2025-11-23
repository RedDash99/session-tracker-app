import { Outlet } from 'react-router-dom'
import Container from '@/components/Container/Container'
import SessionsFeed from '@/components/Feed/SessionsFeed'
import SessionsPageNav from '@/components/SessionsPageNav/SessionsPageNav'
import { useHead } from '@/hooks/useHead'
import styles from './Page.module.css'

export default function Page({ sessionType = 'Все' }) {
  useHead(`Сессии | ${sessionType}`)

  return (
    <Container>
      <div className={styles.page}>
        <SessionsPageNav />
        {/* <Outlet /> */}
        <SessionsFeed />
      </div>
    </Container>
  )
}
