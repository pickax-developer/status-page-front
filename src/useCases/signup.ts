import axiosInstance from '../common/axiosInstance.js'

const signup = async ({ email, password, code }) => {
  try {
    const response = await axiosInstance.post(`/signup`, {
      email,
      password,
      code,
    })
    return response.data
  } catch (error) {
    throw error
  }
}

export default signup
