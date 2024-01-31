import React, { useContext } from 'react'
import { Formik } from 'formik'
import { FormContext } from '../../pages/SignUp.tsx'

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
        //TODO: 이메일 인증 요청 api 호출
        setActiveStepIndex(activeStepIndex + 1)
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form className="mt-10 flex flex-col justify-center items-center" onSubmit={handleSubmit}>
          <div className="flex flex-col items-start mb-2">
            <label className="font-medium text-gray-900">Email</label>
            <div className="flex gap-4">
              <input
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className="rounded-md border-2 p-2"
                placeholder="example@gmail.com"
              />
              <button
                disabled={isSubmitting}
                className="rounded-md bg-indigo-500 font-medium text-white my-2 p-2"
                type="submit"
              >
                이메일 인증
              </button>
            </div>
            <p className="text-red-500">{errors.email && touched.email && errors.email}</p>
          </div>
        </form>
      )}
    </Formik>
  )
}
export default EmailEnter
