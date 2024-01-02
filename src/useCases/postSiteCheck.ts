import axios from 'axios'

const postSiteCheck = async ({ id }: { id: number }) => {
  try {
    const response = await axios.post('/sites-check', {
      id,
    })
    return response.data
  } catch (error) {
    throw error
  }
}

export default postSiteCheck
