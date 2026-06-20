'use client'

import { motion } from 'framer-motion'

interface SpaceshipSVGProps {
  className?: string
}

export default function SpaceshipSVG({ className }: SpaceshipSVGProps) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -18, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg
        viewBox="0 0 200 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_30px_rgba(108,99,255,0.8)]"
      >
        {/* Engine exhaust flame */}
        <motion.ellipse
          cx="100"
          cy="275"
          rx="18"
          ry="28"
          fill="url(#flameGrad)"
          animate={{ ry: [28, 38, 28], opacity: [0.9, 1, 0.9] }}
          transition={{ duration: 0.4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <ellipse cx="100" cy="268" rx="10" ry="16" fill="#fff8dc" opacity="0.9" />

        {/* Main body */}
        <path
          d="M100 10 C70 60 55 110 55 160 L55 200 C55 210 65 218 100 218 C135 218 145 210 145 200 L145 160 C145 110 130 60 100 10Z"
          fill="url(#bodyGrad)"
        />

        {/* Cockpit window */}
        <ellipse cx="100" cy="100" rx="22" ry="28" fill="url(#windowGrad)" />
        <ellipse cx="93" cy="93" rx="8" ry="10" fill="rgba(255,255,255,0.3)" />

        {/* Left wing */}
        <path
          d="M55 170 C30 165 15 180 18 195 L55 195Z"
          fill="url(#wingGrad)"
        />
        {/* Right wing */}
        <path
          d="M145 170 C170 165 185 180 182 195 L145 195Z"
          fill="url(#wingGrad)"
        />

        {/* Body detail lines */}
        <line x1="78" y1="130" x2="78" y2="195" stroke="rgba(108,99,255,0.5)" strokeWidth="1.5" />
        <line x1="122" y1="130" x2="122" y2="195" stroke="rgba(108,99,255,0.5)" strokeWidth="1.5" />

        {/* Engine nozzles */}
        <rect x="83" y="210" width="10" height="20" rx="3" fill="#2a2a6e" />
        <rect x="107" y="210" width="10" height="20" rx="3" fill="#2a2a6e" />

        {/* Star decorations on body */}
        <circle cx="100" cy="155" r="3" fill="#ffd700" opacity="0.8" />
        <circle cx="88" cy="168" r="2" fill="#ffd700" opacity="0.6" />
        <circle cx="112" cy="168" r="2" fill="#ffd700" opacity="0.6" />

        {/* Nose tip glow */}
        <circle cx="100" cy="12" r="5" fill="#c0c0ff" opacity="0.9" />

        <defs>
          <linearGradient id="bodyGrad" x1="55" y1="10" x2="145" y2="218" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#c0c0ff" />
            <stop offset="40%" stopColor="#6c63ff" />
            <stop offset="100%" stopColor="#2a2a6e" />
          </linearGradient>
          <radialGradient id="windowGrad" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#a8d8ff" />
            <stop offset="100%" stopColor="#0a2a6e" />
          </radialGradient>
          <linearGradient id="wingGrad" x1="0" y1="0" x2="1" y2="0" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor="#3a3a8e" />
            <stop offset="100%" stopColor="#6c63ff" />
          </linearGradient>
          <linearGradient id="flameGrad" x1="100" y1="247" x2="100" y2="303" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ff6584" />
            <stop offset="50%" stopColor="#ff9d00" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  )
}
