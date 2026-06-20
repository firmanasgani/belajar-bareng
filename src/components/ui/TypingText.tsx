'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TypingTextProps {
  text: string
  delay?: number
  speed?: number
  className?: string
  showCursor?: boolean
  cursorPersist?: boolean
}

export default function TypingText({
  text,
  delay = 0,
  speed = 80,
  className,
  showCursor = true,
  cursorPersist = false,
}: TypingTextProps) {
  const [displayed, setDisplayed] = useState('')
  const [started, setStarted] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  useEffect(() => {
    if (!started || done) return
    if (displayed.length >= text.length) {
      setDone(true)
      return
    }
    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1))
    }, speed)
    return () => clearTimeout(timer)
  }, [started, displayed, text, speed, done])

  const cursorVisible = showCursor && (!done || cursorPersist)

  return (
    <>
      <span className={className}>{displayed}</span>
      {cursorVisible && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
          className="text-cosmic"
        >
          |
        </motion.span>
      )}
    </>
  )
}
