import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
<<<<<<< HEAD
import { RouterProvider } from 'react-router-dom'


import router from './routes/router.tsx'
const root = ReactDOM.createRoot(document.getElementById('root'))



root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
=======
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
>>>>>>> 8f4eb11 (setting:daisyUI 설치, 불필요한 파일 제거)
  </React.StrictMode>,
)

