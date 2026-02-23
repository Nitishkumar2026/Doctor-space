function Logo({ onClick, size = 'md' }) {
  const sizes = {
    sm: { container: 'w-8 h-8', icon: 'w-5 h-5', text: 'text-lg' },
    md: { container: 'w-10 h-10', icon: 'w-6 h-6', text: 'text-xl' },
    lg: { container: 'w-12 h-12', icon: 'w-7 h-7', text: 'text-2xl' }
  };

  const currentSize = sizes[size];

  return (
    <div 
      className="flex items-center space-x-2 cursor-pointer" 
      onClick={onClick}
    >
      <div className={`${currentSize.container} bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center shadow-md`}>
        <svg viewBox="0 0 24 24" className={`${currentSize.icon} text-white`} fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
        </svg>
      </div>
      <span className={`${currentSize.text} font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent`}>
        MediCare
      </span>
    </div>
  );
}

export default Logo;
