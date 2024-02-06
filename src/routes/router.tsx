import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Authorization from '../components/Authorization.tsx'
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
    element: (
      <Authorization shouldAuthenticated={false} navigateTo="/">
        <Login />,
      </Authorization>
    ),
  },
  {
    path: '/signup',
    element: (
      <Authorization shouldAuthenticated={false} navigateTo="/">
        <SignUp />
      </Authorization>
    ),
  },
  {
    path: '/',
    element: (
      <Authorization>
        <Layout />
      </Authorization>
    ),
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


