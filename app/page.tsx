export default function Home() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', lineHeight: 1.6 }}>
      <header style={{ background: '#003B7A', color: 'white', padding: '20px', textAlign: 'center' }}>
        <h1 style={{ margin: 0 }}>OTEC ACHS - Mapeos 360°</h1>
      </header>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px', textAlign: 'center' }}>
        <h2>Conoce tu lugar de trabajo antes de llegar</h2>
        <p>Los Mapeos 360° de OTEC ACHS te sumergen en una experiencia inmersiva donde aprendes a identificar riesgos y procedimientos.</p>
        <button style={{
          background: '#FF6B35',
          color: 'white',
          padding: '12px 30px',
          border: 'none',
          borderRadius: '6px',
          fontSize: '16px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}>
          Solicitar Demo
        </button>
      </section>

      <section style={{ background: '#f5f5f5', padding: '60px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2>Nuestro Impacto</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px', marginTop: '40px' }}>
            <div>
              <h3 style={{ color: '#003B7A', fontSize: '32px' }}>283K+</h3>
              <p>Personas capacitadas</p>
            </div>
            <div>
              <h3 style={{ color: '#003B7A', fontSize: '32px' }}>11K+</h3>
              <p>Empresas</p>
            </div>
            <div>
              <h3 style={{ color: '#003B7A', fontSize: '32px' }}>98%</h3>
              <p>Satisfacción</p>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ background: '#0A1628', color: 'white', textAlign: 'center', padding: '40px 20px' }}>
        <p>© 2024 OTEC ACHS Servicios | comercialotec@otecachsservicios.cl</p>
      </footer>
    </main>
  )
}
