import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
    EnvelopeIcon,
    LockClosedIcon,
    ArrowRightIcon,
    CheckCircleIcon
} from '@heroicons/react/24/solid'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        setIsLoading(true)
        // Simulate login
        setTimeout(() => {
            setIsLoading(false)
            navigate('/dashboard')
        }, 1500)
    }

    return (
        <div className="min-h-screen bg-[#F8F9FB] flex overflow-hidden font-sans">
            {/* Left Animated Side */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="hidden lg:flex w-1/2 bg-[#1E69FF] relative items-center justify-center p-20"
            >
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 90, 0],
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                        className="absolute -top-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            rotate: [0, -90, 0],
                        }}
                        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                        className="absolute -bottom-40 -right-20 w-[500px] h-[500px] bg-[#D4FF00]/20 rounded-full blur-3xl"
                    />
                </div>

                <div className="relative z-10 text-white space-y-8 max-w-lg">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-2xl"
                    >
                        <span className="text-[#1E69FF] text-4xl font-black">J</span>
                    </motion.div>
                    <div className="space-y-4">
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-6xl font-black leading-tight"
                        >
                            AI Assistance <br />
                            <span className="text-[#D4FF00]">You Can Trust</span>
                        </motion.h1>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="text-xl font-bold text-white/80 leading-relaxed"
                        >
                            The most advanced doctor management system powered by AI. Seamlessly manage appointments, records, and patient care.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="flex items-center gap-6 pt-4"
                    >
                        <div className="flex -space-x-4">
                            {[1, 2, 3, 4].map(i => (
                                <img key={i} src={`https://i.pravatar.cc/150?u=${i}`} className="w-12 h-12 rounded-full border-4 border-[#1E69FF] shadow-lg" />
                            ))}
                        </div>
                        <p className="font-bold text-sm">Join <span className="text-[#D4FF00]">2,000+</span> healthcare professionals</p>
                    </motion.div>
                </div>
            </motion.div>

            {/* Right Login Side */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white relative">
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full max-w-md space-y-12"
                >
                    <div className="space-y-4">
                        <h2 className="text-[40px] font-black text-[#011438] tracking-tight">Log in</h2>
                        <p className="text-gray-400 font-bold">Welcome back! Please enter your details.</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-8">
                        <div className="space-y-6">
                            <div className="space-y-2 group">
                                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1 transition-colors group-focus-within:text-[#1E69FF]">Email Address</label>
                                <div className="relative">
                                    <EnvelopeIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 transition-colors group-focus-within:text-[#1E69FF]" />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="name@company.com"
                                        required
                                        className="w-full h-16 bg-[#F8F9FB] border-2 border-transparent rounded-[20px] pl-12 pr-4 font-bold text-[#010101] placeholder:text-gray-300 focus:bg-white focus:border-[#1E69FF] focus:ring-4 focus:ring-[#1E69FF]/5 transition-all outline-none"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2 group">
                                <div className="flex justify-between items-center ml-1">
                                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest transition-colors group-focus-within:text-[#1E69FF]">Password</label>
                                    <Link to="#" className="text-xs font-black text-[#1E69FF] hover:underline">Forgot password?</Link>
                                </div>
                                <div className="relative">
                                    <LockClosedIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 transition-colors group-focus-within:text-[#1E69FF]" />
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••"
                                        required
                                        className="w-full h-16 bg-[#F8F9FB] border-2 border-transparent rounded-[20px] pl-12 pr-4 font-bold text-[#010101] placeholder:text-gray-300 focus:bg-white focus:border-[#1E69FF] focus:ring-4 focus:ring-[#1E69FF]/5 transition-all outline-none"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full h-16 bg-[#010101] text-white rounded-[20px] font-black text-lg shadow-2xl shadow-black/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:hover:scale-100"
                            >
                                {isLoading ? (
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                        className="w-6 h-6 border-4 border-white/20 border-t-white rounded-full"
                                    />
                                ) : (
                                    <>
                                        Sign in
                                        <ArrowRightIcon className="w-5 h-5" />
                                    </>
                                )}
                            </button>

                            <button
                                type="button"
                                className="w-full h-16 bg-white border-2 border-gray-100 text-[#010101] rounded-[20px] font-black text-lg hover:bg-gray-50 flex items-center justify-center gap-3 transition-all"
                            >
                                <img src="https://www.google.com/favicon.ico" className="w-5 h-5" alt="Google" />
                                Sign in with Google
                            </button>
                        </div>
                    </form>

                    <p className="text-center font-bold text-gray-400">
                        Don't have an account? <Link to="/signup" className="text-[#1E69FF] hover:underline">Sign up for free</Link>
                    </p>
                </motion.div>

                {/* Footer info */}
                <div className="absolute bottom-8 left-0 right-0 text-center">
                    <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest">© 2026 Jensei Healthcare AI. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Login
