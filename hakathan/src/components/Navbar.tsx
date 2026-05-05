import { Link, useNavigate } from 'react-router-dom'
import { Menu, X, LogOut, User, Settings } from 'lucide-react'
import { useState } from 'react'

interface NavbarProps {
  isAuthenticated: boolean
}

export default function Navbar({ isAuthenticated }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('user')
    navigate('/')
    window.location.reload()
  }

  return (
    <nav className="bg-white shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center text-white font-bold">
            AI
          </div>
          <span className="font-poppins font-bold text-lg hidden sm:inline">CareerAI</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {!isAuthenticated ? (
            <>
              <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
                Features
              </Link>
              <Link to="/login" className="text-gray-600 hover:text-primary transition-colors">
                Login
              </Link>
              <Link
                to="/signup"
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all"
              >
                Signup
              </Link>
            </>
          ) : (
            <>
              <Link to="/dashboard" className="text-gray-600 hover:text-primary transition-colors">
                Dashboard
              </Link>
              <Link to="/chat" className="text-gray-600 hover:text-primary transition-colors">
                Chat
              </Link>
              <div className="relative">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center gap-2 text-gray-600 hover:text-primary"
                >
                  <User size={20} />
                </button>
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-medium py-2">
                    <Link
                      to="/profile"
                      className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-light hover:text-primary transition-colors"
                    >
                      <User size={16} /> Profile
                    </Link>
                    <Link
                      to="/admin"
                      className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-light hover:text-primary transition-colors"
                    >
                      <Settings size={16} /> Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left flex items-center gap-2 px-4 py-2 text-error hover:bg-light transition-colors"
                    >
                      <LogOut size={16} /> Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-light transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 p-4 animate-fade-in">
          <div className="flex flex-col gap-4">
            {!isAuthenticated ? (
              <>
                <Link to="/" className="text-gray-600 hover:text-primary py-2">
                  Home
                </Link>
                <Link to="/" className="text-gray-600 hover:text-primary py-2">
                  Features
                </Link>
                <Link to="/login" className="text-gray-600 hover:text-primary py-2">
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-6 py-2 bg-primary text-white rounded-lg text-center"
                >
                  Signup
                </Link>
              </>
            ) : (
              <>
                <Link to="/dashboard" className="text-gray-600 hover:text-primary py-2">
                  Dashboard
                </Link>
                <Link to="/chat" className="text-gray-600 hover:text-primary py-2">
                  Chat
                </Link>
                <Link to="/profile" className="text-gray-600 hover:text-primary py-2">
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-left text-error py-2"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
