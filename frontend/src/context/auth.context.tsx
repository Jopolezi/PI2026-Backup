import { authService } from "../services/auth.service"
import { createContext, useContext, useState, useEffect, useCallback } from "react"

const AuthContext = createContext(null)

export function AuthProvider({ children }) {

    const [ user, setUser ] = useState(null)
    const [ isLoadingUser, setLoading ] = useState(true)

    useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) { setLoading(false); return }

    authService.me()
      .then(setUser)
      .catch(() => localStorage.removeItem('token'))
      .finally(() => setLoading(false))
  }, [])

   useEffect(() => {
    const handleForceLogout = () => { setUser(null) }
    window.addEventListener('auth:logout', handleForceLogout)
    return () => window.removeEventListener('auth:logout', handleForceLogout)
  }, [])

  const signIn = useCallback((token, userData) => {
    localStorage.setItem('token', token)
    setUser(userData)
  }, [])

  const signOut = useCallback(async () => {
    await authService.logout()     
    localStorage.removeItem('token') 
    setUser(null)
  }, [])

   return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      isLoadingUser,
      signIn,
      signOut,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth out of AuthProvider')
  return ctx
}