import Sidebar from '../components/Sidebar'

function Appointments() {
  const appointments = [
    { name: 'Jiya Das', phone: '+91 9876543210', date: '27-09-2025', time: 'Afternoon - 02:30 PM', notes: 'Experiencing severe stomach ache', status: 'confirmed', initials: 'JD', color: 'bg-orange-100 text-orange-600' },
    { name: 'Aisha Sharma', phone: '+91 9876543165', date: '27-09-2025', time: 'Afternoon - 02:30 PM', notes: 'High fever and body pain', status: 'confirmed', initials: 'AS', color: 'bg-cyan-100 text-cyan-600' },
    { name: 'Vihaan Reddy', phone: '+91 7654321098', date: '27-09-2025', time: 'Afternoon - 02:30 PM', notes: 'Persistent cough and cold', status: 'confirmed', initials: 'VR', color: 'bg-purple-100 text-purple-600' },
    { name: 'Priya Nair', phone: '+91 4321098765', date: '27-09-2025', time: 'Afternoon - 02:30 PM', notes: 'Skin rash and itching', status: 'confirmed', initials: 'PN', color: 'bg-yellow-100 text-yellow-600' },
    { name: 'Rahul Khanna', phone: '+91 3210987654', date: '27-09-2025', time: 'Afternoon - 02:30 PM', notes: 'Breathing difficulty', status: 'cancelled', initials: 'RK', color: 'bg-pink-100 text-pink-600' },
    { name: 'Siya Kapoor', phone: '+91 6543210987', date: '27-09-2025', time: 'Afternoon - 02:30 PM', notes: 'Complaining about headache', status: 'confirmed', initials: 'SK', color: 'bg-teal-100 text-teal-600' },
    { name: 'Arnav Roy', phone: '+91 5432109876', date: '27-09-2025', time: 'Afternoon - 02:30 PM', notes: 'Feeling dizzy and weak', status: 'confirmed', initials: 'AR', color: 'bg-green-100 text-green-600' },
    { name: 'Varun Joshi', phone: '+91 1098765432', date: '27-09-2025', time: 'Afternoon - 02:30 PM', notes: 'Numbness in hands', status: 'confirmed', initials: 'VJ', color: 'bg-red-100 text-red-600' },
    { name: 'Neha Mehra', phone: '+91 2109876543', date: '27-09-2025', time: 'Afternoon - 02:30 PM', notes: 'Swollen ankles and feet', status: 'cancelled', initials: 'NM', color: 'bg-lime-100 text-lime-600' },
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-dark">Appointments</h1>
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary w-80"
                />
                <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Appointments Table */}
        <div className="p-8">
          <div className="bg-white rounded-xl shadow-card overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Patient Detail</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Date & Time</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {appointments.map((apt, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full ${apt.color} flex items-center justify-center font-semibold flex-shrink-0`}>
                          {apt.initials}
                        </div>
                        <div>
                          <h4 className="font-semibold text-dark">{apt.name}</h4>
                          <p className="text-sm text-gray-500">{apt.phone}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full flex-shrink-0 ${apt.status === 'confirmed' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                        <div>
                          <p className="font-medium text-dark">{apt.date}</p>
                          <p className="text-sm text-gray-500">{apt.time}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-gray-600">{apt.notes}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appointments
