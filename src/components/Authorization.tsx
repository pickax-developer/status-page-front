import React from 'react'
import { Navigate } from 'react-router-dom'

interface AuthorizationProps {
  children: React.ReactNode
  shouldAuthenticated?: boolean
  navigateTo?: string
}
const isAuthenticated: string | null = JSON.parse(localStorage.getItem('accessToken') || '{}')?.value

const Authorization = ({ shouldAuthenticated = true, children, navigateTo = '/login' }: AuthorizationProps) => {
  if (shouldAuthenticated ? isAuthenticated : !isAuthenticated) {
    return <>{children}</>
  } else {
    return <Navigate to={navigateTo} />
  }
}
export default Authorization
