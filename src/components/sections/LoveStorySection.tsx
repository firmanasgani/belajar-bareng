'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { LOVE_STORY_TIMELINE } from '@/lib/constants'

export default function LoveStorySection() {
  return (
    <SectionWrapper id="story">
      <div className="space-y-12">
        <div className="text-center space-y-3">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-cosmic text-xs md:text-sm tracking-[0.3em] uppercase"
          >
            Mission Log
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-cinzel text-3xl md:text-5xl text-space-white font-semibold"
          >
            Our Story in the Stars
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-inter text-silver text-sm md:text-base max-w-xl mx-auto"
          >
            Every great mission has a log. Here&apos;s ours — from first contact to final launch.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cosmic/60 via-stardust/40 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {LOVE_STORY_TIMELINE.map((entry, index) => (
              <TimelineEntry key={entry.coordinates} entry={entry} index={index} />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

interface TimelineEntry {
  date: string
  title: string
  description: string
  icon: string
  coordinates: string
}

function TimelineEntry({ entry, index }: { entry: TimelineEntry; index: number }) {
  const isLeft = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Card */}
      <div className="flex-1 md:w-[calc(50%-2rem)]">
        <div className="relative rounded-2xl border border-cosmic/20 bg-nebula/40 backdrop-blur-sm p-5 md:p-6 hover:border-cosmic/40 transition-colors group">
          {/* Coordinate label */}
          <span className="font-mono text-xs text-cosmic/60 tracking-widest">
            {entry.coordinates}
          </span>

          <div className="mt-2 space-y-2">
            <p className="font-mono text-stardust text-xs tracking-wide">{entry.date}</p>
            <h3 className="font-cinzel text-space-white text-lg md:text-xl font-semibold">
              {entry.title}
            </h3>
            <p className="font-inter text-silver text-sm leading-relaxed">
              {entry.description}
            </p>
          </div>

          {/* Glow on hover */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-cosmic/5" />
        </div>
      </div>

      {/* Center node */}
      <div className="hidden md:flex flex-shrink-0 w-16 h-16 items-center justify-center relative z-10">
        <div className="w-12 h-12 rounded-full bg-deep-space border-2 border-cosmic flex items-center justify-center text-2xl shadow-[0_0_20px_rgba(108,99,255,0.5)]">
          {entry.icon}
        </div>
      </div>

      {/* Mobile icon */}
      <div className="md:hidden flex items-center gap-3 mb-1">
        <span className="text-2xl">{entry.icon}</span>
      </div>

      {/* Empty space for opposite side */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  )
}
