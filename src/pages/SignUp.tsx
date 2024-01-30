import React, { createContext, useState } from 'react'

export const FormContext = createContext({})

import { Link } from 'react-router-dom'
import Stepper from '../components/Stepper.tsx'
import SignupStep from '../components/SignupStep.tsx'
export default function Signup() {
  const [activeStepIndex, setActiveStepIndex] = useState(0)
  const [formData, setFormData] = useState({})
  return (
    <div className="h-full">
      <main className="flex flex-col items-center justify-center h-full">
        <h1 className="text-5xl">Quack Run Signup</h1>
        <FormContext.Provider value={{ activeStepIndex, setActiveStepIndex, formData, setFormData }}>
          <Stepper />
          <SignupStep />
        </FormContext.Provider>
        <Link to="/login" className="mt-4">
          계정이 있나요? 로그인
        </Link>
      </main>
    </div>
  )
}
