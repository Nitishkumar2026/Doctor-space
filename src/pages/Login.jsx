import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
    EnvelopeIcon,
    LockClosedIcon,
    ArrowRightIcon
} from '@heroicons/react/24/outline'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            navigate('/dashboard')
        }, 1500)
    }

    return (
        <div className="min-h-screen bg-[#F8F9FB] flex font-sans overflow-hidden">
            {/* Left Decorative Section */}
            <div className="hidden lg:flex w-[45%] bg-[#011438] relative overflow-hidden items-center justify-center p-12">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#1E69FF] rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#D4FF00] rounded-full blur-[150px]" />
                </div>

                <div className="relative z-10 max-w-lg space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-12">
                            <img src="/assets/logo.png" alt="Logo" className="w-12 h-12 object-contain brightness-0 invert" />
                            <span className="text-3xl font-black text-white tracking-tight">Jensei</span>
                        </div>
                        <h1 className="text-5xl font-black text-white leading-[1.1] mb-6">
                            Smart Healthcare <br />
                            <span className="text-[#1E69FF]">Assistant AI</span>
                        </h1>
                        <p className="text-lg text-gray-400 font-medium leading-relaxed">
                            Experience the future of medical management. Streamline your practice with our advanced AI-driven platform designed for modern healthcare professionals.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="grid grid-cols-2 gap-6"
                    >
                        <div className="p-6 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-md">
                            <div className="text-2xl font-black text-white mb-1">10k+</div>
                            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Active Doctors</div>
                        </div>
                        <div className="p-6 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-md">
                            <div className="text-2xl font-black text-white mb-1">24/7</div>
                            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">AI Support</div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Right Login Section */}
            <div className="flex-1 flex flex-col justify-center items-center p-6 bg-white">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-md space-y-10"
                >
                    <div className="text-center lg:text-left space-y-3">
                        <img src="/assets/logo.png" alt="Logo" className="w-12 h-12 object-contain mx-auto lg:mx-0 lg:hidden mb-6" />
                        <h2 className="text-[40px] font-black text-[#011438] tracking-tight">Welcome Back</h2>
                        <p className="text-gray-400 font-bold">Please enter your credentials to continue</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-5">
                            <div className="space-y-2">
                                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                                <div className="relative group">
                                    <div className="absolute left-5 top-1/2 -translate-y-1/2 transition-colors text-gray-300 group-focus-within:text-[#1E69FF]">
                                        <EnvelopeIcon className="w-5 h-5" />
                                    </div>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="doctor@jensei.ai"
                                        required
                                        className="w-full h-16 bg-[#F8F9FB] border-2 border-transparent rounded-[24px] pl-14 pr-4 font-bold text-dark transition-all focus:bg-white focus:border-[#1E69FF] outline-none placeholder:text-gray-300"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between ml-1">
                                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Password</label>
                                    <Link to="#" className="text-xs font-black text-[#1E69FF] hover:underline">Forgot Password?</Link>
                                </div>
                                <div className="relative group">
                                    <div className="absolute left-5 top-1/2 -translate-y-1/2 transition-colors text-gray-300 group-focus-within:text-[#1E69FF]">
                                        <LockClosedIcon className="w-5 h-5" />
                                    </div>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••"
                                        required
                                        className="w-full h-16 bg-[#F8F9FB] border-2 border-transparent rounded-[24px] pl-14 pr-4 font-bold text-dark transition-all focus:bg-white focus:border-[#1E69FF] outline-none placeholder:text-gray-300"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 pt-4">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full h-16 bg-[#011438] text-white rounded-[24px] font-black text-lg shadow-xl shadow-blue-900/10 hover:bg-[#011c4e] transition-all flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-70"
                            >
                                {isLoading ? (
                                    <div className="w-6 h-6 border-3 border-white/20 border-t-white rounded-full animate-spin" />
                                ) : (
                                    <>
                                        Sign In
                                        <ArrowRightIcon className="w-5 h-5" strokeWidth={3} />
                                    </>
                                )}
                            </button>

                            <button
                                type="button"
                                className="w-full h-16 bg-white border-2 border-gray-100 text-dark rounded-[24px] font-black text-base hover:bg-gray-50 flex items-center justify-center gap-3 transition-all active:scale-[0.98]"
                            >
                                <img src="https://www.google.com/favicon.ico" className="w-5 h-5 grayscale opacity-70 group-hover:grayscale-0" alt="Google" />
                                Continue with Google
                            </button>
                        </div>
                    </form>

                    <div className="text-center">
                        <p className="font-bold text-gray-400">
                            Don't have an account? <Link to="/signup" className="text-[#1E69FF] hover:underline">Create Account</Link>
                        </p>
                    </div>
                </motion.div>

                <div className="absolute bottom-8 text-[10px] font-black text-gray-300 uppercase tracking-widest text-center">
                    © 2026 Jensei Healthcare AI • Professional Edition
                </div>
            </div>
        </div>
    )
}

export default Login
