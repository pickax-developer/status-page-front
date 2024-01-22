import React from 'react'
import { useParams } from 'react-router-dom'
import useActiveComponentList from '../useCases/activeComponentList.ts'

const SiteStatus = () => {
  const { siteId } = useParams<{ siteId: string }>()
  const { data, error, isLoading } = useActiveComponentList({ siteId })

  return <div>SiteStatus</div>
}
export default SiteStatus
