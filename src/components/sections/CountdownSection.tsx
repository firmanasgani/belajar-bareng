'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { useCountdown } from '@/hooks/useCountdown'
import { padZero } from '@/lib/utils'
import { COUPLE } from '@/lib/constants'

interface CountdownUnitProps {
  value: number
  label: string
  delay: number
}

function CountdownUnit({ value, label, delay }: CountdownUnitProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center gap-3"
    >
      <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36">
        {/* Outer glow ring */}
        <div className="absolute inset-0 rounded-2xl bg-cosmic/10 border border-cosmic/30 animate-pulse-glow" />
        {/* Inner card */}
        <div className="absolute inset-1 rounded-xl bg-nebula/80 backdrop-blur-sm flex items-center justify-center">
          <span className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold text-space-white tabular-nums">
            {padZero(value)}
          </span>
        </div>
        {/* Corner decorations */}
        <span className="absolute top-2 left-2 w-2 h-2 border-t border-l border-cosmic/60" />
        <span className="absolute top-2 right-2 w-2 h-2 border-t border-r border-cosmic/60" />
        <span className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-cosmic/60" />
        <span className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-cosmic/60" />
      </div>
      <span className="font-mono text-xs md:text-sm text-silver tracking-[0.25em] uppercase">
        {label}
      </span>
    </motion.div>
  )
}

export default function CountdownSection() {
  const { days, hours, minutes, seconds, isExpired } = useCountdown()

  return (
    <SectionWrapper id="countdown" alternate>
      <div className="text-center space-y-12">
        <div className="space-y-3">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-cosmic text-xs md:text-sm tracking-[0.3em] uppercase"
          >
            T-Minus Until Launch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-cinzel text-3xl md:text-5xl text-space-white font-semibold"
          >
            The Mission Begins In
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-inter text-silver text-sm md:text-base max-w-xl mx-auto"
          >
            {COUPLE.partner1} &amp; {COUPLE.partner2} are counting down to the greatest
            adventure of their lives. Will you be there to witness the launch?
          </motion.p>
        </div>

        {isExpired ? (
          <div className="font-cinzel text-2xl text-gold animate-pulse">
            The mission has launched! 🚀
          </div>
        ) : (
          <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
            <CountdownUnit value={days} label="Days" delay={0} />
            <Separator />
            <CountdownUnit value={hours} label="Hours" delay={0.1} />
            <Separator />
            <CountdownUnit value={minutes} label="Minutes" delay={0.2} />
            <Separator />
            <CountdownUnit value={seconds} label="Seconds" delay={0.3} />
          </div>
        )}

        {/* Fuel bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="max-w-md mx-auto space-y-2"
        >
          <div className="flex justify-between font-mono text-xs text-silver/60">
            <span>MISSION FUEL</span>
            <span>100%</span>
          </div>
          <div className="h-2 rounded-full bg-nebula overflow-hidden">
            <div className="h-full w-full bg-gradient-to-r from-cosmic via-stardust to-gold rounded-full" />
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

function Separator() {
  return (
    <div className="flex flex-col gap-2 self-center mb-8">
      <span className="w-1.5 h-1.5 rounded-full bg-cosmic" />
      <span className="w-1.5 h-1.5 rounded-full bg-cosmic" />
    </div>
  )
}
