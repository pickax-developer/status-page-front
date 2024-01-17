import useSWR from 'swr'
import { OwnerProofStatus, SiteListResponse } from '../types/response/site.ts'
import { BASE_URL } from '../common/api.js'

const dummySiteList: SiteListResponse[] = [
  {
    id: 1,
    name: '네이버',
    url: 'https://naver.com',
    ownerProofStatus: OwnerProofStatus.CANCELED,
  },
  {
    id: 2,
    name: '다음',
    url: 'https://daum.net',
    ownerProofStatus: OwnerProofStatus.COMPLETED,
  },
  {
    id: 3,
    name: '구글',
    url: 'https://google.com',
    ownerProofStatus: OwnerProofStatus.UNVERIFIED,
  },
]

const useSiteList = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const { data, error, isLoading } = useSWR<SiteListResponse[], Error>(`${BASE_URL}/sites`, fetcher)
  // return {
  //   data: dummySiteList,
  //   error: false,
  //   isLoading: false,
  // }

  return {
    data,
    error,
    isLoading,
  }
}

export default useSiteList
