import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'
import {
  HomeIcon,
  ChevronRightIcon,
  UserCircleIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  ClockIcon,
  PencilIcon,
  TrashIcon,
  CameraIcon,
  LinkIcon
} from '@heroicons/react/24/solid'

function EditProfile() {
  return (
    <div className="flex h-screen bg-[#F8F9FB] overflow-hidden">
      <Sidebar />

      <div className="flex-1 overflow-auto">
        {/* Sticky Header with Actions */}
        <div className="px-4 sm:px-8 py-3 sm:py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-20">
          <div className="flex items-center gap-2 text-sm font-bold text-gray-400">
            <HomeIcon className="w-4 h-4" />
            <ChevronRightIcon className="w-3 h-3" />
            <span className="hover:text-dark cursor-pointer">Doctor Profile</span>
            <ChevronRightIcon className="w-3 h-3" />
            <span className="text-[#010101]">Edit Profile</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/dashboard">
              <button className="px-8 py-2.5 text-gray-500 font-black text-sm rounded-xl hover:bg-gray-100 transition-all">
                Cancel
              </button>
            </Link>
            <button className="px-8 py-2.5 bg-[#D4FF00] text-[#010101] font-black text-sm rounded-xl hover:shadow-lg transition-all border border-lime-400">
              Save Changes
            </button>
          </div>
        </div>

        <div className="p-4 sm:p-8 max-w-[1200px] mx-auto pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Navigation/Summary */}
            <div className="space-y-6">
              {/* Profile Progress */}
              <div className="bg-white rounded-[32px] p-5 sm:p-8 shadow-[0_24px_64px_-16px_rgba(0,0,0,0.04)]">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-black text-[#011438]">Completion</h3>
                  <span className="text-2xl font-black text-[#1E69FF]">80%</span>
                </div>
                <div className="h-3 w-full bg-gray-50 rounded-full overflow-hidden mb-4">
                  <div className="h-full bg-gradient-to-r from-[#1E69FF] to-[#1E69FF]/60 rounded-full" style={{ width: '80%' }}></div>
                </div>
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest leading-loose">
                  Basic Info (20%), About (10%), Education (15%), Experience (15%), Availability (20%)
                </p>
              </div>

              <div className="bg-white rounded-[32px] p-6 shadow-[0_24px_64px_-16px_rgba(0,0,0,0.04)]">
                <div className="space-y-4">
                  {[
                    { label: 'Basic Information', active: true },
                    { label: 'Education & Expertise', active: false },
                    { label: 'Registrations', active: false },
                    { label: 'Clinic Details', active: false },
                    { label: 'Security Settings', active: false },
                  ].map((item, i) => (
                    <button key={i} className={`w-full text-left px-4 py-3 rounded-2xl font-bold text-sm transition-all ${item.active ? 'bg-[#F8F9FB] text-[#1E69FF] shadow-sm' : 'text-gray-400 hover:text-dark hover:bg-gray-50'}`}>
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Basic Info Section */}
              <div className="bg-white rounded-[32px] p-8 shadow-[0_24px_64px_-16px_rgba(0,0,0,0.04)]">
                <div className="flex items-center gap-3 mb-8">
                  <UserCircleIcon className="w-8 h-8 text-[#1E69FF]" />
                  <h2 className="text-2xl font-black text-[#010101]">Basic Information</h2>
                </div>

                <div className="flex items-center gap-8 mb-10">
                  <div className="relative group">
                    <img
                      src="/assets/doctor.png"
                      alt="Profile"
                      className="w-24 h-24 rounded-3xl object-cover border-4 border-gray-50 group-hover:scale-105 transition-transform"
                    />
                    <button className="absolute -bottom-2 -right-2 bg-white rounded-xl p-2 shadow-lg border border-gray-100 hover:bg-[#D4FF00] transition-colors">
                      <CameraIcon className="w-4 h-4 text-dark" />
                    </button>
                  </div>
                  <div>
                    <div className="text-sm font-black text-[#010101] mb-1">Clinic Profile Image</div>
                    <p className="text-xs font-bold text-gray-400 mb-4">Recommended size 300x300, max 2MB (JPG/PNG)</p>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-gray-50 text-[10px] font-black uppercase rounded-lg hover:bg-gray-100 transition-all">Choose file</button>
                      <button className="px-4 py-2 text-red-500 text-[10px] font-black uppercase hover:bg-red-50 rounded-lg transition-all">Remove</button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-2">
                    <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest pl-1">Full Name</label>
                    <input type="text" defaultValue="Dr. Nehar Khanna" className="w-full px-6 py-4 bg-[#F8F9FB] border-2 border-transparent rounded-[20px] focus:bg-white focus:border-[#1E69FF] focus:outline-none font-bold text-[#010101] transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest pl-1">Expertise / Specialty</label>
                    <input type="text" defaultValue="Neurologists, Surgeon" className="w-full px-6 py-4 bg-[#F8F9FB] border-2 border-transparent rounded-[20px] focus:bg-white focus:border-[#1E69FF] focus:outline-none font-bold text-[#010101] transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest pl-1">Experience (Years)</label>
                    <input type="text" defaultValue="17" className="w-full px-6 py-4 bg-[#F8F9FB] border-2 border-transparent rounded-[20px] focus:bg-white focus:border-[#1E69FF] focus:outline-none font-bold text-[#010101] transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest pl-1">Consult Fee (₹)</label>
                    <input type="text" defaultValue="500" className="w-full px-6 py-4 bg-[#F8F9FB] border-2 border-transparent rounded-[20px] focus:bg-white focus:border-[#1E69FF] focus:outline-none font-bold text-[#010101] transition-all" />
                  </div>
                </div>

                <div className="space-y-2 mb-8">
                  <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest pl-1">About / Description</label>
                  <textarea rows="4" className="w-full px-6 py-4 bg-[#F8F9FB] border-2 border-transparent rounded-[20px] focus:bg-white focus:border-[#1E69FF] focus:outline-none font-bold text-[#010101] transition-all resize-none italic" defaultValue="Dr. Nehar Khanna is a distinguished neurologist and surgeon with over 17 years of experience. She specializes in advanced neurosurgical procedures and comprehensive neurological care."></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest pl-1">Email Address</label>
                    <input type="email" defaultValue="neharkhanna@gmail.com" className="w-full px-6 py-4 bg-[#F8F9FB] border-2 border-transparent rounded-[20px] focus:bg-white focus:border-[#1E69FF] focus:outline-none font-bold text-[#010101] transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest pl-1">Phone Number</label>
                    <input type="tel" defaultValue="+91 9876543210" className="w-full px-6 py-4 bg-[#F8F9FB] border-2 border-transparent rounded-[20px] focus:bg-white focus:border-[#1E69FF] focus:outline-none font-bold text-[#010101] transition-all" />
                  </div>
                </div>
              </div>

              {/* Social Links Section */}
              <div className="bg-white rounded-[32px] p-8 shadow-[0_24px_64px_-16px_rgba(0,0,0,0.04)]">
                <h3 className="text-xl font-black text-[#010101] mb-8">Social Links</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { name: 'Linked in', placeholder: 'https://linkedin.com/in/doctor' },
                    { name: 'Instagram', placeholder: 'https://instagram.com/doctor' },
                    { name: 'X / Twitter', placeholder: 'https://x.com/doctor' },
                    { name: 'Website', placeholder: 'https://clinic.com' },
                  ].map((link, idx) => (
                    <div key={idx} className="space-y-2">
                      <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest pl-1">{link.name}</label>
                      <input type="url" placeholder={link.placeholder} className="w-full px-6 py-4 bg-[#F8F9FB] border-2 border-transparent rounded-[20px] focus:bg-white focus:border-[#1E69FF] focus:outline-none font-bold text-[#010101] transition-all" />
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

export default EditProfile
