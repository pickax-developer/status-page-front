import axios from 'axios'
import { SiteMetaTagResponse } from '../types/response/site.ts'

const siteMetaTag = async ({ id }: { id: number }): Promise<SiteMetaTagResponse> => {
  try {
    const response = await axios.get(`http://localhost:8080/sites/${id}/meta-tags`)
    return response.data
  } catch (error) {
    throw error
  }
}

export default siteMetaTag
