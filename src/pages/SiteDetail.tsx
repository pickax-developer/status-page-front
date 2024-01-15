import React from 'react'
import { useParams } from 'react-router-dom'
import useComponentList from '../useCases/componentList.ts'
import ComponentRegisterDialog from '../components/ComponentRegisterDialog.tsx'

export default function SiteDetail() {
  const { siteId } = useParams<{ siteId: string }>()
  const { data, error, isLoading } = useComponentList({ siteId })

  if (error || !data) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <>
      <div className="overflow-x-auto min-h-full rounded-md">
        <table className="table">
          <thead className="bg-primary text-black">
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
            {data.length === 0 && <tr> 컴포넌트가 아직 없어요 </tr>}
            {data.map((component) => (
              <tr className="bg-secondary text-black" key={component.id}>
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
