import React from 'react'
import SiteRegisterButton from './SiteRegisterButton.tsx'
import { useParams } from 'react-router-dom'
import ComponentRegisterButton from './ComponentRegisterButton.tsx'

const Header = () => {
  const { siteId } = useParams<{ siteId: string }>()
  const isSiteDetailPage = siteId

  return (
    <header className="flex justify-between navbar bg-secondary">
      <button className="text-xl btn btn-ghost">Quack Run</button>
      {isSiteDetailPage ? <ComponentRegisterButton /> : <SiteRegisterButton />}
    </header>
  )
}
export default Header
