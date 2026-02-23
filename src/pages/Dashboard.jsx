import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'

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
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 overflow-auto lg:ml-0">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="pl-12 lg:pl-0">
            <h1 className="text-xl sm:text-2xl font-bold text-dark">Dashboard</h1>
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <span className="text-xs sm:text-sm text-gray-500 hidden md:block">Monday, 20 January, 2026</span>
            <Link to="/edit-profile" className="relative">
              <button className="px-3 sm:px-4 py-2 bg-accent text-dark text-xs sm:text-sm font-semibold rounded-lg hover:bg-yellow-400 transition-all whitespace-nowrap">
                Profile Edit
              </button>
            </Link>
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop"
                alt="Dr. Nehar Khanna"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-4 sm:p-6 lg:p-8">
          {/* Welcome Section */}
          <div className="mb-6 sm:mb-8">
            <p className="text-sm sm:text-base text-gray-500 mb-1">Welcome Nehar</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-dark">
              <span className="text-primary">7 Patients</span> remaining today
            </h2>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
            {/* Left Column */}
            <div className="xl:col-span-2 space-y-4 sm:space-y-6">
              {/* Today's Appointment */}
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-card">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <h3 className="text-base sm:text-lg font-bold text-dark">Today's Appointment</h3>
                  <button className="text-xs sm:text-sm text-gray-500 hover:text-dark">See All</button>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  {appointments.map((apt, idx) => (
                    <div key={idx} className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 hover:bg-gray-50 rounded-lg transition-all">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${apt.color} flex items-center justify-center font-semibold flex-shrink-0 text-xs sm:text-sm`}>
                        {apt.initials}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-dark text-sm sm:text-base truncate">{apt.name}</h4>
                        <p className="text-xs sm:text-sm text-gray-500 truncate">{apt.phone}</p>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                        {apt.status === 'pending' && (
                          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full"></span>
                        )}
                        {apt.status === 'confirmed' && (
                          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></span>
                        )}
                        {apt.status === 'cancelled' && (
                          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full"></span>
                        )}
                        <span className="text-xs sm:text-sm font-medium text-dark">{apt.time}</span>
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Revenue & Analytics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-white rounded-xl p-4 sm:p-6 shadow-card">
                  <h3 className="text-base sm:text-lg font-bold text-dark mb-4">Revenue</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500 mb-1">This Week</p>
                      <p className="text-xl sm:text-2xl font-bold text-dark">₹32540</p>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500 mb-1">This Month</p>
                      <p className="text-xl sm:text-2xl font-bold text-dark">₹333240</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 sm:p-6 shadow-card">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base sm:text-lg font-bold text-dark">Analytics</h3>
                    <select className="text-xs sm:text-sm text-gray-500 border-none focus:outline-none">
                      <option>This week</option>
                    </select>
                  </div>
                  <p className="text-xs text-gray-400 mb-4">5% increased by last week</p>
                  
                  {/* Bar Chart */}
                  <div className="flex items-end justify-between h-32 sm:h-40 gap-1 sm:gap-2 mb-4">
                    <div className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full bg-blue-600 rounded-t-lg transition-all" style={{height: '60%'}}></div>
                      <span className="text-xs text-gray-500 font-medium">S</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full bg-blue-600 rounded-t-lg transition-all" style={{height: '70%'}}></div>
                      <span className="text-xs text-gray-500 font-medium">S</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full bg-blue-600 rounded-t-lg transition-all" style={{height: '50%'}}></div>
                      <span className="text-xs text-gray-500 font-medium">M</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full bg-yellow-400 rounded-t-lg transition-all" style={{height: '90%'}}></div>
                      <span className="text-xs text-gray-500 font-medium">T</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full bg-yellow-400 rounded-t-lg transition-all" style={{height: '80%'}}></div>
                      <span className="text-xs text-gray-500 font-medium">W</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full bg-blue-600 rounded-t-lg transition-all" style={{height: '40%'}}></div>
                      <span className="text-xs text-gray-500 font-medium">T</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full bg-blue-600 rounded-t-lg transition-all" style={{height: '75%'}}></div>
                      <span className="text-xs text-gray-500 font-medium">F</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-4 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                      <span className="text-gray-600">Appointment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                      <span className="text-gray-600">Cancelled</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-gray-500 truncate">Total Patient</p>
                        <p className="text-base sm:text-lg font-bold text-gray-900">24</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-gray-500 truncate">New Patient</p>
                        <p className="text-base sm:text-lg font-bold text-gray-900">5</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Doctor Profile & Alerts */}
            <div className="space-y-6">
              {/* Doctor Profile Card */}
              <div className="bg-white rounded-xl p-6 shadow-card text-center">
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop"
                  alt="Dr. Nehar Khanna"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <div className="flex items-center justify-center gap-2 mb-1">
                  <h3 className="text-xl font-bold text-dark">Dr. Nehar Khanna</h3>
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm text-gray-500 mb-6">Neurologists, Surgeon</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Overall Rating</p>
                    <p className="text-2xl font-bold text-dark">4.8</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Total Patients</p>
                    <p className="text-2xl font-bold text-dark">240</p>
                  </div>
                </div>

                <div className="space-y-2 text-left">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Value for money -</span>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">⭐</span>
                      <span className="font-semibold">4.5</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Doctor friendliness -</span>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">⭐</span>
                      <span className="font-semibold">4.6</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Treatment satisfaction -</span>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">⭐</span>
                      <span className="font-semibold">4.9</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Explanation of the health issue -</span>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">⭐</span>
                      <span className="font-semibold">4.8</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Alerts */}
              <div className="bg-white rounded-xl p-6 shadow-card">
                <h3 className="text-lg font-bold text-dark mb-4">Alerts</h3>
                <div className="space-y-3">
                  {alerts.map((alert, idx) => (
                    <div key={idx} className="flex gap-3">
                      <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${alert.type === 'Cancellation' ? 'bg-red-500' : 'bg-green-500'}`}></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-semibold text-dark">{alert.type}</span>
                          <span className="text-xs text-gray-400">{alert.time}</span>
                        </div>
                        <p className="text-sm text-gray-600">{alert.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
