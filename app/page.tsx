'use client'

import React, { useState } from 'react'

// Componente Header/Navbar
function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white shadow-subtle z-50">
      <nav className="container-custom flex items-center justify-between h-16 sm:h-20">
        <div className="flex items-center gap-2">
          <div className="bg-otec-blue text-white px-3 py-1 rounded-lg font-bold text-lg">
            OTEC
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-otec-blue">ACHS Servicios</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#solucion" className="text-sm font-medium text-gray-700 hover:text-otec-blue transition">
            Solución
          </a>
          <a href="#casos" className="text-sm font-medium text-gray-700 hover:text-otec-blue transition">
            Casos de Uso
          </a>
          <a href="#contacto" className="text-sm font-medium text-gray-700 hover:text-otec-blue transition">
            Contacto
          </a>
          <a href="https://achsotec.cl" className="btn-primary">
            Volver a OTEC
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-otec-gray rounded-lg transition"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4">
          <a href="#solucion" className="block py-2 text-sm font-medium text-gray-700 hover:text-otec-blue">
            Solución
          </a>
          <a href="#casos" className="block py-2 text-sm font-medium text-gray-700 hover:text-otec-blue">
            Casos de Uso
          </a>
          <a href="#contacto" className="block py-2 text-sm font-medium text-gray-700 hover:text-otec-blue">
            Contacto
          </a>
          <a href="https://achsotec.cl" className="block mt-4 btn-primary text-center">
            Volver a OTEC
          </a>
        </div>
      )}
    </header>
  )
}

