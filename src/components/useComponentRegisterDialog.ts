import { useEffect, useState } from 'react'
import postComponent from '../useCases/postComponent.ts'
 import { toast } from 'react-toastify'
const useComponentRegisterDialog = ({ siteId }: { siteId: string }) => {
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  //TODO: frequency, isActive 설정 (수정? 생성 시?)
  const [frequency, setFrequency] = useState<number>(5000)
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

  return {
    name,
    setName,
    description,
    setDescription,
    isDisabledConfirmBtn,
    onCloseModal,
    onClickConfirmButton,
  }
}

export default useComponentRegisterDialog
