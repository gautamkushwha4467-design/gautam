import { useParams } from 'react-router-dom'
import { TrendingUp, DollarSign, BarChart3, MapPin } from 'lucide-react'
import { Card, Badge, ProgressBar } from '../components/Common'
import Button from '../components/Button'
import { mockCareers, formatCurrency } from '../utils/mockData'

export default function CareerDetailPage() {
  const { id } = useParams()
  const career = mockCareers.find(c => c.id === id) || mockCareers[0]

  return (
    <div className="min-h-screen bg-light py-12">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Header */}
        <div className="gradient-light p-8 rounded-xl mb-8 animate-fade-in">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="font-poppins text-4xl font-bold text-gray-900 mb-2">
                {career.title}
              </h1>
              <p className="text-gray-600 text-lg">{career.description}</p>
            </div>
            <Badge variant="success" className="text-lg px-4 py-2">
              {career.matchPercentage}% Match
            </Badge>
          </div>
          <div className="flex flex-wrap gap-2">
            {career.tags.map((tag) => (
              <Badge key={tag} variant="primary">{tag}</Badge>
            ))}
          </div>
        </div>

        {/* Overview Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Salary */}
          <Card>
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-gray-600 text-sm font-medium mb-1">Salary Range</p>
                <h3 className="font-poppins text-2xl font-bold text-gray-900">
                  {formatCurrency(career.salaryRange.min)} - {formatCurrency(career.salaryRange.max)}
                </h3>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <DollarSign className="text-primary" size={24} />
              </div>
            </div>
            <p className="text-xs text-gray-600">Average market salary</p>
          </Card>

          {/* Demand Level */}
          <Card>
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-gray-600 text-sm font-medium mb-1">Market Demand</p>
                <h3 className="font-poppins text-2xl font-bold text-gray-900">
                  {career.demandLevel}
                </h3>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <TrendingUp className="text-success" size={24} />
              </div>
            </div>
            <p className="text-xs text-gray-600">Current market conditions</p>
          </Card>

          {/* Job Availability */}
          <Card>
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-gray-600 text-sm font-medium mb-1">Job Growth</p>
                <h3 className="font-poppins text-2xl font-bold text-gray-900">
                  +24%
                </h3>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <BarChart3 className="text-secondary" size={24} />
              </div>
            </div>
            <p className="text-xs text-gray-600">5-year projection</p>
          </Card>
        </div>

        {/* Overview */}
        <Card className="mb-8">
          <h2 className="font-poppins text-2xl font-bold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-6">{career.overview}</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Key Responsibilities</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Develop and deploy solutions</li>
                <li>✓ Collaborate with teams</li>
                <li>✓ Analyze requirements</li>
                <li>✓ Maintain best practices</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Required Qualifications</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ 2-5 years experience</li>
                <li>✓ Relevant skills</li>
                <li>✓ Problem-solving ability</li>
                <li>✓ Communication skills</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Roadmap */}
        <Card className="mb-8">
          <h2 className="font-poppins text-2xl font-bold text-gray-900 mb-6">Learning Roadmap</h2>
          <div className="space-y-4">
            {career.roadmap.map((step, idx) => (
              <div key={step.id} className="flex gap-6 pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center text-white font-bold mb-2">
                    {step.order}
                  </div>
                  {idx < career.roadmap.length - 1 && (
                    <div className="w-1 h-16 bg-gradient-to-b from-primary to-secondary" />
                  )}
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-poppins font-bold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{step.description}</p>
                  <Badge variant="primary" size="sm">{step.duration}</Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Skills Match */}
        <Card className="mb-8">
          <h2 className="font-poppins text-2xl font-bold text-gray-900 mb-6">Skills Required</h2>
          <div className="space-y-4">
            {['Python/Java/JavaScript', 'System Design', 'Problem Solving', 'Communication', 'Teamwork'].map((skill, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">{skill}</span>
                  <span className="text-sm text-gray-600">{70 + idx * 5}%</span>
                </div>
                <ProgressBar value={70 + idx * 5} />
              </div>
            ))}
          </div>
        </Card>

        {/* CTA */}
        <div className="flex gap-4">
          <Button fullWidth size="lg">
            Start Learning Path 🚀
          </Button>
          <Button fullWidth variant="outline" size="lg">
            Save for Later
          </Button>
        </div>
      </div>
    </div>
  )
}
