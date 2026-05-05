# Development Guide & Best Practices

## 🚀 Development Workflow

### Starting Development

```bash
# Install dependencies
npm install

# Start development server (frontend only)
npm run dev

# Start fullstack (frontend + backend)
npm run dev-fullstack

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Server
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3001
- **Hot reload**: Enabled automatically
- **Source maps**: Included for debugging

---

## 📝 Code Organization

### Adding a New Page

1. Create file: `src/pages/MyNewPage.tsx`
```tsx
export default function MyNewPage() {
  return (
    <div className="min-h-screen bg-light py-12">
      <div className="container mx-auto px-4">
        {/* Your content here */}
      </div>
    </div>
  )
}
```

2. Add route in `src/App.tsx`:
```tsx
<Route path="/my-page" element={<MyNewPage />} />
```

3. Add navigation link in `src/components/Navbar.tsx`

### Adding a New Component

1. Create file: `src/components/MyComponent.tsx`
```tsx
interface MyComponentProps {
  title: string
  onClick?: () => void
}

export default function MyComponent({ title, onClick }: MyComponentProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-soft">
      {title}
    </div>
  )
}
```

2. Import and use in pages:
```tsx
import MyComponent from '../components/MyComponent'
```

---

## 🎨 Styling Guide

### Using Tailwind CSS

```tsx
// Layout
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

// Spacing
<div className="p-6 m-4 mb-8">

// Colors
<div className="bg-primary text-white">

// Responsive
<div className="hidden md:block"> {/* Show on tablet+ */}
<div className="w-full md:w-1/2"> {/* 50% width on tablet+ */}

// Hover states
<button className="hover:bg-opacity-90 transition-all">

// Shadows
<div className="shadow-soft hover:shadow-medium">
```

### Custom Styling

Add to `src/index.css`:
```css
.custom-class {
  /* Your custom styles */
}
```

Use CSS variables:
```tsx
<div style={{ backgroundColor: COLORS.primary }}>
```

---

## 🧩 Component Examples

### Using Button Component
```tsx
import Button from '../components/Button'

<Button onClick={handleClick}>
  Click Me
</Button>

<Button variant="secondary" size="lg" fullWidth>
  Full Width Button
</Button>

<Button variant="outline" disabled>
  Disabled Button
</Button>
```

### Using Form Components
```tsx
import { Input, Select, TextArea, Checkbox } from '../components/Form'

<Input
  label="Email"
  type="email"
  placeholder="your@email.com"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  error={errors.email}
  required
/>

<Select
  label="Option"
  options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
  ]}
  value={selected}
  onChange={setSelected}
/>
```

### Using Common Components
```tsx
import { Card, Badge, ProgressBar, Avatar, Chip } from '../components/Common'

<Card hoverable>
  <h3>Title</h3>
  <Badge variant="primary">Label</Badge>
  <ProgressBar value={75} />
  <Avatar name="John Doe" />
  <Chip label="Skill" variant="outline" />
</Card>
```

---

## 📊 State Management

### Local Component State
```tsx
const [count, setCount] = useState(0)
const [formData, setFormData] = useState({
  name: '',
  email: '',
})
```

### Updating State Objects
```tsx
// Good
setFormData(prev => ({
  ...prev,
  name: 'New Name'
}))

// Update with array
setTodos(prev => [...prev, newTodo])
```

### Using useEffect
```tsx
useEffect(() => {
  // Runs on mount
  fetchData()
}, []) // Empty dependency array

useEffect(() => {
  // Runs when 'id' changes
  loadItem(id)
}, [id]) // Dependency array with 'id'
```

---

## 🔄 API Integration

### Using the API Client
```tsx
import { careerAPI, userAPI } from '../utils/api'

// In component
useEffect(() => {
  careerAPI.getAll()
    .then(res => setCareer(res.data))
    .catch(err => console.error(err))
}, [])
```

### Making Custom API Calls
```tsx
import apiClient from '../utils/api'

const response = await apiClient.get('/endpoint')
const data = await apiClient.post('/endpoint', { body })
```

### Error Handling
```tsx
try {
  const response = await apiClient.post('/login', credentials)
  localStorage.setItem('user', JSON.stringify(response.data))
} catch (error) {
  if (error.response?.status === 401) {
    setError('Invalid credentials')
  }
}
```

---

## 🔐 Authentication Pattern

### Check Authentication
```tsx
const user = JSON.parse(localStorage.getItem('user') || '{}')
const isAuthenticated = user.id !== undefined
```

### Protect Routes
```tsx
// In App.tsx
<Route 
  path="/dashboard" 
  element={isAuthenticated ? <Dashboard /> : <LoginPage />} 
/>
```

### Logout
```tsx
const handleLogout = () => {
  localStorage.removeItem('user')
  navigate('/')
}
```

---

## 🎯 Form Validation Pattern

```tsx
const [formData, setFormData] = useState({ email: '', password: '' })
const [errors, setErrors] = useState<Record<string, string>>({})

