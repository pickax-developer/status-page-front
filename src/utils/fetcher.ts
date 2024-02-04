import axios from 'axios'

const accessToken = JSON.parse(localStorage.getItem('accessToken') || '{}')?.value

export const fetcher = (url) =>
  axios.get(url, { headers: { Authorization: 'Bearer ' + accessToken } }).then((res) => res.data)
