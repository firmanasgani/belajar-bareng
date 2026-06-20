'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface FloatingPlanetProps {
  size?: number
  color?: string
  ringColor?: string
  className?: string
  delay?: number
}

export default function FloatingPlanet({
  size = 80,
  color = '#6c63ff',
  ringColor = 'rgba(108,99,255,0.3)',
  className,
  delay = 0,
}: FloatingPlanetProps) {
  return (
    <motion.div
      className={cn('relative pointer-events-none', className)}
      animate={{ y: [0, -16, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay }}
      style={{ width: size, height: size }}
    >
      <div
        className="rounded-full absolute inset-0"
        style={{
          background: `radial-gradient(circle at 35% 35%, ${color}cc, ${color}44)`,
          boxShadow: `0 0 30px ${color}55`,
        }}
      />
      {/* Ring */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 opacity-60"
        style={{
          width: size * 1.7,
          height: size * 0.35,
          borderColor: ringColor,
          transform: 'translate(-50%, -50%) rotateX(60deg)',
        }}
      />
    </motion.div>
  )
}
