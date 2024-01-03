import useSWR from 'swr'
import { OwnerProofStatus, SiteListResponse } from '../types/response/site.ts'

const dummySiteList: SiteListResponse[] = [
  {
    id: 1,
    name: '네이버',
    url: 'https://naver.com',
    ownerProofState: OwnerProofStatus.CANCELED,
  },
  {
    id: 2,
    name: '다음',
    url: 'https://daum.net',
    ownerProofState: OwnerProofStatus.COMPLETED,
  },
  {
    id: 3,
    name: '구글',
    url: 'https://google.com',
    ownerProofState: OwnerProofStatus.UNVERIFIED,
  },
]

const useSiteList = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  // const { data, error, isLoading } = useSWR('http://localhost:3306/sites', fetcher)
  return {
    data: dummySiteList,
    error: false,
    isLoading: null,
  }
}

export default useSiteList
