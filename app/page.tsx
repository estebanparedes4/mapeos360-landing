'use client'

import { AnimatedCounter } from './AnimatedCounter'
import TourPreview from './TourPreview'
import BenefitsCarousel3D from './BenefitsCarousel3D'
import ContactForm from './ContactForm'

export default function Home() {
  const tours = [
    {
      id: 1,
      title: 'Metro Santiago - Cambio de Ruedas',
      description: 'Aprende los procedimientos de cambio de ruedas en entornos seguros y controlados',
      sector: 'Transporte',
      icon: '🚌',
      image: '/metro-opt.jpg',
      video: '/metro-demo-opt.mp4',
      url: 'https://metrosantiago.eldojofgc.cl/cambioderuedas/',
      hotspots: [
        {
          x: 25,
          y: 30,
          label: 'Zona de Seguridad',
          description: 'Área designada para cambio de ruedas con protección contra tránsito',
          type: 'safety',
        },
        {
          x: 50,
          y: 50,
          label: 'Equipo de Protección',
          description: 'EPP requerido: chaleco reflectante, casco y guantes de trabajo',
          type: 'warning',
        },
        {
          x: 75,
          y: 35,
          label: 'Procedimiento Crítico',
          description: 'Asegurar vehículo con cuñas antes de iniciar levante',
          type: 'info',
        },
      ],
    },
    {
      id: 2,
      title: 'IANSA - Tour Instalaciones',
      description: 'Recorre las instalaciones y conoce los puntos críticos de seguridad',
      sector: 'Manufactura',
      icon: '🏭',
      image: '/iansa-opt.jpg',
      video: '/iansa-demo-opt.mp4',
      url: 'https://iansa.eldojofgc.cl/Tour/',
      hotspots: [
        {
          x: 30,
          y: 40,
          label: 'Ruta de Evacuación',
          description: 'Camino seguro hacia punto de concentración en caso de emergencia',
          type: 'safety',
        },
        {
          x: 60,
          y: 45,
          label: 'Zona de Maquinaria',
          description: 'Área de operación de equipos: uso obligatorio de EPP completo',
          type: 'warning',
        },
        {
          x: 45,
          y: 65,
          label: 'Punto de Encuentro',
          description: 'Ubicación designada para conteo de personal después de evacuar',
          type: 'info',
        },
      ],
    },
    {
      id: 3,
      title: 'Arauco - Ruta Forestal',
      description: 'Explora entornos forestales y procedimientos de seguridad en altura',
      sector: 'Forestal',
      icon: '🌲',
      image: '/arauco-opt.jpg',
      video: '/arauco-demo-opt.mp4',
      url: 'https://arauco.eldojofgc.cl/Rutaforestal/',
      hotspots: [
        {
          x: 40,
          y: 25,
          label: 'Trabajo en Altura',
          description: 'Sistema de arnés obligatorio con anclaje certificado',
          type: 'warning',
        },
        {
          x: 55,
          y: 50,
          label: 'Zonas de Tránsito',
          description: 'Rutas seguras para personal y equipos en terreno forestal',
          type: 'safety',
        },
        {
          x: 70,
          y: 65,
          label: 'Puntos de Riesgo',
          description: 'Áreas con riesgo de caída o deslizamiento: requiere supervisión',
          type: 'warning',
        },
      ],
    },
    {
      id: 4,
      title: 'Aquachile - Fileteadora Reader',
      description: 'Entrena en el uso seguro de maquinaria pesada industrial',
      sector: 'Alimentos',
      icon: '🐟',
      image: '/aquachile-opt.jpg',
      video: '/aquachile-demo-opt.mp4',
      url: 'https://aquachile.eldojofgc.cl/fileteadorabeader200/',
      hotspots: [
        {
          x: 35,
          y: 35,
          label: 'Zona de Operación',
          description: 'Área de trabajo con elementos cortantes: solo personal capacitado',
          type: 'warning',
        },
        {
          x: 50,
          y: 60,
          label: 'Parada de Emergencia',
          description: 'Botón rojo de parada: accesible desde cualquier punto de la máquina',
          type: 'safety',
        },
        {
          x: 70,
          y: 40,
          label: 'Mantenimiento Seguro',
          description: 'Bloqueo de energía (LOTO) obligatorio antes de cualquier intervención',
          type: 'info',
        },
      ],
    },
  ]

  const vrCourses = [
    {
      title: 'Extinción de Incendios con VR',
      description: 'Simulaciones inmersivas para identificar y responder efectivamente a situaciones de incendio',
      objectives: [
        'Tipos de fuego y clasificación',
        'Uso correcto de extintores',
        'Procedimientos de evacuación',
        'Simulaciones en diferentes escenarios',
      ],
      duration: '2 horas',
      icon: '🔥',
    },
    {
      title: 'Mapeos Virtuales para Maquinaria',
      description: 'Entornos virtuales realistas para capacitación en maquinaria especializada',
      objectives: [
        'Mapeos 3D de maquinaria compleja',
        'Simulaciones inmersivas seguras',
        'Personalización según equipos',
      ],
      duration: '1 hora',
      icon: '⚙️',
    },
    {
      title: 'Mapeos Virtuales para Rutas Críticas',
      description: 'Mapeos detallados de rutas críticas en instalaciones industriales',
      objectives: [
        'Modelado virtual de entornos críticos',
        'Simulación de riesgos y prevención',
        'Optimización de rutas seguras',
      ],
      duration: '1 hora',
      icon: '🛤️',
    },
    {
      title: 'Mapeos Virtuales para Rutas de Escape',
      description: 'Simulaciones de evacuación para familiarizar con procedimientos de emergencia',
      objectives: [
        'Mapeo 3D de rutas de evacuación',
        'Simulaciones de incendios y emergencias',
        'Capacitación en procedimientos de escape',
      ],
      duration: '1 hora',
      icon: '🚪',
    },
    {
      title: 'Inducción Nuevo Personal en VR',
      description: 'Entornos virtuales personalizados para inducción inmersiva de nuevos colaboradores',
      objectives: [
        'Modelado de entornos laborales específicos',
        'Simulación de protocolos de seguridad',
        'Experiencia inmersiva para nuevos colaboradores',
      ],
      duration: '1 hora',
      icon: '👤',
    },
  ]

  const benefits = [
    {
      icon: '🎯',
      title: 'Aprendizaje Experiencial',
      description: 'Los colaboradores aprenden en entornos inmersivos que simulan la realidad sin riesgos',
    },
    {
      icon: '⏱️',
      title: 'Eficiencia de Tiempo',
      description: 'Reduce tiempos de inducción hasta un 40% con simulaciones 360°',
    },
    {
      icon: '💰',
      title: 'Reducción de Costos',
      description: 'Minimiza costos de capacitación presencial y accidentes laborales',
    },
    {
      icon: '📊',
      title: 'Seguimiento en Tiempo Real',
      description: 'Monitorea el progreso de cada colaborador con reportes detallados',
    },
    {
      icon: '🔒',
      title: 'Entorno Seguro',
      description: 'Permite errores sin consecuencias reales para aprender y corregir',
    },
    {
      icon: '🌍',
      title: 'Accesibilidad',
      description: 'Accede desde cualquier dispositivo, en cualquier momento y lugar',
    },
  ]

  const stats = [
    { number: 283000, label: 'Personas Capacitadas', suffix: '+' },
    { number: 11000, label: 'Empresas Atendidas', suffix: '+' },
    { number: 98, label: 'Satisfacción', suffix: '%' },
  ]

  return (
    <div className="w-full bg-white">
      {/* Header/Navegación */}
      <header className="fixed top-0 w-full bg-otec-blue shadow-md z-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 sm:py-3 flex justify-between items-center">
          {/* Logo OTEC */}
          <div className="flex items-center gap-1 sm:gap-2">
            <img 
              src="/Logo_Otec_Header.png" 
              alt="OTEC ACHS Servicios" 
              className="h-8 sm:h-10 w-auto"
              loading="eager"
            />
            <span className="hidden sm:inline text-xs sm:text-sm text-white font-semibold">Mapeos 360°</span>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex gap-4 lg:gap-8">
            <a href="#ejemplos" className="text-white hover:text-otec-orange transition font-medium text-sm lg:text-base">
              Ejemplos
            </a>
            <a href="#cursos" className="text-white hover:text-otec-orange transition font-medium text-sm lg:text-base">
              Cursos VR
            </a>
            <a href="#beneficios" className="text-white hover:text-otec-orange transition font-medium text-sm lg:text-base">
              Beneficios
            </a>
            <a href="#formulario-contacto" className="text-white hover:text-otec-orange transition font-medium text-sm lg:text-base">
              Contacto
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-3 sm:px-6 lg:px-8 bg-gradient-to-b from-otec-light to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-otec-dark mb-4 sm:mb-6 leading-tight">
                Mapeos 360° <span className="gradient-text">inmersivos</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                Experiencias inmersivas en 360° que transforman la capacitación en seguridad laboral. 
                Aprende en entornos virtuales seguros, sin riesgos reales.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="#ejemplos"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-otec-blue text-white font-bold rounded-lg hover:bg-otec-orange transition transform hover:scale-105 text-center text-sm sm:text-base"
                >
                  Ver Demostraciones
                </a>
                <a
                  href="#formulario-contacto"
                  className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-otec-blue text-otec-blue font-bold rounded-lg hover:bg-otec-light transition text-center text-sm sm:text-base"
                >
                  Contactanos
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-gradient-to-br from-otec-blue to-otec-dark p-4 sm:p-6 md:p-8 rounded-xl text-white text-center">
                  <div className="text-3xl sm:text-4xl font-bold mb-2">
                    <AnimatedCounter 
                      end={stat.number} 
                      duration={2500} 
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ejemplos Vivos - Tours 360° con Videos Demo */}
      <section id="ejemplos" className="py-16 sm:py-20 px-3 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-otec-dark mb-3 sm:mb-4">Experimenta Mapeos 360°</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
              Explora tours interactivos de capacitación en seguridad laboral con experiencias inmersivas en 360°.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 auto-rows-fr">
            {tours.map((tour) => (
              <TourPreview key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      {/* Pilares de OTEC con Iris */}
      <section className="py-16 sm:py-20 px-3 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-otec-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-otec-dark mb-3 sm:mb-4">Nuestros Pilares</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
              Construimos cada experiencia sobre cinco pilares que definen nuestra esencia
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {/* Experiencia */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-3 sm:mb-4 bg-otec-light rounded-full flex items-center justify-center overflow-hidden border-2 border-otec-blue">
                <img src="/iris/01-experiencia.png" alt="Experiencia" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-otec-dark mb-2">Experiencia</h3>
              <p className="text-xs sm:text-sm text-gray-600">11+ años formando personas con respaldo de Achs</p>
            </div>

            {/* Cercanía */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-3 sm:mb-4 bg-otec-light rounded-full flex items-center justify-center overflow-hidden border-2 border-otec-blue">
                <img src="/iris/02-cercania.png" alt="Cercanía" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-otec-dark mb-2">Cercanía</h3>
              <p className="text-xs sm:text-sm text-gray-600">Acompañamiento real y personalizado</p>
            </div>

            {/* Innovación */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-3 sm:mb-4 bg-otec-light rounded-full flex items-center justify-center overflow-hidden border-2 border-otec-blue">
                <img src="/iris/03-innovacion.png" alt="Innovación" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-otec-dark mb-2">Innovación</h3>
              <p className="text-xs sm:text-sm text-gray-600">Soluciones y tecnologías educativas</p>
            </div>

            {/* Resultados */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-3 sm:mb-4 bg-otec-light rounded-full flex items-center justify-center overflow-hidden border-2 border-otec-blue">
                <img src="/iris/04-resultados.png" alt="Resultados" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-otec-dark mb-2">Resultados</h3>
              <p className="text-xs sm:text-sm text-gray-600">Cambios concretos en personas y equipos</p>
            </div>

            {/* Excelencia */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-3 sm:mb-4 bg-otec-light rounded-full flex items-center justify-center overflow-hidden border-2 border-otec-blue">
                <img src="/iris/05-excelencia.png" alt="Excelencia" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-otec-dark mb-2">Excelencia</h3>
              <p className="text-xs sm:text-sm text-gray-600">Altos estándares en calidad y diseño</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cursos VR */}
      <section id="cursos" className="py-16 sm:py-20 px-3 sm:px-6 lg:px-8 bg-otec-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-otec-dark mb-3 sm:mb-4">Soluciones VR & Realidad Aumentada</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 px-2">
              Cursos especializados en realidad virtual para capacitación inmersiva
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {vrCourses.map((course, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition border-t-4 border-otec-orange"
              >
                <div className="text-6xl mb-4">{course.icon}</div>
                <h3 className="text-xl font-bold text-otec-dark mb-2">{course.title}</h3>
                <p className="text-sm text-gray-600 mb-4 font-semibold">⏱️ {course.duration}</p>
                <p className="text-gray-700 mb-4">{course.description}</p>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="text-xs font-bold text-otec-dark mb-2">OBJETIVOS:</p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    {course.objectives.map((obj, objIdx) => (
                      <li key={objIdx}>✓ {obj}</li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#formulario-contacto"
                  className="text-otec-blue hover:text-otec-orange font-bold text-sm"
                >
                  Solicitar información →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios - Carrusel 3D Interactivo */}
      <BenefitsCarousel3D />

      {/* Cómo Funciona */}
      <section className="py-16 sm:py-20 px-3 sm:px-6 lg:px-8 bg-otec-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-otec-dark mb-3 sm:mb-4">Cómo Funciona</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { step: '1', title: 'Evaluación', desc: 'Identificamos necesidades de capacitación' },
              { step: '2', title: 'Diseño', desc: 'Creamos experiencias personalizadas' },
              { step: '3', title: 'Implementación', desc: 'Desplegamos en múltiples dispositivos' },
              { step: '4', title: 'Medición', desc: 'Monitoreamos resultados en tiempo real' },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-gradient-to-br from-otec-blue to-otec-orange rounded-full w-14 sm:w-16 h-14 sm:h-16 flex items-center justify-center text-white text-xl sm:text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-otec-dark mb-2">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-700">{item.desc}</p>
                {idx < 3 && (
                  <div className="hidden sm:block absolute top-6 sm:top-8 -right-3 sm:-right-4 text-2xl sm:text-3xl text-otec-orange opacity-30">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulario de Contacto */}
      <ContactForm />

      {/* Footer */}
      <footer className="bg-otec-dark text-white py-10 sm:py-12 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Logo Footer */}
          <div className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-gray-700">
            <img 
              src="/Logo_Otec_Footer.png" 
              alt="OTEC ACHS Servicios" 
              className="h-10 sm:h-12 w-auto"
              loading="lazy"
            />
          </div>

          {/* CTA Section in Footer */}
          <div className="bg-gradient-to-r from-otec-blue/20 to-otec-orange/20 rounded-lg p-6 sm:p-8 mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-center">Transforma la capacitación en tu organización</h2>
            <p className="text-sm sm:text-lg mb-4 sm:mb-6 opacity-90 text-center leading-relaxed">
              Contacta a OTEC ACHS Servicios y descubre cómo Mapeos 360° puede mejorar 
              la seguridad y el aprendizaje en tu empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="mailto:comercialotec@otecachsservicios.cl"
                className="px-6 sm:px-8 py-2 sm:py-3 bg-white text-otec-blue font-bold rounded-lg hover:bg-otec-light hover:text-otec-dark transition text-center text-sm sm:text-base"
              >
                📧 comercialotec@otecachsservicios.cl
              </a>
              <a
                href="https://achsotec.cl"
                className="px-6 sm:px-8 py-2 sm:py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-otec-blue transition text-center text-sm sm:text-base"
              >
                🌐 achsotec.cl
              </a>
            </div>
          </div>

          {/* Footer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 border-t border-gray-700 pt-8">
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Mapeos 360°</h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Experiencias inmersivas en 360° para capacitación en seguridad laboral. Aprende en entornos virtuales seguros, sin riesgos reales.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3 sm:mb-4">Enlaces</h4>
              <ul className="space-y-2 text-gray-300 text-xs sm:text-sm">
                <li><a href="#ejemplos" className="hover:text-otec-orange transition">Ejemplos</a></li>
                <li><a href="#cursos" className="hover:text-otec-orange transition">Cursos VR</a></li>
                <li><a href="#beneficios" className="hover:text-otec-orange transition">Beneficios</a></li>
                <li><a href="https://achsotec.cl" className="hover:text-otec-orange transition">OTEC ACHS</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 sm:mb-4">Contacto</h4>
              <p className="text-gray-300 text-xs sm:text-sm mb-2">📧 comercialotec@otecachsservicios.cl</p>
              <p className="text-gray-300 text-xs sm:text-sm mb-2">🌐 achsotec.cl</p>
              <p className="text-gray-300 text-xs sm:text-sm">📱 @otec.achs.servicios</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center text-gray-400 text-xs sm:text-sm">
            <p>&copy; 2026 OTEC ACHS Servicios. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
