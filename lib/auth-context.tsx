'use client'

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from 'react'

interface AuthContextType {
  isAdmin: boolean
  isLoading: boolean
  login: (id: string, password: string) => Promise<boolean>
  logout: () => Promise<void>
  getAuthToken: () => string | null
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check auth status on mount
    fetch('/api/auth/me')
      .then((res) => res.json())
      .then((data) => {
        setIsAdmin(data.isAdmin || false)
      })
      .catch(() => setIsAdmin(false))
      .finally(() => setIsLoading(false))
  }, [])

  const login = async (id: string, password: string): Promise<boolean> => {
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, password }),
      })
      const data = await res.json()
      if (data.ok) {
        setIsAdmin(true)
        return true
      }
      return false
    } catch {
      return false
    }
  }

  const logout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      setIsAdmin(false)
    } catch {
      // ignore
    }
  }

  const getAuthToken = () => {
    // For cookie-based auth, no token needed in headers
    return null
  }

  return (
    <AuthContext.Provider
      value={{ isAdmin, isLoading, login, logout, getAuthToken }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
