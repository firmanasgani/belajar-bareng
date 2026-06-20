'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  id?: string
  className?: string
  children: React.ReactNode
  alternate?: boolean
}

export default function SectionWrapper({
  id,
  className,
  children,
  alternate = false,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(
        'relative z-10 py-20 px-4 md:px-8 lg:px-16',
        alternate ? 'bg-deep-space/60' : 'bg-transparent',
        className,
      )}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </motion.section>
  )
}
