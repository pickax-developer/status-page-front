import React, { useContext, useEffect } from 'react'
import { FormContext } from '../pages/SignUp.tsx'

const Stepper = () => {
  const { activeStepIndex } = useContext(FormContext)
  useEffect(() => {
    const stepperItems = document.querySelectorAll('.step')
    stepperItems.forEach((step, i) => {
      if (i <= activeStepIndex) {
        step.classList.add('step-primary')
      } else {
        step.classList.remove('step-primary')
      }
    })
  }, [activeStepIndex])

  return (
    <ul className="steps my-10">
      <li className="step step-primary">이메일 입력</li>
      <li className="step step-primary">이메일 인증</li>
      <li className="step step-primary">비밀번호 입력</li>
      <li className="step">완료</li>
    </ul>
  )
}
export default Stepper
