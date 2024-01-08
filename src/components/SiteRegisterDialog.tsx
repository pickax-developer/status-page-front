import React from 'react'
import useSiteRegisterDialog from './useSiteRegisterDialog.ts'


const SiteRegisterDialog = ({ id }: { id?: number }) => {
  const {
    metaTag,
    name,
    url,
    description,
    setName,
    setUrl,
    copyMetaTag,
    setDescription,
    onClickNextButton,
    onClickCheckButton,
    step,
    setStep,
    onCloseModal,
    isDisabledNextBtn,
  } = useSiteRegisterDialog({ id: id ? id : undefined })

  if (!metaTag || step === 1)
    return (
        <dialog id="site_register_dialog" className="modal">
          <div className="modal-box">
            <h3 className="text-lg font-bold">사이트 등록</h3>
            <form action="">
              <label className="w-full form-control">
                <div className="label">
                  <span className="label-text">사이트 이름</span>
                </div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="quack run"
                  className="w-full input input-bordered"
                />
              </label>
              <label className="w-full form-control">
                <div className="label">
                  <span className="label-text">URL</span>
                </div>
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://quack.run"
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
                  placeholder="사이트를 모니터링하고 알림을 보내주는 서비스입니다. "
                ></textarea>
              </label>
            </form>

            <div className="modal-action">
              <button
                className="btn"
                onClick={() => {
                  onCloseModal()
                }}
              >
                취소
              </button>
              <button
                disabled={isDisabledNextBtn}
                onClick={() => onClickNextButton()}
                className="btn btn-primary"
                type="button"
              >
                다음 단계로
              </button>
            </div>
          </div>
        </dialog>
    )

  if (step === 2) {
    return (
      <dialog id="site_register_dialog" className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">사이트 소유 확인</h3>
          <p className="text-sm">{url}</p>
          <p className="text-xs py-4">{`아래 메타 태그를 복사하여 사이트 홈페이지 첫번째 <body> 영역 상단의 <head> 태그 안에 붙여넣어주세요`}</p>
          <div className="flex pt-4 gap-3 w-full">
            <input
              className="bg-gray-100 p-2 rounded-sm w-full"
              disabled
              value={`<meta name="quack-run-service-verification" content="${metaTag}">`}
            ></input>
            <button className="btn btn-outline" onClick={() => copyMetaTag()}>
              복사
            </button>
          </div>
          <div className="flex pt-4 gap-3 justify-end">
            <button
              className="btn"
              onClick={() => {
                setStep(1)
              }}
            >
              뒤로
            </button>
            <button onClick={() => onClickCheckButton()} className="btn btn-primary" type="button">
              확인
            </button>
          </div>
        </div>
      </dialog>
    )
  }

  if (step === 3) {
    return (
      <dialog id="site_register_dialog" className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">사이트 소유권을 확인했습니다.</h3>

          <p>확인된 상태를 유지하려면 사이트에서 태그를 제거하지 마세요</p>

          <button
            className="btn"
            onClick={() => {
              onCloseModal()
            }}
          >
            완료
          </button>
        </div>
      </dialog>
    )
  }
  if (step === 4) {
    return (
      <dialog id="site_register_dialog" className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">사이트 소유권을 확인하지 못했습니다.</h3>

          <p>다시 한번 확인해주시고, 잠시 후 시도해주세요.</p>

          <div className="modal-action">
            <button
              className="btn"
              onClick={() => {
                onCloseModal()
              }}
            >
              닫기
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => {
                setStep(2)
              }}
            >
              뒤로
            </button>
          </div>
        </div>
      </dialog>
    )
  }
}
export default SiteRegisterDialog
