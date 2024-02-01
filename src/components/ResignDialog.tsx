import React, { useState } from 'react'
import resign from '../useCases/resign.ts'

const ResignDialog = () => {
  const [password, setPassword] = useState('')
  const onClickResign = () => {
    resign({ password })
    ;(document.getElementById('resign-modal') as HTMLDialogElement)?.close()
  }
  return (
    <dialog id="resign-modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">회원 탈퇴</h3>
        <p className="py-4">탈퇴하시려면 비밀번호를 입력해주세요.</p>
        <div className="flex gap-3">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full input input-bordered"
          />
          <button className="btn btn-outline" onClick={() => onClickResign()}>
            탈퇴
          </button>
        </div>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">닫기</button>
          </form>
        </div>
      </div>
    </dialog>
  )
}
export default ResignDialog
