import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layouts/index.tsx'
import SiteDetail from '../pages/SiteDetail.tsx'
import Login from '../pages/Login.tsx'
import ErrorPage from '../pages/Error.tsx'
import SiteList from '../pages/SiteList.tsx'
import SiteStatus from '../pages/SiteStatus.tsx'
import SignUp from '../pages/SignUp.tsx'

const router = createBrowserRouter([
  {
    path: '/status/:siteId',
    element: <SiteStatus />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <SiteList />,
      },
      {
        path: '/:siteId',
        element: <SiteDetail />,
      },
    ],
    errorElement: <ErrorPage />,
  },
])

export default router


