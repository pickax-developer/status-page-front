import React, { useContext } from 'react'
import { Formik } from 'formik'
import { FormContext } from '../../pages/SignUp.tsx'
import { toast } from 'react-toastify'
import signup from '../../useCases/signup.ts'

const Password = () => {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } = useContext(FormContext)

  return (
    <>
      <Formik
        initialValues={{
          password: '',
          passwordConfirm: '',
        }}
        validate={(values) => {
          const errors = {}
          if (!values.password) {
            errors.password = '비밀번호을 입력해주세요.'
          } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[ !#$%&?])[A-Za-z\d !#$%&?]{8,10}/i.test(values.password)) {
            errors.password = '비밀번호 형식이 올바르지 않습니다.'
          }
          if (values.passwordConfirm! !== values.password) {
            errors.passwordConfirm = '비밀번호와 다릅니다.'
          }

          return errors
        }}
        onSubmit={async (values) => {
          const data = { ...formData, ...values }
          setFormData(data)
          try {
            await signup({ email: formData.email, password: values.password, code: formData.code })
            setActiveStepIndex(activeStepIndex + 1)
          } catch (e) {
            switch (e.response.customError) {
              case 'DUPLICATE_USER':
                toast('이미 가입된 이메일입니다. 다른 이메일로 가입해주세요.')
                break
              case 'NOT_FOUND_AUTHENTICATION_CODE':
                toast('인증기간이 만료되었습니다.')
                break
              case 'INVALID_AUTHENTICATION_CODE':
                toast('인증번호가 올바르지 않습니다.')
                break
              default:
                toast('에러가 발생했습니다. 잠시 후 시도해주세요.')
            }
            toast('회원가입에 실패하였습니다. 잠시 후 다시 시도해주세요.')
          }
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <>
            <form className="mt-10 flex flex-col justify-center items-center" onSubmit={handleSubmit}>
              <div className="w-[100%] flex flex-col gap-2  items-start mb-2">
                <label className="font-medium text-gray-900">이메일</label>
                <input
                  name="email"
                  type="email"
                  disabled
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={formData.email}
                  className="rounded-md border-2 p-2"
                />
              </div>
              <div className="w-[100%] flex gap-2 flex-col items-start mb-2">
                <label className="font-medium text-gray-900">비밀번호</label>
                <input
                  name="password"
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className="rounded-md border-2 p-2"
                />
                <p className="text-red-500 mt-2">{errors.password && touched.password && errors.password}</p>
              </div>
              <div className="flex flex-col gap-2 items-start mb-2">
                <label className="font-medium text-gray-900">비밀번호 확인</label>
                <div className="flex gap-4">
                  <input
                    name="passwordConfirm"
                    type="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.passwordConfirm}
                    className="rounded-md border-2 p-2"
                  />
                </div>

                <p className="text-red-500 mt-2">
                  {errors.passwordConfirm && touched.passwordConfirm && errors.passwordConfirm}
                </p>
              </div>
            </form>
            <button disabled={isSubmitting} className="rounded-md btn btn-wide btn-primary text-white" type="submit">
              회원가입
            </button>
          </>
        )}
      </Formik>
    </>
  )
}
export default Password
