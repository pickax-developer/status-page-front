import { SiteMetaTagResponse } from '../types/response/site.ts'
import axiosInstance from '../common/axiosInstance.js'

const siteMetaTag = async ({ id }: { id: number }): Promise<SiteMetaTagResponse> => {
  try {
    const response = await axiosInstance.get(`/sites/${id}/meta-tags`)
    return response.data
  } catch (error) {
    throw error
  }
}

export default siteMetaTag
