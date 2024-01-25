import React from 'react'
import { useParams } from 'react-router-dom'
import useActiveComponentList from '../useCases/activeComponentList.ts'
import { BsEmojiSmileFill, BsGithub, BsEmojiFrownFill, BsEmojiDizzyFill } from 'react-icons/bs'
import { ComponentStatus } from '../types/response/site.ts'
import useSiteLDetail from '../useCases/siteDetail.ts'
import dayjs from 'dayjs'

const SiteStatus = () => {
  const { siteId } = useParams<{ siteId: string }>()
  const site = useSiteLDetail({ siteId })
  const { data, error, isLoading, siteStatus } = useActiveComponentList({ siteId })

  const setStatusIcon = (status: ComponentStatus, size: string = '30') => {
    switch (status) {
      case 'NO_ISSUES':
        return <BsEmojiSmileFill className="inline-block text-green-500" size={size} />
      case 'WARN':
        return <BsEmojiFrownFill className="inline-block text-yellow-500" size={size} />
      case 'OUTAGE':
        return <BsEmojiDizzyFill className="inline-block text-red-500" size={size} />
      default:
        return <BsEmojiDizzyFill className="inline-block text-gray-500" size={size} />
    }
  }


  if (isLoading || site.isLoading) return '로딩 중입니다.'
  if (error) return '에러가 발생했습니다. 조금 뒤에 다시 시도해주세요.'

  return (
    <>
      <header className="pt-6 pb-6 px-14 fixed z-10 top-0 w-[100%] bg-white">
        <h1>
          <strong className="pr-2 text-3xl border-r-2 border-primary">{site.data?.name}</strong>{' '}
          <span className="pl-2 text-3xl"> Status</span>
        </h1>
      </header>
      <div className="mt-[84px]"></div>
      <main className="px-14">
        <div className="text-center">
          <div className="pt-20">{setStatusIcon(siteStatus, '200')}</div>
          <p className="pt-10 text-5xl font-bold">
            {site.data?.name}
            {siteStatus === ComponentStatus.NO_ISSUES ? '은/는 정상 동작하고 있습니다.' : '에 이상이 있습니다.'}
          </p>
        </div>
        <div className="mt-20 overflow-x-auto">
          <p className="pb-5 text-right">
            최종 업데이트 시각 : {dayjs(data?.lastUpdatedDate).format('YYYY년 MM월 DD일 HH시 mm분 ss초')} (UTC 시각
            기준)
          </p>
          <div className="px-5 border bg-secondary py-7">
            <strong>현재 서비스 상태</strong>
            <ul className="flex gap-10 mt-3">
              <li className="flex items-center gap-2">
                <BsEmojiSmileFill className="inline-block text-green-500" size="30" />
                <span>정상</span>
              </li>
              <li className="flex items-center gap-2">
                <BsEmojiFrownFill className="inline-block text-yellow-500" size="30" />
                <span>주의</span>
              </li>
              <li className="flex items-center gap-2">
                <BsEmojiDizzyFill className="inline-block text-red-500" size="30" />
                <span>경고</span>
              </li>
            </ul>
          </div>
          <ul className="border-x-2 border-secondary">
            {data?.componentActiveResponseDtoList.map((component) => (
              <li
                key={component.id}
                className="flex flex-row items-center justify-between p-5 border-b-2 border-secondary"
              >
                <span>{component.name}</span>
                <span>{setStatusIcon(component.status)}</span>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <footer className="flex justify-between px-6 py-6 mt-10 bg-secondary">
        <p>© 2023 곡괭이 개발자</p>
        <a href="https://github.com/pickax-developer" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
      </footer>
    </>
  )
}
export default SiteStatus
