'use client'

import { useState } from 'react'

interface Benefit {
  id: number
  icon: string
  title: string
  description: string
  colorBg: string
}

const benefits: Benefit[] = [
  {
    id: 1,
    icon: '🎯',
    title: 'Aprendizaje Experiencial',
    description: 'Los colaboradores aprenden en entornos inmersivos que simulan la realidad sin riesgos.',
    colorBg: 'bg-gradient-to-br from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600',
  },
  {
    id: 2,
    icon: '⏱️',
    title: 'Eficiencia de Tiempo',
    description: 'Reduce tiempos de inducción hasta un 40% con simulaciones 360°.',
    colorBg: 'bg-gradient-to-br from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600',
  },
  {
    id: 3,
    icon: '💰',
    title: 'Reducción de Costos',
    description: 'Minimiza costos de capacitación presencial y accidentes laborales.',
    colorBg: 'bg-gradient-to-br from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600',
  },
  {
    id: 4,
    icon: '📊',
    title: 'Seguimiento en Tiempo Real',
    description: 'Monitorea el progreso de cada colaborador con reportes detallados.',
    colorBg: 'bg-gradient-to-br from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600',
  },
  {
    id: 5,
    icon: '🔒',
    title: 'Entorno Seguro',
    description: 'Permite errores sin consecuencias reales para aprender y corregir.',
    colorBg: 'bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600',
  },
  {
    id: 6,
    icon: '🌍',
    title: 'Accesibilidad',
    description: 'Accede desde cualquier dispositivo, en cualquier momento y lugar.',
    colorBg: 'bg-gradient-to-br from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600',
  },
]

export default function BenefitsFlipCards() {
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
          <p className="text-sm text-gray-500 mt-3">
            👆 Haz click en cualquier tarjeta para descubrir más
          </p>
        </div>

        {/* Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {benefits.map((benefit) => {
            const isFlipped = flipped[benefit.id] || false

            return (
              <div
                key={benefit.id}
                className="h-80 cursor-pointer perspective"
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
                    className={`absolute w-full h-full ${benefit.colorBg} rounded-2xl p-8 flex flex-col justify-center items-center text-white shadow-lg transition-all duration-300 hover:shadow-2xl`}
                    style={{
                      backfaceVisibility: 'hidden',
                    }}
                  >
                    <div className="text-6xl mb-6 transform transition-transform duration-300 group-hover:scale-110">
                      {benefit.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-center leading-tight drop-shadow-md">
                      {benefit.title}
                    </h3>
                    <div className="mt-6 text-sm text-white/80 text-center">
                      Haz click para ver más →
                    </div>
                  </div>

                  {/* Back Face */}
                  <div
                    className="absolute w-full h-full bg-otec-dark rounded-2xl p-8 flex flex-col justify-center items-center text-white shadow-lg"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    <p className="text-center text-base leading-relaxed mb-6">
                      {benefit.description}
                    </p>
                    <div className="text-center text-sm text-otec-orange font-semibold">
                      ← Haz click para volver
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Features Highlight */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mt-12">
          <div className="text-center p-4 bg-white rounded-lg shadow-sm border-l-4 border-otec-blue">
            <div className="text-3xl mb-2">🎨</div>
            <p className="text-sm text-gray-600 font-medium">Experiencias Visuales</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-sm border-l-4 border-otec-orange">
            <div className="text-3xl mb-2">⚡</div>
            <p className="text-sm text-gray-600 font-medium">Interactivo</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-sm border-l-4 border-otec-purple">
            <div className="text-3xl mb-2">✨</div>
            <p className="text-sm text-gray-600 font-medium">Fluido y Suave</p>
          </div>
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
