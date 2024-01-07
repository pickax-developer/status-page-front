import axios from 'axios'

const siteCheck = async ({ id }: { id: number }) => {
  try {
    const response = await axios.post(`/sites/${id}/verify`)
    return response.data
  } catch (error) {
    throw error
  }
}

export default siteCheck
