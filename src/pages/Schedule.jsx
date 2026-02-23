import { useState } from 'react'
import Sidebar from '../components/Sidebar'

function Schedule() {
  const [selectedDay, setSelectedDay] = useState('Saturday')
  const [viewMode, setViewMode] = useState('Standard')

  const days = [
    { name: 'Saturday', active: true },
    { name: 'Sunday', active: false },
    { name: 'Monday', active: true },
    { name: 'Tuesday', active: false }
  ]

  const timeSlots = {
    morning: [
      '7:00 AM', '7:30 AM', '7:45 AM', '7:15 AM', '8:00 AM',
      '8:15 AM', '8:30 AM', '8:45 AM', '9:00 AM', '9:15 AM',
      '9:30 AM', '9:45 AM', '10:15 AM', '10:00 AM', '10:30 AM'
    ],
    afternoon: [],
    evening: [
      '7:00 AM', '7:30 AM', '7:15 AM', '7:45 AM', '8:00 AM',
      '8:15 AM', '8:30 AM', '8:45 AM', '9:00 AM', '9:15 AM',
      '9:30 AM', '9:45 AM', '10:00 AM', '10:30 AM', '10:15 AM'
    ],
    night: [
      '7:00 AM', '7:15 AM', '7:30 AM', '7:45 AM', '8:00 AM',
      '8:15 AM', '8:30 AM', '8:45 AM', '9:00 AM', '9:15 AM',
      '9:30 AM', '9:45 AM', '10:00 AM', '10:30 AM', '10:15 AM'
    ]
  }

  const weekDays = ['Sat', 'Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri']
  const currentMonth = 'January 2026'

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-4 sm:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Schedules</h1>
            <div className="relative flex-1 sm:flex-initial">
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 w-full sm:w-80 text-sm"
              />
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Schedule */}
            <div className="lg:col-span-2 space-y-6">
              {/* Day Selector */}
              <div className="flex gap-3 overflow-x-auto pb-2">
                {days.map((day) => (
                  <button
                    key={day.name}
                    onClick={() => setSelectedDay(day.name)}
                    className={`px-6 py-3 rounded-lg font-medium whitespace-nowrap transition-all flex items-center gap-2 ${selectedDay === day.name
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300'
                      }`}
                  >
                    {day.name}
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${selectedDay === day.name ? 'bg-white' : 'bg-gray-200'
                      }`}>
                      <div className={`w-3 h-3 rounded-full ${day.active ? 'bg-blue-600' : 'bg-gray-400'
                        }`}></div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Morning Section */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    Morning <span className="text-sm font-normal text-gray-500">(90 minutes active)</span>
                  </h3>
                  <button>
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </button>
                </div>
                <div className="grid grid-cols-5 gap-3">
                  {timeSlots.morning.map((time, idx) => (
                    <button
                      key={idx}
                      className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${time === '7:45 AM' || time === '9:00 AM'
                          ? 'bg-blue-600 text-white shadow-md'
                          : time === '10:15 AM' || time === '10:30 AM'
                            ? 'bg-gray-100 text-gray-400'
                            : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                        }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Afternoon Section */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    Afternoon <span className="text-sm font-normal text-gray-500">(120 minutes active)</span>
                  </h3>
                  <button>
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Evening Section */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    Evening <span className="text-sm font-normal text-gray-500">(90 minutes active)</span>
                  </h3>
                  <button>
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </button>
                </div>
                <div className="grid grid-cols-5 gap-3">
                  {timeSlots.evening.map((time, idx) => (
                    <button
                      key={idx}
                      className="px-4 py-2.5 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100 transition-all"
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Night Section */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    Night <span className="text-sm font-normal text-gray-500">(90 minutes active)</span>
                  </h3>
                  <button>
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Calendar & Settings */}
            <div className="space-y-6">
              {/* Calendar */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <h3 className="text-lg font-bold text-gray-900">{currentMonth}</h3>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-2 mb-3">
                  {weekDays.map((day) => (
                    <div key={day} className="text-center text-xs font-medium text-gray-500 py-2">
                      {day}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-2">
                  {[...Array(31)].map((_, i) => {
                    const day = i + 1
                    const isSelected = day === 14
                    const isHighlighted = day === 15 || day === 20 || day === 23 || day === 29 || day === 30
                    return (
                      <button
                        key={i}
                        className={`aspect-square flex items-center justify-center text-sm rounded-lg transition-all ${isSelected
                            ? 'bg-gray-900 text-white font-bold'
                            : isHighlighted
                              ? 'text-red-500 font-medium'
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                      >
                        {day}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Settings */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex gap-2 mb-6">
                  <button
                    onClick={() => setViewMode('Standard')}
                    className={`flex-1 py-2 rounded-lg font-medium transition-all ${viewMode === 'Standard'
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-600 hover:bg-gray-50'
                      }`}
                  >
                    Standard
                  </button>
                  <button
                    onClick={() => setViewMode('Custom')}
                    className={`flex-1 py-2 rounded-lg font-medium transition-all ${viewMode === 'Custom'
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-600 hover:bg-gray-50'
                      }`}
                  >
                    Custom
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-2">
                    {weekDays.map((day) => (
                      <button
                        key={day}
                        className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${day === 'Sat'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 mt-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Opening Hour</label>
                    <div className="flex gap-2 items-center">
                      <select className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                        <option>07</option>
                      </select>
                      <span className="text-gray-500">:</span>
                      <select className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                        <option>00</option>
                      </select>
                      <div className="flex gap-1">
                        <button className="px-3 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium">AM</button>
                        <button className="px-3 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium">PM</button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Closing Hour</label>
                    <div className="flex gap-2 items-center">
                      <select className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                        <option>11</option>
                      </select>
                      <span className="text-gray-500">:</span>
                      <select className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                        <option>30</option>
                      </select>
                      <div className="flex gap-1">
                        <button className="px-3 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium">AM</button>
                        <button className="px-3 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium">PM</button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Time slot Duration</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                      <option>15 Minutes</option>
                      <option>30 Minutes</option>
                      <option>45 Minutes</option>
                      <option>60 Minutes</option>
                    </select>
                    <p className="text-xs text-gray-500 mt-1 text-right">57 total slots ↓</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Schedule
