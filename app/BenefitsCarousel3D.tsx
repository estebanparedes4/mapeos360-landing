'use client'

import { useState } from 'react'

interface Benefit {
  id: number
  icon: string
  title: string
  description: string
}

const benefits: Benefit[] = [
  {
    id: 1,
    icon: '🎯',
    title: 'Aprendizaje Experiencial',
    description: 'Los colaboradores aprenden en entornos inmersivos que simulan la realidad sin riesgos.',
  },
  {
    id: 2,
    icon: '⏱️',
    title: 'Eficiencia de Tiempo',
    description: 'Reduce tiempos de inducción hasta un 40% con simulaciones 360°.',
  },
  {
    id: 3,
    icon: '💰',
    title: 'Reducción de Costos',
    description: 'Minimiza costos de capacitación presencial y accidentes laborales.',
  },
  {
    id: 4,
    icon: '📊',
    title: 'Seguimiento en Tiempo Real',
    description: 'Monitorea el progreso de cada colaborador con reportes detallados.',
  },
  {
    id: 5,
    icon: '🔒',
    title: 'Entorno Seguro',
    description: 'Permite errores sin consecuencias reales para aprender y corregir.',
  },
  {
    id: 6,
    icon: '🌍',
    title: 'Accesibilidad',
    description: 'Accede desde cualquier dispositivo, en cualquier momento y lugar.',
  },
]

export default function BenefitsCarousel3D() {
  const [flipped, setFlipped] = useState<{ [key: number]: boolean }>({})

  const toggleFlip = (id: number) => {
    setFlipped((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-otec-light to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-otec-dark mb-4">
            ¿Por qué elegir <span className="gradient-text">Mapeos 360°?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transformamos la capacitación en seguridad laboral con experiencias inmersivas
          </p>
        </div>

        {/* Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => {
            const isFlipped = flipped[benefit.id] || false

            return (
              <div
                key={benefit.id}
                className="h-80 cursor-pointer"
                onClick={() => toggleFlip(benefit.id)}
              >
                {/* Flip Container */}
                <div
                  className="relative w-full h-full transition-transform duration-500"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  }}
                >
                  {/* Front Face */}
                  <div
                    className="absolute w-full h-full bg-white rounded-2xl p-8 flex flex-col justify-center items-center shadow-md hover:shadow-lg transition-shadow border-l-4 border-otec-blue"
                    style={{
                      backfaceVisibility: 'hidden',
                    }}
                  >
                    <div className="text-6xl mb-4">{benefit.icon}</div>
                    <h3 className="text-2xl font-bold text-otec-dark text-center leading-tight">
                      {benefit.title}
                    </h3>
                    <div className="mt-6 text-sm text-gray-500 text-center">
                      Haz click para ver más →
                    </div>
                  </div>

                  {/* Back Face */}
                  <div
                    className="absolute w-full h-full bg-otec-blue rounded-2xl p-8 flex flex-col justify-center items-center text-white shadow-md hover:shadow-lg transition-shadow"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    <p className="text-center text-base leading-relaxed">
                      {benefit.description}
                    </p>
                    <div className="mt-6 text-sm text-white/80 text-center">
                      ← Haz click para volver
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
