import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import Button from '../components/Button';

function Home() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const specialties = [
    { name: 'Dentist', icon: '🦷', color: 'bg-blue-100' },
    { name: 'Cardiologist', icon: '❤️', color: 'bg-red-100' },
    { name: 'Orthopedic', icon: '🦴', color: 'bg-green-100' },
    { name: 'Neurologist', icon: '🧠', color: 'bg-purple-100' },
    { name: 'Pediatrician', icon: '👶', color: 'bg-yellow-100' },
    { name: 'Dermatologist', icon: '✨', color: 'bg-pink-100' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Logo />
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => navigate('/doctors')}>Find Doctors</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
            </nav>
            <Button onClick={() => navigate('/login')} size="sm">
              Login
            </Button>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Find & Book Appointments with Best Doctors</h1>
              <p className="text-xl mb-8 text-blue-100">Get instant access to qualified doctors and book appointments online</p>
              
              <div className="bg-white rounded-lg p-2 flex items-center">
                <input
                  type="text"
                  placeholder="Search doctors, specialties..."
                  className="flex-1 px-4 py-3 text-gray-900 outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
                  Search
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">👨‍⚕️</div>
                  <h3 className="text-2xl font-semibold mb-2">24/7 Available</h3>
                  <p className="text-blue-100">Book appointments anytime, anywhere</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Browse by Specialty</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {specialties.map((specialty) => (
              <button
                key={specialty.name}
                onClick={() => navigate('/doctors', { state: { specialty: specialty.name } })}
                className={`${specialty.color} p-6 rounded-xl hover:shadow-lg transition-shadow text-center`}
              >
                <div className="text-4xl mb-3">{specialty.icon}</div>
                <div className="font-semibold text-gray-900">{specialty.name}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose MediCare?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Find Best Doctors</h3>
              <p className="text-gray-600">Search from thousands of qualified doctors</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📅</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
              <p className="text-gray-600">Book appointments in just a few clicks</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💊</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Care</h3>
              <p className="text-gray-600">Get treatment from verified professionals</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="mb-4">
                <Logo />
              </div>
              <p className="text-gray-400">Your trusted healthcare partner</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Services</a></li>
                <li><a href="#" className="hover:text-white">Doctors</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📧 info@medicare.com</li>
                <li>📞 +91 1234567890</li>
                <li>📍 Mumbai, India</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MediCare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
