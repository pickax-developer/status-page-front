import axiosInstance from '../common/axiosInstance.js'

const emailVerification = async ({ email }) => {
  try {
    const response = await axiosInstance.post(`/auth/email-auth`, {
      email,
    })
    return response.data
  } catch (error) {
    throw error
  }
}

export default emailVerification
