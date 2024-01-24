import useSWR from 'swr'
import { BASE_URL } from '../common/api.js'
import { ActiveComponentListResponse } from '../types/response/component.ts'


const REFRESH_INTERVAL = 60

const useActiveComponentList = ({ siteId }: { siteId?: string }) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const { data, error, isLoading } = useSWR<ActiveComponentListResponse, Error>(
    `${BASE_URL}/sites/${siteId}/components/active`,
    fetcher,
    { refreshInterval: REFRESH_INTERVAL },
  )

  return {
    data,
    isSiteOkay: data?.componentActiveResponseDtoList.every((component) => component.status === 'OK'),
    error,
    isLoading,
  }
}

export default useActiveComponentList
