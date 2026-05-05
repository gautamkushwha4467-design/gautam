import { Link } from 'react-router-dom'
import { Zap, Brain, Compass, Users, TrendingUp, Smartphone } from 'lucide-react'
import { Card, Badge } from '../components/Common'
import Button from '../components/Button'

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-light pt-20 pb-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-in">
              <h1 className="font-poppins text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Find Your Perfect Career Path with AI
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Discover career opportunities that match your skills, interests, and personality. Get personalized guidance from our advanced AI system to accelerate your career growth.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link to="/signup">
                  <Button size="lg">Get Started 🚀</Button>
                </Link>
                <a href="#features">
                  <Button variant="outline" size="lg">
                    Explore Careers
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="flex justify-center items-center">
              <div className="w-64 h-64 gradient-primary rounded-2xl flex items-center justify-center">
                <div className="text-white text-center">
                  <Brain size={80} className="mx-auto mb-4" />
                  <p className="text-xl font-bold">AI Career Guide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary">Features</Badge>
            <h2 className="font-poppins text-4xl font-bold text-gray-900 mt-4 mb-4">
              How CareerAI Works
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our AI-powered platform analyzes your skills, interests, and personality to provide personalized career recommendations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="text-center hover:shadow-medium transition-all">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center text-white">
                  <Zap size={32} />
                </div>
              </div>
              <h3 className="font-poppins text-xl font-bold text-gray-900 mb-2">
                AI Recommendations
              </h3>
              <p className="text-gray-600">
                Get personalized career suggestions based on your unique profile and market trends
              </p>
            </Card>

            {/* Feature 2 */}
            <Card className="text-center hover:shadow-medium transition-all">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center text-white">
                  <Brain size={32} />
                </div>
              </div>
              <h3 className="font-poppins text-xl font-bold text-gray-900 mb-2">
                Skill Analysis
              </h3>
              <p className="text-gray-600">
                Analyze your current skills and identify gaps to reach your dream career
              </p>
            </Card>

            {/* Feature 3 */}
            <Card className="text-center hover:shadow-medium transition-all">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center text-white">
                  <Compass size={32} />
                </div>
              </div>
              <h3 className="font-poppins text-xl font-bold text-gray-900 mb-2">
                Career Roadmap
              </h3>
              <p className="text-gray-600">
                Follow a structured learning path with courses and milestones to achieve your goals
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 gradient-light">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="font-poppins text-4xl font-bold text-gray-900 mb-8">
                Why Choose CareerAI?
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <Users size={24} />
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold text-lg text-gray-900 mb-1">
                      Expert Guidance
                    </h3>
                    <p className="text-gray-600">
                      Learn from industry experts and get real-world insights
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold text-lg text-gray-900 mb-1">
                      Market Insights
                    </h3>
                    <p className="text-gray-600">
                      Stay updated with latest job trends and salary information
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <Smartphone size={24} />
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold text-lg text-gray-900 mb-1">
                      Learn Anywhere
                    </h3>
                    <p className="text-gray-600">
                      Access learning materials on desktop, tablet, or mobile
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="flex justify-center">
              <div className="w-64 h-64 gradient-primary rounded-2xl opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-poppins text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have found their perfect career path with CareerAI
          </p>
          <Link to="/signup">
            <Button size="lg" className="mx-auto">
              Start Your Journey 🚀
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-poppins font-bold mb-4">CareerAI</h3>
              <p className="text-gray-400 text-sm">
                Your AI-powered career guidance platform
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2026 CareerAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
