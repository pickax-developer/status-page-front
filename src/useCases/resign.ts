import axiosInstance from '../common/axiosInstance.js'

const resign = async ({ password }: { password: string }) => {
  try {
    const response = await axiosInstance.post(`/auth/resign`, {
      password,
    })
    return response.data
  } catch (error) {
    throw error
  }
}

export default resign
