import { useState } from 'react'
import postSite from '../useCases/postSiteUseCase.ts'
import postSiteCheck from '../useCases/postSiteCheck.ts'

const useSiteRegisterDialog = () => {
  const [name, setName] = useState<string>('')
  const [url, setUrl] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  const [metaTag, setMetaTag] = useState<string>('')
  const [step, setStep] = useState<number>(1)

  const onClickNextButton = async () => {
    try {
      const res = await postSite({ name, url, description })
      setMetaTag(res.metaTag)
      setStep(2)
    } catch {
    //TODO: 안내 토스트
    }
  }

  const onClickCheckButton = async () => {
    postSiteCheck({ id: 1 })
    //성공
    setStep(3)
    //실패
    setStep(4)
  }

  const copyMetaTag = () => {
    navigator.clipboard.writeText(`<meta name="quack-run-site-verification" content="${copyMetaTag}">`)
  }

  const onCloseModal = () => {
    setDescription('')
    setMetaTag('')
    setName('')
    setUrl('')
    setStep(1)
    ;(document.getElementById('site_register_dialog') as HTMLDialogElement)?.close()
  }
  return {
    name,
    url,
    description,
    setName,
    setUrl,
    setDescription,
    onClickNextButton,
    metaTag,
    onClickCheckButton,
    copyMetaTag,
    step,
    setStep,
    onCloseModal,
  }
}

export default useSiteRegisterDialog
