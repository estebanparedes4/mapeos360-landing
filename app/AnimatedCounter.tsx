'use client'

import { useEffect, useState } from 'react'

interface CounterProps {
  end: number
  duration: number
  suffix?: string
}

export function AnimatedCounter({ end, duration, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number | null = null
    let animationFrameId: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function (ease-out)
      const easeProgress = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(easeProgress * end)

      setCount(current)

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate)
      }
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrameId)
  }, [end, duration])

  return (
    <span>
      {count.toLocaleString('es-CL')}
      {suffix}
    </span>
  )
}
