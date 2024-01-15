import React from 'react'
import useSecretKeyDialog from './useSecretKeyDialog.ts'

const SecretKeyDialog = ({ siteId }: { siteId?: number }) => {
  const { data, copySecretKey, error, isLoading } = useSecretKeyDialog({ siteId })

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <dialog id="site-secret-key-modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Secret Key</h3>
        <p className="py-4">노출되지 않게 잘 관리하세요 ~~ </p>
        <div className='flex gap-3'>
          <input className="bg-gray-100 p-2 rounded-sm w-full" type="text" disabled value={data} />
          <button className="btn btn-outline" onClick={() => copySecretKey()}>
            복사
          </button>
        </div>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  )
}
export default SecretKeyDialog
