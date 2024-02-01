import React, { useContext } from 'react'
import { Formik } from 'formik'
import { FormContext } from '../../pages/SignUp.tsx'
import checkEmailVerificationCode from '../../useCases/checkEmailVerificationCode.ts'

const CheckEmail = () => {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } = useContext(FormContext)


  return (
    <>
      <Formik
        initialValues={{
          code: '',
        }}
        validate={(values) => {
          const errors = {}

          if (!values.code) {
            errors.code = '인증코드를 입력해주세요.'
          } else if (values.code.length !== 6) {
            errors.code = '인증코드는 6자리입니다.'
          }

          return errors
        }}
        onSubmit={(values) => {
          const data = { ...formData, ...values }
          setFormData(data)
          //TODO: 이메일 인증 번호 확인 api 호출
          try {
            checkEmailVerificationCode({ email: formData.email, code: values.code })
            setActiveStepIndex(activeStepIndex + 1)
          } catch (e) {
            console.error(e)
          }
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form className="flex flex-col justify-center items-center" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2 items-start mb-2 w-[100%]">
              <label className="font-medium text-gray-900">Email</label>
              <input name="email" disabled value={formData.email} className="rounded-md border-2 p-2" />
            </div>
            <div className="flex flex-col gap-2 items-start mb-2">
              <label className="font-medium text-gray-900">인증번호</label>
              <div className="flex gap-4">
                <input
                  name="code"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.code}
                  className="rounded-md border-2 p-2"
                  placeholder="123456"
                  maxLength={6}
                />
                <button disabled={values.code.length!==6} className="rounded-md btn btn-primary text-white" type="submit">
                  인증 번호 확인
                </button>
              </div>
              <p className="text-red-500 mt-2">{errors.code && touched.code && errors.code}</p>
            </div>
          </form>
        )}
      </Formik>
      <button
        className="btn  btn-secondary"
        onClick={() => {
          setActiveStepIndex(activeStepIndex - 1)
        }}
      >
        뒤로
      </button>
    </>
  )
}
export default CheckEmail
