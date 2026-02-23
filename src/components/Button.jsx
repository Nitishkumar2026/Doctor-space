function Button({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  fullWidth = false,
  disabled = false,
  type = 'button',
  icon
}) {
  const variants = {
    primary: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800',
    secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
    danger: 'bg-red-600 text-white hover:bg-red-700',
    success: 'bg-green-600 text-white hover:bg-green-700'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        rounded-lg font-medium transition-all shadow-md hover:shadow-lg
        disabled:opacity-50 disabled:cursor-not-allowed
        flex items-center justify-center space-x-2
      `}
    >
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </button>
  );
}

export default Button;
