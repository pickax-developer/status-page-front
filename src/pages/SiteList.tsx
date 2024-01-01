import React from 'react'
import { Link } from 'react-router-dom'
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
const SiteList = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>이름</th>
              <th>URL</th>
              <th>소유권 증명</th>
            </tr>
          </thead>
          <tbody>
            {dummySiteList.map((site) => (
              <tr className="bg-base-200" key={site.id}>
                <td>
                  <Link to={`/${site.id}`} key={site.id}>
                    {site.id}
                  </Link>
                </td>
                <td>{site.name}</td>
                <td>{site.url}</td>
                <td>{site.ownerProofState}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default SiteList
