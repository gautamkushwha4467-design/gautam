// App constants
export const APP_NAME = 'CareerAI'
export const APP_DESCRIPTION = 'Find Your Perfect Career Path with AI'

// Colors
export const COLORS = {
  primary: '#4F46E5',
  secondary: '#7C3AED',
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  light: '#F9FAFB',
  dark: '#1F2937',
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
}

// Interest options
export const INTERESTS = ['Coding', 'Design', 'Business', 'Teaching', 'Data Science', 'Marketing']

// Skills
export const SKILLS = [
  'Python',
  'JavaScript',
  'React',
  'Communication',
  'Problem Solving',
  'Leadership',
  'Creativity',
  'Data Analysis',
  'Project Management',
]

// Education levels
export const EDUCATION_LEVELS = [
  { value: 'highschool', label: 'High School' },
  { value: 'bachelors', label: 'Bachelor\'s Degree' },
  { value: 'masters', label: 'Master\'s Degree' },
  { value: 'phd', label: 'PhD' },
]

// Career demand levels
export const DEMAND_LEVELS = ['Low', 'Medium', 'High', 'Very High']

// Proficiency levels
export const PROFICIENCY_LEVELS = ['Beginner', 'Intermediate', 'Advanced']

// API endpoints
export const API_ENDPOINTS = {
  auth: {
    login: '/auth/login',
    signup: '/auth/signup',
  },
  careers: {
    list: '/careers',
    detail: (id: string) => `/careers/${id}`,
  },
  users: {
    profile: (id: string) => `/users/${id}`,
  },
}
