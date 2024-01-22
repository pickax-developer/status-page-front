import React from 'react'
import { useParams } from 'react-router-dom'
import useActiveComponentList from '../useCases/activeComponentList.ts'

const SiteStatus = () => {
  const { siteId } = useParams<{ siteId: string }>()
  const { data, error, isLoading } = useActiveComponentList({ siteId })

  return (
    <>
      <header className="mt-6 mb-6 ml-6">
        <h1 className="text-5xl font-bold text-center">Seoin Blog</h1>
      </header>
      <main>
        <hr />
        <div className="overflow-x-auto">
          <ul className="m-4">
            {data?.map((component) => (
              <li key={component.id} className="flex flex-row justify-between pb-4 border-b border-primary">
                <span>{component.name}</span>
                <span>{component.status}</span>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <footer className="flex justify-between">
        <p>© 2023 곡괭이 개발자</p>
        <i>깃허브</i>
      </footer>
    </>
  )
}
export default SiteStatus
