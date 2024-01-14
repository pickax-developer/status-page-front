import axiosInstance from '../common/axiosInstance.js'

const postComponent = async ({ siteId, name, description, frequency, isActive }) => {
  try {
    const response = await axiosInstance.post(`/sites/${siteId}/components`, {
      name,
      description,
      frequency,
      isActive,
    })
    return response.data
  } catch (error) {
    throw error
  }
}

export default postComponent
