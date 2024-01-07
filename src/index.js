import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom'
import { SWRConfig } from 'swr'

import router from './routes/router.tsx'
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    {/* <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()),
      }}
    > */}
    <RouterProvider router={router} />
    {/* </SWRConfig> */}
  </React.StrictMode>,
)

