import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export const RedirectToHome = () => {
    const {currentUser} = useSelector(state => state.auth)
    if(!currentUser) return <Navigate to="/" replace/>
  return <Outlet />
}
