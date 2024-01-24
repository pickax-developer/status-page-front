import React from 'react'
 import { Formik } from 'formik'
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
               errors.email = 'Required'
             } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
               errors.email = 'Invalid email address'
             }
             return errors
           }}
           onSubmit={(values, { setSubmitting }) => {
             setTimeout(() => {
               alert(JSON.stringify(values, null, 2))
               setSubmitting(false)
             }, 400)
           }}
         >
           {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
             <form className="flex flex-col gap-4 mt-5" onSubmit={handleSubmit}>
               <div>
                 <div>
                   <label htmlFor="email">Email</label>
                   <input type="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
                 </div>
                 {errors.email && touched.email && errors.email}
               </div>
               <div>
                 <div>
                   <label htmlFor="password">Password</label>
                   <input
                     type="password"
                     name="password"
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.password}
                   />
                 </div>
                 {errors.password && touched.password && errors.password}
               </div>{' '}
               <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                 Submit
               </button>
             </form>
           )}
         </Formik>
       </main>
     </div>
   )
 }
