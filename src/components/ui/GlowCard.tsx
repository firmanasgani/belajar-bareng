'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GlowCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
  delay?: number
}

export default function GlowCard({
  children,
  className,
  glowColor = 'rgba(108,99,255,0.25)',
  delay = 0,
}: GlowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className={cn(
        'relative rounded-2xl border border-cosmic/20 bg-nebula/40 backdrop-blur-sm p-6',
        'hover:border-cosmic/50 transition-colors duration-300',
        className,
      )}
      style={{ boxShadow: `0 0 30px ${glowColor}` }}
    >
      {children}
    </motion.div>
  )
}
