'use client'

import { useState, useEffect } from 'react'

interface Benefit {
  id: number
  icon: string
  title: string
  description: string
  frontColor: string
  backColor: string
}

const benefits: Benefit[] = [
  {
    id: 1,
    icon: '🎯',
    title: 'Aprendizaje Experiencial',
    description: 'Los colaboradores aprenden en entornos inmersivos que simulan la realidad sin riesgos.',
    frontColor: 'from-blue-900 to-blue-800',
    backColor: 'from-purple-500 to-lime-500',
  },
  {
    id: 2,
    icon: '⏱️',
    title: 'Eficiencia de Tiempo',
    description: 'Reduce tiempos de inducción hasta un 40% con simulaciones 360°.',
    frontColor: 'from-blue-800 to-blue-900',
    backColor: 'from-purple-600 to-green-500',
  },
  {
    id: 3,
    icon: '💰',
    title: 'Reducción de Costos',
    description: 'Minimiza costos de capacitación presencial y accidentes laborales.',
    frontColor: 'from-blue-900 to-blue-800',
    backColor: 'from-purple-500 to-lime-400',
  },
  {
    id: 4,
    icon: '📊',
    title: 'Seguimiento en Tiempo Real',
    description: 'Monitorea el progreso de cada colaborador con reportes detallados.',
    frontColor: 'from-blue-800 to-blue-900',
    backColor: 'from-purple-600 to-green-400',
  },
  {
    id: 5,
    icon: '🔒',
    title: 'Entorno Seguro',
    description: 'Permite errores sin consecuencias reales para aprender y corregir.',
    frontColor: 'from-blue-900 to-blue-800',
    backColor: 'from-purple-500 to-lime-500',
  },
  {
    id: 6,
    icon: '🌍',
    title: 'Accesibilidad',
    description: 'Accede desde cualquier dispositivo, en cualquier momento y lugar.',
    frontColor: 'from-blue-800 to-blue-900',
    backColor: 'from-purple-600 to-green-500',
  },
]

export default function BenefitsCarousel3D() {
  const [rotation, setRotation] = useState(0)
  const [flipped, setFlipped] = useState<{ [key: number]: boolean }>({})
  const totalCards = benefits.length
  const anglePerCard = 360 / totalCards

  // Auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev - 2) % 360)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const toggleFlip = (id: number) => {
    setFlipped((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const handleNext = () => {
    setRotation((prev) => prev - anglePerCard)
  }

  const handlePrev = () => {
    setRotation((prev) => prev + anglePerCard)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-otec-light to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-otec-dark mb-4">
            ¿Por qué elegir <span className="gradient-text">Mapeos 360°?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transformamos la capacitación en seguridad laboral con experiencias inmersivas
          </p>
          <p className="text-sm text-gray-500 mt-3">
            👆 Haz click en las tarjetas para ver más • Rotación automática 360°
          </p>
        </div>

        {/* 3D Carousel Container */}
        <div
          className="relative h-96 sm:h-[450px] md:h-[500px] flex items-center justify-center select-none"
          style={{
            perspective: '1200px',
            userSelect: 'none',
          }}
        >
          {/* 3D Carousel */}
          <div
            className="relative w-full h-full"
            style={{
              transformStyle: 'preserve-3d',
              transform: `rotateY(${rotation}deg)`,
              transition: 'transform 0.05s linear',
            }}
          >
            {benefits.map((benefit, idx) => {
              const angle = (idx * anglePerCard * Math.PI) / 180
              const radius = 300
              const z = Math.cos(angle) * radius

              // Opacity based on distance
              const opacity = Math.max(0.4, 1 - Math.abs((z + radius) / (2 * radius)) * 0.5)
              // Scale based on distance
              const scale = Math.max(0.75, 1 - Math.abs((z + radius) / (2 * radius)) * 0.25)

              const isFlipped = flipped[benefit.id] || false

              return (
                <div
                  key={benefit.id}
                  className="absolute w-72 h-80 sm:h-96 cursor-pointer"
                  onClick={() => toggleFlip(benefit.id)}
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: `rotateY(${idx * anglePerCard}deg) translateZ(${radius}px) rotateY(-${idx * anglePerCard}deg)`,
                    left: '50%',
                    top: '50%',
                    marginLeft: '-144px',
                    marginTop: '-192px',
                    opacity: opacity,
                  }}
                >
                  {/* Flip Container */}
                  <div
                    className="relative w-full h-full transition-transform duration-500"
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    }}
                  >
                    {/* Front Face - Azul ACHS */}
                    <div
                      className={`absolute w-full h-full bg-gradient-to-br ${benefit.frontColor} rounded-2xl p-8 flex flex-col justify-center items-center text-white shadow-2xl hover:shadow-3xl transition-all`}
                      style={{
                        backfaceVisibility: 'hidden',
                        transform: `scale(${scale})`,
                        transformOrigin: 'center',
                      }}
                    >
                      <div className="text-6xl mb-4 drop-shadow-lg">{benefit.icon}</div>
                      <h3 className="text-2xl font-bold text-center leading-tight drop-shadow-md">
                        {benefit.title}
                      </h3>
                      <div className="mt-6 text-sm text-white/80 text-center">
                        Haz click para ver más →
                      </div>
                    </div>

                    {/* Back Face - Morado ACHS + verdes */}
                    <div
                      className={`absolute w-full h-full bg-gradient-to-br ${benefit.backColor} rounded-2xl p-8 flex flex-col justify-center items-center text-white shadow-2xl hover:shadow-3xl transition-all`}
                      style={{
                        backfaceVisibility: 'hidden',
                        transform: `rotateY(180deg) scale(${scale})`,
                        transformOrigin: 'center',
                      }}
                    >
                      <p className="text-center text-base leading-relaxed">
                        {benefit.description}
                      </p>
                      <div className="mt-6 text-sm text-white/90 font-semibold">
                        ← Click para volver
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Center Focus Indicator */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-2 h-2 bg-otec-orange rounded-full shadow-lg"></div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center gap-6 mt-12">
          <button
            onClick={handlePrev}
            className="bg-otec-blue hover:bg-otec-orange text-white rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center transition-all hover:scale-110 shadow-lg active:scale-95"
            aria-label="Rotación anterior"
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex flex-col items-center justify-center gap-2">
            <div className="text-otec-dark font-bold text-lg">
              {Math.round(((rotation % 360) / anglePerCard + totalCards) % totalCards) + 1} / {totalCards}
            </div>
            <div className="text-gray-500 text-xs sm:text-sm">tarjetas visibles</div>
          </div>

          <button
            onClick={handleNext}
            className="bg-otec-blue hover:bg-otec-orange text-white rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center transition-all hover:scale-110 shadow-lg active:scale-95"
            aria-label="Siguiente rotación"
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  )
}
