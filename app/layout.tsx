import './globals.css'

export const metadata = {
  title: 'Mapeos 360° | OTEC ACHS Servicios',
  description: 'Experiencias inmersivas en 360° para capacitación en seguridad laboral. Aprende en entornos virtuales seguros antes de enfrentar situaciones reales.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
