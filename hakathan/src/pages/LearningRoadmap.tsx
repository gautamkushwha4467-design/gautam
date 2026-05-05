import { CheckCircle2, Circle, Lock } from 'lucide-react'
import { Card, Badge, ProgressBar } from '../components/Common'
import Button from '../components/Button'
import { mockLearningModules } from '../utils/mockData'

export default function LearningRoadmap() {
  return (
    <div className="min-h-screen bg-light py-12">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="animate-fade-in">
          {/* Header */}
          <div className="mb-12">
            <h1 className="font-poppins text-4xl font-bold text-gray-900 mb-2">
              Your Learning Roadmap
            </h1>
            <p className="text-gray-600 text-lg">
              Complete these modules to reach your career goals
            </p>
          </div>

          {/* Progress Overview */}
          <Card className="mb-8 gradient-light">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-gray-600 text-sm mb-2">Overall Progress</p>
                <h3 className="font-poppins text-3xl font-bold text-gray-900 mb-3">68%</h3>
                <ProgressBar value={68} size="md" />
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-2">Modules Completed</p>
                <h3 className="font-poppins text-3xl font-bold text-gray-900">1 / 3</h3>
                <p className="text-xs text-gray-600 mt-2">1 in progress</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-2">Estimated Completion</p>
                <h3 className="font-poppins text-3xl font-bold text-gray-900">8 weeks</h3>
                <p className="text-xs text-gray-600 mt-2">At current pace</p>
              </div>
            </div>
          </Card>

          {/* Learning Modules */}
          <div className="space-y-6">
            {mockLearningModules.map((module, idx) => {
              const isCompleted = module.completed
              const isInProgress = module.progress > 0 && !isCompleted
              const isLocked = module.progress === 0

              return (
                <Card key={module.id} className={`border-l-4 ${
                  isCompleted ? 'border-success' : isInProgress ? 'border-primary' : 'border-gray-300'
                } ${isLocked ? 'opacity-75' : ''}`}>
                  <div className="flex gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0 pt-1">
                      {isCompleted ? (
                        <CheckCircle2 className="text-success" size={32} />
                      ) : isInProgress ? (
                        <Circle className="text-primary" size={32} />
                      ) : (
                        <Lock className="text-gray-400" size={32} />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-poppins text-xl font-bold text-gray-900">
                            {module.title}
                          </h3>
                          <p className="text-gray-600 text-sm mt-1">{module.description}</p>
                        </div>
                        <Badge variant={isCompleted ? 'success' : isInProgress ? 'primary' : 'warning'}>
                          {isCompleted ? 'Completed' : `${module.progress}%`}
                        </Badge>
                      </div>

                      {/* Progress Bar */}
                      <div className="my-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-gray-600 font-medium">Progress</span>
                          <span className="text-xs font-bold text-gray-900">{module.progress}%</span>
                        </div>
                        <ProgressBar 
                          value={module.progress} 
                          color={isCompleted ? 'success' : 'primary'}
                          size="md"
                        />
                      </div>

                      {/* Checklist */}
                      <div className="mb-4">
                        <p className="text-xs font-medium text-gray-600 mb-2">Curriculum:</p>
                        <div className="space-y-2">
                          {module.checklist.map((item) => (
                            <label key={item.id} className="flex items-center gap-2 text-sm text-gray-700">
                              <input
                                type="checkbox"
                                checked={item.completed}
                                disabled={isLocked}
                                className="w-4 h-4 rounded cursor-pointer disabled:cursor-not-allowed"
                              />
                              <span className={item.completed ? 'line-through text-gray-500' : ''}>
                                {item.title}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Duration & Button */}
                      <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                        <span className="text-xs text-gray-600">
                          📅 {module.duration}
                        </span>
                        {isCompleted ? (
                          <Button variant="success" disabled>
                            ✓ Completed
                          </Button>
                        ) : (
                          <Button size="sm" disabled={isLocked}>
                            {isInProgress ? 'Continue Learning' : 'Locked'}
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Additional Modules */}
          <Card className="mt-8 text-center py-8">
            <h3 className="font-poppins text-xl font-bold text-gray-900 mb-2">
              Want to explore more?
            </h3>
            <p className="text-gray-600 mb-4">
              Check out our course library for additional learning resources
            </p>
            <Button>
              Browse All Courses
            </Button>
          </Card>

          {/* Motivational Section */}
          <Card className="mt-8 gradient-light text-center">
            <h3 className="font-poppins text-2xl font-bold text-gray-900 mb-2">
              You're doing great! 🎉
            </h3>
            <p className="text-gray-600 mb-4">
              You're 68% through your learning path. Keep up the momentum to reach your goals!
            </p>
            <div className="flex gap-4 justify-center">
              <Button>
                Continue Learning
              </Button>
              <Button variant="outline">
                Share Progress
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
