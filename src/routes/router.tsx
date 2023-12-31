import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layouts/index.tsx'
import SiteDetail from '../pages/SiteDetail.tsx'
import Login from '../pages/Login.tsx'
import ErrorPage from '../pages/Error.tsx'
import SiteList from '../pages/SiteList.tsx'

const router = createBrowserRouter([
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
      {
        path: 'login',
        element: <Login />,
      },
    ],
    errorElement: <ErrorPage />,
  },
])

export default router


