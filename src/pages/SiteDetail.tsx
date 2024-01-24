import React from 'react'
import { useParams } from 'react-router-dom'
import useComponentList from '../useCases/componentList.ts'
import ComponentRegisterDialog from '../components/ComponentRegisterDialog.tsx'

export default function SiteDetail() {
  const { siteId } = useParams<{ siteId: string }>()
  const { data, error, isLoading } = useComponentList({ siteId })
  if (error || !data) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  const isSiteRegistered = data.some((component) => component.status !== 'NONE')
  
  return (
    <>
      <div className="flex justify-between mb-4">
        <h2 className="mb-4 text-2xl font-bold">컴포넌트 리스트</h2>
        {isSiteRegistered && (
          <a href={`/status/${siteId}`}>
            <button className="btn btn-primary">사이트 상태 보기</button>
          </a>
        )}
      </div>

      <div className="min-h-full overflow-x-auto rounded-md">
        <table className="table">
          <thead className="text-black bg-primary">
            <tr>
              <th></th>
              <th>이름</th>
              <th>설명</th>
              <th>상태</th>
              <th>활성화 여부</th>
              <th>체크 빈도(초)</th>
            </tr>
          </thead>
          <tbody className="rounded-md">
            {data.length === 0 && (
              <tr>
                <td className="py-5">컴포넌트가 없어요. 등록해주세요 🎇</td>
              </tr>
            )}
            {data.map((component) => (
              <tr className="text-black bg-secondary" key={component.id}>
                <td>{component.id}</td>
                <td>{component.name}</td>
                <td>{component.description}</td>
                <td>
                  <div className="badge badge-primary badge-outline">{component.status}</div>
                </td>
                <td>
                  <div className={`badge ${component.isActive ? 'badge-primary' : 'badge-secondary'} badge-outline`}>
                    {component.isActive ? 'TRUE' : 'FALSE'}
                  </div>
                </td>
                <td>{component.frequency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ComponentRegisterDialog siteId={siteId} />
    </>
  )
}
