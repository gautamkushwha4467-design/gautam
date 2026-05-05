import { ArrowRight } from 'lucide-react'
import { Card, Badge, ProgressBar } from '../components/Common'
import Button from '../components/Button'
import { mockSkills } from '../utils/mockData'

export default function SkillGapAnalysis() {
  const havingSkills = [
    { name: 'Python', proficiency: 85 },
    { name: 'JavaScript', proficiency: 90 },
    { name: 'Problem Solving', proficiency: 88 },
  ]

  const needSkills = [
    { name: 'Machine Learning', proficiency: 0 },
    { name: 'TensorFlow', proficiency: 0 },
    { name: 'Data Science', proficiency: 20 },
    { name: 'SQL Optimization', proficiency: 15 },
  ]

  return (
    <div className="min-h-screen bg-light py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="animate-fade-in">
          {/* Header */}
          <div className="mb-12">
            <h1 className="font-poppins text-4xl font-bold text-gray-900 mb-2">
              Skill Gap Analysis
            </h1>
            <p className="text-gray-600 text-lg">
              Identify which skills you need to develop to reach your dream career
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Skills You Have */}
            <Card>
              <div className="mb-6">
                <h2 className="font-poppins text-2xl font-bold text-gray-900 mb-2">
                  ✅ Skills You Have
                </h2>
                <p className="text-gray-600 text-sm">Current proficiency areas</p>
              </div>

              <div className="space-y-6">
                {havingSkills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">{skill.name}</span>
                      <Badge variant="success">{skill.proficiency}%</Badge>
                    </div>
                    <ProgressBar value={skill.proficiency} color="success" />
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-green-800">
                  <span className="font-bold">Great start!</span> You have a solid foundation in fundamental skills.
                </p>
              </div>
            </Card>

            {/* Skills You Need */}
            <Card>
              <div className="mb-6">
                <h2 className="font-poppins text-2xl font-bold text-gray-900 mb-2">
                  📚 Skills You Need
                </h2>
                <p className="text-gray-600 text-sm">Areas to focus on</p>
              </div>

              <div className="space-y-6">
                {needSkills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">{skill.name}</span>
                      <Badge variant="warning">{skill.proficiency}%</Badge>
                    </div>
                    <ProgressBar value={skill.proficiency} color="warning" />
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <span className="font-bold">Priority areas:</span> Focus on Machine Learning and TensorFlow for your next role.
                </p>
              </div>
            </Card>
          </div>

          {/* Recommended Learning Path */}
          <Card className="mt-8">
            <h2 className="font-poppins text-2xl font-bold text-gray-900 mb-6">
              Recommended Learning Path
            </h2>

            <div className="space-y-4">
              {[
                { phase: 'Phase 1 (Weeks 1-2)', title: 'Data Science Fundamentals', skills: ['Pandas', 'NumPy', 'Matplotlib'] },
                { phase: 'Phase 2 (Weeks 3-4)', title: 'Machine Learning Basics', skills: ['Scikit-learn', 'Algorithms', 'Model Training'] },
                { phase: 'Phase 3 (Weeks 5-6)', title: 'Deep Learning', skills: ['TensorFlow', 'Neural Networks', 'NLP'] },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 pb-4 border-b border-gray-200 last:border-b-0 last:pb-0">
                  <div className="w-20 h-20 gradient-primary rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                    {idx + 1}
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-sm text-primary font-semibold mb-1">{item.phase}</p>
                    <h3 className="font-poppins font-bold text-gray-900 mb-2">{item.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" size="sm">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                  {idx < 2 && (
                    <ArrowRight className="text-gray-400 mt-4" size={24} />
                  )}
                </div>
              ))}
            </div>
          </Card>

          {/* Statistics */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card className="text-center">
              <p className="text-gray-600 text-sm mb-2">Current Proficiency</p>
              <h3 className="font-poppins text-4xl font-bold gradient-primary bg-clip-text text-transparent">
                87%
              </h3>
              <p className="text-xs text-gray-600 mt-2">Average across skills</p>
            </Card>

            <Card className="text-center">
              <p className="text-gray-600 text-sm mb-2">Gap to Close</p>
              <h3 className="font-poppins text-4xl font-bold text-warning">
                4 Skills
              </h3>
              <p className="text-xs text-gray-600 mt-2">Priority to learn</p>
            </Card>

            <Card className="text-center">
              <p className="text-gray-600 text-sm mb-2">Estimated Time</p>
              <h3 className="font-poppins text-4xl font-bold text-success">
                12 Weeks
              </h3>
              <p className="text-xs text-gray-600 mt-2">To reach goal</p>
            </Card>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <Button fullWidth size="lg">
              Start Learning 🚀
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
