import useSWR from 'swr'
import { BASE_URL } from '../common/api'
import { SiteSecretKeyResponse } from '../types/response/site.ts'

const useSiteSecretKey = ({ siteId }: { siteId?: number | 'undefined' }) => {
  if (!siteId || siteId === 'undefined') return { error: 'siteId is required' }
  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const { data, error, isLoading } = useSWR<SiteSecretKeyResponse, Error>(
    `${BASE_URL}/sites/${siteId}/secret-key`,
    fetcher,
  )

  return {
    data: data,
    error,
    isLoading,
  }
}
export default useSiteSecretKey
