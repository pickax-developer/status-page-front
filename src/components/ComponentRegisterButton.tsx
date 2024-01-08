import React from 'react'

const ComponentRegisterButton = () => {
  return (
    <button
      className="btn btn-primary"
      onClick={() => (document.getElementById('component_register_dialog') as HTMLDialogElement)?.showModal()}
    >
      컴포넌트 등록
    </button>
  )
}
export default ComponentRegisterButton
