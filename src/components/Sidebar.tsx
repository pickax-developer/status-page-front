import React from 'react'
import { Link } from 'react-router-dom'
import logout from '../useCases/logout.ts'
import ResignDialog from './ResignDialog.tsx'

const Sidebar = () => {
  const onClickLogout = () => {
    logout()
  }
  return (
    <>
      <div className="w-56 menu bg-primary text-black justify-between">
        <ul>
          <li>
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Site List
            </Link>
          </li>
        </ul>
        <div className="flex flex-col gap-5 mb-20">
          <button className="btn" type="button" onClick={() => onClickLogout()}>
            로그아웃
          </button>
          <button
            className="btn"
            type="button"
            onClick={() => (document.getElementById('resign-modal') as HTMLDialogElement)?.showModal()}
          >
            회원탈퇴
          </button>
        </div>
      </div>
      <ResignDialog />
    </>
  )
}
export default Sidebar