const validateForm = () => {
  const newErrors: Record<string, string> = {}

  if (!formData.email) {
    newErrors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    newErrors.email = 'Invalid email format'
  }

  if (!formData.password || formData.password.length < 6) {
    newErrors.password = 'Password must be at least 6 characters'
  }

  setErrors(newErrors)
  return Object.keys(newErrors).length === 0
}

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  if (!validateForm()) return
  // Submit form
}
```

---

## 🚀 Performance Tips

### Optimize Rendering
```tsx
// Avoid recreating functions in render
const handleClick = useCallback(() => {
  // Do something
}, [dependencies])

// Memoize expensive components
const MemoizedComponent = React.memo(MyComponent)

// Split large lists
const [visibleItems, setVisibleItems] = useState(items.slice(0, 10))
```

### Lazy Load Routes
```tsx
import { lazy, Suspense } from 'react'

const Dashboard = lazy(() => import('./pages/Dashboard'))

<Suspense fallback={<Loading />}>
  <Routes>
    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
</Suspense>
```

---

## 🐛 Debugging Tips

### Console Logging
```tsx
console.log('Value:', value)
console.error('Error:', error)
console.warn('Warning:', warning)
```

### React DevTools
- Install React DevTools browser extension
- Inspect component hierarchy
- View props and state

### Network Tab
- Check API requests in browser DevTools
- Verify request/response data
- Check status codes

### VS Code Debugger
```json
// .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Launch Chrome",
      "url": "http://localhost:5173",
      "webRoot": "${workspaceFolder}"
    }
  ]
}
```

---

## 📦 Updating Dependencies

### Check for Updates
```bash
npm outdated
```

### Update Packages
```bash
# Update all
npm update

# Update specific package
npm install package@latest

# Update to latest major version
npm install package@latest --save
```

### Security Audit
```bash
npm audit
npm audit fix
```

---

## 🎨 Tailwind CSS Customization

### Extend Configuration
Edit `tailwind.config.js`:
```js
export default {
  theme: {
    extend: {
      colors: {
        myColor: '#123456',
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
}
```

### Use Custom Values
```tsx
<div className="text-myColor p-128">
```

---

## 📱 Mobile Testing

### Test Responsive Design
```bash
# In browser DevTools:
# 1. Press F12
# 2. Click device toggle (mobile icon)
# 3. Select device or set custom size
```

### Test on Real Device
```bash
npm run dev
# Then visit http://your-computer-ip:5173 on your phone
```

---

## 🔍 Accessibility

### Semantic HTML
```tsx
<button>Click</button> // Good
<div onClick={handleClick}>Click</div> // Avoid

<input aria-label="Email" type="email" />
<label htmlFor="email">Email</label>
<input id="email" type="email" />
```

### Color Contrast
- Use colors that meet WCAG AA standards
- Test with contrast checker tools

### Keyboard Navigation
- All interactive elements should be keyboard accessible
- Use semantic HTML for automatic keyboard support

---

## 📚 Learning Resources

### Tailwind CSS
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com)

### React
- [React Docs](https://react.dev)
- [React Router Docs](https://reactrouter.com)

### TypeScript
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app)

### Vite
- [Vite Docs](https://vitejs.dev)

---

## 🚀 Deployment Checklist

Before deploying:
- [ ] All routes working
- [ ] No console errors
- [ ] Forms validating properly
- [ ] API calls working
- [ ] Responsive on mobile/tablet/desktop
- [ ] Images optimized
- [ ] Environment variables set
- [ ] Build succeeds without errors
- [ ] Production bundle size reasonable
- [ ] SEO meta tags added
- [ ] 404 page created
- [ ] Analytics configured

---

## 💡 Common Patterns

### Handling Async Operations
```tsx
const [loading, setLoading] = useState(false)
const [error, setError] = useState<string | null>(null)
const [data, setData] = useState(null)

useEffect(() => {
  const fetchData = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await apiCall()
      setData(response)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  fetchData()
}, [])
```

### Conditional Rendering
```tsx
{isLoading && <Loading />}
{error && <Error message={error} />}
{data && <Content data={data} />}
```

---

## 🎯 Testing Example

```tsx
// MyComponent.test.tsx
import { render, screen } from '@testing-library/react'
import MyComponent from './MyComponent'

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent title="Test" />)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })
})
```

---

## 🔗 Environment Variables

Create `.env.local`:
```
VITE_API_URL=http://localhost:3001
VITE_APP_NAME=CareerAI
```

Access in code:
```tsx
const apiUrl = import.meta.env.VITE_API_URL
const appName = import.meta.env.VITE_APP_NAME
```

---

## ⚡ Quick Commands

```bash
# Development
npm run dev              # Start dev server
npm run dev-fullstack   # Start frontend + backend

# Building
npm run build           # Build for production
npm run preview         # Preview production build

# Backend
npm run server          # Start backend only

# Utilities
npm audit              # Check security vulnerabilities
npm audit fix          # Fix vulnerabilities
npm outdated           # Check for updates
npm update             # Update packages
```

---

Happy developing! 🚀✨
