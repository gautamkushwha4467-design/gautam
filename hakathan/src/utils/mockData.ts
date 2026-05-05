import { Career, LearningModule, Skill, ChatMessage } from '../types'

// Mock API responses
export const mockCareers: Career[] = [
  {
    id: '1',
    title: 'AI/ML Engineer',
    description: 'Build intelligent systems that learn and adapt',
    salaryRange: { min: 120000, max: 250000 },
    demandLevel: 'High',
    matchPercentage: 95,
    overview: 'AI/ML Engineers develop and deploy machine learning models and intelligent systems. They work with data, algorithms, and cutting-edge technologies.',
    tags: ['Python', 'TensorFlow', 'Data Science'],
    roadmap: [
      { id: '1', title: 'Learn Python Basics', description: 'Master Python fundamentals', duration: '2 weeks', order: 1 },
      { id: '2', title: 'Data Science Fundamentals', description: 'Learn pandas, numpy, and matplotlib', duration: '3 weeks', order: 2 },
      { id: '3', title: 'Machine Learning Basics', description: 'Understand ML algorithms', duration: '4 weeks', order: 3 },
      { id: '4', title: 'Deep Learning', description: 'Master neural networks with TensorFlow', duration: '6 weeks', order: 4 },
    ]
  },
  {
    id: '2',
    title: 'Full Stack Developer',
    description: 'Create complete web applications from frontend to backend',
    salaryRange: { min: 90000, max: 180000 },
    demandLevel: 'High',
    matchPercentage: 88,
    overview: 'Full Stack Developers design and build complete web applications, handling both client and server-side development.',
    tags: ['React', 'Node.js', 'MongoDB'],
    roadmap: [
      { id: '1', title: 'HTML/CSS Mastery', description: 'Perfect your markup and styling', duration: '2 weeks', order: 1 },
      { id: '2', title: 'JavaScript Fundamentals', description: 'Learn JS core concepts', duration: '3 weeks', order: 2 },
      { id: '3', title: 'React.js', description: 'Build interactive UIs', duration: '4 weeks', order: 3 },
      { id: '4', title: 'Node.js & Express', description: 'Create backend services', duration: '4 weeks', order: 4 },
    ]
  },
  {
    id: '3',
    title: 'UX/UI Designer',
    description: 'Design beautiful and intuitive user experiences',
    salaryRange: { min: 70000, max: 150000 },
    demandLevel: 'High',
    matchPercentage: 82,
    overview: 'UX/UI Designers create engaging digital experiences by combining aesthetics with usability principles.',
    tags: ['Figma', 'Design Thinking', 'Prototyping'],
    roadmap: [
      { id: '1', title: 'Design Fundamentals', description: 'Learn design principles', duration: '2 weeks', order: 1 },
      { id: '2', title: 'Figma Mastery', description: 'Master Figma tools', duration: '2 weeks', order: 2 },
      { id: '3', title: 'User Research', description: 'Understand user needs', duration: '3 weeks', order: 3 },
      { id: '4', title: 'Prototyping & Testing', description: 'Create and validate designs', duration: '3 weeks', order: 4 },
    ]
  },
  {
    id: '4',
    title: 'Product Manager',
    description: 'Lead product strategy and vision',
    salaryRange: { min: 100000, max: 220000 },
    demandLevel: 'Medium',
    matchPercentage: 75,
    overview: 'Product Managers oversee the development of digital products, combining business strategy with user needs.',
    tags: ['Strategy', 'Analytics', 'Leadership'],
    roadmap: [
      { id: '1', title: 'Product Fundamentals', description: 'Understand product basics', duration: '2 weeks', order: 1 },
      { id: '2', title: 'Data Analytics', description: 'Learn analytics tools', duration: '3 weeks', order: 2 },
      { id: '3', title: 'Business Strategy', description: 'Master business concepts', duration: '4 weeks', order: 3 },
      { id: '4', title: 'Leadership Skills', description: 'Develop leadership abilities', duration: '3 weeks', order: 4 },
    ]
  },
]

export const mockSkills: Skill[] = [
  { id: '1', name: 'Python', level: 'Advanced', proficiency: 85 },
  { id: '2', name: 'JavaScript', level: 'Advanced', proficiency: 90 },
  { id: '3', name: 'React', level: 'Intermediate', proficiency: 70 },
  { id: '4', name: 'Communication', level: 'Intermediate', proficiency: 75 },
  { id: '5', name: 'Problem Solving', level: 'Advanced', proficiency: 88 },
  { id: '6', name: 'Leadership', level: 'Beginner', proficiency: 40 },
]

export const mockLearningModules: LearningModule[] = [
  {
    id: '1',
    title: 'Python for Data Science',
    description: 'Master Python for data analysis and machine learning',
    progress: 65,
    duration: '6 weeks',
    completed: false,
    checklist: [
      { id: '1', title: 'Variables and Data Types', completed: true },
      { id: '2', title: 'Functions and Modules', completed: true },
      { id: '3', title: 'Object-Oriented Programming', completed: false },
      { id: '4', title: 'File Handling', completed: false },
    ]
  },
  {
    id: '2',
    title: 'React.js Fundamentals',
    description: 'Learn to build interactive UIs with React',
    progress: 40,
    duration: '4 weeks',
    completed: false,
    checklist: [
      { id: '1', title: 'Components & Props', completed: true },
      { id: '2', title: 'State Management', completed: false },
      { id: '3', title: 'Hooks', completed: false },
      { id: '4', title: 'Routing', completed: false },
    ]
  },
  {
    id: '3',
    title: 'UI/UX Design Basics',
    description: 'Introduction to design principles and tools',
    progress: 100,
    duration: '3 weeks',
    completed: true,
    checklist: [
      { id: '1', title: 'Design Principles', completed: true },
      { id: '2', title: 'Color Theory', completed: true },
      { id: '3', title: 'Typography', completed: true },
      { id: '4', title: 'Figma Basics', completed: true },
    ]
  },
]

export const mockChatMessages: ChatMessage[] = [
  {
    id: '1',
    sender: 'assistant',
    message: 'Hello! I\'m your AI Career Guide. How can I help you today? 🚀',
    timestamp: new Date(Date.now() - 3600000)
  },
  {
    id: '2',
    sender: 'user',
    message: 'I want to know more about AI/ML careers',
    timestamp: new Date(Date.now() - 3500000)
  },
  {
    id: '3',
    sender: 'assistant',
    message: 'Great choice! AI/ML is one of the fastest-growing fields. Would you like to know about:\n1. Required skills\n2. Career path\n3. Salary expectations\n4. Top companies',
    timestamp: new Date(Date.now() - 3400000)
  },
]

// API utility functions
export const apiCall = async (endpoint: string, options: RequestInit = {}) => {
  const response = await fetch(`/api${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  })

  if (!response.ok) {
    throw new Error(`API call failed: ${response.statusText}`)
  }

  return response.json()
}

// Format currency
export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(value)
}

// Format date
export const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date)
}
