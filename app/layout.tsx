import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mapeos 360° | OTEC ACHS Servicios',
  description: 'Conoce tu lugar de trabajo antes de llegar a él. Experiencias inmersivas en 360° para capacitación segura y efectiva.',
  keywords: 'mapeos 360, realidad virtual, capacitación, OTEC ACHS, simuladores VR, seguridad laboral',
  authors: [{ name: 'OTEC ACHS Servicios' }],
  viewport: 'width=device-width, initial-scale=1',
  og: {
    title: 'Mapeos 360° | OTEC ACHS Servicios',
    description: 'Experiencias inmersivas en 360° para capacitación segura y efectiva',
    type: 'website',
    siteName: 'OTEC ACHS Servicios',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mapeos 360° | OTEC ACHS',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
