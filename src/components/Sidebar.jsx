import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

function Sidebar() {
  const location = useLocation()
  const [isAppointmentsOpen, setIsAppointmentsOpen] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const isActive = (path) => location.pathname === path

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg"
      >
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-40
        w-64 bg-white border-r border-gray-200 h-screen flex flex-col
        transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
      {/* Logo */}
      <div className="p-6 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <img 
            src="/assets/logo.png" 
            alt="Jensei Logo" 
            className="w-10 h-10 object-contain"
          />
          <span className="text-lg font-bold text-gray-900">Jensei</span>
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-all"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-4 overflow-y-auto">
        {/* New Chat */}
        <Link
          to="/dashboard"
          className="flex items-center gap-3 px-4 py-3 rounded-lg mb-2 text-gray-600 hover:bg-gray-50 transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          <span className="font-medium">New Chat</span>
        </Link>

        {/* Dashboard */}
        <Link
          to="/dashboard"
          className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-all ${
            isActive('/dashboard')
              ? 'bg-blue-600 text-white'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="font-medium">Dashboard</span>
        </Link>

        {/* Appointments Dropdown */}
        <div className="mb-2">
          <button
            onClick={() => setIsAppointmentsOpen(!isAppointmentsOpen)}
            className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg transition-all ${
              isActive('/appointments') || isActive('/schedule')
                ? 'bg-gray-100 text-gray-900'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">Appointments</span>
            </div>
            <svg 
              className={`w-4 h-4 transition-transform ${isAppointmentsOpen ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {isAppointmentsOpen && (
            <div className="ml-8 mt-1 space-y-1">
              <Link
                to="/appointments"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all ${
                  isActive('/appointments')
                    ? 'text-blue-600 font-medium bg-blue-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${isActive('/appointments') ? 'bg-yellow-400' : 'bg-gray-400'}`}></span>
                Appointments
              </Link>
              <Link
                to="/schedule"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all ${
                  isActive('/schedule')
                    ? 'text-blue-600 font-medium bg-blue-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${isActive('/schedule') ? 'bg-blue-600' : 'bg-gray-400'}`}></span>
                Schedule
              </Link>
            </div>
          )}
        </div>

        {/* Prescriptions */}
        <Link
          to="/doctor-profile"
          className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-all ${
            isActive('/doctor-profile')
              ? 'bg-gray-100 text-gray-900'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="font-medium">Prescriptions</span>
        </Link>

        {/* Recent Section */}
        <div className="mt-6 mb-3">
          <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Recent</h3>
        </div>

        <div className="space-y-1">
          <button className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-all">
            Follow-up on last week's feve...
          </button>
          <button className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-all">
            Query about lab report (Bloo...
          </button>
          <button className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-all bg-gray-50">
            <span>Uploaded MRI scan ...</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </button>
          <button className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-all">
            Discussion with Dr. Anya Shar...
          </button>
        </div>
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-gray-200 space-y-3">
        {/* Private Mode */}
        <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-all">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span className="font-medium">Private Mode</span>
        </button>

        {/* User Profile */}
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/150?img=1"
              alt="User"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-sm font-medium text-gray-700">Free</span>
          </div>
          <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-all">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>
        </div>

        {/* Logout */}
        <Link
          to="/login"
          className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span className="font-medium">Log out</span>
        </Link>
      </div>
      </div>
    </>
  )
}

export default Sidebar
