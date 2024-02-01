import { toast } from 'react-toastify'
import axiosInstance from '../common/axiosInstance.js'

const logout = async ({ email, password }: { email: string; password: string }) => {
  try {
    const response = await axiosInstance.post(`/logout`)
  
    localStorage.removeItem('accessToken')
    return response.data
  } catch (error) {
    toast('로그아웃에 실패했습니다. 잠시 후 다시 시도해주세요.')
  }
}

export default logout
