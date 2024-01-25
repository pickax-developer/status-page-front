import useSWR from 'swr'
import { SiteDetailResponse } from '../types/response/site.ts'
import { BASE_URL } from '../common/api.js'

const useSiteLDetail = ({ siteId }: { siteId?: string }) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const { data, error, isLoading } = useSWR<SiteDetailResponse, Error>(`${BASE_URL}/sites/${siteId}`, fetcher)

  return {
    data,
    error,
    isLoading,
  }
}

export default useSiteLDetail
