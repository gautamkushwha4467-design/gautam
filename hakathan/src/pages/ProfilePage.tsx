import { useState } from 'react'
import { Camera, Edit2, Save } from 'lucide-react'
import { Card, Badge, Avatar } from '../components/Common'
import Button from '../components/Button'
import { Input, Select, TextArea } from '../components/Form'

export default function ProfilePage() {
  const user = JSON.parse(localStorage.getItem('user') || '{}')
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: user.name || '',
    email: user.email || '',
    age: user.age || '',
    education: user.education || '',
    bio: user.bio || 'Passionate about technology and career growth',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    localStorage.setItem('user', JSON.stringify({ ...user, ...formData }))
    setIsEditing(false)
  }

  return (
    <div className="min-h-screen bg-light py-12">
      <div className="container mx-auto max-w-2xl px-4">
        <div className="animate-fade-in">
          {/* Header */}
          <Card className="p-8 gradient-light mb-8">
            <div className="flex items-end gap-6">
              <div className="relative">
                <Avatar name={user.name} size="lg" />
                <button className="absolute bottom-0 right-0 bg-primary text-white p-3 rounded-full hover:bg-opacity-90 transition-all">
                  <Camera size={20} />
                </button>
              </div>
              <div className="flex-1">
                <h1 className="font-poppins text-3xl font-bold text-gray-900 mb-2">
                  {user.name}
                </h1>
                <p className="text-gray-600">{user.email}</p>
              </div>
              <Button
                onClick={() => setIsEditing(!isEditing)}
                variant={isEditing ? 'secondary' : 'primary'}
              >
                {isEditing ? 'Cancel' : <Edit2 size={20} className="mr-2" />}
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </Button>
            </div>
          </Card>

          {/* Profile Information */}
          <Card className="mb-8">
            <h2 className="font-poppins text-2xl font-bold text-gray-900 mb-6">
              Personal Information
            </h2>

            {isEditing ? (
              <div className="space-y-4">
                <Input
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <Input
                  label="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled
                />
                <Input
                  label="Age"
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                />
                <Select
                  label="Education Level"
                  name="education"
                  options={[
                    { value: 'highschool', label: 'High School' },
                    { value: 'bachelors', label: 'Bachelor\'s Degree' },
                    { value: 'masters', label: 'Master\'s Degree' },
                  ]}
                  value={formData.education}
                  onChange={(value) => handleChange({ target: { name: 'education', value } } as any)}
                />
                <TextArea
                  label="Bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  rows={4}
                />
                <Button fullWidth onClick={handleSave}>
                  <Save size={20} /> Save Changes
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600 text-sm mb-1">Full Name</p>
                  <p className="font-medium text-gray-900">{formData.name}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">Email</p>
                  <p className="font-medium text-gray-900">{formData.email}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">Age</p>
                  <p className="font-medium text-gray-900">{formData.age || 'Not specified'}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">Education</p>
                  <p className="font-medium text-gray-900">{formData.education || 'Not specified'}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-1">Bio</p>
                  <p className="font-medium text-gray-900">{formData.bio}</p>
                </div>
              </div>
            )}
          </Card>

          {/* Skills Section */}
          <Card className="mb-8">
            <h2 className="font-poppins text-2xl font-bold text-gray-900 mb-6">
              My Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {(user.skills || ['Python', 'JavaScript', 'React']).map((skill: string) => (
                <Badge key={skill} variant="primary">{skill}</Badge>
              ))}
            </div>
          </Card>

          {/* Interests Section */}
          <Card className="mb-8">
            <h2 className="font-poppins text-2xl font-bold text-gray-900 mb-6">
              My Interests
            </h2>
            <div className="flex flex-wrap gap-2">
              {(user.interests || ['Coding', 'AI', 'Technology']).map((interest: string) => (
                <Badge key={interest} variant="secondary">{interest}</Badge>
              ))}
            </div>
          </Card>

          {/* Account Actions */}
          <Card>
            <h2 className="font-poppins text-2xl font-bold text-gray-900 mb-6">
              Account Settings
            </h2>
            <div className="space-y-3">
              <Button fullWidth variant="outline">
                Change Password
              </Button>
              <Button fullWidth variant="outline">
                Download My Data
              </Button>
              <Button fullWidth variant="danger">
                Delete Account
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
