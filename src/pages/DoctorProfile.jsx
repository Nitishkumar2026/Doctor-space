import Sidebar from '../components/Sidebar'

function DoctorProfile() {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar />

      <div className="flex-1 overflow-auto lg:ml-0">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h1 className="text-xl sm:text-2xl font-bold text-dark pl-12 lg:pl-0">Doctors Profile</h1>
            <div className="relative w-full sm:w-80">
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary w-full text-sm sm:text-base"
              />
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Left Column - Doctor Info */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6">
              {/* Doctor Card */}
              <div className="bg-white rounded-xl shadow-card p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  {/* Doctor Image */}
                  <div className="relative flex-shrink-0 mx-auto sm:mx-0">
                    <img
                      src="/assets/doctor-neha.png"
                      alt="Dr. Neha Khanna"
                      className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl object-cover"
                    />
                  </div>

                  {/* Doctor Details */}
                  <div className="flex-1 text-center sm:text-left relative min-h-[140px]">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="bg-indigo-50 text-indigo-500 font-bold text-[10px] sm:text-xs mb-2 px-3 py-1 rounded-lg inline-block uppercase tracking-wider">General Physician</p>
                        <div className="flex items-center gap-2 mb-3">
                          <h2 className="text-2xl font-bold text-dark">Dr. Neha Khanna</h2>
                          <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="text-sm text-gray-600">Gurugram, Haryana</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span className="text-sm text-gray-600">admin345@gmail.com</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-dark">₹500 fee</p>
                      </div>
                    </div>

                    {/* Social Links - Positioned bottom right */}
                    <div className="flex items-center gap-4 mt-6 sm:mt-0 sm:absolute sm:bottom-0 sm:right-0">
                      <a href="#" className="hover:opacity-80 transition-all">
                        <svg className="w-5 h-5 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      <a href="#" className="hover:opacity-80 transition-all">
                        <svg className="w-5 h-5 text-[#e4405f]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                      <a href="#" className="hover:opacity-80 transition-all">
                        <svg className="w-5 h-5 text-[#ff0000]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                        </svg>
                      </a>
                      <a href="#" className="hover:opacity-80 transition-all">
                        <svg className="w-5 h-5 text-[#011438]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* About Section */}
              <div>
                <h3 className="text-lg font-bold text-dark mb-3">About</h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  Dr. Sharma is a dedicated General Practitioner specializing in preventive care and digital health integration. Her practice emphasizes acute illness management, chronic disease checks, and patient education. She has been verified for 12 years and is fluent in English and Hindi.
                </p>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-lg font-bold text-dark mb-3">Education</h3>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">⊙</span>
                  <p className="text-sm text-gray-700">MBBS, University of kerala 2005</p>
                </div>
              </div>

              {/* Registrations */}
              <div>
                <h3 className="text-lg font-bold text-dark mb-3">Registrations</h3>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">⊙</span>
                  <p className="text-sm text-gray-700">Delhi Medical Council</p>
                </div>
              </div>

              {/* Specialized/Issues */}
              <div>
                <h3 className="text-lg font-bold text-dark mb-3">Specialized/Issues</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-1.5 border border-gray-200 text-gray-700 rounded-full text-sm">Anxiety</span>
                  <span className="px-4 py-1.5 border border-gray-200 text-gray-700 rounded-full text-sm">Stress</span>
                  <span className="px-4 py-1.5 border border-gray-200 text-gray-700 rounded-full text-sm">Career Counseling</span>
                  <span className="px-4 py-1.5 border border-gray-200 text-gray-700 rounded-full text-sm">Life Coaching</span>
                  <span className="px-4 py-1.5 border border-gray-200 text-gray-700 rounded-full text-sm">Life Transitions</span>
                  <span className="px-4 py-1.5 border border-gray-200 text-gray-700 rounded-full text-sm">Men's Issues</span>
                </div>
              </div>

              {/* Treatments */}
              <div>
                <h3 className="text-lg font-bold text-dark mb-3">Treatments</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#22C55E" /><path d="M6 10l3 3 5-5" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <span className="text-sm text-gray-700">Arthroscopy surgery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#22C55E" /><path d="M6 10l3 3 5-5" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <span className="text-sm text-gray-700">Arthroscopy surgery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#22C55E" /><path d="M6 10l3 3 5-5" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <span className="text-sm text-gray-700">Joint replacement surgery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#22C55E" /><path d="M6 10l3 3 5-5" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <span className="text-sm text-gray-700">Joint replacement surgery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#22C55E" /><path d="M6 10l3 3 5-5" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <span className="text-sm text-gray-700">Bone fracture treatment</span>
                  </div>
                  <button className="text-primary font-semibold text-sm text-left">+20 More Treatment</button>
                </div>
              </div>

              {/* Top Patient Visit Reasons */}
              <div className="bg-white rounded-xl shadow-card p-6">
                <h3 className="text-lg font-bold text-dark mb-6">Top Patient Visit Reasons</h3>
                <div className="flex items-center gap-8">
                  <div className="relative w-48 h-48">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle cx="96" cy="96" r="80" fill="none" stroke="#E5E7EB" strokeWidth="24" />
                      <circle cx="96" cy="96" r="80" fill="none" stroke="#2D5A27" strokeWidth="24" strokeDasharray="126 502" strokeLinecap="round" />
                      <circle cx="96" cy="96" r="80" fill="none" stroke="#D4FF00" strokeWidth="24" strokeDasharray="226 502" strokeDashoffset="-126" strokeLinecap="round" />
                      <circle cx="96" cy="96" r="80" fill="none" stroke="#8B9A46" strokeWidth="24" strokeDasharray="60 502" strokeDashoffset="-352" strokeLinecap="round" />
                      <circle cx="96" cy="96" r="80" fill="none" stroke="#E5E7EB" strokeWidth="24" strokeDasharray="90 502" strokeDashoffset="-412" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#2D5A27' }}></span>
                      <span className="text-sm text-gray-700">Hypertension Management — 25%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#D4FF00' }}></span>
                      <span className="text-sm text-gray-700">Preventive Cardiology — 45%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#8B9A46' }}></span>
                      <span className="text-sm text-gray-700">Heart Failure Monitoring — 12%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 bg-gray-200 rounded-sm"></span>
                      <span className="text-sm text-gray-700">Chest Pain Evaluation — 18%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reviews */}
              <div className="bg-white rounded-xl shadow-card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-dark">Reviews</h3>
                  <button className="flex items-center gap-2 text-primary font-medium">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    Write a Feedback
                  </button>
                </div>

                <div className="flex items-center gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-dark mb-2">4.8</div>
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500">50 Ratings</p>
                  </div>

                  <div className="flex-1 space-y-2">
                    {[
                      { label: 'Value for money', value: 85 },
                      { label: 'Doctor friendliness', value: 90 },
                      { label: 'Treatment satisfaction', value: 95 },
                      { label: 'Explanation of the health issue', value: 88 },
                    ].map((item, idx) => (
                      <div key={idx}>
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span className="text-gray-600">{item.label}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: `${item.value}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Individual Reviews */}
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <img
                      src="https://i.pravatar.cc/150?img=1"
                      alt="Alexander Ritz"
                      className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-dark">Alexander Ritz</h4>
                        <div className="flex items-center gap-1">
                          <span className="font-semibold text-dark">5.0</span>
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-400 mb-2">2 month ago</p>
                      <p className="text-gray-600">
                        Easy booking, great value! Cozy rooms at a reasonable price in Thailand's vibrant center. Surprisingly quiet with nearby. Traveller's accommodation. Highly recommend!
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <img
                      src="https://i.pravatar.cc/150?img=5"
                      alt="Emma Crieght"
                      className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-dark">Emma Crieght</h4>
                        <div className="flex items-center gap-1">
                          <span className="font-semibold text-dark">5.0</span>
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-400 mb-2">2 month ago</p>
                      <p className="text-gray-600">
                        Effortless booking, unbeatable affordability! Snug ye, comfortable rooms in the heart of Sheffield's nightlife. Surrounded by elegant housing. It's a peaceful gem. Thanks so!
                      </p>
                    </div>
                  </div>
                </div>

                <button className="w-full mt-6 py-3 text-primary font-semibold hover:bg-gray-50 rounded-lg transition-all flex items-center justify-center gap-2">
                  Show More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* Report Issue */}
              <div className="text-center py-6">
                <button className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all">
                  Report an issue
                </button>
              </div>
            </div>

            {/* Right Column - Booking */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Book Appointment</h3>

                {/* Month Selector */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <h4 className="font-semibold text-gray-900">June</h4>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>

                  <div className="grid grid-cols-7 gap-2 mb-3">
                    {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day, idx) => (
                      <div key={idx} className="text-center text-xs font-semibold text-gray-500">
                        {day}
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-2">
                    {[11, 12, 13, 14, 15, 16, 17].map((day, idx) => {
                      const isSelected = day === 14
                      return (
                        <button
                          key={idx}
                          className={`aspect-square flex items-center justify-center text-sm rounded-lg transition-all font-medium ${isSelected
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                            }`}
                        >
                          {day}
                        </button>
                      )
                    })}
                  </div>
                </div>

                <button className="w-full text-blue-600 font-medium text-sm mb-6 flex items-center justify-center gap-1 hover:text-blue-700">
                  Show full Calendar
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Time */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">Time</h4>
                  <div className="flex items-center gap-5 mb-4">
                    <span className="text-sm text-gray-400 cursor-pointer">Morning</span>
                    <span className="text-sm text-gray-400 cursor-pointer">Afternoon</span>
                    <span className="text-sm font-bold text-gray-900 cursor-pointer">Evening</span>
                    <span className="text-sm text-gray-400 cursor-pointer">Night</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['5:00 PM', '5:15 PM', '6:30 PM', '7:45 PM', '5:00 PM', '5:30 PM', '6:00 PM', '8:00 PM'].map((time, idx) => (
                      <button
                        key={idx}
                        className={`py-2 px-1 rounded-full text-xs font-medium transition-all ${idx === 2
                          ? 'bg-gray-900 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Book Button */}
                <div className="flex items-center gap-3">
                  <button className="w-10 h-10 bg-teal-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </button>
                  <button className="flex-1 bg-[#DCE438] text-gray-900 font-bold py-3 rounded-full hover:brightness-95 transition-all">
                    Book Now
                  </button>
                </div>
              </div>

              {/* Location */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Location</h3>
                <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center mb-3">
                  <span className="text-gray-400">Map View</span>
                </div>
                <p className="text-sm text-gray-600">2.7km</p>
              </div>

              {/* Photos */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Photo's</h3>
                <div className="grid grid-cols-2 gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop"
                    alt="Clinic"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <div className="grid grid-rows-2 gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=200&h=150&fit=crop"
                      alt="Clinic"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=200&h=150&fit=crop"
                      alt="Clinic"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorProfile
