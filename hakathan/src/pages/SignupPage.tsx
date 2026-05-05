import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Mail, Lock, User } from 'lucide-react'
import { Card } from '../components/Common'
import Button from '../components/Button'
import { Input, Checkbox } from '../components/Form'

export default function SignupPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!name) {
      newErrors.name = 'Name is required'
    }

    if (!email) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!password) {
      newErrors.password = 'Password is required'
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password'
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    if (!acceptTerms) {
      newErrors.terms = 'You must accept the terms and conditions'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      const user = { email, name, id: '1' }
      localStorage.setItem('user', JSON.stringify(user))
      navigate('/onboarding')
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen gradient-primary flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in">
        <Card className="p-8">
          <div className="text-center mb-8">
            <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center text-white font-bold mx-auto mb-4">
              AI
            </div>
            <h1 className="font-poppins text-3xl font-bold text-gray-900 mb-2">
              Get Started
            </h1>
            <p className="text-gray-600">Create your account to begin</p>
          </div>

          <form onSubmit={handleSignup} className="space-y-4">
            <Input
              label="Full Name"
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={errors.name}
              icon={<User size={20} />}
              required
            />

            <Input
              label="Email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email}
              icon={<Mail size={20} />}
              required
            />

            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={errors.password}
              icon={<Lock size={20} />}
              required
            />

            <Input
              label="Confirm Password"
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={errors.confirmPassword}
              icon={<Lock size={20} />}
              required
            />

            <div className="pt-2">
              <Checkbox
                label="I agree to the Terms and Conditions"
                checked={acceptTerms}
                onChange={setAcceptTerms}
              />
              {errors.terms && <p className="text-error text-sm mt-1">{errors.terms}</p>}
            </div>

            <Button
              type="submit"
              fullWidth
              disabled={isLoading}
              className="mt-6"
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </Button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="text-sm text-gray-500">or</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          {/* Google Signup */}
          <Button
            variant="outline"
            fullWidth
            className="mb-6"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.868 19.821c-3.884 0-7.171-2.619-8.266-6.231h2.081c.924 2.582 3.348 4.45 6.185 4.45 1.621 0 3.127-.536 4.343-1.442l1.516 1.516c-1.505 1.08-3.382 1.707-5.427 1.707zm7.651-4.231h-2.081c-.924-2.582-3.348-4.45-6.185-4.45-1.621 0-3.127.536-4.343 1.442l-1.516-1.516c1.505-1.08 3.382-1.707 5.427-1.707 3.884 0 7.171 2.619 8.266 6.231z" />
            </svg>
            Sign up with Google
          </Button>

          <p className="text-center text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-primary font-semibold hover:underline">
              Sign in
            </a>
          </p>
        </Card>
      </div>
    </div>
  )
}
