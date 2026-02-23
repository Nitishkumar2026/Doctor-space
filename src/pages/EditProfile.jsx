import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'

function EditProfile() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Edit Profile</h1>
            <div className="flex items-center gap-3">
              <Link to="/dashboard">
                <button className="px-6 py-2 text-gray-600 font-semibold rounded-lg hover:bg-gray-100 transition-all">
                  Cancel
                </button>
              </Link>
              <button className="px-6 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-500 transition-all">
                Save Changes
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 max-w-5xl">
          {/* Profile Completion */}
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 mb-8">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Profile Completion</h3>
                <p className="text-sm text-gray-600">Complete Basic Info and About sections to reach 100%</p>
              </div>
              <span className="text-3xl font-bold text-green-600">80%</span>
            </div>
            <div className="w-full bg-green-200 rounded-full h-2.5 mb-2">
              <div className="bg-green-500 h-2.5 rounded-full" style={{width: '80%'}}></div>
            </div>
            <p className="text-xs text-gray-600">Basic Info 20%, About 10%, Education 15%, Experience 15%, Availability 20%</p>
          </div>

          {/* Basic Information */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900">Basic Information</h2>
            </div>

            {/* Profile Photo */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-900 mb-3">Profile Photo</label>
              <div className="flex items-center gap-6">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop"
                    alt="Dr. Jonathan Reed"
                    className="w-20 h-20 rounded-full object-cover border-2 border-gray-100"
                  />
                  <button className="absolute bottom-0 right-0 w-7 h-7 bg-green-500 rounded-full flex items-center justify-center border-2 border-white shadow-md hover:bg-green-600 transition-all">
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                  </button>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-3">Recommended: 400x400px, JPG or PNG</p>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 text-sm text-green-600 font-medium hover:bg-green-50 rounded-lg transition-all">
                      Change
                    </button>
                    <button className="px-4 py-2 text-sm text-red-600 font-medium hover:bg-red-50 rounded-lg transition-all">
                      Remove
                    </button>
                    <button className="px-4 py-2 text-sm text-gray-600 font-medium hover:bg-gray-50 rounded-lg transition-all">
                      Crop
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  defaultValue="Dr. Jonathan Reed"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Specialization</label>
                <input
                  type="text"
                  defaultValue="Cardiologist"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Years of Experience</label>
                <input
                  type="text"
                  defaultValue="12"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Consultation Fee ($)</label>
                <input
                  type="text"
                  defaultValue="150"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  defaultValue="Jonathan@gmail.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  defaultValue="+1 (555) 012-3456"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-4 gap-4 mt-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Linked in</label>
                <input
                  type="url"
                  placeholder="https://www.linkedin..."
                  defaultValue="https://www.linkedin..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">YouTube</label>
                <input
                  type="url"
                  placeholder="https://www.youtube..."
                  defaultValue="https://www.youtube..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Instagram</label>
                <input
                  type="url"
                  placeholder="https://www.instagram..."
                  defaultValue="https://www.instagram..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                <input
                  type="url"
                  placeholder="https://www.drnehaclinic..."
                  defaultValue="https://www.drnehaclinic..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
            </div>

            {/* Caption */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Caption</label>
              <textarea
                rows="3"
                defaultValue="Helping people fall in love with their reflection again."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              ></textarea>
              <p className="text-xs text-gray-500 text-right mt-1">09 / 10 WORDS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProfile
