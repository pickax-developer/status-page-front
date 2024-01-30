import { toast } from 'react-toastify'
import axiosInstance from '../common/axiosInstance.js'

const login = async ({ email, password }) => {
  try {
    const response = await axiosInstance.post(`/login`, {
      email,
      password,
    })
    const accessToken = response.data.accessToken
    localStorage.setItem('accessToken', accessToken)
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
    return response.data
  } catch (error) {
    toast('로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.')
  }
}

export default login
