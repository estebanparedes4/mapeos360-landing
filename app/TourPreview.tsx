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
    video?: string
    url: string
    icon: string
    hotspots: Hotspot[]
  }
}

export default function TourPreview({ tour }: TourPreviewProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null)
  const [showAccessForm, setShowAccessForm] = useState(false)

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
      <div className="card-hover bg-white border-2 border-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl flex flex-col h-full">
        {/* Video o Imagen con hotspots */}
        <div className="relative h-64 bg-gray-900 group flex-shrink-0">
          {tour.video ? (
            <video
              src={tour.video}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              controls={false}
            />
          ) : (
            <>
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-full object-cover"
              />

              {/* Hotspots interactivos (solo en imagen estática) */}
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
            </>
          )}

          {/* Badge de demo */}
          {tour.video && (
            <div className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              🔴 DEMO 30s
            </div>
          )}
        </div>

        {/* Info hotspot activo */}
        {activeHotspot && (
          <div className="bg-blue-50 border-l-4 border-otec-blue p-4 flex-shrink-0">
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

        {/* Contenido - Estructura con flexbox para altura consistente */}
        <div className="p-8 flex flex-col flex-grow">
          <div className="inline-block px-3 py-1 bg-otec-orange text-white text-sm font-bold rounded-full mb-4 w-fit">
            {tour.sector}
          </div>
          
          <h3 className="text-2xl font-bold text-otec-dark mb-3 line-clamp-2">
            {tour.title}
          </h3>
          
          <p className="text-gray-700 mb-6 line-clamp-3 flex-grow">
            {tour.description}
          </p>

          {/* BANNER: Este es solo material de demo */}
          <div className="bg-yellow-50 border-2 border-yellow-300 p-4 rounded-lg mb-6 flex-shrink-0">
            <p className="text-xs text-yellow-900">
              <strong>⚠️ DEMO DE 30 SEGUNDOS:</strong> Este es material previsualizador. El tour 360° completo contiene contenido sensible y privado de la empresa. Para acceso completo, solicítalo a nuestro equipo.
            </p>
          </div>

          <div className="flex flex-col gap-3 mt-auto">
            {tour.video ? (
              <>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-6 py-3 bg-otec-blue text-white font-bold rounded-lg hover:bg-otec-orange transition flex items-center justify-center gap-2"
                >
                  ▶️ Ver Demo (30 segundos)
                </button>
                <a
                  href="#formulario-contacto"
                  className="px-6 py-3 border-2 border-otec-blue text-otec-blue font-bold rounded-lg hover:bg-otec-light transition text-center"
                >
                  🔐 Solicitar Acceso Tour Completo
                </a>
              </>
            ) : (
              <a
                href="#formulario-contacto"
                className="px-6 py-3 bg-otec-blue text-white font-bold rounded-lg hover:bg-otec-orange transition text-center"
              >
                🔐 Solicitar Acceso Tour 360°
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Modal - Demo de 30 segundos */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-red-50">
              <div>
                <h2 className="text-2xl font-bold text-otec-dark">{tour.title}</h2>
                <p className="text-sm text-red-700 mt-1">🔴 Demo de 30 segundos - Material preliminar</p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-3xl text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            <div className="relative w-full bg-gray-900">
              {tour.video && (
                <video
                  src={tour.video}
                  className="w-full object-cover"
                  autoPlay
                  controls
                  style={{ maxHeight: '60vh' }}
                />
              )}
            </div>

            <div className="p-6 bg-yellow-50 border-t border-yellow-200">
              <p className="text-sm text-yellow-900 mb-4">
                <strong>ℹ️ Nota importante:</strong> Este video de demostración de 30 segundos muestra el concepto general del tour 360°. 
                El tour completo contiene material sensible y confidencial de las empresas participantes y está disponible solo bajo solicitud formal.
              </p>
              <div className="flex gap-4">
                <a
                  href="#formulario-contacto"
                  className="px-6 py-3 bg-otec-orange text-white font-bold rounded-lg hover:bg-otec-blue transition flex-1 text-center"
                >
                  Solicitar Acceso Completo
                </a>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-3 bg-gray-200 text-gray-800 font-bold rounded-lg hover:bg-gray-300 transition"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal - Formulario de Solicitud de Acceso */}
      {showAccessForm && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-otec-blue text-white">
              <h2 className="text-2xl font-bold">Solicitar Acceso al Tour 360°</h2>
              <button
                onClick={() => setShowAccessForm(false)}
                className="text-3xl hover:opacity-80"
              >
                ✕
              </button>
            </div>

            <div className="p-8">
              <p className="text-gray-700 mb-6">
                El tour 360° completo de <strong>{tour.title}</strong> contiene material confidencial de la empresa. 
                Para acceder, por favor complete el formulario y nuestro equipo se pondrá en contacto.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  const formData = new FormData(e.currentTarget)
                  const mailto = `mailto:comercialotec@otecachsservicios.cl?subject=Solicitud de acceso: ${tour.title}&body=Nombre: ${formData.get('name')}%0AEmpresa: ${formData.get('company')}%0AEmail: ${formData.get('email')}%0ATour solicitado: ${tour.title}%0ATeléfono: ${formData.get('phone')}`
                  window.location.href = mailto
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Nombre *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-otec-blue"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Empresa *</label>
                  <input
                    type="text"
                    name="company"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-otec-blue"
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-otec-blue"
                    placeholder="tu@empresa.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Teléfono</label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-otec-blue"
                    placeholder="+56 9 xxxx xxxx"
                  />
                </div>

                <div className="pt-4 flex gap-4">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-otec-orange text-white font-bold rounded-lg hover:bg-otec-blue transition flex-1"
                  >
                    Enviar Solicitud
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowAccessForm(false)}
                    className="px-6 py-3 bg-gray-200 text-gray-800 font-bold rounded-lg hover:bg-gray-300 transition"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
