'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import SpaceshipSVG from '@/components/ui/SpaceshipSVG'
import FloatingPlanet from '@/components/ui/FloatingPlanet'
import TypingText from '@/components/ui/TypingText'
import { COUPLE, WEDDING_DATE } from '@/lib/constants'
import { formatWeddingDate } from '@/lib/utils'

export default function HeroSection() {
  const scrollToCountdown = () => {
    document.querySelector('#countdown')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToRSVP = () => {
    document.querySelector('#rsvp')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Decorative planets */}
      <FloatingPlanet
        size={100}
        color="#6c63ff"
        className="absolute top-24 left-8 md:left-20 opacity-60"
        delay={0}
      />
      <FloatingPlanet
        size={60}
        color="#ff6584"
        className="absolute top-40 right-8 md:right-24 opacity-50"
        delay={1.5}
      />
      <FloatingPlanet
        size={40}
        color="#ffd700"
        className="absolute bottom-32 left-16 md:left-32 opacity-40"
        delay={3}
      />

      <div className="relative flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-6xl w-full">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left space-y-6 order-2 lg:order-1">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-cosmic text-sm md:text-base tracking-[0.3em] uppercase"
          >
            Mission: Forever Together
          </motion.p>

          <h1 className="font-cinzel text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <TypingText
              text={COUPLE.partner1}
              delay={400}
              speed={80}
              className="bg-gradient-to-r from-space-white via-cosmic to-stardust bg-clip-text text-transparent"
            />
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-gold text-4xl md:text-5xl lg:text-6xl font-light"
            >
              &amp;
            </motion.span>
            <br />
            <TypingText
              text={COUPLE.partner2}
              delay={1000}
              speed={80}
              className="bg-gradient-to-r from-stardust via-cosmic to-space-white bg-clip-text text-transparent"
              cursorPersist
            />
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="space-y-2"
          >
            <p className="font-mono text-silver text-xs md:text-sm tracking-widest uppercase">
              Mission Launch
            </p>
            <p className="font-cinzel text-gold text-lg md:text-2xl tracking-wide">
              {formatWeddingDate(WEDDING_DATE)}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.95 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
          >
            <button
              onClick={scrollToRSVP}
              className="px-8 py-3 rounded-full bg-cosmic hover:bg-cosmic/80 text-white font-inter font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(108,99,255,0.6)]"
            >
              Confirm Your Boarding Pass
            </button>
            <button
              onClick={scrollToCountdown}
              className="px-8 py-3 rounded-full border border-cosmic/50 text-cosmic hover:border-cosmic hover:bg-cosmic/10 font-inter text-sm tracking-wide transition-all duration-300"
            >
              View Mission Details
            </button>
          </motion.div>
        </div>

        {/* Spaceship */}
        <motion.div
          className="flex-shrink-0 w-48 md:w-64 lg:w-72 order-1 lg:order-2"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        >
          <SpaceshipSVG className="w-full h-full" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToCountdown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 text-silver/60 hover:text-silver transition-colors"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.button>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-void to-transparent pointer-events-none" />
    </section>
  )
}
