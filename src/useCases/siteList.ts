import useSWR from 'swr'
import { SiteListResponse } from '../types/response/site.ts'
import { BASE_URL } from '../common/api.js'
import { fetcher } from '../utils/fetcher.ts'

const useSiteList = () => {
  const { data, error, isLoading } = useSWR<SiteListResponse[], Error>(`${BASE_URL}/sites`, fetcher)

  return {
    data,
    error,
    isLoading,
  }
}

export default useSiteList
