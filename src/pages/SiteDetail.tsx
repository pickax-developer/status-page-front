import React from 'react'
import { useParams } from 'react-router-dom'
import useComponentList from '../useCases/componentList.ts'

export default function SiteDetail() {
  const { siteId } = useParams<{ siteId: string }>()
  const { data, error, isLoading } = useComponentList({ siteId })

  if (error) return <div>failed to load</div>
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
            </tr>
          </thead>
          <tbody className="rounded-md">
            {data.length === 0 && <tr> 컴포넌트가 아직 없어요 </tr>}
            {data.map((component) => (
              <tr className="bg-base-200" key={component.id}>
                <td>{component.id}</td>
                <td>{component.name}</td>
                <td>{component.description}</td>
                <td>
                  <div className="badge badge-primary badge-outline">{component.status}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
