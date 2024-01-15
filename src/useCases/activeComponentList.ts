import useSWR from 'swr'
import { BASE_URL } from '../common/api.js'
import { ActiveComponentListResponse } from '../types/response/component.ts'

const dummyComponentList: ActiveComponentListResponse[] = [
  {
    id: 1,
    name: 'name',
    description: 'desc',
    status: 'NONE',
  },
  {
    id: 2,
    name: 'name',
    description: 'desc',
    status: 'NONE',
  },
]

const useActiveComponentList = ({ siteId }: { siteId?: string }) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const { data, error, isLoading } = useSWR<{ componentActiveResponseDtoList: ActiveComponentListResponse[] }, Error>(
    `${BASE_URL}/sites/${siteId}/components/active`,
    fetcher,
  )
  // return {
  //   data: dummyComponentList,
  //   error: false,
  //   isLoading: false,
  // }

  return {
    data: data?.componentActiveResponseDtoList,
    error,
    isLoading,
  }
}

export default useActiveComponentList
