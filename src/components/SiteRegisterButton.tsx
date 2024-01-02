import React from 'react'

const SiteRegisterButton = () => {
  return (
    <button
      className="btn btn-primary"
      onClick={() => (document.getElementById('site_register_dialog') as HTMLDialogElement)?.showModal()}
    >
      사이트 등록
    </button>
  )
}
export default SiteRegisterButton
