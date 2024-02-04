import React from 'react'
import { Navigate } from 'react-router-dom'

interface AuthorizationProps {
  children: React.ReactNode
}
const isAuthenticated: string | null = JSON.parse(localStorage.getItem('accessToken') || '{}')?.value

const Authorization = ({ children }: AuthorizationProps) => {
  if (isAuthenticated) {
    return <>{children}</>
  } else {
    return <Navigate to="/login" />
  }
}
export default Authorization
