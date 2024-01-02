import useSWR from 'swr'
import { SiteListResponse } from '../types/response/site.ts'

const dummySiteList: SiteListResponse[] = [
  {
    id: 1,
    name: '네이버',
    url: 'https://naver.com',
    ownerProofState: 'DONE',
  },
  {
    id: 2,
    name: '다음',
    url: 'https://daum.net',
    ownerProofState: 'NOT_YET',
  },
  {
    id: 3,
    name: '구글',
    url: 'https://google.com',
    ownerProofState: 'DONE',
  },
]

const useSiteList = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  // const { data, error, isLoading } = useSWR('', fetcher)
  return {
    data: dummySiteList,
    error: false,
    isLoading: null,
  }
}

export default useSiteList
