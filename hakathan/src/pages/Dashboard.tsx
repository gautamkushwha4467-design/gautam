import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BarChart3, Briefcase, BookOpen, User, Settings, ChevronRight, TrendingUp } from 'lucide-react'
import { Card, Badge, ProgressBar } from '../components/Common'
import Button from '../components/Button'
import { mockCareers, mockSkills } from '../utils/mockData'

export default function Dashboard() {
  const [activeMenu, setActiveMenu] = useState('dashboard')
  const user = JSON.parse(localStorage.getItem('user') || '{}')

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'careers', label: 'My Careers', icon: Briefcase },
    { id: 'roadmap', label: 'Roadmap', icon: BookOpen },
    { id: 'skills', label: 'Skills', icon: TrendingUp },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
  ]

  return (
    <div className="min-h-screen bg-light">
      <div className="flex gap-6 p-6 max-w-7xl mx-auto">
        {/* Sidebar */}
        <div className="w-64 hidden md:block">
          <Card className="p-6 sticky top-24">
            <div className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveMenu(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      activeMenu === item.id
                        ? 'bg-primary text-white'
                        : 'text-gray-700 hover:bg-light'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                )
              })}
            </div>
          </Card>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Welcome Section */}
          <div className="mb-8 animate-fade-in">
            <h1 className="font-poppins text-4xl font-bold text-gray-900 mb-2">
              Hi {user.name} 👋
            </h1>
            <p className="text-gray-600">Welcome back! Here's your personalized career dashboard.</p>
          </div>

          {/* Career Suggestions */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-poppins text-2xl font-bold text-gray-900">
                  Recommended Careers
                </h2>
                <p className="text-gray-600 text-sm">Based on your profile</p>
              </div>
              <Link to="/career/1">
                <Button variant="outline" size="sm">
                  View All <ChevronRight size={18} />
                </Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mockCareers.slice(0, 4).map((career) => (
                <Card key={career.id} hoverable className="flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-poppins font-bold text-gray-900 line-clamp-2">
                        {career.title}
                      </h3>
                    </div>
                    <Badge variant="success" size="sm">
                      {career.matchPercentage}%
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 flex-grow line-clamp-2">
                    {career.description}
                  </p>
                  <div className="space-y-3 pt-3 border-t border-gray-200">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600">Match</span>
                      <span className="font-bold text-primary">{career.matchPercentage}%</span>
                    </div>
                    <ProgressBar value={career.matchPercentage} size="sm" />
                    <Link to={`/career/${career.id}`}>
                      <Button size="sm" fullWidth>
                        View Roadmap
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Skill Analysis */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-poppins text-2xl font-bold text-gray-900">
                  Your Skills
                </h2>
                <p className="text-gray-600 text-sm">Current proficiency levels</p>
              </div>
              <Link to="/skill-gap">
                <Button variant="outline" size="sm">
                  View Gap Analysis <ChevronRight size={18} />
                </Button>
              </Link>
            </div>

            <Card>
              <div className="space-y-6">
                {mockSkills.slice(0, 6).map((skill) => (
                  <div key={skill.id}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">{skill.name}</span>
                      <Badge variant={skill.level === 'Advanced' ? 'success' : skill.level === 'Intermediate' ? 'warning' : 'primary'} size="sm">
                        {skill.level}
                      </Badge>
                    </div>
                    <ProgressBar value={skill.proficiency} color={skill.level === 'Advanced' ? 'success' : skill.level === 'Intermediate' ? 'warning' : 'primary'} />
                  </div>
                ))}
              </div>
            </Card>
          </section>

          {/* Trending Careers */}
          <section>
            <div className="mb-6">
              <h2 className="font-poppins text-2xl font-bold text-gray-900">
                🔥 Trending Careers
              </h2>
              <p className="text-gray-600 text-sm">Popular in the market right now</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'AI/ML Engineer', demand: 'Very High', salary: '$120K - $250K' },
                { title: 'Cloud Architect', demand: 'Very High', salary: '$130K - $260K' },
                { title: 'DevOps Engineer', demand: 'High', salary: '$110K - $200K' },
              ].map((career, idx) => (
                <Card key={idx} className="border-l-4 border-primary">
                  <h3 className="font-poppins font-bold text-gray-900 mb-2">{career.title}</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><span className="font-medium">Demand:</span> {career.demand}</p>
                    <p><span className="font-medium">Salary Range:</span> {career.salary}</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Quick Actions */}
          <section className="mt-12 mb-6">
            <div className="grid md:grid-cols-3 gap-4">
              <Link to="/chat">
                <Button fullWidth variant="secondary">
                  💬 Chat with AI
                </Button>
              </Link>
              <Link to="/roadmap">
                <Button fullWidth>
                  📚 View Roadmap
                </Button>
              </Link>
              <Link to="/profile">
                <Button fullWidth variant="outline">
                  👤 Edit Profile
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
