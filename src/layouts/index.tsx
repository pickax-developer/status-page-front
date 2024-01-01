import { Outlet } from 'react-router-dom'

import React from 'react'
import Footer from '../components/Footer.tsx'
import Sidebar from '../components/Sidebar.tsx'
import Header from '../components/Header.tsx'

const Layout = () => {

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <Header />
          <main className="p-10 bg-secondary">
            <Outlet />
          </main>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Layout
