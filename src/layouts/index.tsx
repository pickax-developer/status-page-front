import { Outlet } from 'react-router-dom'
 import 'react-toastify/dist/ReactToastify.css'

 import React from 'react'
 import Footer from '../components/Footer.tsx'
 import Sidebar from '../components/Sidebar.tsx'
 import Header from '../components/Header.tsx'
 import { ToastContainer } from 'react-toastify'

 const Layout = () => {
   return (
     <div className="h-full">
       <div className="flex min-h-full">
         <Sidebar />
         <div className="w-full min-h-full bg-white">
           <Header />
           <main className="p-10 mb-20 md:mb-40">
             <Outlet />
           </main>
         </div>
       </div>
       <Footer />
       <ToastContainer />
     </div>
   )
 }
export default Layout


  //  <div>
  //    <h1>Anywhere in your app!</h1>
  //    <Formik
  //      initialValues={{ email: '', password: '' }}
  //      validate={values => {
  //        const errors = {};
  //        if (!values.email) {
  //          errors.email = 'Required';
  //        } else if (
  //          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  //        ) {
  //          errors.email = 'Invalid email address';
  //        }
  //        return errors;
  //      }}
  //      onSubmit={(values, { setSubmitting }) => {
  //        setTimeout(() => {
  //          alert(JSON.stringify(values, null, 2));
  //          setSubmitting(false);
  //        }, 400);
  //      }}
  //    >
  //      {({
  //        values,
  //        errors,
  //        touched,
  //        handleChange,
  //        handleBlur,
  //        handleSubmit,
  //        isSubmitting,
  //        /* and other goodies */
  //      }) => (
  //        <form onSubmit={handleSubmit}>
  //          <input
  //            type="email"
  //            name="email"
  //            onChange={handleChange}
  //            onBlur={handleBlur}
  //            value={values.email}
  //          />
  //          {errors.email && touched.email && errors.email}
  //          <input
  //            type="password"
  //            name="password"
  //            onChange={handleChange}
  //            onBlur={handleBlur}
  //            value={values.password}
  //          />
  //          {errors.password && touched.password && errors.password}
  //          <button type="submit" disabled={isSubmitting}>
  //            Submit
  //          </button>
  //        </form>
  //      )}
  //    </Formik>
  //  </div>