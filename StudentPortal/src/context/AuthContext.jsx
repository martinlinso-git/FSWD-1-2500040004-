import { createContext, useContext, useState } from 'react'
import axios from 'axios'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  )

  const [token, setToken] = useState(
    localStorage.getItem('token') || null
  )

  const register = async (data) => {
    const res = await axios.post(
      'http://localhost:5000/api/auth/register',
      data
    )
    saveAuth(res.data)
  }

  const login = async (data) => {
    const res = await axios.post(
      'http://localhost:5000/api/auth/login',
      data
    )
    saveAuth(res.data)
  }

  const saveAuth = (data) => {
    setUser(data.user)
    setToken(data.token)

    localStorage.setItem('user', JSON.stringify(data.user))
    localStorage.setItem('token', data.token)
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }

  return (
    <AuthContext.Provider value={{
      user, token, register, login, logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)