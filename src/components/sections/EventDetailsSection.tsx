'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Rocket, Utensils, Music } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import GlowCard from '@/components/ui/GlowCard'
import { WEDDING_DATE, WEDDING_VENUE, EVENT_SCHEDULE, COUPLE } from '@/lib/constants'
import { formatWeddingDate } from '@/lib/utils'

interface DetailCardProps {
  icon: React.ReactNode
  label: string
  value: string
  sub?: string
  delay?: number
}

function DetailCard({ icon, label, value, sub, delay = 0 }: DetailCardProps) {
  return (
    <GlowCard delay={delay} className="flex items-start gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-cosmic/20 border border-cosmic/30 flex items-center justify-center text-cosmic">
        {icon}
      </div>
      <div className="space-y-1">
        <p className="font-mono text-xs text-silver/60 tracking-widest uppercase">{label}</p>
        <p className="font-cinzel text-space-white text-base md:text-lg font-semibold">{value}</p>
        {sub && <p className="font-inter text-silver text-xs">{sub}</p>}
      </div>
    </GlowCard>
  )
}

const SCHEDULE_ICONS = {
  church: <Rocket size={18} />,
  party: <Music size={18} />,
  dinner: <Utensils size={18} />,
}

export default function EventDetailsSection() {
  return (
    <SectionWrapper id="details" alternate>
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-cosmic text-xs md:text-sm tracking-[0.3em] uppercase"
          >
            Mission Briefing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-cinzel text-3xl md:text-5xl text-space-white font-semibold"
          >
            Event Details
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-inter text-silver text-sm md:text-base max-w-xl mx-auto"
          >
            All the coordinates you need to join us on the most important mission of
            {' '}{COUPLE.partner1} &amp; {COUPLE.partner2}&apos;s lives.
          </motion.p>
        </div>

        {/* Main detail cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DetailCard
            icon={<Calendar size={20} />}
            label="Launch Date"
            value={formatWeddingDate(WEDDING_DATE)}
            delay={0}
          />
          <DetailCard
            icon={<Clock size={20} />}
            label="Launch Time"
            value="10:00 WIB"
            sub="Gates open 30 minutes prior"
            delay={0.1}
          />
          <DetailCard
            icon={<MapPin size={20} />}
            label="Launch Pad"
            value={WEDDING_VENUE.name}
            sub={WEDDING_VENUE.address}
            delay={0.2}
          />
          <DetailCard
            icon={<Rocket size={20} />}
            label="Mission Code"
            value={`${COUPLE.partner1[0]}${COUPLE.partner2[0]}-2026-LAUNCH`}
            sub="Cite this code at arrival"
            delay={0.3}
          />
        </div>

        {/* Coordinates panel */}
        <GlowCard
          delay={0.4}
          glowColor="rgba(255,215,0,0.15)"
          className="border-gold/20 bg-deep-space/60"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1 space-y-1 text-center md:text-left">
              <p className="font-mono text-xs text-gold/60 tracking-widest uppercase">
                GPS Coordinates
              </p>
              <p className="font-mono text-gold text-lg md:text-xl">
                {WEDDING_VENUE.coordinates.lat}, {WEDDING_VENUE.coordinates.lng}
              </p>
              <p className="font-inter text-silver text-sm">{WEDDING_VENUE.address}</p>
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(WEDDING_VENUE.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 px-6 py-2.5 rounded-full border border-gold/40 text-gold text-sm font-inter hover:bg-gold/10 transition-colors"
            >
              Open in Maps
            </a>
          </div>
        </GlowCard>

        {/* Schedule */}
        <div className="space-y-4">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-cinzel text-space-white text-xl text-center"
          >
            Mission Schedule
          </motion.h3>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            {EVENT_SCHEDULE.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="flex-1 text-center rounded-xl border border-cosmic/20 bg-nebula/30 backdrop-blur-sm p-5 space-y-2"
              >
                <div className="flex items-center justify-center text-cosmic">
                  {SCHEDULE_ICONS[item.icon as keyof typeof SCHEDULE_ICONS]}
                </div>
                <p className="font-mono text-gold text-base">{item.time}</p>
                <p className="font-cinzel text-space-white text-sm">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
