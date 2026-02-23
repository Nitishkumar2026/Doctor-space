import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '../components/Logo';
import FormInput from '../components/FormInput';
import Button from '../components/Button';

function Booking() {
  const navigate = useNavigate();
  const location = useLocation();
  const doctor = location.state?.doctor;

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [patientName, setPatientName] = useState('');
  const [patientAge, setPatientAge] = useState('');
  const [patientGender, setPatientGender] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [symptoms, setSymptoms] = useState('');

  if (!doctor) {
    navigate('/doctors');
    return null;
  }

  const availableDates = [
    { date: '2024-01-15', day: 'Monday' },
    { date: '2024-01-16', day: 'Tuesday' },
    { date: '2024-01-17', day: 'Wednesday' },
    { date: '2024-01-18', day: 'Thursday' },
    { date: '2024-01-19', day: 'Friday' },
  ];

  const availableTimes = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM',
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime || !patientName || !patientAge || !patientGender || !patientPhone) {
      alert('Please fill all required fields');
      return;
    }
    
    const booking = {
      doctor,
      date: selectedDate,
      time: selectedTime,
      patient: {
        name: patientName,
        age: patientAge,
        gender: patientGender,
        phone: patientPhone,
        symptoms
      },
      bookingId: 'BK' + Math.random().toString(36).substr(2, 9).toUpperCase(),
      status: 'Confirmed'
    };

    alert('Appointment booked successfully! Booking ID: ' + booking.bookingId);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Logo onClick={() => navigate('/')} />
            <button 
              onClick={() => navigate('/doctors')}
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              ← Back to Doctors
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Book Appointment</h1>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <div className="text-center mb-4">
                <div className="text-6xl mb-3">{doctor.image}</div>
                <h3 className="text-xl font-semibold text-gray-900">{doctor.name}</h3>
                <p className="text-blue-600 font-medium">{doctor.specialty}</p>
                <p className="text-sm text-gray-600 mt-1">{doctor.experience} experience</p>
              </div>
              
              <div className="border-t pt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Rating</span>
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-400">⭐</span>
                    <span className="font-semibold">{doctor.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Location</span>
                  <span className="font-semibold">{doctor.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Consultation Fee</span>
                  <span className="font-semibold text-blue-600">{doctor.fee}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Select Date *</label>
                <div className="grid grid-cols-5 gap-3">
                  {availableDates.map((dateObj) => (
                    <button
                      key={dateObj.date}
                      type="button"
                      onClick={() => setSelectedDate(dateObj.date)}
                      className={`p-3 rounded-lg border-2 text-center transition-colors ${
                        selectedDate === dateObj.date
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <div className="text-xs text-gray-600">{dateObj.day}</div>
                      <div className="font-semibold">{dateObj.date.split('-')[2]}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Select Time *</label>
                <div className="grid grid-cols-4 gap-3">
                  {availableTimes.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`p-3 rounded-lg border-2 text-center transition-colors ${
                        selectedTime === time
                          ? 'border-blue-600 bg-blue-50 font-semibold'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Patient Details</h3>
                
                <div className="space-y-4">
                  <FormInput
                    label="Full Name"
                    type="text"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder="Enter patient name"
                    required
                    icon="👤"
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <FormInput
                      label="Age"
                      type="number"
                      value={patientAge}
                      onChange={(e) => setPatientAge(e.target.value)}
                      placeholder="Age"
                      required
                    />
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Gender
                        <span className="text-red-500 ml-1">*</span>
                      </label>
                      <select
                        value={patientGender}
                        onChange={(e) => setPatientGender(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <FormInput
                    label="Phone Number"
                    type="tel"
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    placeholder="+91 1234567890"
                    required
                    icon="📱"
                  />

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Symptoms (Optional)</label>
                    <textarea
                      value={symptoms}
                      onChange={(e) => setSymptoms(e.target.value)}
                      rows="3"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Describe your symptoms..."
                    />
                  </div>
                </div>
              </div>

              <Button type="submit" fullWidth>
                Confirm Booking
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
