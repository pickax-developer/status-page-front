import { useEffect, useState } from 'react'
import postSite from '../useCases/postSite.ts'
import siteCheck from '../useCases/siteCheck.ts'
import { isValidURL } from '../utils/validation.ts'
import siteMetaTag from '../useCases/siteMetaTag.ts'

const useSiteRegisterDialog = ({ id }: { id?: number }) => {
  const [name, setName] = useState<string>('')
  const [url, setUrl] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [resId, setResId] = useState<number>(0)
  const [metaTag, setMetaTag] = useState<string>('')
  const [step, setStep] = useState<number>(1)
  const [alertMessage, setAlertMessage] = useState<string>('')
  const [isDisabledNextBtn, setIsDisabledNextBtn] = useState<boolean>(true)

  const onClickNextButton = async () => {
    try {
      const res = await postSite({ name, url, description })
      setMetaTag(res.metaTag)
      setResId(res.id)
      setStep(2)
      setAlertMessage('')
    } catch {
      setAlertMessage('사이트 등록에 실패했습니다. 다시 시도해주세요.')
    }
  }

  const onClickCheckButton = async () => {
    try {
      await siteCheck({ id: resId })
      setStep(3)
    } catch {
      setStep(4)
    }
  }

  const copyMetaTag = () => {
    navigator.clipboard.writeText(`<meta name="quack-run-service-verification" content="${metaTag}">`)
  }

  const onCloseModal = () => {
    setDescription('')
    setMetaTag('')
    setName('')
    setUrl('')
    setAlertMessage('')
    setStep(1)
    ;(document.getElementById('site_register_dialog') as HTMLDialogElement)?.close()
  }

  useEffect(() => {
    setAlertMessage('')
  }, [])

  useEffect(() => {
    setIsDisabledNextBtn(name.length === 0 || !isValidURL(url))
  }, [name, url])

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const res = await siteMetaTag({ id })
          setMetaTag(res.content)
          setStep(2)
        } catch {
          ;(document.getElementById('site_register_dialog') as HTMLDialogElement)?.close()
          setAlertMessage('사이트 메타 태그 정보 불러오기에 실패했습니다. 다시 시도해주세요.')
        }
      }
    }
    if (id) {
      setResId(id)
      fetchData()
    }
  }, [id])

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
    alertMessage,
    isDisabledNextBtn,
  }
}

export default useSiteRegisterDialog
