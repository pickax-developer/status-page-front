import useSWR from 'swr'
import { BASE_URL } from '../common/api.js'
import { ComponentListResponse } from '../types/response/component.ts'

const dummyComponentList: ComponentListResponse[] = [
  {
    id: 1,
    name: 'billing',
    description: '결제 시스템',
    status: 'status',
  },
  {
    id: 2,
    name: 'login',
    description: '로그인 시스템',
    status: 'status',
  },
  {
    id: 3,
    name: 'workspace',
    description: '작업 공간',
    status: 'status',
  },
]

const useComponentList = ({ siteId }: { siteId?: string }) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const { data, error, isLoading } = useSWR(`${BASE_URL}/sites/${siteId}`, fetcher)
  return {
    data: dummyComponentList,
    error: false,
    isLoading: false,
  }

  // return {
  //   data,
  //   error,
  //   isLoading,
  // }
}

export default useComponentList
