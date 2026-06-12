'use client'

import TourPreview from './TourPreview'

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
    { number: '283K+', label: 'Personas Capacitadas' },
    { number: '11K+', label: 'Empresas Atendidas' },
    { number: '98%', label: 'Satisfacción' },
  ]

  return (
    <div className="w-full bg-white">
      {/* Header/Navegación */}
      <header className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold gradient-text">Mapeos 360°</div>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#ejemplos" className="text-otec-dark hover:text-otec-orange transition">
              Ejemplos
            </a>
            <a href="#simuladores" className="text-otec-dark hover:text-otec-orange transition">
              Simuladores
            </a>
            <a href="#cursos" className="text-otec-dark hover:text-otec-orange transition">
              Cursos VR
            </a>
            <a href="#beneficios" className="text-otec-dark hover:text-otec-orange transition">
              Beneficios
            </a>
            <a href="#contacto" className="text-otec-dark hover:text-otec-orange transition">
              Contacto
            </a>
          </nav>
          <div className="flex gap-3">
            <a href="https://achsotec.cl" className="px-4 py-2 text-otec-blue font-semibold hover:text-otec-orange transition">
              OTEC ACHS
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-otec-light to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-otec-dark mb-6 leading-tight">
                Conoce tu lugar de trabajo <span className="gradient-text">antes de llegar</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Experiencias inmersivas en 360° que transforman la capacitación en seguridad laboral. 
                Aprende en entornos virtuales seguros, sin riesgos reales.
              </p>
              <div className="flex gap-4">
                <a
                  href="#ejemplos"
                  className="px-8 py-4 bg-otec-blue text-white font-bold rounded-lg hover:bg-otec-orange transition transform hover:scale-105"
                >
                  Ver Demostraciones
                </a>
                <a
                  href="mailto:comercialotec@otecachsservicios.cl"
                  className="px-8 py-4 border-2 border-otec-blue text-otec-blue font-bold rounded-lg hover:bg-otec-light transition"
                >
                  Contactanos
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-gradient-to-br from-otec-blue to-otec-dark p-8 rounded-xl text-white text-center">
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ejemplos Vivos - Tours 360° con Videos Demo */}
      <section id="ejemplos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-otec-dark mb-4">Experimenta Mapeos 360°</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explora tours interactivos de capacitación en seguridad laboral con experiencias inmersivas en 360°.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {tours.map((tour) => (
              <TourPreview key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      {/* Simuladores VR en Acción */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-otec-purple-dark to-otec-purple">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Simuladores VR en Acción</h2>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Mira cómo transformamos la capacitación en seguridad laboral con tecnología inmersiva
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Video 1: Incendios */}
            <div className="bg-black rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_0_30px_rgba(57,255,20,0.4)] transition-shadow border-2 border-otec-lime">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/2183wiIs8bQ"
                  title="Simulador Virtual de Incendios"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-6 bg-otec-purple-dark">
                <h3 className="text-2xl font-bold text-white mb-2">🔥 Simulador de Incendios</h3>
                <p className="text-gray-200">
                  Entrena procedimientos de extinción en entornos virtuales seguros. Aprende a identificar tipos de fuego y usar correctamente los extintores.
                </p>
              </div>
            </div>

            {/* Video 2: Trabajo en Altura */}
            <div className="bg-black rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_0_30px_rgba(57,255,20,0.4)] transition-shadow border-2 border-otec-lime">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/-HBeXSKb4mQ"
                  title="Simulador Trabajo en Altura"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-6 bg-otec-purple-dark">
                <h3 className="text-2xl font-bold text-white mb-2">⛰️ Simulador de Altura</h3>
                <p className="text-gray-200">
                  Practica trabajo en altura con sistemas de arnés y anclaje. Domina procedimientos críticos sin riesgos reales.
                </p>
              </div>
            </div>
          </div>

          {/* Propuesta de Valor */}
          <div className="mt-16 bg-otec-purple-dark rounded-2xl p-12 border-l-4 border-otec-lime">
            <h3 className="text-3xl font-bold text-white mb-6">VR en tu empresa:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🎯</div>
                <h4 className="text-xl font-bold text-otec-lime mb-2">Más Práctica</h4>
                <p className="text-gray-200">Entrena situaciones reales sin consecuencias</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🧠</div>
                <h4 className="text-xl font-bold text-otec-lime mb-2">Más Conciencia</h4>
                <p className="text-gray-200">Fortalece la cultura preventiva en equipos</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">✅</div>
                <h4 className="text-xl font-bold text-otec-lime mb-2">Menos Accidentes</h4>
                <p className="text-gray-200">Reduce incidentes laborales significativamente</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pilares de OTEC con Iris */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-otec-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-otec-dark mb-4">Nuestros Pilares</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Construimos cada experiencia sobre cinco pilares que definen nuestra esencia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* Experiencia */}
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 mx-auto mb-4 bg-otec-light rounded-full flex items-center justify-center overflow-hidden border-2 border-otec-blue">
                <img src="/iris/01-experiencia.png" alt="Experiencia" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-bold text-otec-dark mb-2">Experiencia</h3>
              <p className="text-sm text-gray-600">11+ años formando personas con respaldo de Achs</p>
            </div>

            {/* Cercanía */}
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 mx-auto mb-4 bg-otec-light rounded-full flex items-center justify-center overflow-hidden border-2 border-otec-blue">
                <img src="/iris/02-cercania.png" alt="Cercanía" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-bold text-otec-dark mb-2">Cercanía</h3>
              <p className="text-sm text-gray-600">Acompañamiento real y personalizado</p>
            </div>

            {/* Innovación */}
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 mx-auto mb-4 bg-otec-light rounded-full flex items-center justify-center overflow-hidden border-2 border-otec-blue">
                <img src="/iris/03-innovacion.png" alt="Innovación" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-bold text-otec-dark mb-2">Innovación</h3>
              <p className="text-sm text-gray-600">Soluciones y tecnologías educativas</p>
            </div>

            {/* Resultados */}
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 mx-auto mb-4 bg-otec-light rounded-full flex items-center justify-center overflow-hidden border-2 border-otec-blue">
                <img src="/iris/04-resultados.png" alt="Resultados" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-bold text-otec-dark mb-2">Resultados</h3>
              <p className="text-sm text-gray-600">Cambios concretos en personas y equipos</p>
            </div>

            {/* Excelencia */}
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 mx-auto mb-4 bg-otec-light rounded-full flex items-center justify-center overflow-hidden border-2 border-otec-blue">
                <img src="/iris/05-excelencia.png" alt="Excelencia" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-bold text-otec-dark mb-2">Excelencia</h3>
              <p className="text-sm text-gray-600">Altos estándares en calidad y diseño</p>
            </div>
          </div>
        </div>
      </section>

      {/* Simuladores VR - Videos */}
      <section id="simuladores" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-otec-dark mb-4">Simuladores VR en Acción</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conoce nuestros simuladores de realidad virtual para capacitación inmersiva en seguridad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Simulador Incendios */}
            <div className="bg-gradient-to-br from-otec-light to-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <div className="aspect-video bg-otec-dark flex items-center justify-center">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/2183wiIs8bQ"
                  title="Simulador Virtual de Incendios"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">🔥</span>
                  <h3 className="text-2xl font-bold text-otec-dark">Simulador de Incendios</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Entrena en la identificación y extinción de incendios en diferentes escenarios sin riesgos reales. 
                  Aprende procedimientos de evacuación y manejo de extintores en entornos inmersivos.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>✓ Simulación realista de diferentes tipos de fuego</p>
                  <p>✓ Procedimientos de evacuación</p>
                  <p>✓ Uso correcto de equipos de protección</p>
                </div>
              </div>
            </div>

            {/* Simulador Altura */}
            <div className="bg-gradient-to-br from-otec-light to-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <div className="aspect-video bg-otec-dark flex items-center justify-center">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/-HBeXSKb4mQ"
                  title="Simulador Trabajo en Altura"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">⛏️</span>
                  <h3 className="text-2xl font-bold text-otec-dark">Simulador Trabajo en Altura</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Prepara a tu equipo para trabajar en alturas con seguridad. Simula escenarios reales 
                  donde se practican anclajes, uso de arnés y procedimientos de rescate.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>✓ Practica de anclajes y arneses</p>
                  <p>✓ Procedimientos de rescate</p>
                  <p>✓ Identificación de puntos críticos de riesgo</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-r from-otec-blue to-otec-dark rounded-xl p-10 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">¿Quieres implementar simuladores VR en tu organización?</h3>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Nuestros simuladores se adaptan a tus necesidades específicas de capacitación en seguridad
            </p>
            <a
              href="mailto:comercialotec@otecachsservicios.cl"
              className="inline-block px-8 py-4 bg-otec-orange text-white font-bold rounded-lg hover:bg-opacity-90 transition transform hover:scale-105"
            >
              Solicita una Demostración
            </a>
          </div>
        </div>
      </section>

      {/* Cursos VR */}
      <section id="cursos" className="py-20 px-4 sm:px-6 lg:px-8 bg-otec-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-otec-dark mb-4">Soluciones VR & Realidad Aumentada</h2>
            <p className="text-xl text-gray-600">
              Cursos especializados en realidad virtual para capacitación inmersiva
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  href="mailto:comercialotec@otecachsservicios.cl"
                  className="text-otec-blue hover:text-otec-orange font-bold text-sm"
                >
                  Solicitar información →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section id="beneficios" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-otec-dark mb-4">¿Por qué elegir Mapeos 360°?</h2>
            <p className="text-xl text-gray-600">
              Transformamos la capacitación en seguridad laboral
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-otec-light p-8 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-otec-dark mb-3">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo Funciona */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-otec-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-otec-dark mb-4">Cómo Funciona</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Evaluación', desc: 'Identificamos necesidades de capacitación' },
              { step: '2', title: 'Diseño', desc: 'Creamos experiencias personalizadas' },
              { step: '3', title: 'Implementación', desc: 'Desplegamos en múltiples dispositivos' },
              { step: '4', title: 'Medición', desc: 'Monitoreamos resultados en tiempo real' },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-gradient-to-br from-otec-blue to-otec-orange rounded-full w-16 h-16 flex items-center justify-center text-white text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-otec-dark mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
                {idx < 3 && (
                  <div className="absolute top-8 -right-4 text-3xl text-otec-orange opacity-30">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-otec-blue to-otec-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Transforma la capacitación en tu organización</h2>
          <p className="text-xl mb-8 opacity-90">
            Contacta a OTEC ACHS Servicios y descubre cómo Mapeos 360° puede mejorar 
            la seguridad y el aprendizaje en tu empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:comercialotec@otecachsservicios.cl"
              className="px-8 py-4 bg-otec-orange text-white font-bold rounded-lg hover:bg-white hover:text-otec-orange transition"
            >
              📧 comercialotec@otecachsservicios.cl
            </a>
            <a
              href="https://achsotec.cl"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-otec-blue transition"
            >
              🌐 achsotec.cl
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-otec-dark text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Mapeos 360°</h3>
              <p className="text-gray-300">
                Experiencias inmersivas para capacitación en seguridad laboral
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Enlaces</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#ejemplos" className="hover:text-otec-orange">Ejemplos</a></li>
                <li><a href="#cursos" className="hover:text-otec-orange">Cursos VR</a></li>
                <li><a href="#beneficios" className="hover:text-otec-orange">Beneficios</a></li>
                <li><a href="https://achsotec.cl" className="hover:text-otec-orange">OTEC ACHS</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contacto</h4>
              <p className="text-gray-300">📧 comercialotec@otecachsservicios.cl</p>
              <p className="text-gray-300">🌐 achsotec.cl</p>
              <p className="text-gray-300">📱 @otec.achs.servicios</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2026 OTEC ACHS Servicios. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
