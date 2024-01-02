import React from 'react'
import { Link } from 'react-router-dom'
import SiteRegisterDialog from '../components/SiteRegisterDialog.tsx'
import getUserList from '../useCases/siteListUseCase.ts'

const SiteList = () => {
  const { data, error, isLoading } = getUserList()

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <>
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
              {data.map((site) => (
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
      <SiteRegisterDialog />
    </>
  )
}
export default SiteList
