"use client"

import { useState, useEffect, createContext, useContext } from "react"

const AuthContext = createContext(undefined)

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export function useAuthState() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Verificar si hay un usuario guardado en localStorage
    const savedUser = localStorage.getItem("user")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    setLoading(true)
    try {
      // Aquí harías la llamada a tu API de autenticación
      // Por ahora, simulamos una respuesta exitosa
      const mockUser = {
        id: "1",
        email,
        firstName: "Usuario",
        lastName: "Demo",
      }

      setUser(mockUser)
      localStorage.setItem("user", JSON.stringify(mockUser))
      setLoading(false)
      return true
    } catch (error) {
      setLoading(false)
      return false
    }
  }

  const signup = async (userData) => {
    setLoading(true)
    try {
      // Aquí harías la llamada a tu API para crear el usuario
      // Por ahora, simulamos una respuesta exitosa
      const newUser = {
        id: Date.now().toString(),
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
      }

      setUser(newUser)
      localStorage.setItem("user", JSON.stringify(newUser))
      setLoading(false)
      return true
    } catch (error) {
      setLoading(false)
      return false
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  return {
    user,
    login,
    signup,
    logout,
    loading,
  }
}
