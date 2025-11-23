import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'

export default function Layout() {
  return (
    <div className="page-wrapper">
      <Header />
      <Outlet />
    </div>
  )
}
