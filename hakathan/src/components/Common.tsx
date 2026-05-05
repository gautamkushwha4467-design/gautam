import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  hoverable?: boolean
  noPadding?: boolean
}

export function Card({ children, className = '', onClick, hoverable = false, noPadding = false }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-xl shadow-soft ${hoverable ? 'hover:shadow-medium cursor-pointer transition-all' : ''} ${noPadding ? '' : 'p-6'} ${className}`}
    >
      {children}
    </div>
  )
}

interface BadgeProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md'
}

export function Badge({ children, variant = 'primary', size = 'md' }: BadgeProps) {
  const variantStyles = {
    primary: 'bg-blue-100 text-blue-700',
    secondary: 'bg-purple-100 text-purple-700',
    success: 'bg-green-100 text-green-700',
    warning: 'bg-yellow-100 text-yellow-700',
    danger: 'bg-red-100 text-red-700',
  }

  const sizeStyles = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
  }

  return (
    <span className={`rounded-full font-medium ${variantStyles[variant]} ${sizeStyles[size]}`}>
      {children}
    </span>
  )
}

interface ProgressBarProps {
  value: number
  max?: number
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'secondary' | 'success' | 'warning'
  showLabel?: boolean
}

export function ProgressBar({ value, max = 100, size = 'md', color = 'primary', showLabel = false }: ProgressBarProps) {
  const percentage = (value / max) * 100

  const sizeStyles = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4',
  }

  const colorStyles = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    success: 'bg-success',
    warning: 'bg-warning',
  }

  return (
    <div className="w-full">
      <div className={`w-full bg-gray-200 rounded-full overflow-hidden ${sizeStyles[size]}`}>
        <div
          className={`${colorStyles[color]} h-full rounded-full transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && <p className="text-xs text-gray-600 mt-1">{Math.round(percentage)}%</p>}
    </div>
  )
}

interface AvatarProps {
  src?: string
  alt?: string
  name?: string
  size?: 'sm' | 'md' | 'lg'
}

export function Avatar({ src, alt, name, size = 'md' }: AvatarProps) {
  const sizeStyles = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-12 h-12 text-base',
    lg: 'w-16 h-16 text-lg',
  }

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`${sizeStyles[size]} rounded-full object-cover`}
      />
    )
  }

  const initials = name
    ?.split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()

  return (
    <div className={`${sizeStyles[size]} gradient-primary rounded-full flex items-center justify-center text-white font-bold`}>
      {initials}
    </div>
  )
}

interface ChipProps {
  label: string
  onRemove?: () => void
  selected?: boolean
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
}

export function Chip({ label, onRemove, selected = false, onClick, variant = 'primary' }: ChipProps) {
  const variantStyles = {
    primary: selected ? 'bg-primary text-white' : 'bg-light text-gray-700 hover:bg-gray-300',
    secondary: selected ? 'bg-secondary text-white' : 'bg-light text-gray-700 hover:bg-gray-300',
    outline: selected ? 'border-2 border-primary bg-blue-50' : 'border-2 border-gray-300 text-gray-700 hover:border-primary',
  }

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${variantStyles[variant]}`}
    >
      {label}
      {onRemove && <span onClick={onRemove} className="ml-2">×</span>}
    </button>
  )
}
