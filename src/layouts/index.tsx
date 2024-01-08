import { Outlet } from 'react-router-dom'

import React from 'react'
import Footer from '../components/Footer.tsx'
import Sidebar from '../components/Sidebar.tsx'
import Header from '../components/Header.tsx'

const Layout = () => {

  return (
    <div className="h-full">
      <div className="flex min-h-full">
        <Sidebar />
        <div className="w-full bg-white min-h-full">
          <Header />
          <main className="p-10 mb-20 md:mb-40">
            <Outlet />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Layout
