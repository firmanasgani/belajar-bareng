'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, Rocket } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { cn } from '@/lib/utils'
import { COUPLE } from '@/lib/constants'

interface FormData {
  name: string
  email: string
  attendance: 'yes' | 'no' | ''
  meal: string
  message: string
}

const MEAL_OPTIONS = ['Standard', 'Vegetarian', 'Vegan', 'Halal', 'Gluten-Free']

export default function RSVPSection() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    attendance: '',
    meal: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  const isValid = form.name.trim() && form.email.trim() && form.attendance

  return (
    <SectionWrapper id="rsvp">
      <div className="max-w-2xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-cosmic text-xs md:text-sm tracking-[0.3em] uppercase"
          >
            Boarding Pass
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-cinzel text-3xl md:text-5xl text-space-white font-semibold"
          >
            Join Our Mission
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-inter text-silver text-sm md:text-base"
          >
            Confirm your presence aboard {COUPLE.partner1} &amp; {COUPLE.partner2}&apos;s
            most important mission. All crew members are requested to confirm by{' '}
            <span className="text-gold">July 25, 2026</span>.
          </motion.p>
        </div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <SuccessState key="success" name={form.name} attendance={form.attendance} />
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              onSubmit={handleSubmit}
              className="relative rounded-2xl border border-cosmic/20 bg-nebula/30 backdrop-blur-sm p-6 md:p-8 space-y-6"
            >
              {/* Boarding pass header bar */}
              <div className="flex items-center justify-between pb-4 border-b border-cosmic/20">
                <div className="font-mono text-xs text-cosmic/60 tracking-widest">BOARDING PASS</div>
                <div className="font-mono text-xs text-silver/40">
                  {COUPLE.partner1[0]}{COUPLE.partner2[0]}-2026
                </div>
              </div>

              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FieldGroup label="Passenger Name" name="name" required>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className={inputClass}
                  />
                </FieldGroup>
                <FieldGroup label="Communication Channel" name="email" required>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className={inputClass}
                  />
                </FieldGroup>
              </div>

              {/* Attendance */}
              <FieldGroup label="Mission Status" name="attendance" required>
                <div className="flex gap-3">
                  {(['yes', 'no'] as const).map((val) => (
                    <label
                      key={val}
                      className={cn(
                        'flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border cursor-pointer transition-all duration-200 font-inter text-sm',
                        form.attendance === val
                          ? val === 'yes'
                            ? 'border-cosmic bg-cosmic/20 text-space-white'
                            : 'border-stardust bg-stardust/20 text-space-white'
                          : 'border-cosmic/20 text-silver hover:border-cosmic/40',
                      )}
                    >
                      <input
                        type="radio"
                        name="attendance"
                        value={val}
                        checked={form.attendance === val}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      {val === 'yes' ? '🚀 I\'m Coming!' : '😔 Can\'t Make It'}
                    </label>
                  ))}
                </div>
              </FieldGroup>

              {/* Meal preference — show only when attending */}
              <AnimatePresence>
                {form.attendance === 'yes' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FieldGroup label="Meal Preference" name="meal">
                      <select
                        name="meal"
                        value={form.meal}
                        onChange={handleChange}
                        className={cn(inputClass, 'cursor-pointer')}
                      >
                        <option value="">Select preference</option>
                        {MEAL_OPTIONS.map((o) => (
                          <option key={o} value={o.toLowerCase()}>
                            {o}
                          </option>
                        ))}
                      </select>
                    </FieldGroup>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Message */}
              <FieldGroup label="Message to the Crew" name="message">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Leave a message for Romeo & Juliet..."
                  rows={3}
                  className={cn(inputClass, 'resize-none')}
                />
              </FieldGroup>

              {/* Submit */}
              <button
                type="submit"
                disabled={!isValid || loading}
                className={cn(
                  'w-full py-3.5 rounded-full font-inter font-semibold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2',
                  isValid && !loading
                    ? 'bg-cosmic hover:bg-cosmic/80 text-white hover:shadow-[0_0_30px_rgba(108,99,255,0.5)] hover:scale-[1.02]'
                    : 'bg-cosmic/30 text-space-white/40 cursor-not-allowed',
                )}
              >
                {loading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                  >
                    <Rocket size={18} />
                  </motion.div>
                ) : (
                  <>
                    <Send size={16} />
                    Confirm Boarding Pass
                  </>
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  )
}

const inputClass =
  'w-full bg-deep-space/60 border border-cosmic/20 rounded-xl px-4 py-3 text-space-white placeholder-silver/40 font-inter text-sm focus:outline-none focus:border-cosmic/60 focus:bg-nebula/40 transition-colors'

function FieldGroup({
  label,
  name,
  required,
  children,
}: {
  label: string
  name: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={name} className="font-mono text-xs text-silver/70 tracking-widest uppercase block">
        {label}
        {required && <span className="text-stardust ml-1">*</span>}
      </label>
      {children}
    </div>
  )
}

function SuccessState({ name, attendance }: { name: string; attendance: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: 'spring' }}
      className="rounded-2xl border border-cosmic/30 bg-nebula/30 backdrop-blur-sm p-10 text-center space-y-5"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        className="flex justify-center"
      >
        <CheckCircle size={56} className="text-cosmic" />
      </motion.div>
      <div className="space-y-2">
        <h3 className="font-cinzel text-space-white text-2xl font-semibold">
          Boarding Pass Confirmed!
        </h3>
        <p className="font-inter text-silver text-sm">
          {attendance === 'yes'
            ? `Welcome aboard, ${name}! We can't wait to celebrate with you among the stars. ✨`
            : `We'll miss you, ${name}. Know that you're with us in spirit on this journey. 💫`}
        </p>
      </div>
      <div className="font-mono text-xs text-cosmic/60 tracking-widest">
        CONFIRMATION RECEIVED · RJ-2026
      </div>
    </motion.div>
  )
}
