import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { Card, Badge, ProgressBar, Chip } from '../components/Common'
import Button from '../components/Button'
import { Input, Select, Checkbox } from '../components/Form'

const interestOptions = ['Coding', 'Design', 'Business', 'Teaching', 'Data Science', 'Marketing']
const skillOptions = ['Python', 'JavaScript', 'React', 'Communication', 'Problem Solving', 'Leadership', 'Creativity']
const quizQuestions = [
  {
    id: '1',
    question: 'Which environment energizes you the most?',
    options: ['Working independently', 'Collaborating with teams', 'Teaching others', 'Learning new things'],
  },
  {
    id: '2',
    question: 'What\'s your ideal work style?',
    options: ['Structured and planned', 'Flexible and creative', 'Fast-paced and challenging', 'Calm and analytical'],
  },
  {
    id: '3',
    question: 'How do you prefer to solve problems?',
    options: ['Logical analysis', 'Creative thinking', 'Asking for help', 'Research and experimentation'],
  },
]

export default function OnboardingPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    education: '',
    interests: [] as string[],
    skills: [] as string[],
    quiz: {} as Record<string, string>,
  })
  const navigate = useNavigate()

  const handleBasicInfoChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
  }

  const handleSkillToggle = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }))
  }

  const handleQuizAnswer = (questionId: string, answer: string) => {
    setFormData(prev => ({
      ...prev,
      quiz: { ...prev.quiz, [questionId]: answer }
    }))
  }

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.name && formData.age && formData.education
      case 2:
        return formData.interests.length >= 2
      case 3:
        return formData.skills.length >= 2
      case 4:
        return Object.keys(formData.quiz).length === 3
      default:
        return true
    }
  }

  const handleNext = () => {
    if (canProceed() && step < 5) {
      setStep(step + 1)
    }
  }

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleComplete = () => {
    // Save onboarding data
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    localStorage.setItem('user', JSON.stringify({ ...user, ...formData }))
    navigate('/dashboard')
  }

  const steps = ['Basic Info', 'Interests', 'Skills', 'Quiz', 'Complete']
  const progress = (step / 5) * 100

  return (
    <div className="min-h-screen bg-light py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="animate-fade-in">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-poppins text-4xl font-bold text-gray-900 mb-2">
              Let's Get to Know You
            </h1>
            <p className="text-gray-600 mb-6">
              Step {step} of 5: {steps[step - 1]}
            </p>
            <ProgressBar value={progress} showLabel={false} size="md" />
          </div>

          {/* Step Indicators */}
          <div className="flex justify-between mb-8">
            {steps.map((s, i) => (
              <div
                key={i}
                className={`flex flex-col items-center gap-2 ${i + 1 <= step ? 'opacity-100' : 'opacity-50'}`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                    i + 1 < step
                      ? 'bg-success text-white'
                      : i + 1 === step
                      ? 'gradient-primary text-white'
                      : 'bg-gray-300 text-gray-600'
                  }`}
                >
                  {i + 1 < step ? '✓' : i + 1}
                </div>
                <span className="text-xs text-gray-600 text-center hidden sm:block">{s}</span>
              </div>
            ))}
          </div>

          {/* Form Content */}
          <Card className="p-8">
            {/* Step 1: Basic Info */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-poppins text-2xl font-bold text-gray-900 mb-6">Basic Information</h2>
                  <div className="space-y-4">
                    <Input
                      label="Full Name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => handleBasicInfoChange('name', e.target.value)}
                      required
                    />
                    <Input
                      label="Age"
                      type="number"
                      placeholder="25"
                      value={formData.age}
                      onChange={(e) => handleBasicInfoChange('age', e.target.value)}
                      required
                    />
                    <Select
                      label="Education Level"
                      options={[
                        { value: 'highschool', label: 'High School' },
                        { value: 'bachelors', label: 'Bachelor\'s Degree' },
                        { value: 'masters', label: 'Master\'s Degree' },
                        { value: 'phd', label: 'PhD' },
                      ]}
                      value={formData.education}
                      onChange={(value) => handleBasicInfoChange('education', value)}
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Interests */}
            {step === 2 && (
              <div>
                <h2 className="font-poppins text-2xl font-bold text-gray-900 mb-6">
                  What interests you?
                </h2>
                <p className="text-gray-600 mb-6">Select at least 2 areas</p>
                <div className="grid grid-cols-2 gap-4">
                  {interestOptions.map((interest) => (
                    <button
                      key={interest}
                      onClick={() => handleInterestToggle(interest)}
                      className={`p-4 rounded-lg border-2 transition-all text-center font-medium ${
                        formData.interests.includes(interest)
                          ? 'border-primary bg-blue-50 text-primary'
                          : 'border-gray-300 bg-white text-gray-700 hover:border-primary'
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Skills */}
            {step === 3 && (
              <div>
                <h2 className="font-poppins text-2xl font-bold text-gray-900 mb-6">
                  What skills do you have?
                </h2>
                <p className="text-gray-600 mb-6">Select at least 2 skills</p>
                <div className="flex flex-wrap gap-3">
                  {skillOptions.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      selected={formData.skills.includes(skill)}
                      onClick={() => handleSkillToggle(skill)}
                      variant="outline"
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Quiz */}
            {step === 4 && (
              <div>
                <h2 className="font-poppins text-2xl font-bold text-gray-900 mb-6">
                  Personality Quiz
                </h2>
                <div className="space-y-8">
                  {quizQuestions.map((question, idx) => (
                    <div key={question.id}>
                      <p className="font-semibold text-gray-900 mb-4">
                        Q{idx + 1}. {question.question}
                      </p>
                      <div className="space-y-2">
                        {question.options.map((option) => (
                          <label key={option} className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-light transition-colors">
                            <input
                              type="radio"
                              name={`quiz-${question.id}`}
                              value={option}
                              checked={formData.quiz[question.id] === option}
                              onChange={(e) => handleQuizAnswer(question.id, e.target.value)}
                              className="w-4 h-4 text-primary"
                            />
                            <span className="ml-3 text-gray-700">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5: Complete */}
            {step === 5 && (
              <div className="text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center text-white text-4xl mx-auto mb-4">
                    🚀
                  </div>
                </div>
                <h2 className="font-poppins text-2xl font-bold text-gray-900 mb-3">
                  You're All Set!
                </h2>
                <p className="text-gray-600 mb-8">
                  Based on your profile, we've created a personalized career path for you. Click below to see your recommendations!
                </p>
                <div className="bg-light p-6 rounded-lg mb-8">
                  <p className="text-sm text-gray-600 mb-2">Your Profile:</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {formData.interests.slice(0, 2).map((interest) => (
                      <Badge key={interest} variant="primary">{interest}</Badge>
                    ))}
                    {formData.skills.slice(0, 2).map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-8">
              <Button
                onClick={handlePrev}
                variant="outline"
                disabled={step === 1}
                className="flex-1"
              >
                <ChevronLeft size={20} /> Previous
              </Button>
              {step < 5 ? (
                <Button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="flex-1"
                >
                  Next <ChevronRight size={20} />
                </Button>
              ) : (
                <Button
                  onClick={handleComplete}
                  className="flex-1"
                >
                  Generate My Career Path 🚀
                </Button>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
