import React, { useContext } from 'react'
import { Formik } from 'formik'
import { FormContext } from '../../pages/SignUp.tsx'
import { toast } from 'react-toastify'

const Password = () => {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } = useContext(FormContext)

  return (
    <Formik
      initialValues={{
        password: '',
        passwordConfirm: '',
      }}
      validate={(values) => {
        const errors = {}
        if (!values.password) {
          errors.password = '이메일을 입력해주세요.'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.password)) {
          errors.password = '이메일 형식이 올바르지 않습니다.'
        }
        if (!values.passwordConfirm) {
          errors.passwordConfirm = '인증코드를 입력해주세요.'
        } else if (values.passwordConfirm.length !== 6) {
          errors.passwordConfirm = '인증코드는 6자리입니다.'
        }

        return errors
      }}
      onSubmit={(values) => {
        const data = { ...formData, ...values }
        setFormData(data)
        //TODO: 회원가입 api 호출
        // 성공 시
        setActiveStepIndex(activeStepIndex + 1)
        // 실패 시 - 에러 경우 별로 toast 메시지를 다르게 보여줄 수 있음
        toast('회원가입에 실패하였습니다. 잠시 후 다시 시도해주세요.')
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form className="mt-10 flex flex-col justify-center items-center">
          <div className="flex flex-col items-start mb-2">
            <label className="font-medium text-gray-900">Password</label>
            <input
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              className="rounded-md border-2 p-2"
              placeholder="example@gmail.com"
            />
            <p className="text-red-500">{errors.password && touched.password && errors.password}</p>
          </div>
          <div className="flex flex-col items-start mb-2">
            <label className="font-medium text-gray-900">인증번호</label>
            <div className="flex gap-4">
              <input
                name="passwordConfirm"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.passwordConfirm}
                className="rounded-md border-2 p-2"
                placeholder="example@gmail.com"
              />
              <button
                disabled={isSubmitting}
                className="rounded-md bg-indigo-500 font-medium text-white my-2 p-2"
                type="submit"
              >
                회원가입
              </button>
            </div>

            <p className="text-red-500">
              {errors.passwordConfirm && touched.passwordConfirm && errors.passwordConfirm}
            </p>
          </div>
        </form>
      )}
    </Formik>
  )
}
export default Password
