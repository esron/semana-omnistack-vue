import axios from 'axios'

const api = axios.create({
  baseURL: `http://localhost:${process.env.VUE_APP_API_PORT}`
})

export default api
