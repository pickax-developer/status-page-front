import React from 'react'
import { useParams } from 'react-router-dom'
import useComponentList from '../useCases/componentList.ts'
import ComponentRegisterDialog from '../components/ComponentRegisterDialog.tsx'

export default function SiteDetail() {
  const { siteId } = useParams<{ siteId: string }>()
  const { data, error, isLoading } = useComponentList({ siteId })

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <>
      <h2 className="font-bold text-2xl mb-4">컴포넌트 리스트</h2>
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
            {data.length === 0 && (
              <tr>
                <td className="py-5">컴포넌트가 없어요. 등록해주세요 🎇</td>
              </tr>
            )}
            {data.map((component) => (
              <tr className="bg-secondary text-black" key={component.id}>
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
      <ComponentRegisterDialog siteId={siteId} />
    </>
  )
}
