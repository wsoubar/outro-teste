interface AvatarProps {
  src: string
  alt: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizes = {
  sm: 'w-12 h-12',
  md: 'w-24 h-24',
  lg: 'w-36 h-36',
}

export function Avatar({ src, alt, size = 'md', className = '' }: AvatarProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={`${sizes[size]} rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg ${className}`}
    />
  )
}
