import { Outlet } from 'react-router-dom'

import React from 'react'
import Footer from '../components/Footer.tsx'
import Sidebar from '../components/Sidebar.tsx'
import Header from '../components/Header.tsx'

const Layout = () => {
  return (
    <>
      <Header />
      <main className="flex">
        <Sidebar />
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
export default Layout
