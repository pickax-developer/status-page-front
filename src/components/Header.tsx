import React from 'react'
import SiteRegisterButton from './SiteRegisterButton.tsx'
import { useParams } from 'react-router-dom'

const Header = () => {
  const { siteId } = useParams<{ siteId: string }>()
  const isSiteListPage = !siteId

  return (
    <header className="flex justify-between navbar bg-secondary">
      <button className="text-xl btn btn-ghost">Quack Run</button>
      {isSiteListPage && <SiteRegisterButton />}
    </header>
  )
}
export default Header
