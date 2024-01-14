import axiosInstance from '../common/axiosInstance.js'

const siteCheck = async ({ id }: { id: number }) => {
  try {
    const response = await axiosInstance.post(`/sites/${id}/verify`)
    return response.data
  } catch (error) {
    throw error
  }
}

export default siteCheck
