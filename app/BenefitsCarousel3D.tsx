'use client'

import { useState, useEffect } from 'react'

interface Benefit {
  id: number
  icon: string
  title: string
  description: string
  color: string
  gradient: string
}

const benefits: Benefit[] = [
  {
    id: 1,
    icon: '🎯',
    title: 'Aprendizaje Experiencial',
    description: 'Los colaboradores aprenden en entornos inmersivos que simulan la realidad sin riesgos',
    color: 'bg-gradient-to-br from-red-500 via-red-600 to-orange-500',
    gradient: 'from-red-600 to-orange-600',
  },
  {
    id: 2,
    icon: '⏱️',
    title: 'Eficiencia de Tiempo',
    description: 'Reduce tiempos de inducción hasta un 40% con simulaciones 360°',
    color: 'bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500',
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    id: 3,
    icon: '💰',
    title: 'Reducción de Costos',
    description: 'Minimiza costos de capacitación presencial y accidentes laborales',
    color: 'bg-gradient-to-br from-amber-500 via-amber-600 to-orange-500',
    gradient: 'from-amber-600 to-orange-600',
  },
  {
    id: 4,
    icon: '📊',
    title: 'Seguimiento en Tiempo Real',
    description: 'Monitorea el progreso de cada colaborador con reportes detallados',
    color: 'bg-gradient-to-br from-green-500 via-green-600 to-emerald-500',
    gradient: 'from-green-600 to-emerald-600',
  },
  {
    id: 5,
    icon: '🔒',
    title: 'Entorno Seguro',
    description: 'Permite errores sin consecuencias reales para aprender y corregir',
    color: 'bg-gradient-to-br from-purple-500 via-purple-600 to-pink-500',
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    id: 6,
    icon: '🌍',
    title: 'Accesibilidad',
    description: 'Accede desde cualquier dispositivo, en cualquier momento y lugar',
    color: 'bg-gradient-to-br from-indigo-500 via-indigo-600 to-blue-500',
    gradient: 'from-indigo-600 to-blue-600',
  },
]

export default function BenefitsCarousel3D() {
  const [rotation, setRotation] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState(0)
  const totalCards = benefits.length
  const anglePerCard = 360 / totalCards

  // Auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev - anglePerCard) % 360)
    }, 5000)
    return () => clearInterval(interval)
  }, [anglePerCard])

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setDragStart(e.clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    const diff = e.clientX - dragStart
    setRotation((prev) => prev + diff * 0.5)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
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
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-2">
            Transformamos la capacitación en seguridad laboral con experiencias inmersivas
          </p>
          <p className="text-sm text-gray-500">
            🎯 Arrastra para rotar • Usa flechas para navegar • Auto-rotación cada 5 segundos
          </p>
        </div>

        {/* 3D Carousel Container */}
        <div
          className="relative h-96 sm:h-[450px] md:h-[500px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
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
              transition: isDragging ? 'none' : 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            {benefits.map((benefit, idx) => {
              const angle = (idx * anglePerCard * Math.PI) / 180
              const radius = 300
              const x = Math.sin(angle) * radius
              const z = Math.cos(angle) * radius

              // Opacity based on distance
              const opacity = Math.max(0.3, 1 - Math.abs((z + radius) / (2 * radius)) * 0.5)
              // Scale based on distance
              const scale = Math.max(0.7, 1 - Math.abs((z + radius) / (2 * radius)) * 0.3)

              return (
                <div
                  key={benefit.id}
                  className={`absolute w-64 sm:w-72 md:w-80 h-80 sm:h-96 rounded-3xl shadow-2xl transition-all duration-200`}
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: `rotateY(${idx * anglePerCard}deg) translateZ(${radius}px) rotateY(-${idx * anglePerCard}deg)`,
                    left: '50%',
                    top: '50%',
                    marginLeft: '-150px',
                    marginTop: '-200px',
                    opacity: opacity,
                    filter: `brightness(${0.8 + opacity * 0.2})`,
                  }}
                >
                  {/* Card Front */}
                  <div
                    className={`absolute w-full h-full rounded-3xl p-8 flex flex-col justify-center items-center text-white ${benefit.color} shadow-2xl transition-transform duration-300 hover:shadow-3xl hover:scale-105 origin-center`}
                    style={{
                      backfaceVisibility: 'hidden',
                    }}
                  >
                    <div className="text-7xl mb-4 drop-shadow-lg">{benefit.icon}</div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-center leading-tight drop-shadow-md">
                      {benefit.title}
                    </h3>
                  </div>

                  {/* Card Back */}
                  <div
                    className="absolute w-full h-full bg-otec-dark rounded-3xl p-8 flex flex-col justify-center items-center text-white shadow-2xl"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    <p className="text-center text-sm sm:text-base leading-relaxed">
                      {benefit.description}
                    </p>
                    <div className="mt-6 text-center text-xs text-gray-400">
                      Sigue girando para explorar
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
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="bg-otec-blue hover:bg-otec-orange text-white rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center transition-all hover:scale-110 shadow-lg active:scale-95 transform"
            aria-label="Rotación anterior"
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Info Display */}
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="text-otec-dark font-bold text-lg">
              {Math.round(((rotation % 360) / anglePerCard + totalCards) % totalCards) + 1} / {totalCards}
            </div>
            <div className="text-gray-500 text-xs sm:text-sm">tarjetas</div>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="bg-otec-blue hover:bg-otec-orange text-white rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center transition-all hover:scale-110 shadow-lg active:scale-95 transform"
            aria-label="Siguiente rotación"
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Instructions */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 max-w-2xl mx-auto">
          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <div className="text-2xl mb-2">🖱️</div>
            <p className="text-sm text-gray-600 font-medium">Arrastra para rotar</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <div className="text-2xl mb-2">⌨️</div>
            <p className="text-sm text-gray-600 font-medium">Usa las flechas</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <div className="text-2xl mb-2">🎬</div>
            <p className="text-sm text-gray-600 font-medium">Auto-rotación 360°</p>
          </div>
        </div>
      </div>
    </section>
  )
}
