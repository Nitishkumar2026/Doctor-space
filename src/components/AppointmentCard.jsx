function AppointmentCard({ appointment, onAction, actionLabel = 'View Details', actionVariant = 'primary' }) {
  const variantStyles = {
    primary: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800',
    secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
    danger: 'bg-red-50 text-red-600 hover:bg-red-100'
  };

  const statusColors = {
    upcoming: 'bg-green-100 text-green-800',
    completed: 'bg-gray-100 text-gray-800',
    cancelled: 'bg-red-100 text-red-800'
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start space-x-4">
          <div className="text-4xl">{appointment.doctorImage}</div>
          <div>
            <h3 className="font-semibold text-gray-900 text-lg">{appointment.doctorName}</h3>
            <p className="text-blue-600">{appointment.specialty}</p>
          </div>
        </div>
        {appointment.status && (
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[appointment.status]}`}>
            {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
          </span>
        )}
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center text-gray-600">
          <span className="mr-2">📅</span>
          <span>{appointment.date}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <span className="mr-2">🕐</span>
          <span>{appointment.time}</span>
        </div>
        {appointment.location && (
          <div className="flex items-center text-gray-600">
            <span className="mr-2">📍</span>
            <span>{appointment.location}</span>
          </div>
        )}
      </div>

      {onAction && (
        <button
          onClick={() => onAction(appointment)}
          className={`w-full py-3 rounded-lg font-medium transition-all shadow-md hover:shadow-lg ${variantStyles[actionVariant]}`}
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}

export default AppointmentCard;
