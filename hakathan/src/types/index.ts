// User and Auth types
export interface User {
  id: string
  email: string
  name: string
  age?: number
  education?: string
  profileImage?: string
  skills?: string[]
  interests?: string[]
  createdAt: string
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface SignupCredentials extends LoginCredentials {
  name: string
}

// Career types
export interface Career {
  id: string
  title: string
  description: string
  salaryRange: {
    min: number
    max: number
  }
  demandLevel: 'High' | 'Medium' | 'Low'
  matchPercentage: number
  overview: string
  roadmap: RoadmapStep[]
  tags: string[]
}

export interface RoadmapStep {
  id: string
  title: string
  description: string
  duration: string
  order: number
}

// Skill types
export interface Skill {
  id: string
  name: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  proficiency: number
}

// Learning types
export interface LearningModule {
  id: string
  title: string
  description: string
  progress: number
  duration: string
  completed: boolean
  checklist: ChecklistItem[]
}

export interface ChecklistItem {
  id: string
  title: string
  completed: boolean
}

// Onboarding types
export interface OnboardingData {
  step: number
  basicInfo: {
    name: string
    age: string
    education: string
  }
  interests: string[]
  skills: string[]
  quizAnswers: QuizAnswer[]
}

export interface QuizAnswer {
  questionId: string
  answer: string
}

// Chat types
export interface ChatMessage {
  id: string
  sender: 'user' | 'assistant'
  message: string
  timestamp: Date
}
