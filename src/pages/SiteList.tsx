import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SiteRegisterDialog from '../components/SiteRegisterDialog.tsx'
import getUserList from '../useCases/siteList.ts'
import { OwnerProofStatus } from '../types/response/site.ts'
import SecretKeyDialog from '../components/SecretKeyDialog.tsx'

const SiteList = () => {
  const { data, error, isLoading } = getUserList()
  const [registerCheckNumber, setRegisterCheckNumber] = useState<number>(0)
  const [currentSiteId, setCurrentSiteId] = React.useState<number | undefined>(undefined)
  const [currentSiteIdForSecretKey, setCurrentSiteIdForSecretKey] = React.useState<number | undefined>(undefined)
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <>
      <h2 className="font-bold text-2xl mb-4">사이트 리스트</h2>
      <div className="overflow-x-auto min-h-full rounded-md">
        <table className="table">
          <thead className="bg-primary text-black">
            <tr>
              <th></th>
              <th>이름</th>
              <th>URL</th>
              <th>소유권 증명</th>
              <th>Secret Key</th>
            </tr>
          </thead>
          <tbody className="rounded-md">
            {data.length === 0 && <tr> 없어요 </tr>}
            {data.map((site) => (
              <tr className="bg-secondary text-black" key={site.id}>
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
                        setRegisterCheckNumber(registerCheckNumber + 1)
                        ;(document.getElementById('site_register_dialog') as HTMLDialogElement)?.showModal()
                      }}
                    >
                      소유권 증명
                    </button>
                  ) : (
                    <div className="badge badge-primary badge-outline">{site.ownerProofStatus}</div>
                  )}
                </td>
                <td>
                  {site.ownerProofStatus === OwnerProofStatus.COMPLETED ? (
                    <button
                      className="btn btn-outline"
                      onClick={() => {
                        setCurrentSiteIdForSecretKey(site.id)
                        const modal = document.getElementById('site-secret-key-modal') as HTMLDialogElement
                        modal.showModal()
                      }}
                    >
                      확인
                    </button>
                  ) : (
                    <p>소유권 증명을 받으세요~ </p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <SiteRegisterDialog id={currentSiteId} registerCheckNumber={registerCheckNumber} />
      <SecretKeyDialog siteId={currentSiteIdForSecretKey} />
    </>
  )
}
export default SiteList
