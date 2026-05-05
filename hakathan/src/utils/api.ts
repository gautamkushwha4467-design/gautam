import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add token to requests if available
apiClient.interceptors.request.use((config) => {
  const user = localStorage.getItem('user')
  if (user) {
    // Add auth header if needed
    // config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Handle errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('user')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default apiClient

// API functions
export const authAPI = {
  login: (email: string, password: string) =>
    apiClient.post('/auth/login', { email, password }),
  signup: (email: string, password: string, name: string) =>
    apiClient.post('/auth/signup', { email, password, name }),
}

export const careerAPI = {
  getAll: () => apiClient.get('/careers'),
  getById: (id: string) => apiClient.get(`/careers/${id}`),
  create: (career: any) => apiClient.post('/careers', career),
  update: (id: string, career: any) => apiClient.put(`/careers/${id}`, career),
  delete: (id: string) => apiClient.delete(`/careers/${id}`),
}

export const userAPI = {
  getProfile: (id: string) => apiClient.get(`/users/${id}`),
  updateProfile: (id: string, data: any) => apiClient.put(`/users/${id}`, data),
}
