import React, { useContext } from 'react'
import { FormContext } from '../pages/SignUp.tsx'
import EmailEnter from './signupForm/EmailEnter.tsx'
import EmailCheck from './signupForm/EmailCheck.tsx'
import Password from './signupForm/Password.tsx'
import SignupResult from './signupForm/SignupResult.tsx'

const SignupStep = () => {
  const { activeStepIndex } = useContext(FormContext)
  switch (activeStepIndex) {
    case 0:
      return <EmailEnter />
    case 1:
      return <EmailCheck />
    case 2:
      return <Password />
    case 3:
      return <SignupResult />
    default:
      break
  }
}
export default SignupStep
