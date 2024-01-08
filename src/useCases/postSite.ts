import { SitePostRequest } from '../types/request/site.ts'
import { SitePostResponse } from '../types/response/site.ts'
// eslint-disable-next-line import/no-unresolved
import axiosInstance from '../common/axiosInstance.js'

const postSite = async ({ name, url, description }: SitePostRequest): Promise<SitePostResponse> => {
  try {
    const response = await axiosInstance.post('/sites', {
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
