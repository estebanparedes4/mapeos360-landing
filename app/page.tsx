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
      image: '/arauco-opt.jpg', // placeholder, podría ser otra imagen
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

      {/* Ejemplos Vivos - Tours 360° con Hotspots */}
      <section id="ejemplos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-otec-dark mb-4">Experimenta Mapeos 360°</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explora tours interactivos con puntos de seguridad marcados. Haz clic en los números para descubrir información crítica sin revelar contenido confidencial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {tours.map((tour) => (
              <TourPreview key={tour.id} tour={tour} />
            ))}
          </div>

          {/* Legenda de colores */}
          <div className="max-w-2xl mx-auto bg-otec-light p-6 rounded-xl">
            <h3 className="text-lg font-bold text-otec-dark mb-4">📍 Código de Hotspots:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-green-500" />
                <span className="text-sm text-gray-700"><strong>Verde:</strong> Zona Segura</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-yellow-500" />
                <span className="text-sm text-gray-700"><strong>Amarillo:</strong> Advertencia</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-blue-500" />
                <span className="text-sm text-gray-700"><strong>Azul:</strong> Información</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section id="beneficios" className="py-20 px-4 sm:px-6 lg:px-8 bg-otec-light">
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
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition"
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
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
