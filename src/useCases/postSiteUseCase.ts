import axios from 'axios'
import { SitePostRequest } from '../types/request/site.ts'
import { SitePostResponse } from '../types/response/site.ts'

const postSite = async ({ name, url, description }: SitePostRequest): Promise<SitePostResponse> => {
  try {
    const response = await axios.post('/sites', {
      name,
      url,
      description,
    })
    return response.data
  } catch (error) {
    throw error
  }
}

export default postSite
