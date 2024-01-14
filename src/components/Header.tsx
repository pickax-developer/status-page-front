import React from 'react'
import SiteRegisterButton from './SiteRegisterButton.tsx'
import { useParams } from 'react-router-dom'
import ComponentRegisterButton from './ComponentRegisterButton.tsx'

const Header = () => {
  const { siteId } = useParams<{ siteId: string }>()
  const isSiteDetailPage = siteId

  return (
    <header className="flex justify-between navbar bg-secondary">
      <h2 className="text-xl pl-2 font-bold text-black">Quack Run</h2>
      {isSiteDetailPage ? <ComponentRegisterButton /> : <SiteRegisterButton />}
    </header>
  )
}
export default Header
