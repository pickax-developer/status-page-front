import useSWR from 'swr'
import { BASE_URL } from '../common/api.js'
import { ComponentListResponse } from '../types/response/component.ts'
import { ComponentStatus } from '../types/response/site.ts'
import { fetcher } from '../utils/fetcher.ts'

const dummyComponentList: ComponentListResponse[] = [
  {
    id: 1,
    name: 'name',
    description: 'desc',
    status: ComponentStatus.NONE,
    frequency: 50,
    isActive: true,
  },
  {
    id: 2,
    name: 'name',
    description: 'desc',
    status: ComponentStatus.NONE,
    frequency: 50,
    isActive: true,
  },
]

const useComponentList = ({ siteId }: { siteId?: string }) => {
  const { data, error, isLoading } = useSWR<{ componentResponseDtoList: ComponentListResponse[] }, Error>(
    `${BASE_URL}/sites/${siteId}/components`,
    fetcher,
  )
  // return {
  //   data: dummyComponentList,
  //   error: false,
  //   isLoading: false,
  // }

  return {
    data: data?.componentResponseDtoList,
    error,
    isLoading,
  }
}

export default useComponentList
