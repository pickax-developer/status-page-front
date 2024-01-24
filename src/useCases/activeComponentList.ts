import useSWR from 'swr'
import { BASE_URL } from '../common/api.js'
import { ActiveComponentItem, ActiveComponentListResponse } from '../types/response/component.ts'
import { ComponentStatus } from '../types/response/site.ts'

const REFRESH_INTERVAL = 60

const setSiteStatus = (componentList?: ActiveComponentItem[]): ComponentStatus => {
  let status = ComponentStatus.NO_ISSUES

  if (!componentList || componentList.length === 0) return status

  for (let component of componentList) {
    if (status === ComponentStatus.NO_ISSUES && component.status === 'WARN') {
      status = ComponentStatus.WARN
    } else if (component.status === 'OUTAGE') {
      status = ComponentStatus.OUTAGE
    }
  }

  return status
}
const useActiveComponentList = ({ siteId }: { siteId?: string }) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const { data, error, isLoading } = useSWR<ActiveComponentListResponse, Error>(
    `${BASE_URL}/sites/${siteId}/components/active`,
    fetcher,
    { refreshInterval: REFRESH_INTERVAL },
  )

  return {
    data,
    siteStatus: setSiteStatus(data?.componentActiveResponseDtoList),
    error,
    isLoading,
  }
}

export default useActiveComponentList
