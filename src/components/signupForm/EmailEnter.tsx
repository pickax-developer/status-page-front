import React, { useContext } from 'react'
import { Formik } from 'formik'
import { FormContext } from '../../pages/SignUp.tsx'
import emailVerification from '../../useCases/emailVerification.ts'

const EmailEnter = () => {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } = useContext(FormContext)

  return (
    <Formik
      initialValues={{
        email: '',
      }}
      validate={(values) => {
        const errors = {}
        if (!values.email) {
          errors.email = '이메일을 입력해주세요.'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = '이메일 형식이 올바르지 않습니다.'
        }

        return errors
      }}
      onSubmit={(values) => {
        const data = { ...formData, ...values }
        setFormData(data)
        try {
          emailVerification({email:values.email})
          setActiveStepIndex(activeStepIndex + 1)
        } catch (e) {
          console.error(e)
        }
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form className="mt-10 flex flex-col justify-center items-center" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2  items-start mb-2">
            <label className="font-medium text-gray-900">이메일</label>
            <div className="flex gap-4">
              <input
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className="rounded-md border-2 p-2"
                placeholder="example@gmail.com"
              />
              <button disabled={isSubmitting} className="rounded-md btn btn-primary text-white" type="submit">
                이메일 인증
              </button>
            </div>
            <p className="text-red-500 mt-2">{errors.email && touched.email && errors.email}</p>
          </div>
        </form>
      )}
    </Formik>
  )
}
export default EmailEnter