// Componente Hero Section
function HeroSection() {
  return (
    <section className="pt-32 sm:pt-40 lg:pt-48 pb-20 sm:pb-32 bg-gradient-to-br from-otec-gray via-white to-otec-gray">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <div className="inline-block bg-otec-orange/10 text-otec-orange px-4 py-2 rounded-full text-sm font-semibold mb-6">
              ✨ Innovación en capacitación
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-otec-dark mb-6 leading-tight">
              Conoce tu lugar de trabajo antes de llegar a él
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Los Mapeos 360° de OTEC ACHS te sumergen en una experiencia inmersiva donde aprendes a identificar riesgos, procedimientos y rutas críticas en un espacio seguro. Sin sorpresas. Con seguridad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="btn-primary text-center">
                Solicitar Demostración Gratuita
              </a>
              <a href="#solucion" className="btn-secondary text-center">
                Conocer más
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200">
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-otec-blue">283K+</p>
                <p className="text-sm text-gray-600 mt-1">Personas capacitadas</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-otec-blue">11K+</p>
                <p className="text-sm text-gray-600 mt-1">Empresas confían</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-otec-blue">98%</p>
                <p className="text-sm text-gray-600 mt-1">Satisfacción</p>
              </div>
            </div>
          </div>

          {/* Visual - Placeholder para imagen/video */}
          <div className="relative h-96 sm:h-[500px] lg:h-[600px] bg-gradient-to-br from-otec-blue/10 to-otec-orange/5 rounded-2xl overflow-hidden shadow-medium">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="inline-block bg-otec-blue/20 p-8 rounded-full mb-6">
                  <svg className="w-16 h-16 text-otec-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-gray-500 font-medium">Video Hero Mapeos 360°</p>
                <p className="text-sm text-gray-400 mt-2">Próximamente</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Componente Problem Section
function ProblemSection() {
  const problems = [
    {
      icon: '🕒',
      title: 'Tiempos largos de inducción',
      description: 'Operaciones paradas, equipos en espera durante capacitación presencial'
    },
    {
      icon: '😴',
      title: 'Aprendizaje que no se retiene',
      description: 'Las personas olvidan después de 48 horas lo aprendido en clase'
    },
    {
      icon: '⚠️',
      title: 'Riesgos sin experiencia previa',
      description: 'Accidentes en primeras semanas por falta de familiarización'
    }
  ]

  return (
    <section id="problema" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-otec-dark mb-6">
            El problema real de la inducción tradicional
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            La capacitación convencional deja brechas de seguridad y aprendizaje que impactan tu operación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="p-8 bg-otec-gray rounded-2xl hover:shadow-medium transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4">{problem.icon}</div>
              <h3 className="text-xl font-bold text-otec-dark mb-3">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Componente Solution Section
function SolutionSection() {
  const steps = [
    {
      number: '1',
      title: 'CAPTURA',
      description: 'Mapeamos tu entorno laboral en 360° (maquinaria, rutas, puntos críticos)'
    },
    {
      number: '2',
      title: 'INMERSIÓN',
      description: 'Acceso desde celular o gafas VR. Exploración guiada de cada zona'
    },
    {
      number: '3',
      title: 'APRENDIZAJE',
      description: 'Identificación de riesgos en tiempo real. Refuerzo de procedimientos'
    },
    {
      number: '4',
      title: 'RESULTADO',
      description: 'Equipos preparados desde el primer día. Menos accidentes, más productividad'
    }
  ]

  return (
    <section id="solucion" className="section-padding bg-gradient-to-br from-otec-blue/5 to-otec-orange/5">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-otec-dark mb-6">
            ¿Cómo funcionan los Mapeos 360°?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Un proceso simple de 4 pasos que transforma tu capacitación
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Conector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-[60%] w-[40%] h-1 bg-gradient-to-r from-otec-blue to-otec-orange opacity-30"></div>
              )}

              <div className="bg-white rounded-2xl p-8 shadow-subtle hover:shadow-medium transition-all duration-300 h-full">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-otec-blue text-white font-bold text-xl rounded-full mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-otec-dark mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Campaign Message */}
        <div className="mt-20 p-12 bg-white rounded-2xl shadow-medium border-l-4 border-otec-orange">
          <p className="text-2xl sm:text-3xl font-bold text-otec-dark text-center">
            Cuando la capacitación se vive, los resultados cambian.
          </p>
        </div>
      </div>
    </section>
  )
}

// Componente Use Cases
function UseCasesSection() {
  const useCases = [
    {
      icon: '👤',
      title: 'Inducción Hombre Nuevo',
      description: 'Nuevos colaboradores conocen el espacio antes de llegar. Menos preguntas. Menos errores.'
    },
    {
      icon: '🔥',
      title: 'Emergencias',
      description: 'Extinción de incendios, rutas de escape. Entrenamiento repetible, seguro, sin riesgos reales.'
    },
    {
      icon: '⚙️',
      title: 'Rutas Críticas',
      description: 'Maquinaria compleja. Mapeos 3D detallados donde aprendes operatoria sin presión.'
    }
  ]

  return (
    <section id="casos" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-otec-dark mb-6">
            Casos de Uso
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre cómo Mapeos 360° se adapta a diferentes escenarios de tu operación
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-to-br from-white to-otec-gray rounded-2xl border border-gray-200 hover:border-otec-blue hover:shadow-medium transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{useCase.icon}</div>
              <h3 className="text-2xl font-bold text-otec-dark mb-3">{useCase.title}</h3>
              <p className="text-gray-600 text-lg">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Componente Social Proof
function SocialProofSection() {
  return (
    <section className="section-padding bg-otec-blue text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Resultados que hablan
          </h2>
          <p className="text-xl text-blue-100">Más de una década transformando aprendizaje en Chile</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-8 bg-white/10 rounded-2xl backdrop-blur-sm">
            <p className="text-5xl font-bold mb-2">11</p>
            <p className="text-blue-100">Años en capacitación</p>
          </div>
          <div className="text-center p-8 bg-white/10 rounded-2xl backdrop-blur-sm">
            <p className="text-5xl font-bold mb-2">283K+</p>
            <p className="text-blue-100">Personas capacitadas</p>
          </div>
          <div className="text-center p-8 bg-white/10 rounded-2xl backdrop-blur-sm">
            <p className="text-5xl font-bold mb-2">11K+</p>
            <p className="text-blue-100">Empresas confían</p>
          </div>
          <div className="text-center p-8 bg-white/10 rounded-2xl backdrop-blur-sm">
            <p className="text-5xl font-bold mb-2">98%</p>
            <p className="text-blue-100">Satisfacción</p>
          </div>
        </div>

        {/* Alianzas */}
        <div className="text-center pt-12 border-t border-blue-400/30">
          <p className="text-blue-100 mb-8 text-lg">Alianzas estratégicas con líderes educativos</p>
          <div className="flex flex-wrap justify-center gap-8 text-sm font-semibold">
            <span className="bg-white/20 px-4 py-2 rounded-full">UPC</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">PUC</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">AHA</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">Coaniquem</span>
          </div>
        </div>
      </div>
    </section>
  )
}

// Componente CTA Section
function CTASection() {
  const features = [
    'Tecnología VR + Mapeos 360° + IA integrada',
    'Personalización total a tu operación',
    'Respaldo de 11 años + red de expertos ACHS'
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-otec-blue/10 to-otec-orange/10">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-otec-dark mb-6">
            ¿Por qué elegir a OTEC ACHS para Mapeos 360°?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4 p-8 bg-white rounded-2xl shadow-subtle">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-otec-orange text-white font-bold">
                  ✓
                </div>
              </div>
              <div>
                <p className="text-lg font-semibold text-otec-dark">{feature}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#contacto" className="btn-primary text-lg px-10 py-4">
            Habla con un especialista
          </a>
        </div>
      </div>
    </section>
  )
}

// Componente Contact Form
function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    telefono: '',
    mensaje: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Aquí iría la lógica para enviar el formulario
    // Por ahora solo mostramos el mensaje de éxito
    console.log('Formulario enviado:', formData)
    setSubmitted(true)
    
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ nombre: '', email: '', empresa: '', telefono: '', mensaje: '' })
    }, 3000)
  }

  return (
    <section id="contacto" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-otec-dark mb-6">
              Contacta con nuestro equipo
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Solicita una demostración gratuita o resuelve tus dudas técnicas. Un especialista se pondrá en contacto en menos de 24 horas.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-otec-gray rounded-2xl p-8 sm:p-12 shadow-subtle">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="nombre"
                placeholder="Nombre completo"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-otec-blue"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-otec-blue"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="empresa"
                placeholder="Empresa"
                value={formData.empresa}
                onChange={handleChange}
                className="rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-otec-blue"
              />
              <input
                type="tel"
                name="telefono"
                placeholder="Teléfono"
                value={formData.telefono}
                onChange={handleChange}
                className="rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-otec-blue"
              />
            </div>

            <textarea
              name="mensaje"
              placeholder="Tu mensaje o consulta específica..."
              value={formData.mensaje}
              onChange={handleChange}
              className="rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-otec-blue mb-6"
            ></textarea>

            <div className="flex items-center gap-3 mb-6">
              <input
                type="checkbox"
                id="terms"
                required
                className="w-4 h-4 rounded border-gray-300 cursor-pointer"
              />
              <label htmlFor="terms" className="text-sm text-gray-600 cursor-pointer">
                Acepto términos y condiciones. He leído la política de privacidad
              </label>
            </div>

            {submitted && (
              <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg mb-6">
                ✓ Mensaje enviado exitosamente. Nos contactaremos pronto.
              </div>
            )}

            <button type="submit" className="btn-primary w-full text-center py-4 text-lg">
              Enviar solicitud
            </button>

            <p className="text-center text-gray-600 text-sm mt-4">
              O escribe directamente a <a href="mailto:comercialotec@otecachsservicios.cl" className="text-otec-blue font-semibold">comercialotec@otecachsservicios.cl</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

// Componente Footer
function Footer() {
  return (
    <footer className="bg-otec-dark text-white py-12 sm:py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 pb-12 border-b border-white/10">
          <div>
            <h4 className="font-bold text-lg mb-4">OTEC ACHS</h4>
            <p className="text-gray-400 text-sm">Transformando el aprendizaje desde 2013</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://achsotec.cl" className="text-gray-400 hover:text-white transition">Ir a achsotec.cl</a></li>
              <li><a href="#solucion" className="text-gray-400 hover:text-white transition">Solución</a></li>
              <li><a href="#contacto" className="text-gray-400 hover:text-white transition">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Términos y condiciones</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Política de privacidad</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:comercialotec@otecachsservicios.cl" className="text-gray-400 hover:text-white transition">comercialotec@otecachsservicios.cl</a></li>
              <li><a href="https://instagram.com/otec.achs.servicios" className="text-gray-400 hover:text-white transition">Instagram</a></li>
              <li><a href="https://linkedin.com/company/otec-achs-servicios" className="text-gray-400 hover:text-white transition">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm">
          <p>&copy; 2024 OTEC ACHS Servicios. Todos los derechos reservados.</p>
          <p className="mt-2">Desenvolvido con Next.js + Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}

// Página Principal
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <UseCasesSection />
        <SocialProofSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
