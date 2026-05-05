import express, { Express, Request, Response, json } from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app: Express = express()
const PORT = 3001

// Middleware
app.use(cors())
app.use(json())

// In-memory database (replace with real DB in production)
let users: any[] = []
let careers: any[] = [
  {
    id: '1',
    title: 'AI/ML Engineer',
    description: 'Build intelligent systems',
    salaryRange: { min: 120000, max: 250000 },
    demandLevel: 'High',
    matchPercentage: 95,
  },
  {
    id: '2',
    title: 'Full Stack Developer',
    description: 'Create complete web applications',
    salaryRange: { min: 90000, max: 180000 },
    demandLevel: 'High',
    matchPercentage: 88,
  },
]

// Auth Routes
app.post('/auth/login', (req: Request, res: Response) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password required' })
  }

  const user = users.find(u => u.email === email)

  if (user && user.password === password) {
    return res.json({ user: { id: user.id, email: user.email, name: user.name } })
  }

  res.status(401).json({ error: 'Invalid credentials' })
})

app.post('/auth/signup', (req: Request, res: Response) => {
  const { email, password, name } = req.body

  if (!email || !password || !name) {
    return res.status(400).json({ error: 'All fields required' })
  }

  if (users.find(u => u.email === email)) {
    return res.status(400).json({ error: 'User already exists' })
  }

  const user = {
    id: Date.now().toString(),
    email,
    password, // In production, hash this!
    name,
  }

  users.push(user)
  res.json({ user: { id: user.id, email: user.email, name: user.name } })
})

// Career Routes
app.get('/careers', (req: Request, res: Response) => {
  res.json(careers)
})

app.get('/careers/:id', (req: Request, res: Response) => {
  const career = careers.find(c => c.id === req.params.id)
  if (career) {
    res.json(career)
  } else {
    res.status(404).json({ error: 'Career not found' })
  }
})

app.post('/careers', (req: Request, res: Response) => {
  const newCareer = {
    id: Date.now().toString(),
    ...req.body,
  }
  careers.push(newCareer)
  res.status(201).json(newCareer)
})

// User Routes
app.get('/users/:id', (req: Request, res: Response) => {
  const user = users.find(u => u.id === req.params.id)
  if (user) {
    const { password, ...userWithoutPassword } = user
    res.json(userWithoutPassword)
  } else {
    res.status(404).json({ error: 'User not found' })
  }
})

app.put('/users/:id', (req: Request, res: Response) => {
  const user = users.find(u => u.id === req.params.id)
  if (user) {
    Object.assign(user, req.body)
    res.json(user)
  } else {
    res.status(404).json({ error: 'User not found' })
  }
})

// Health check
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', message: 'CareerAI API is running' })
})

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Route not found' })
})

// Start server
app.listen(PORT, () => {
  console.log(`✅ CareerAI API Server running on http://localhost:${PORT}`)
})
