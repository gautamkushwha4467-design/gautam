import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import OnboardingPage from './pages/OnboardingPage'
import Dashboard from './pages/Dashboard'
import CareerDetailPage from './pages/CareerDetailPage'
import SkillGapAnalysis from './pages/SkillGapAnalysis'
import LearningRoadmap from './pages/LearningRoadmap'
import ChatbotPage from './pages/ChatbotPage'
import ProfilePage from './pages/ProfilePage'
import AdminPanel from './pages/AdminPanel'

function App() {
  const isAuthenticated = localStorage.getItem('user') !== null

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <LoginPage />} />
        <Route path="/career/:id" element={<CareerDetailPage />} />
        <Route path="/skill-gap" element={<SkillGapAnalysis />} />
        <Route path="/roadmap" element={<LearningRoadmap />} />
        <Route path="/chat" element={<ChatbotPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  )
}

export default App
