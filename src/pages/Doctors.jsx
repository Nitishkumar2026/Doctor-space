import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '../components/Logo';
import Button from '../components/Button';

function Doctors() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialSpecialty = location.state?.specialty || '';
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState(initialSpecialty);
  const [selectedLocation, setSelectedLocation] = useState('');

  const doctors = [
    {
      id: 1,
      name: 'Dr. Rajesh Kumar',
      specialty: 'Cardiologist',
      experience: '15 years',
      rating: 4.8,
      reviews: 234,
      location: 'Mumbai',
      fee: '₹1000',
      available: 'Today',
      image: '👨‍⚕️'
    },
    {
      id: 2,
      name: 'Dr. Priya Sharma',
      specialty: 'Dentist',
      experience: '10 years',
      rating: 4.9,
      reviews: 189,
      location: 'Delhi',
      fee: '₹800',
      available: 'Tomorrow',
      image: '👩‍⚕️'
    },
    {
      id: 3,
      name: 'Dr. Amit Patel',
      specialty: 'Orthopedic',
      experience: '12 years',
      rating: 4.7,
      reviews: 156,
      location: 'Mumbai',
      fee: '₹1200',
      available: 'Today',
      image: '👨‍⚕️'
    },
    {
      id: 4,
      name: 'Dr. Sneha Reddy',
      specialty: 'Pediatrician',
      experience: '8 years',
      rating: 4.9,
      reviews: 201,
      location: 'Bangalore',
      fee: '₹900',
      available: 'Today',
      image: '👩‍⚕️'
    },
    {
      id: 5,
      name: 'Dr. Vikram Singh',
      specialty: 'Neurologist',
      experience: '18 years',
      rating: 4.8,
      reviews: 178,
      location: 'Delhi',
      fee: '₹1500',
      available: 'Tomorrow',
      image: '👨‍⚕️'
    },
    {
      id: 6,
      name: 'Dr. Anjali Mehta',
      specialty: 'Dermatologist',
      experience: '9 years',
      rating: 4.7,
      reviews: 143,
      location: 'Mumbai',
      fee: '₹1100',
      available: 'Today',
      image: '👩‍⚕️'
    },
  ];

  const specialties = ['All', 'Cardiologist', 'Dentist', 'Orthopedic', 'Pediatrician', 'Neurologist', 'Dermatologist'];
  const locations = ['All', 'Mumbai', 'Delhi', 'Bangalore'];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpecialty = !selectedSpecialty || selectedSpecialty === 'All' || doctor.specialty === selectedSpecialty;
    const matchesLocation = !selectedLocation || selectedLocation === 'All' || doctor.location === selectedLocation;
    return matchesSearch && matchesSpecialty && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Logo onClick={() => navigate('/')} />
            <nav className="hidden md:flex space-x-8">
              <a href="#" onClick={() => navigate('/')} className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
              <a href="#" className="text-blue-600 font-semibold">Find Doctors</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
            </nav>
            <Button onClick={() => navigate('/login')} size="sm">
              Login
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Find Your Doctor</h1>
          
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search by doctor name or specialty..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Specialty</label>
              <select
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
              >
                {specialties.map(specialty => (
                  <option key={specialty} value={specialty}>{specialty}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <select
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredDoctors.length}</span> doctors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map(doctor => (
            <div key={doctor.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="flex items-start space-x-4 mb-4">
                <div className="text-5xl">{doctor.image}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{doctor.name}</h3>
                  <p className="text-blue-600 font-medium mb-1">{doctor.specialty}</p>
                  <p className="text-sm text-gray-600">{doctor.experience} experience</p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-400">⭐</span>
                    <span className="font-semibold">{doctor.rating}</span>
                    <span className="text-gray-600 text-sm">({doctor.reviews} reviews)</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">📍 {doctor.location}</span>
                  <span className="font-semibold text-gray-900">{doctor.fee}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-600 text-sm">● Available {doctor.available}</span>
                </div>
              </div>

              <Button
                onClick={() => navigate('/booking', { state: { doctor } })}
                fullWidth
              >
                Book Appointment
              </Button>
            </div>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No doctors found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Doctors;
