'use client'

import { useState } from 'react'

interface Benefit {
  id: number
  icon: string
  title: string
  description: string
  color: string
}

const benefits: Benefit[] = [
  {
    id: 1,
    icon: '🎯',
    title: 'Aprendizaje Experiencial',
    description: 'Los colaboradores aprenden en entornos inmersivos que simulan la realidad sin riesgos',
    color: 'from-red-500 to-orange-500',
  },
  {
    id: 2,
    icon: '⏱️',
    title: 'Eficiencia de Tiempo',
    description: 'Reduce tiempos de inducción hasta un 40% con simulaciones 360°',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    icon: '💰',
    title: 'Reducción de Costos',
    description: 'Minimiza costos de capacitación presencial y accidentes laborales',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    id: 4,
    icon: '📊',
    title: 'Seguimiento en Tiempo Real',
    description: 'Monitorea el progreso de cada colaborador con reportes detallados',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 5,
    icon: '🔒',
    title: 'Entorno Seguro',
    description: 'Permite errores sin consecuencias reales para aprender y corregir',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 6,
    icon: '🌍',
    title: 'Accesibilidad',
    description: 'Accede desde cualquier dispositivo, en cualquier momento y lugar',
    color: 'from-indigo-500 to-blue-500',
  },
]

export default function BenefitsCarousel3D() {
  const [flipped, setFlipped] = useState<number[]>([])
  const [activeIndex, setActiveIndex] = useState(0)

  const toggleFlip = (id: number) => {
    setFlipped((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    )
  }

  const itemsPerView = 3
  const totalSlides = Math.ceil(benefits.length / itemsPerView)

  const getVisibleBenefits = () => {
    const start = activeIndex * itemsPerView
    return benefits.slice(start, start + itemsPerView)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalSlides)
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-otec-light">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-otec-dark mb-4">
            ¿Por qué elegir <span className="gradient-text">Mapeos 360°?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transformamos la capacitación en seguridad laboral con experiencias inmersivas
          </p>
          <p className="text-sm text-gray-500 mt-4">
            💡 Haz click en las tarjetas para ver más detalles
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[420px]">
            {getVisibleBenefits().map((benefit) => {
              const isFlipped = flipped.includes(benefit.id)
              return (
                <div
                  key={benefit.id}
                  className="h-80 cursor-pointer perspective"
                  onClick={() => toggleFlip(benefit.id)}
                >
                  {/* 3D Flip Container */}
                  <div
                    className="relative w-full h-full transition-transform duration-500 transform-gpu"
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    }}
                  >
                    {/* Front Face */}
                    <div
                      className={`absolute w-full h-full bg-gradient-to-br ${benefit.color} rounded-2xl p-8 flex flex-col justify-center items-center text-white shadow-lg hover:shadow-2xl transition-shadow`}
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      <div className="text-6xl mb-4">{benefit.icon}</div>
                      <h3 className="text-2xl font-bold text-center">{benefit.title}</h3>
                    </div>

                    {/* Back Face */}
                    <div
                      className="absolute w-full h-full bg-otec-dark rounded-2xl p-8 flex flex-col justify-center items-center text-white shadow-lg hover:shadow-2xl transition-shadow"
                      style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                      }}
                    >
                      <p className="text-center text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                      <div className="mt-6 text-center text-xs text-gray-400">
                        Haz click de nuevo para volver
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Navigation Arrows */}
          {totalSlides > 1 && (
            <>
              {/* Previous Button */}
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 md:-translate-x-20 z-10 bg-otec-blue hover:bg-otec-orange text-white rounded-full w-12 h-12 flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 md:translate-x-20 z-10 bg-otec-blue hover:bg-otec-orange text-white rounded-full w-12 h-12 flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                aria-label="Next slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Pagination Dots */}
        {totalSlides > 1 && (
          <div className="flex justify-center gap-2 mt-12">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === activeIndex
                    ? 'bg-otec-orange w-8'
                    : 'bg-gray-300 w-2 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {/* Info Text */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-600">
            Slide {activeIndex + 1} de {totalSlides}
          </p>
        </div>
      </div>

      {/* CSS for 3D perspective */}
      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
      `}</style>
    </section>
  )
}
