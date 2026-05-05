import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  variant?: 'primary' | 'secondary' | 'outline' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  fullWidth?: boolean
}

export default function Button({
  children,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
  disabled = false,
  type = 'button',
  fullWidth = false,
}: ButtonProps) {
  const baseStyles = 'font-poppins font-600 rounded-lg transition-all duration-300 flex items-center justify-center gap-2'

  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-opacity-90 disabled:bg-opacity-50',
    secondary: 'bg-secondary text-white hover:bg-opacity-90 disabled:bg-opacity-50',
    outline: 'border-2 border-primary text-primary hover:bg-light disabled:opacity-50',
    danger: 'bg-error text-white hover:bg-opacity-90 disabled:bg-opacity-50',
  }

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const widthStyle = fullWidth ? 'w-full' : ''

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`}
    >
      {children}
    </button>
  )
}
