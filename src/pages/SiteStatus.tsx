import React from 'react'
import { useParams } from 'react-router-dom'
import useActiveComponentList from '../useCases/activeComponentList.ts'
import {
  BsCheckCircleFill,
  BsEmojiFrown,
  BsEmojiSmileFill,
  BsGithub,
  BsEmojiFrownFill,
  BsEmojiDizzyFill,
} from 'react-icons/bs'
import { ComponentStatus } from '../types/response/site.ts'

const SiteStatus = () => {
  const { siteId } = useParams<{ siteId: string }>()
  const { data, error, isLoading, isSiteOkay } = useActiveComponentList({ siteId })

  const DUMMY_SITE_NAME = '서인 블로그'
  const setStatusIcon = (status: ComponentStatus) => {
    switch (status) {
      case 'OK':
        return <BsEmojiSmileFill className="inline-block text-green-500" size="20" />
      case 'WARNING':
        return <BsEmojiFrownFill className="inline-block text-yellow-500" size="20" />
      default:
        return <BsEmojiDizzyFill className="inline-block text-red-500" size="20" />
    }
  }

  return (
    <>
      <header className="pt-6 pb-6 px-14 fixed z-10 top-0 w-[100%] bg-tertiary">
        <h1>
          <strong className="text-3xl border-r pr-2 border-white">{DUMMY_SITE_NAME}</strong>{' '}
          <span className="text-3xl pl-2"> Status</span>
        </h1>
      </header>
      <div className="mt-[84px]"></div>
      <main className="px-14">
        <div className="text-center">
          <div className="pt-20">
            {!!isSiteOkay ? (
              <BsEmojiSmileFill className="inline-block text-green-500" size="200" />
            ) : (
              <BsEmojiDizzyFill className="inline-block text-red-500" size="200" />
            )}
          </div>
          <p className="pt-10 text-5xl font-bold">
            {DUMMY_SITE_NAME}
            {!!isSiteOkay ? '은/는 정상 동작하고 있습니다.' : '에 이상이 있습니다.'}
          </p>
        </div>
        <div className="overflow-x-auto mt-20">
          <div className="border bg-secondary px-5 py-7">
            <strong>현재 서비스 상태</strong>
            <ul className="flex gap-10 mt-3">
              <li className="flex items-center gap-2">
                <BsEmojiSmileFill className="inline-block text-green-500" size="20" />
                <span>정상</span>
              </li>
              <li className="flex items-center gap-2">
                <BsEmojiFrownFill className="inline-block text-yellow-500" size="20" />
                <span>주의</span>
              </li>
              <li className="flex items-center gap-2">
                <BsEmojiDizzyFill className="inline-block text-red-500" size="20" />
                <span>경고</span>
              </li>
            </ul>
          </div>
          <ul className="border-x-2 border-secondary">
            {data?.map((component) => (
              <li
                key={component.id}
                className="flex flex-row justify-between items-center p-5 border-b-2 border-secondary"
              >
                <span>{component.name}</span>
                <span>{setStatusIcon(component.status)}</span>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <footer className="flex justify-between bg-secondary px-6 py-6 mt-10">
        <p>© 2023 곡괭이 개발자</p>
        <a href="https://github.com/pickax-developer" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
      </footer>
    </>
  )
}
export default SiteStatus
