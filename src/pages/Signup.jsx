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
} from '@heroicons/react/24/solid'

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
        // Simulate signup
        setTimeout(() => {
            setIsLoading(false)
            setIsSuccess(true)
            setTimeout(() => navigate('/login'), 2000)
        }, 1500)
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    }

    return (
        <div className="min-h-screen bg-[#F8F9FB] flex overflow-hidden font-sans">
            {/* Left Animated Side (shared with Login) */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="hidden lg:flex w-1/2 bg-[#010101] relative items-center justify-center p-20"
            >
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        animate={{
                            scale: [1, 1.5, 1],
                            x: [0, 50, 0],
                        }}
                        transition={{ duration: 30, repeat: Infinity }}
                        className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1E69FF]/20 rounded-full blur-[120px]"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            y: [0, -50, 0],
                        }}
                        transition={{ duration: 25, repeat: Infinity }}
                        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]"
                    />
                </div>

                <div className="relative z-10 text-white space-y-12 max-w-lg">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', damping: 12 }}
                        className="w-20 h-20 bg-[#D4FF00] rounded-[24px] flex items-center justify-center shadow-2xl"
                    >
                        <span className="text-[#010101] text-5xl font-black">J</span>
                    </motion.div>

                    <div className="space-y-6">
                        <h1 className="text-6xl font-black leading-tight tracking-tight">
                            Start Your <br />
                            <span className="text-[#1E69FF]">AI Journey</span>
                        </h1>
                        <p className="text-xl font-bold text-gray-400 leading-relaxed">
                            Connect with patients globally, automate your workflow, and focus on what matters most — saving lives.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { label: 'Verified Doctors', count: '10k+' },
                            { label: 'Patient Reach', count: '1M+' },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 + (i * 0.2) }}
                                className="bg-white/5 border border-white/10 p-6 rounded-[24px]"
                            >
                                <div className="text-2xl font-black text-[#D4FF00]">{stat.count}</div>
                                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Right Signup Side */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white relative overflow-y-auto custom-scrollbar">
                {isSuccess ? (
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-center space-y-6"
                    >
                        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                            <CheckBadgeIcon className="w-16 h-16 text-green-500" />
                        </div>
                        <h2 className="text-4xl font-black text-[#011438]">Welcome to Jensei!</h2>
                        <p className="text-gray-400 font-bold">Your account has been created. <br /> Redirecting to login...</p>
                    </motion.div>
                ) : (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="w-full max-w-md space-y-10 py-12"
                    >
                        <div className="space-y-4">
                            <motion.h2 variants={itemVariants} className="text-[40px] font-black text-[#011438] tracking-tight">Create account</motion.h2>
                            <motion.p variants={itemVariants} className="text-gray-400 font-bold">Join the future of healthcare management.</motion.p>
                        </div>

                        <form onSubmit={handleSignup} className="space-y-6">
                            <motion.div variants={itemVariants} className="space-y-2 group">
                                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                                <div className="relative">
                                    <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 group-focus-within:text-[#1E69FF]" />
                                    <input
                                        type="text"
                                        required
                                        placeholder="Dr. John Doe"
                                        className="w-full h-14 bg-[#F8F9FB] border-2 border-transparent rounded-2xl pl-12 pr-4 font-bold focus:bg-white focus:border-[#1E69FF] transition-all outline-none"
                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                    />
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants} className="space-y-2 group">
                                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                                <div className="relative">
                                    <EnvelopeIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 group-focus-within:text-[#1E69FF]" />
                                    <input
                                        type="email"
                                        required
                                        placeholder="john@hospital.com"
                                        className="w-full h-14 bg-[#F8F9FB] border-2 border-transparent rounded-2xl pl-12 pr-4 font-bold focus:bg-white focus:border-[#1E69FF] transition-all outline-none"
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants} className="space-y-2 group">
                                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Specialty</label>
                                <div className="relative">
                                    <BriefcaseIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 group-focus-within:text-[#1E69FF]" />
                                    <select
                                        required
                                        className="w-full h-14 bg-[#F8F9FB] border-2 border-transparent rounded-2xl pl-12 pr-4 font-bold focus:bg-white focus:border-[#1E69FF] transition-all outline-none appearance-none cursor-pointer"
                                        onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                                    >
                                        <option value="">Select Specialty</option>
                                        <option value="general">General Physician</option>
                                        <option value="cardio">Cardiologist</option>
                                        <option value="ortho">Orthopedic</option>
                                    </select>
                                </div>
                            </motion.div>

                            <div className="grid grid-cols-2 gap-4">
                                <motion.div variants={itemVariants} className="space-y-2 group">
                                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Password</label>
                                    <div className="relative">
                                        <LockClosedIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within:text-[#1E69FF]" />
                                        <input
                                            type="password"
                                            required
                                            placeholder="••••"
                                            className="w-full h-14 bg-[#F8F9FB] border-2 border-transparent rounded-2xl pl-10 pr-4 font-bold focus:bg-white focus:border-[#1E69FF] transition-all outline-none text-xs"
                                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        />
                                    </div>
                                </motion.div>
                                <motion.div variants={itemVariants} className="space-y-2 group">
                                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Confirm</label>
                                    <div className="relative">
                                        <LockClosedIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within:text-[#1E69FF]" />
                                        <input
                                            type="password"
                                            required
                                            placeholder="••••"
                                            className="w-full h-14 bg-[#F8F9FB] border-2 border-transparent rounded-2xl pl-10 pr-4 font-bold focus:bg-white focus:border-[#1E69FF] transition-all outline-none text-xs"
                                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                        />
                                    </div>
                                </motion.div>
                            </div>

                            <motion.div variants={itemVariants} className="pt-4">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full h-16 bg-[#1E69FF] text-white rounded-[20px] font-black text-lg shadow-xl shadow-[#1E69FF]/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-70"
                                >
                                    {isLoading ? 'Creating account...' : (
                                        <>
                                            Create account
                                            <ArrowRightIcon className="w-5 h-5" />
                                        </>
                                    )}
                                </button>
                            </motion.div>
                        </form>

                        <motion.p variants={itemVariants} className="text-center font-bold text-gray-400">
                            Already have an account? <Link to="/login" className="text-[#1E69FF] hover:underline">Log in</Link>
                        </motion.p>
                    </motion.div>
                )}
            </div>
        </div>
    )
}

export default Signup
