import React from 'react'
import { Formik } from 'formik'
import { Link } from 'react-router-dom'
import login from '../useCases/login.ts'
import { ToastContainer } from 'react-toastify'
export default function Login() {
  return (
    <div className="h-full">
      <main className="flex flex-col items-center justify-center h-full">
        <h1 className="text-5xl">Quack Run Login</h1>

        <Formik
          initialValues={{ email: '', password: '' }}
          validate={(values) => {
            const errors = {}
            if (!values.email) {
              errors.email = '이메일을 입력해주세요.'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              errors.email = '이메일 형식이 올바르지 않습니다.'
            }

            if (!values.password) {
              errors.password = '비밀번호를 입력해주세요.'
            }

            return errors
          }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true)
            login({ email: values.email, password: values.password })
            setSubmitting(false)
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <form className="flex flex-col gap-4 mt-5" onSubmit={handleSubmit}>
              <div className="mt-10">
                <div className="flex gap-3 mb-2 items-center">
                  <label htmlFor="email">Email</label>
                  <input
                    className="input input-bordered w-full max-w-xs"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                </div>
                <p className="text-red-500">{errors.email && touched.email && errors.email}</p>
              </div>
              <div>
                <div className="flex gap-3 mb-2 items-center">
                  <label htmlFor="password">Password</label>
                  <input
                    className="input input-bordered w-full max-w-xs"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                </div>
                <p className="text-red-500">{errors.password && touched.password && errors.password}</p>
              </div>{' '}
              <button
                type="submit"
                disabled={isSubmitting || values.email.length === 0 || errors.email || values.password.length === 0}
                className="btn btn-primary"
              >
                로그인
              </button>
            </form>
          )}
        </Formik>
        <Link to="/signup" className="mt-4">
          계정이 없나요? 회원가입
        </Link>
      </main>
      <ToastContainer />
    </div>
  )
}
