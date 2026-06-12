'use client'

import { useEffect, useState } from 'react'

interface CounterProps {
  end: number
  duration: number
  suffix?: string
}

export function AnimatedCounter({ end, duration, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animation when component mounts
    setIsVisible(true)
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number | null = null
    let animationFrameId: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function: cubic ease-out
      const easeProgress = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(easeProgress * end)

      setCount(current)

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate)
      }
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrameId)
  }, [end, duration, isVisible])

  return (
    <span className="inline-block min-w-max">
      {count.toLocaleString('es-CL')}
      {suffix && <span className="ml-1">{suffix}</span>}
    </span>
  )
}
