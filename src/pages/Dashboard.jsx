import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'
import {
  ChevronDownIcon,
  UserGroupIcon,
  UserPlusIcon,
  CheckBadgeIcon,
  StarIcon
} from '@heroicons/react/24/solid'

function Dashboard() {
  const appointments = [
    { name: 'Taylor Swan', phone: '+91 1234567891', time: '9:30 PM', status: 'pending', initials: 'SA', color: 'bg-orange-100 text-orange-600' },
    { name: 'Shayla Afroge', phone: '+91 9876543210', time: '9:30 PM', status: 'pending', initials: 'SA', color: 'bg-orange-100 text-orange-600' },
    { name: 'Taylor Swan', phone: '+91 9876543210', time: '5:30 PM', status: 'confirmed', initials: 'TS', color: 'bg-blue-100 text-blue-600' },
    { name: 'Belgium Shathi', phone: '+91 9876543210', time: '5:30 PM', status: 'confirmed', initials: 'BS', color: 'bg-purple-100 text-purple-600' },
    { name: 'Taylor Swan', phone: '+91 9876543210', time: '5:30 PM', status: 'cancelled', initials: 'TS', color: 'bg-blue-100 text-blue-600' },
    { name: 'Taylor Swan', phone: '+91 9876543210', time: '5:30 PM', status: 'confirmed', initials: 'TS', color: 'bg-blue-100 text-blue-600' },
  ]

  const alerts = [
    { type: 'Cancellation', message: 'Sarah William cancelled the appointment for 5:45 PM tomorrow', time: '08:30 PM | today', color: 'bg-red-100' },
    { type: 'Appointment', message: 'Sarah William cancelled the appointment for 5:45 PM tomorrow', time: '08:30 PM | today', color: 'bg-green-100' },
    { type: 'Appointment', message: 'Sarah William cancelled the appointment for 5:45 PM tomorrow', time: '08:30 PM | today', color: 'bg-green-100' },
  ]

  return (
    <div className="flex h-screen bg-[#F8F9FB] overflow-hidden">
      <Sidebar />

      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="px-8 py-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-[#010101]">Dashboard</h1>
          <div className="text-sm font-bold text-gray-400">Monday, 20 January, 2026</div>
        </div>

        {/* Main Content */}
        <div className="px-8 pb-8 flex flex-col lg:flex-row gap-8">
          <div className="flex-1 space-y-8">
            {/* Welcome Section */}
            <div>
              <p className="text-base font-medium text-gray-500 mb-1">Welcome Nehar</p>
              <h2 className="text-4xl font-black text-[#010101]">
                <span className="text-[#1E69FF]">7 Patients</span> remaining today
              </h2>
            </div>

            {/* Today's Appointment */}
            <div className="bg-white rounded-[32px] p-8 shadow-[0_24px_64px_-16px_rgba(0,0,0,0.04)]">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-[#011438]">Today's Appointment</h3>
                <button className="text-sm font-bold text-gray-400 hover:text-dark">See All</button>
              </div>
              <div className="space-y-1">
                {appointments.map((apt, idx) => (
                  <div key={idx} className="flex items-center gap-4 py-3 group cursor-pointer hover:bg-gray-50/50 rounded-2xl px-2 transition-all">
                    <div className={`w-12 h-12 rounded-full ${apt.color} flex items-center justify-center font-bold text-sm tracking-tighter`}>
                      {apt.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-[#011438] text-base">{apt.name}</h4>
                      <p className="text-xs font-semibold text-gray-400">{apt.phone}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <span className={`w-3 h-3 rounded-full ${apt.status === 'pending' ? 'bg-yellow-400' :
                          apt.status === 'confirmed' ? 'bg-green-500' : 'bg-red-500'
                          }`}></span>
                        <span className="text-sm font-black text-[#011438]">{apt.time}</span>
                      </div>
                      <ChevronDownIcon className="w-5 h-5 text-gray-300 transition-transform group-hover:translate-y-0.5" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Revenue & Analytics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-[32px] p-8 shadow-[0_24px_64px_-16px_rgba(0,0,0,0.04)]">
                <h3 className="text-xl font-bold text-[#011438] mb-8">Revenue</h3>
                <div className="space-y-8">
                  <div>
                    <p className="text-sm font-bold text-gray-400 mb-2">This Week</p>
                    <p className="text-3xl font-black text-[#010101]">₹32540</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-400 mb-2">This Month</p>
                    <p className="text-3xl font-black text-[#010101]">₹333240</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[32px] p-8 shadow-[0_24px_64px_-16px_rgba(0,0,0,0.04)]">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-[#011438]">Analytics</h3>
                  <div className="flex items-center gap-1 cursor-pointer">
                    <span className="text-sm font-bold text-gray-400">This week</span>
                    <ChevronDownIcon className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
                <p className="text-[11px] font-bold text-gray-400 mb-6 uppercase tracking-wider">5% increased by last week</p>

                {/* Bar Chart */}
                <div className="flex items-end justify-between h-32 gap-3 mb-6 px-1">
                  {[
                    { h: '60%', d: 'S', color: 'bg-[#1E69FF]' },
                    { h: '75%', d: 'S', color: 'bg-[#1E69FF]' },
                    { h: '50%', d: 'M', color: 'bg-[#1E69FF]' },
                    { h: '90%', d: 'T', color: 'bg-[#FFCC00]' },
                    { h: '80%', d: 'W', color: 'bg-[#FFCC00]' },
                    { h: '40%', d: 'T', color: 'bg-[#1E69FF]' },
                    { h: '70%', d: 'F', color: 'bg-[#1E69FF]' },
                  ].map((bar, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-3">
                      <div className={`w-full ${bar.color} rounded-lg transition-all hover:opacity-80`} style={{ height: bar.h }}></div>
                      <span className="text-[11px] text-gray-400 font-bold uppercase">{bar.d}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-[#1E69FF] rounded-full"></span>
                    <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Appointment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-[#FFCC00] rounded-full"></span>
                    <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Cancelled</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#1E69FF] rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/20">
                      <UserGroupIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">Total Patient</p>
                      <p className="text-xl font-black text-[#010101]">24</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#4ADE80] rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/20">
                      <UserPlusIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">New Patient</p>
                      <p className="text-xl font-black text-[#010101]">5</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Profile & Alerts */}
          <div className="w-full lg:w-[400px] space-y-8">
            {/* Profile Card */}
            <div className="bg-white rounded-[32px] p-8 shadow-[0_24px_64px_-16px_rgba(0,0,0,0.04)] relative">
              <Link to="/edit-profile" className="absolute top-6 right-6">
                <button className="px-4 py-1.5 bg-[#D4FF00] text-[#010101] text-[11px] font-bold rounded-lg hover:shadow-lg transition-all border border-lime-400">
                  Profile Edit
                </button>
              </Link>

              <div className="flex flex-col items-center mb-8">
                <div className="relative mb-6">
                  <img
                    src="/assets/doctor.png"
                    alt="Dr. Nehar Khanna"
                    className="w-28 h-28 rounded-full object-cover border-4 border-gray-50"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-md">
                    <CheckBadgeIcon className="w-8 h-8 text-[#1E69FF]" />
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-2xl font-black text-[#010101]">Dr. Nehar Khanna</h3>
                </div>
                <p className="text-sm font-bold text-gray-400">Neurologists, Surgeon</p>
              </div>

              <div className="grid grid-cols-2 gap-8 mb-8 pb-8 border-b border-gray-50">
                <div className="text-center">
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1 text-left">Overall Rating</p>
                  <p className="text-3xl font-black text-[#010101] text-left">4.8</p>
                </div>
                <div className="text-center">
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1 text-left">Total Patients</p>
                  <p className="text-3xl font-black text-[#010101] text-left">240</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: 'Value for money', score: '4.5' },
                  { label: 'Doctor friendliness', score: '4.6' },
                  { label: 'Treatment satisfaction', score: '4.9' },
                  { label: 'Explanation of health', score: '4.8' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between group">
                    <span className="text-[13px] font-bold text-gray-500 group-hover:text-dark transition-colors">{item.label} -</span>
                    <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-0.5 rounded-lg border border-gray-100">
                      <StarIcon className="w-3.5 h-3.5 text-[#FFCC00]" />
                      <span className="text-sm font-black text-[#010101]">{item.score}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Alerts Card */}
            <div className="bg-white rounded-[32px] p-8 shadow-[0_24px_64px_-16px_rgba(0,0,0,0.04)]">
              <h3 className="text-xl font-bold text-[#011438] mb-8">Alerts</h3>
              <div className="space-y-6">
                {alerts.map((alert, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className={`w-3 h-3 rounded-full mt-1.5 flex-shrink-0 border-2 border-white shadow-sm ${alert.type === 'Cancellation' ? 'bg-[#FF4D4D]' : 'bg-[#4ADE80]'}`}></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-base font-bold text-[#011438]">{alert.type}</span>
                        <span className="text-[10px] font-bold text-gray-400 tracking-tighter uppercase">{alert.time}</span>
                      </div>
                      <p className="text-[13px] font-medium text-gray-500 leading-relaxed">{alert.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
