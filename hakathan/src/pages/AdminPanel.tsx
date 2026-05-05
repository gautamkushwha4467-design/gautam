import { BarChart3, TrendingUp, Users, Briefcase } from 'lucide-react'
import { Card, Badge, ProgressBar } from '../components/Common'
import Button from '../components/Button'

export default function AdminPanel() {
  return (
    <div className="min-h-screen bg-light py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="animate-fade-in">
          {/* Header */}
          <div className="mb-12">
            <h1 className="font-poppins text-4xl font-bold text-gray-900 mb-2">
              Admin Dashboard
            </h1>
            <p className="text-gray-600 text-lg">
              Manage career data, job trends, and platform analytics
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-gray-600 text-sm mb-1">Total Users</p>
                  <h3 className="font-poppins text-3xl font-bold text-gray-900">2,542</h3>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="text-primary" size={24} />
                </div>
              </div>
              <p className="text-xs text-success">+12% from last month</p>
            </Card>

            <Card>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-gray-600 text-sm mb-1">Active Careers</p>
                  <h3 className="font-poppins text-3xl font-bold text-gray-900">156</h3>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Briefcase className="text-secondary" size={24} />
                </div>
              </div>
              <p className="text-xs text-warning">+5 added this week</p>
            </Card>

            <Card>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-gray-600 text-sm mb-1">Avg Engagement</p>
                  <h3 className="font-poppins text-3xl font-bold text-gray-900">87%</h3>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="text-success" size={24} />
                </div>
              </div>
              <p className="text-xs text-gray-600">Users actively learning</p>
            </Card>

            <Card>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-gray-600 text-sm mb-1">Completion Rate</p>
                  <h3 className="font-poppins text-3xl font-bold text-gray-900">64%</h3>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <BarChart3 className="text-warning" size={24} />
                </div>
              </div>
              <p className="text-xs text-gray-600">Course completion ratio</p>
            </Card>
          </div>

          {/* Management Sections */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Career Management */}
            <Card>
              <h2 className="font-poppins text-2xl font-bold text-gray-900 mb-6">
                Manage Careers
              </h2>

              <div className="space-y-4 mb-6">
                {[
                  { title: 'AI/ML Engineer', status: 'Active', users: 342 },
                  { title: 'Full Stack Developer', status: 'Active', users: 289 },
                  { title: 'Data Scientist', status: 'Active', users: 215 },
                  { title: 'DevOps Engineer', status: 'Inactive', users: 156 },
                ].map((career, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <h3 className="font-semibold text-gray-900">{career.title}</h3>
                      <p className="text-xs text-gray-600">{career.users} users</p>
                    </div>
                    <Badge variant={career.status === 'Active' ? 'success' : 'warning'}>
                      {career.status}
                    </Badge>
                  </div>
                ))}
              </div>

              <Button fullWidth>
                + Add New Career
              </Button>
            </Card>

            {/* Job Trends */}
            <Card>
              <h2 className="font-poppins text-2xl font-bold text-gray-900 mb-6">
                Update Job Trends
              </h2>

              <div className="space-y-4 mb-6">
                {[
                  { trend: 'Machine Learning Engineer', change: '+24%', status: 'High Growth' },
                  { trend: 'Cloud Architect', change: '+18%', status: 'Growing' },
                  { trend: 'Product Manager', change: '+12%', status: 'Stable' },
                  { trend: 'Web Developer', change: '-5%', status: 'Declining' },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{item.trend}</h3>
                      <Badge variant={item.change.startsWith('+') ? 'success' : 'danger'}>
                        {item.change}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-600">{item.status}</p>
                  </div>
                ))}
              </div>

              <Button fullWidth>
                Update Trends
              </Button>
            </Card>
          </div>

          {/* User Analytics */}
          <Card className="mt-8">
            <h2 className="font-poppins text-2xl font-bold text-gray-900 mb-6">
              User Analytics
            </h2>

            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-gray-900">New Signups</span>
                  <Badge variant="primary">45 this week</Badge>
                </div>
                <ProgressBar value={75} size="md" />
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-gray-900">Active Users (30 days)</span>
                  <Badge variant="success">1,823 users</Badge>
                </div>
                <ProgressBar value={85} size="md" color="success" />
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-gray-900">Course Completions</span>
                  <Badge variant="secondary">342 completed</Badge>
                </div>
                <ProgressBar value={64} size="md" color="secondary" />
              </div>
            </div>
          </Card>

          {/* Recent Activity */}
          <Card className="mt-8">
            <h2 className="font-poppins text-2xl font-bold text-gray-900 mb-6">
              Recent Activity
            </h2>

            <div className="space-y-3">
              {[
                { action: 'User Rohit started learning path', time: '2 minutes ago' },
                { action: 'New career added: Blockchain Developer', time: '1 hour ago' },
                { action: 'Job trend updated for AI/ML', time: '3 hours ago' },
                { action: '125 users completed onboarding', time: '1 day ago' },
              ].map((activity, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 border-b border-gray-200 last:border-b-0">
                  <span className="text-gray-900 text-sm">{activity.action}</span>
                  <span className="text-xs text-gray-600">{activity.time}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
