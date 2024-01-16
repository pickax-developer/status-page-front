import useSWR from 'swr'
import { BASE_URL } from '../common/api'

const useSiteSecretKey = ({ siteId }: { siteId?: number }) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const { data, error, isLoading } = useSWR(`${BASE_URL}/sites/${siteId}/secret-key`, fetcher)

  return {
    data: data,
    error,
    isLoading,
  }
}
export default useSiteSecretKey
