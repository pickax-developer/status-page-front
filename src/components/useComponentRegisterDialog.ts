import { useEffect, useState } from 'react'
import postComponent from '../useCases/postComponent.ts'

const useComponentRegisterDialog = ({ siteId }: { siteId: string }) => {
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  const [isDisabledConfirmBtn, setIsDisabledConfirmBtn] = useState<boolean>(true)
  const [alertMessage, setAlertMessage] = useState<string>('')

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
      const res = await postComponent({ siteId, name, description })
    } catch {
      setAlertMessage('컴포넌트 등록에 실패했습니다. 다시 시도해주세요.')
    }
  }

  return {
    name,
    setName,
    description,
    setDescription,
    isDisabledConfirmBtn,
    onCloseModal,
    onClickConfirmButton,
    alertMessage,
  }
}

export default useComponentRegisterDialog
