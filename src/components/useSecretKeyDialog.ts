import useSiteSecretKey from '../useCases/siteSecretKey.ts'

const useSecretKeyDialog = ({ siteId }: { siteId?: number }) => {
  const { data, error, isLoading } = useSiteSecretKey({ siteId })

  const copySecretKey = () => {
    navigator.clipboard.writeText(data)
  }
  return {
    data,
    copySecretKey,
    error,
    isLoading,
  }
}

export default useSecretKeyDialog
