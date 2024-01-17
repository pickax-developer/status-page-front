import { useEffect, useState } from 'react'
import postSite from '../useCases/postSite.ts'
import siteCheck from '../useCases/siteCheck.ts'
import { isValidURL } from '../utils/validation.ts'
import siteMetaTag from '../useCases/siteMetaTag.ts'
import { toast } from 'react-toastify'

const useSiteRegisterDialog = ({ id, registerCheckNumber }: { id?: number; registerCheckNumber: number }) => {
  const [name, setName] = useState<string>('')
  const [url, setUrl] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [siteId, setSiteId] = useState<number>(0)
  const [metaTag, setMetaTag] = useState<string>('')
  const [step, setStep] = useState<number>(1)
  const [isDisabledNextBtn, setIsDisabledNextBtn] = useState<boolean>(true)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const onClickNextButton = async () => {
    try {
      const res = await postSite({ name, url, description })
      setMetaTag(res.metaTag)
      setSiteId(res.id)
      setStep(2)
    } catch {
      toast('사이트 등록에 실패했습니다. 다시 시도해주세요.')
    }
  }

  const onClickCheckButton = async () => {
    try {
      await siteCheck({ id: siteId })
      setStep(3)
    } catch (e) {
      switch (e?.response?.data?.customError) {
        case 'INVALID_SITE_URL':
          setErrorMessage('사이트 정보를 찾을 수 없습니다.')
          break
        default:
          setErrorMessage('조금 뒤에 다시 시도해주세요.')
      }

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
    setStep(1)
    ;(document.getElementById('site_register_dialog') as HTMLDialogElement)?.close()
  }

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
          toast('사이트 메타 태그 정보 불러오기에 실패했습니다. 잠시 후 다시 시도해주세요.')
        }
      }
    }

    if (id) {
      setSiteId(id)
      fetchData()
    }
  }, [id, registerCheckNumber])

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
    isDisabledNextBtn,
    errorMessage,
  }
}

export default useSiteRegisterDialog
