import React from 'react'
import useComponentRegisterDialog from './useComponentRegisterDialog.ts'

const ComponentRegisterDialog = ({ siteId }: { siteId?: string }) => {
  if (!siteId) return null

  const {
    name,
    setName,
    description,
    setDescription,
    isDisabledConfirmBtn,
    onCloseModal,
    onClickConfirmButton,
    frequency,
    setFrequency,
    isActive,
    setIsActive,
    frequencyMessage,
  } = useComponentRegisterDialog({ siteId })

  return (
    <dialog id="component_register_dialog" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">컴포넌트 등록</h3>
        <form>
          <label className="w-full form-control">
            <div className="label">
              <span className="label-text">컴포넌트 이름</span>
            </div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Login"
              className="w-full input input-bordered"
            />
          </label>
          <label className="w-full form-control">
            <div className="label">
              <span className="label-text">설명</span>
            </div>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="textarea textarea-bordered"
              placeholder="로그인 시스템"
            ></textarea>
          </label>
          <label className="w-full form-control">
            <div className="p-2">
              <p className="label-text">health 체크 빈도</p>
              <p className="label-text text-xs">초 단위/30초 이상</p>
            </div>
            <input
              type="number"
              value={frequency}
              onChange={(e) => setFrequency(parseInt(e.target.value))}
              className={`w-full input input-bordered ${frequencyMessage && 'input-error'}`}
              placeholder="1800"
            ></input>
            {frequencyMessage && <p className="text-xs text-error mt-2">{frequencyMessage}</p>}
          </label>
          <label className="w-full flex align-center gap-4 mt-2">
            <span className="label-text">활성화 여부</span>
            <input
              type="checkbox"
              className="toggle"
              checked={isActive}
              onChange={() => {
                setIsActive(!isActive)
              }}
            />
          </label>
          <div className="modal-action">
            <button className="btn" type="button" onClick={() => onCloseModal()}>
              닫기
            </button>
            <button
              disabled={isDisabledConfirmBtn}
              onClick={() => onClickConfirmButton()}
              className="btn btn-primary"
              type="button"
            >
              확인
            </button>
          </div>
        </form>
      </div>
    </dialog>
  )
}
export default ComponentRegisterDialog
