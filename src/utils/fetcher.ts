import axios from 'axios'

const accessToken = JSON.parse(localStorage.getItem('accessToken') || '{}')?.value

export const fetcher = (url) =>
  axios
    .get(url, { headers: { Authorization: 'Bearer ' + accessToken } })
    .then((res) => res.data)
    .catch((error) => {
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
    })
