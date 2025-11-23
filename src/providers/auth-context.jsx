import { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext()
const SHARED_PASSWORD = import.meta.env.VITE_USERS_PASSWORD

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userEmail, setUserEmail] = useState(null)
  const [userName, setUserName] = useState(null)

  useEffect(() => {
    const session = localStorage.getItem('authSession')
    if (session) {
      const { expiresAt, name, email } = JSON.parse(session)
      if (new Date().getTime() < expiresAt) {
        setIsAuthenticated(true)
        setUserName(name)
        setUserEmail(email)
      } else {
        localStorage.removeItem('authSession')
      }
    }
  }, [])
  
  const login = (name, email, password) => {
    if (password === SHARED_PASSWORD) {
      const expiresAt = new Date().getTime() + 24 * 60 * 60 * 1000
      localStorage.setItem('authSession', JSON.stringify({ expiresAt, name, email }))
      setIsAuthenticated(true)
      setUserName(name)
      setUserEmail(email)
      return true
    }
    return false
  }

  const logout = () => {
    localStorage.removeItem('authSession')
    setIsAuthenticated(false)
    setUserName(null)
    setUserEmail(null)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, userName, userEmail, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
