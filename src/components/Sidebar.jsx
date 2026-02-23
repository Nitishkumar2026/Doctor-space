import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import {
  HomeIcon,
  UserGroupIcon,
  CalendarIcon,
  ClipboardDocumentCheckIcon,
  ChevronDownIcon,
  LockClosedIcon,
  EllipsisVerticalIcon
} from '@heroicons/react/24/solid'

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

      {/* Sidebar Content */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-40
        w-[292px] bg-white border-r border-black/5 min-h-screen flex flex-col
        transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Logo */}
        <div className="p-8 pb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/assets/logo.png" alt="Jensei" className="w-10 h-10 object-contain" />
            <span className="text-3xl font-black text-[#011438] tracking-tight">Jensei</span>
          </div>
          <button className="p-1 hover:bg-gray-100 rounded-lg transition-all border border-gray-100">
            <ClipboardDocumentCheckIcon className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-2 overflow-y-auto custom-scrollbar">
          <div className="space-y-1 mb-8">
            <Link
              to="/dashboard"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-gray-50 transition-all font-bold text-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              New Chat
            </Link>
            <Link
              to="/dashboard"
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm ${isActive('/dashboard') ? 'bg-gray-100 text-[#010101]' : 'text-gray-400 hover:bg-gray-50'}`}
            >
              <HomeIcon className="w-5 h-5" />
              Dashboard
            </Link>
            <div className="space-y-1">
              <button
                onClick={() => setIsAppointmentsOpen(!isAppointmentsOpen)}
                className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm ${isActive('/appointments') || isActive('/schedule') ? 'bg-gray-100 text-[#010101]' : 'text-gray-400 hover:bg-gray-50'}`}
              >
                <div className="flex items-center gap-3">
                  <UserGroupIcon className="w-5 h-5" />
                  Appointments
                </div>
                <ChevronDownIcon className={`w-4 h-4 transition-all ${isAppointmentsOpen ? 'rotate-180' : ''}`} />
              </button>
              {isAppointmentsOpen && (
                <div className="ml-10 space-y-3 py-2">
                  <Link to="/appointments" className={`flex items-center gap-3 text-[13px] font-bold ${isActive('/appointments') ? 'text-[#010101]' : 'text-gray-400'}`}>
                    <span className={`w-2 h-2 rounded-full ${isActive('/appointments') ? 'bg-[#FFCC00]' : 'bg-gray-200'}`}></span>
                    Appointments
                  </Link>
                  <Link to="/schedule" className={`flex items-center gap-3 text-[13px] font-bold ${isActive('/schedule') ? 'text-[#010101]' : 'text-gray-400'}`}>
                    <span className={`w-2 h-2 rounded-full ${isActive('/schedule') ? 'bg-purple-600' : 'bg-gray-200'}`}></span>
                    Schedule
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/doctor-profile"
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm ${isActive('/doctor-profile') ? 'bg-gray-100 text-[#011438]' : 'text-gray-400 hover:bg-gray-50'}`}
            >
              <ClipboardDocumentCheckIcon className="w-5 h-5" />
              Prescriptions
            </Link>
          </div>

          <div className="px-4 mb-4">
            <h3 className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Recent</h3>
          </div>
          <div className="space-y-1 px-2">
            {[
              "Follow-up on last week's feve...",
              "Query about lab report (Bloo...",
              "Uploaded MRI scan ...",
              "Discussion with Dr. Anya Shar..."
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between px-4 py-2.5 rounded-xl group hover:bg-gray-50 cursor-pointer">
                <span className={`text-[13px] font-bold transition-all ${i === 2 ? 'text-[#010101]' : 'text-gray-400 group-hover:text-gray-600'}`}>
                  {item}
                </span>
                {i === 2 && <EllipsisVerticalIcon className="w-4 h-4 text-gray-400" />}
              </div>
            ))}
          </div>
        </nav>

        {/* Bottom Section */}
        <div className="p-6 space-y-6">
          <button className="w-full flex items-center justify-center gap-3 py-4 bg-white border border-gray-100 rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-md transition-all">
            <LockClosedIcon className="w-5 h-5 text-[#010101]" />
            <span className="font-black text-sm text-[#010101]">Private Mode</span>
          </button>

          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img src="https://i.pravatar.cc/150?img=1" className="w-10 h-10 rounded-full border border-gray-100 object-cover" />
                <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div>
                <p className="text-sm font-black text-[#010101]">Tahira Meher</p>
                <p className="text-[11px] font-bold text-gray-400">Free</p>
              </div>
            </div>
            <div className="w-10 h-5 bg-gray-200 rounded-full relative p-1 cursor-pointer transition-colors active:bg-gray-300">
              <div className="w-3 h-3 bg-white rounded-full shadow-sm"></div>
            </div>
          </div>

          <Link
            to="/login"
            className="bg-gray-50 flex items-center justify-center gap-3 w-full py-4 rounded-xl border border-gray-100 text-gray-400 font-bold text-sm hover:bg-gray-100 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Log out
          </Link>
        </div>
      </div>
    </>
  )
}

export default Sidebar
