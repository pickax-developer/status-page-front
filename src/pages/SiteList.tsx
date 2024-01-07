import React from 'react'
import { Link } from 'react-router-dom'
import SiteRegisterDialog from '../components/SiteRegisterDialog.tsx'
import getUserList from '../useCases/siteList.ts'
import { OwnerProofStatus } from '../types/response/site.ts'

const SiteList = () => {
  const { data, error, isLoading } = getUserList()
  const [currentSiteId, setCurrentSiteId] = React.useState<number | undefined>(undefined)
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <>
      <div className="overflow-x-auto min-h-full rounded-md">
        <table className="table">
          <thead className="bg-primary text-black">
            <tr>
              <th></th>
              <th>이름</th>
              <th>URL</th>
              <th>소유권 증명</th>
            </tr>
          </thead>
          <tbody className="rounded-md">
            {data.length === 0 && <tr> 없어요 </tr>}
            {data.map((site) => (
              <tr className="bg-base-200" key={site.id}>
                <td>
                  <Link to={`/${site.id}`} key={site.id}>
                    {site.id}
                  </Link>
                </td>
                <td>{site.name}</td>
                <td>{site.url}</td>
                <td>
                  {site.ownerProofStatus === OwnerProofStatus.UNVERIFIED ? (
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        setCurrentSiteId(site.id)
                        ;(document.getElementById('site_register_dialog') as HTMLDialogElement)?.showModal()
                      }}
                    >
                      소유권 증명
                    </button>
                  ) : (
                    <div className="badge badge-primary badge-outline">{site.ownerProofStatus}</div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <SiteRegisterDialog id={currentSiteId} />
    </>
  )
}
export default SiteList
