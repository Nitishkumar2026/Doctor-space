import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    otp: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Side - Blue Circle */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-gray-50 to-gray-100 items-center justify-center p-12">
        <div className="w-80 h-80 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-2xl"></div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          {/* Welcome Text */}
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Create your account</h1>
            <p className="text-gray-500">Get started with secure, guided health support.</p>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="abc..."
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="abc..."
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Mobile Number */}
            <div>
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobile"
                placeholder="+91 ___ ___ ___ ___ ___ ___ ___ ___ ___ ___"
                value={formData.mobile}
                onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Verify OTP Button and OTP Field */}
            <div className="flex gap-3">
              <button
                type="button"
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-md"
              >
                Verify OTP
              </button>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="OTP"
                  value={formData.otp}
                  onChange={(e) => setFormData({...formData, otp: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="eg- abc@gmail.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3.5 rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-md mt-6"
            >
              Sign up
            </button>
          </form>

          {/* Login Link */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <a 
                href="/login" 
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/login');
                }}
                className="text-blue-600 font-semibold hover:text-blue-700 hover:underline"
              >
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
