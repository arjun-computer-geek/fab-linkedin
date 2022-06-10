import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = () => {
    const {currentUser} = useSelector(state => state.auth)
    if(!currentUser) return <Navigate to="/login" replace/>
  return <Outlet />
}
