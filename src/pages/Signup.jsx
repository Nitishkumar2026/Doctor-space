import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
    UserIcon,
    EnvelopeIcon,
    LockClosedIcon,
    BriefcaseIcon,
    ArrowRightIcon,
    CheckBadgeIcon
} from '@heroicons/react/24/outline'

function Signup() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        specialty: '',
        password: '',
        confirmPassword: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const navigate = useNavigate()

    const handleSignup = (e) => {
        e.preventDefault()
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            setIsSuccess(true)
            setTimeout(() => navigate('/login'), 2000)
        }, 1500)
    }

    return (
        <div className="min-h-screen bg-[#F8F9FB] flex font-sans overflow-hidden">
            {/* Left Decorative Section (Shared aesthetic) */}
            <div className="hidden lg:flex w-[40%] bg-[#011438] relative overflow-hidden items-center justify-center p-12">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#1E69FF] rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#D4FF00] rounded-full blur-[150px]" />
                </div>

                <div className="relative z-10 max-w-sm space-y-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-12">
                            <img src="/assets/logo.png" alt="Logo" className="w-10 h-10 object-contain brightness-0 invert" />
                            <span className="text-2xl font-black text-white tracking-tight">Jensei</span>
                        </div>
                        <h1 className="text-4xl font-black text-white leading-tight mb-6">
                            Join the <br />
                            <span className="text-[#1E69FF]">AI Revolution</span>
                        </h1>
                        <p className="text-base text-gray-400 font-medium leading-relaxed">
                            Empower your healthcare practice with cutting-edge AI. Connect with patients and manage your schedule like never before.
                        </p>
                    </motion.div>

                    <div className="space-y-4">
                        {[
                            { title: 'Verified Profiles', value: '1,200+' },
                            { title: 'Appointments Daily', value: '5,000+' }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + (i * 0.2) }}
                                className="p-5 rounded-[24px] bg-white/5 border border-white/10 backdrop-blur-md"
                            >
                                <div className="text-xl font-black text-white mb-0.5">{stat.value}</div>
                                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{stat.title}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Signup Section */}
            <div className="flex-1 flex flex-col justify-center items-center p-6 bg-white overflow-y-auto custom-scrollbar">
                {isSuccess ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center space-y-6 max-w-sm"
                    >
                        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-100">
                            <CheckBadgeIcon className="w-10 h-10 text-green-500" />
                        </div>
                        <h2 className="text-3xl font-black text-[#011438] tracking-tight">Registration Successful</h2>
                        <p className="text-gray-400 font-bold leading-relaxed">Welcome to the future of healthcare. Redirecting you to login...</p>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="w-full max-w-md space-y-8"
                    >
                        <div className="text-center lg:text-left space-y-2">
                            <img src="/assets/logo.png" alt="Logo" className="w-10 h-10 object-contain mx-auto lg:mx-0 lg:hidden mb-4" />
                            <h2 className="text-3xl font-black text-[#011438] tracking-tight">Create your account</h2>
                            <p className="text-gray-400 font-bold text-sm">Join a community of top-tier healthcare professionals</p>
                        </div>

                        <form onSubmit={handleSignup} className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                                    <div className="relative group">
                                        <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within:text-[#1E69FF]" />
                                        <input
                                            type="text"
                                            required
                                            placeholder="Dr. John Doe"
                                            className="w-full h-14 bg-[#F8F9FB] border-2 border-transparent rounded-[20px] pl-11 pr-4 font-bold text-sm focus:bg-white focus:border-[#1E69FF] transition-all outline-none"
                                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                                    <div className="relative group">
                                        <EnvelopeIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within:text-[#1E69FF]" />
                                        <input
                                            type="email"
                                            required
                                            placeholder="doctor@hospital.com"
                                            className="w-full h-14 bg-[#F8F9FB] border-2 border-transparent rounded-[20px] pl-11 pr-4 font-bold text-sm focus:bg-white focus:border-[#1E69FF] transition-all outline-none"
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Specialty</label>
                                <div className="relative group">
                                    <BriefcaseIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within:text-[#1E69FF]" />
                                    <select
                                        required
                                        className="w-full h-14 bg-[#F8F9FB] border-2 border-transparent rounded-[20px] pl-11 pr-4 font-bold text-sm focus:bg-white focus:border-[#1E69FF] transition-all outline-none appearance-none cursor-pointer"
                                        onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                                    >
                                        <option value="">Select Specialty</option>
                                        <option value="general">General Physician</option>
                                        <option value="cardio">Cardiologist</option>
                                        <option value="ortho">Orthopedic</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Password</label>
                                    <div className="relative group">
                                        <LockClosedIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within:text-[#1E69FF]" />
                                        <input
                                            type="password"
                                            required
                                            placeholder="••••••••"
                                            className="w-full h-14 bg-[#F8F9FB] border-2 border-transparent rounded-[20px] pl-11 pr-4 font-bold text-sm focus:bg-white focus:border-[#1E69FF] transition-all outline-none"
                                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Confirm</label>
                                    <div className="relative group">
                                        <LockClosedIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within:text-[#1E69FF]" />
                                        <input
                                            type="password"
                                            required
                                            placeholder="••••••••"
                                            className="w-full h-14 bg-[#F8F9FB] border-2 border-transparent rounded-[20px] pl-11 pr-4 font-bold text-sm focus:bg-white focus:border-[#1E69FF] transition-all outline-none"
                                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full h-16 bg-[#1E69FF] text-white rounded-[24px] font-black text-lg shadow-xl shadow-blue-600/10 hover:bg-[#1557d9] transition-all flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-70"
                                >
                                    {isLoading ? (
                                        <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            Complete Registration
                                            <ArrowRightIcon className="w-5 h-5" strokeWidth={3} />
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>

                        <div className="text-center">
                            <p className="font-bold text-gray-400 text-sm">
                                Already have an account? <Link to="/login" className="text-[#1E69FF] hover:underline">Log in</Link>
                            </p>
                        </div>
                    </motion.div>
                )}

                <div className="absolute bottom-6 text-[9px] font-black text-gray-300 uppercase tracking-[0.2em] text-center w-full">
                    Jensei Healthcare Systems • Enterprise Security
                </div>
            </div>
        </div>
    )
}

export default Signup
