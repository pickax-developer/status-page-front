import axios from 'axios'
import { BASE_URL } from './api'
const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  },
})

instance.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (error.response && error.response.status) {
      switch (error.response.status) {
        case 401:
          localStorage.removeItem('accessToken')
          location.replace('/login')
          break
        default:
          return Promise.reject(error)
      }
    }

    return Promise.reject(error)
  },
)
export default instance
