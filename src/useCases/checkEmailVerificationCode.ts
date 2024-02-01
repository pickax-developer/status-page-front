import axiosInstance from '../common/axiosInstance.js'

const checkEmailVerificationCode = async ({ email, code }) => {
  try {
    const response = await axiosInstance.post(`/email-verification-code`, {
      email,
      code,
    })
    return response.data
  } catch (error) {
    throw error
  }
}

export default checkEmailVerificationCode
