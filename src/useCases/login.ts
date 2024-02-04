import { toast } from 'react-toastify'
import axiosInstance from '../common/axiosInstance.js'
import { LoginResponse } from '../types/response/auth.ts'

const login = async ({ email, password }: { email: string; password: string }) => {
  try {
    const response = await axiosInstance.post<LoginResponse>(`/auth/login`, {
      email,
      password,
    })
    const { accessToken, accessTokenExpiresIn } = response.data
    const item = { value: accessToken, expiredIn: accessTokenExpiresIn }
    localStorage.setItem('accessToken', JSON.stringify(item))
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
    location.replace('/')
  
    return response.data
  } catch (error) {
    toast('로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.')
  }
}

export default login
