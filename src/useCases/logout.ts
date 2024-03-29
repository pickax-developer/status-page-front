import { toast } from 'react-toastify'
import axiosInstance from '../common/axiosInstance.js'

const logout = async () => {

  try {
    const response = await axiosInstance.post(`/auth/logout`)
    localStorage.removeItem('accessToken')
    location.replace('/login')

    return response.data
  } catch (error) {
    toast('로그아웃에 실패했습니다. 잠시 후 다시 시도해주세요.')
  }
}

export default logout
