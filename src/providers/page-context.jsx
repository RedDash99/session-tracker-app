import { createContext, useContext } from 'react'
import { useParams } from 'react-router-dom'
import sessions from '@/lib/data/mock-feed.json'
import { createSlug } from '@/lib/utils'

const PageContext = createContext()

export function PageProvider({ children }) {
  const { sessionSlug } = useParams()
  const session = sessions.find((session) => createSlug(session.title) === sessionSlug)
  return <PageContext.Provider value={{ sessionSlug, session }}>{children}</PageContext.Provider>
}

export const usePage = () => useContext(PageContext)
