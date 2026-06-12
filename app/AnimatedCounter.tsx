'use client'

import { useEffect, useRef, useState } from 'react'

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
}

export function AnimatedCounter({ end, duration = 2500, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const containerRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    // Trigger animation when component mounts (simulates IntersectionObserver)
    setHasStarted(true)
  }, [])

  useEffect(() => {
    if (!hasStarted) return

    let startTime: number | null = null
    let animationFrameId: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Smooth easing: easeOutCubic
      const easeProgress = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(easeProgress * end)

      setCount(current)

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate)
      }
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrameId)
  }, [end, duration, hasStarted])

  return (
    <span 
      ref={containerRef}
      className="inline-block font-bold text-4xl"
      style={{
        fontVariantNumeric: 'tabular-nums',
        background: 'linear-gradient(135deg, #003B7A 0%, #FF6B35 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textShadow: 'none',
      }}
    >
      {count.toLocaleString('es-CL')}
      {suffix && <span className="ml-2">{suffix}</span>}
    </span>
  )
}
