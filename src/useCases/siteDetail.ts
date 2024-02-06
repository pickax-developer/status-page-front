import useSWR from 'swr'
import { SiteDetailResponse } from '../types/response/site.ts'
import { BASE_URL } from '../common/api.js'
import { fetcher } from '../utils/fetcher.ts'

const useSiteLDetail = ({ siteId }: { siteId?: string }) => {
  const { data, error, isLoading } = useSWR<SiteDetailResponse, Error>(`${BASE_URL}/sites/${siteId}`, fetcher)

  return {
    data,
    error,
    isLoading,
  }
}

export default useSiteLDetail
