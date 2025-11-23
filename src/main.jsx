import { NuqsAdapter } from 'nuqs/adapters/react-router/v6'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import ErrorPage from './ErrorPage.jsx'
import Layout from './pages/layout.jsx'
import SessionPageLayout from './pages/SessionPage/SessionPageLayout.jsx'
import SessionsPageLayout from './pages/SessionsPage/SessionsPageLayout.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: 'sessions',
        element: <SessionsPageLayout />,
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <SessionsPageLayout currentRoute="all" />,
          },
          {
            path: 'active',
            element: <SessionsPageLayout currentRoute="active" />,
          },
          {
            path: 'completed',
            element: <SessionsPageLayout currentRoute="completed" />,
          },
          {
            path: 'successful',
            element: <SessionsPageLayout currentRoute="successful" />,
          },
          {
            path: 'failed',
            element: <SessionsPageLayout currentRoute="failed" />,
          },
        ],
      },
      {
        path: 'sessions/:sessionSlug',
        element: <SessionPageLayout />,
        errorElement: <ErrorPage />,
      },
    ],
  },
])

function AppWrapper() {
  return (
    <StrictMode>
      <NuqsAdapter>
        <RouterProvider
          future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
          router={router}
        />
      </NuqsAdapter>
    </StrictMode>
  )
}

createRoot(document.getElementById('root')).render(<AppWrapper />)
