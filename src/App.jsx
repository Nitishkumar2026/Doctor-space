import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Booking from './pages/Booking'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import DoctorProfile from './pages/DoctorProfile'
import Appointments from './pages/Appointments'
import Schedule from './pages/Schedule'
import EditProfile from './pages/EditProfile'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/doctor-profile" element={<DoctorProfile />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/edit-profile" element={<EditProfile />} />
      </Routes>
    </Router>
  )
}

export default App
