'use client'

import { useState } from 'react'

interface Hotspot {
  x: number
  y: number
  label: string
  description: string
  type: string
}

interface TourPreviewProps {
  tour: {
    id: number
    title: string
    description: string
    sector: string
    image: string
    url: string
    icon: string
    hotspots: Hotspot[]
  }
}

export default function TourPreview({ tour }: TourPreviewProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null)

  const getHotspotColor = (type: string) => {
    switch (type) {
      case 'safety':
        return 'bg-green-500'
      case 'warning':
        return 'bg-yellow-500'
      case 'info':
        return 'bg-blue-500'
      default:
        return 'bg-otec-orange'
    }
  }

  return (
    <>
      <div className="card-hover bg-white border-2 border-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl">
        {/* Imagen con hotspots */}
        <div className="relative h-64 bg-gray-900 group">
          <img
            src={tour.image}
            alt={tour.title}
            className="w-full h-full object-cover"
          />

          {/* Hotspots interactivos */}
          {tour.hotspots.map((hotspot, idx) => (
            <div key={idx}>
              {/* Pulse animation */}
              <div
                className={`absolute w-4 h-4 rounded-full ${getHotspotColor(
                  hotspot.type
                )} opacity-50 animate-pulse`}
                style={{
                  left: `${hotspot.x}%`,
                  top: `${hotspot.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              />

              {/* Hotspot button */}
              <button
                onClick={() => setActiveHotspot(hotspot)}
                className={`absolute w-8 h-8 rounded-full ${getHotspotColor(
                  hotspot.type
                )} opacity-70 hover:opacity-100 transition flex items-center justify-center text-white text-xs font-bold cursor-pointer`}
                style={{
                  left: `${hotspot.x}%`,
                  top: `${hotspot.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                title={hotspot.label}
              >
                {idx + 1}
              </button>
            </div>
          ))}

          {/* Overlay info en hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition flex items-end p-4 opacity-0 group-hover:opacity-100">
            <p className="text-white text-sm font-semibold">
              Haz clic en los puntos para explorar
            </p>
          </div>
        </div>

        {/* Info hotspot activo */}
        {activeHotspot && (
          <div className="bg-blue-50 border-l-4 border-otec-blue p-4">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-bold text-otec-dark">{activeHotspot.label}</h4>
              <button
                onClick={() => setActiveHotspot(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            <p className="text-sm text-gray-700">{activeHotspot.description}</p>
          </div>
        )}

        {/* Contenido */}
        <div className="p-8">
          <div className="inline-block px-3 py-1 bg-otec-orange text-white text-sm font-bold rounded-full mb-3">
            {tour.sector}
          </div>
          <h3 className="text-2xl font-bold text-otec-dark mb-3">{tour.title}</h3>
          <p className="text-gray-700 mb-6">{tour.description}</p>

          <div className="flex gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 bg-otec-blue text-white font-bold rounded-lg hover:bg-otec-orange transition flex-1"
            >
              📸 Vista Previa
            </button>
            <a
              href={tour.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-otec-blue text-otec-blue font-bold rounded-lg hover:bg-otec-light transition flex-1 text-center"
            >
              🔄 Tour 360°
            </a>
          </div>

          {/* Mini legenda hotspots */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-600 font-semibold mb-3">PUNTOS DE INTERÉS:</p>
            <div className="space-y-2">
              {tour.hotspots.map((hotspot, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm">
                  <div
                    className={`w-3 h-3 rounded-full ${getHotspotColor(
                      hotspot.type
                    )}`}
                  />
                  <span className="text-gray-700">
                    <strong>{hotspot.label}:</strong> {hotspot.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-96 overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-otec-dark">{tour.title}</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-3xl text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            <div className="relative w-full h-96 bg-gray-900">
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-full object-cover"
              />

              {/* Hotspots en modal */}
              {tour.hotspots.map((hotspot, idx) => (
                <div key={idx}>
                  <button
                    onClick={() => setActiveHotspot(hotspot)}
                    className={`absolute w-10 h-10 rounded-full ${getHotspotColor(
                      hotspot.type
                    )} opacity-70 hover:opacity-100 transition flex items-center justify-center text-white text-sm font-bold`}
                    style={{
                      left: `${hotspot.x}%`,
                      top: `${hotspot.y}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    title={hotspot.label}
                  >
                    {idx + 1}
                  </button>
                </div>
              ))}

              {/* Info tooltip */}
              {activeHotspot && (
                <div className="absolute bottom-4 left-4 right-4 bg-white rounded-lg p-4 shadow-lg">
                  <h3 className="font-bold text-otec-dark mb-2">
                    {activeHotspot.label}
                  </h3>
                  <p className="text-sm text-gray-700">
                    {activeHotspot.description}
                  </p>
                </div>
              )}
            </div>

            <div className="p-6 flex gap-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-3 bg-gray-200 text-gray-800 font-bold rounded-lg hover:bg-gray-300 transition"
              >
                Cerrar
              </button>
              <a
                href={tour.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-otec-orange text-white font-bold rounded-lg hover:bg-otec-blue transition flex-1 text-center"
              >
                Ver Tour Completo 360° →
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
