import { useEffect, useState } from 'react'
import postComponent from '../useCases/postComponent.ts'
 import { toast } from 'react-toastify'

const useComponentRegisterDialog = ({ siteId }: { siteId: string }) => {
  const DEFAULT_FREQUENCY = 1800

  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [frequency, setFrequency] = useState<number>(DEFAULT_FREQUENCY)
  const [frequencyMessage, setFrequencyMessage] = useState<string>('')
  const [isActive, setIsActive] = useState<boolean>(false)

  const [isDisabledConfirmBtn, setIsDisabledConfirmBtn] = useState<boolean>(true)

  const onCloseModal = () => {
    setDescription('')
    setName('')
    ;(document.getElementById('component_register_dialog') as HTMLDialogElement)?.close()
  }

  useEffect(() => {
    setIsDisabledConfirmBtn(name.length === 0)
  }, [name])

  const onClickConfirmButton = async () => {
    try {
      const res = await postComponent({ siteId, name, description, frequency, isActive })
    } catch {
      toast('컴포넌트 등록에 실패했습니다. 다시 시도해주세요.')
    }
  }

  useEffect(() => {
    if (frequency < 30) {
      setFrequencyMessage('30초 이상으로 설정해주세요.')
      setIsDisabledConfirmBtn(true)
    } else {
      setFrequencyMessage('')
      setIsDisabledConfirmBtn(name.length === 0)
    }
  }, [frequency])

  return {
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
  }
}

export default useComponentRegisterDialog
