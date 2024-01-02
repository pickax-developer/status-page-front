import React from 'react'
import SiteRegisterButton from './SiteRegisterButton.tsx'

const Header = () => {
  return (
    <header className="flex justify-between navbar">
      <button className="text-xl btn btn-ghost">Quack Run</button>
      <SiteRegisterButton />
    </header>
  )
}
export default Header
