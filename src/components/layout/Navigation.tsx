'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Rocket } from 'lucide-react'
import { cn } from '@/lib/utils'
import { COUPLE } from '@/lib/constants'

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Countdown', href: '#countdown' },
  { label: 'Our Story', href: '#story' },
  { label: 'Details', href: '#details' },
  { label: 'RSVP', href: '#rsvp' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-void/90 backdrop-blur-md border-b border-cosmic/20 py-3'
            : 'bg-transparent py-5',
        )}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <button
            onClick={() => handleNavClick('#hero')}
            className="flex items-center gap-2 text-space-white font-cinzel text-lg font-semibold hover:text-cosmic transition-colors"
          >
            <Rocket size={18} className="text-cosmic" />
            {COUPLE.partner1} &amp; {COUPLE.partner2}
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="text-silver hover:text-space-white font-inter text-sm tracking-wide transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-cosmic group-hover:w-full transition-all duration-300" />
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-silver hover:text-space-white transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-y-0 right-0 w-72 z-40 bg-void/95 backdrop-blur-xl border-l border-cosmic/20 flex flex-col pt-24 px-8 gap-6"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => handleNavClick(link.href)}
                className="text-silver hover:text-space-white font-cinzel text-xl text-left transition-colors"
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
