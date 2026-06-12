'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    rut: '',
    email: '',
    telefono: '',
    empresa: '',
    mensaje: '',
    terminos: false,
  })

  const [loading, setLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          rut: formData.rut,
          email: formData.email,
          telefono: formData.telefono,
          empresa: formData.empresa,
          mensaje: formData.mensaje,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setSuccessMessage(data.message || 'Solicitud enviada correctamente')
        setFormData({
          nombre: '',
          rut: '',
          email: '',
          telefono: '',
          empresa: '',
          mensaje: '',
          terminos: false,
        })
        // Limpiar mensaje después de 5 segundos
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error:', error)
      setSubmitStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="formulario-contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Lado izquierdo - Texto e imagen */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-5xl font-bold text-otec-dark mb-6">Optimiza tus procesos hoy mismo.</h2>
              <p className="text-xl text-gray-700 mb-4">
                Completa el siguiente formulario para solicitar una asesoría personalizada o resolver dudas técnicas.
              </p>
              <p className="text-gray-600 mb-8">
                Un especialista se pondrá en contacto contigo en menos de 24 horas hábiles.
              </p>
            </div>

            {/* Imagen profesional */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/contact-team-hero.webp"
                alt="Contacta con nuestro equipo"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Lado derecho - Formulario */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nombre y Apellido */}
              <div>
                <label className="block text-sm font-bold text-otec-dark mb-2">
                  Nombre y Apellido *
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-otec-blue bg-gray-50"
                  placeholder="Tu nombre completo"
                />
              </div>

              {/* RUT */}
              <div>
                <label className="block text-sm font-bold text-otec-dark mb-2">
                  RUT
                </label>
                <input
                  type="text"
                  name="rut"
                  value={formData.rut}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-otec-blue bg-gray-50"
                  placeholder="XX.XXX.XXX-X"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-bold text-otec-dark mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-otec-blue bg-gray-50"
                  placeholder="tu@empresa.com"
                />
              </div>

              {/* Teléfono */}
              <div>
                <label className="block text-sm font-bold text-otec-dark mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-otec-blue bg-gray-50"
                  placeholder="+56 9 xxxx xxxx"
                />
              </div>

              {/* Empresa o Rubro */}
              <div>
                <label className="block text-sm font-bold text-otec-dark mb-2">
                  Empresa o Rubro
                </label>
                <input
                  type="text"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-otec-blue bg-gray-50"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              {/* Tu Mensaje */}
              <div>
                <label className="block text-sm font-bold text-otec-dark mb-2">
                  Tu Mensaje *
                </label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-otec-blue bg-gray-50 resize-none"
                  placeholder="Cuéntanos qué necesitas..."
                />
              </div>

              {/* Términos y condiciones */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="terminos"
                  id="terminos"
                  checked={formData.terminos}
                  onChange={handleChange}
                  className="w-4 h-4 border-gray-300 rounded accent-otec-blue cursor-pointer"
                />
                <label htmlFor="terminos" className="ml-2 text-sm text-gray-600">
                  Acepto términos y condiciones
                </label>
              </div>

              {/* Mensaje de estado */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                  ✅ {successMessage}
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  ❌ Error al enviar la solicitud. Por favor intenta de nuevo.
                </div>
              )}

              {/* Botón Enviar */}
              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-4 bg-otec-blue text-white font-bold rounded-lg hover:bg-otec-orange transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? '⏳ Enviando...' : '🚀 Enviar'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
