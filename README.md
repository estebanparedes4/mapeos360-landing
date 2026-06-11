# Mapeos 360° - Landing Page

Landing page moderna para la solución Mapeos 360° de OTEC ACHS Servicios.

## 🚀 Características

- ✅ Diseño responsive (mobile-first)
- ✅ Identidad gráfica OTEC ACHS
- ✅ Secciones de Hero, Problema, Solución, Casos de Uso, Social Proof y Contacto
- ✅ Formulario de contacto funcional
- ✅ Animaciones suaves
- ✅ SEO optimizado
- ✅ Optimizado para Vercel

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Language**: TypeScript/JavaScript
- **Deployment**: Vercel

## 📋 Requisitos

- Node.js 18+
- npm o yarn

## 🏃 Instalación Local

1. **Clonar el repositorio**
```bash
git clone <tu-repo>
cd mapeos360-landing
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Variables de entorno** (si es necesario)
Crea un archivo `.env.local` en la raíz:
```
# Ejemplo - ajusta según necesites
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. **Ejecutar en desarrollo**
```bash
npm run dev
```
La landing estará disponible en `http://localhost:3000`

## 🔧 Desarrollo

### Modificar contenido
- **Textos, títulos y mensajes**: Edita directamente en `/app/page.tsx`
- **Colores y estilos**: Modifica `tailwind.config.js` o `/app/globals.css`
- **Imágenes y media**: Reemplaza placeholders en las secciones Hero y Contacto

### Estructura de archivos
```
mapeos360-landing/
├── app/
│   ├── layout.tsx         # Layout raíz + metadatos
│   ├── page.tsx           # Página principal completa
│   └── globals.css        # Estilos globales
├── tailwind.config.js     # Config de Tailwind
├── postcss.config.js      # Config de PostCSS
├── next.config.js         # Config de Next.js
└── package.json          # Dependencias
```

## 📱 Secciones

1. **Header** - Navegación fija con logo OTEC
2. **Hero** - Headline impactante + CTA principal
3. **Problema** - 3 pain points del usuario
4. **Solución** - 4 pasos del proceso Mapeos 360°
5. **Casos de Uso** - 3 escenarios de aplicación
6. **Social Proof** - Stats, años en operación, alianzas
7. **CTA** - Diferenciadores + botón contacto
8. **Formulario** - Captura de leads con validación
9. **Footer** - Links, legal, contacto

## 🎨 Personalización de Colores

Edita los colores en `tailwind.config.js`:

```javascript
colors: {
  'otec-blue': '#003B7A',      // Azul corporativo
  'otec-orange': '#FF6B35',    // Naranja innovación
  // Más colores...
}
```

## 📧 Integración de Formulario

Actualmente el formulario solo valida localmente. Para integrarlo:

**Opción 1: Formspree**
```javascript
// En page.tsx, reemplaza handleSubmit
const handleSubmit = async (e) => {
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: JSON.stringify(formData),
  })
  // ...
}
```

**Opción 2: SendGrid / Mailgun**
Crea un API route en `/app/api/contact/route.ts`:
```typescript
export async function POST(request: Request) {
  const data = await request.json()
  // Envía email con SendGrid
  return Response.json({ success: true })
}
```

**Opción 3: Zapier**
Integra Zapier como webhook a cualquier servicio (Slack, Salesforce, etc.)

## 🚀 Deployment en Vercel

### Método 1: CLI
```bash
npm i -g vercel
vercel login
vercel deploy
```

### Método 2: GitHub Integration
1. Sube el proyecto a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Conecta tu repositorio GitHub
4. Vercel automáticamente detectará Next.js
5. Haz deploy con un solo click

### Método 3: Vercel Dashboard
1. Abre [vercel.com/new](https://vercel.com/new)
2. Importa tu repositorio
3. Configura variables de entorno si necesita
4. Haz deploy

**Resultado:**
```
🎉 Tu landing estará en: https://mapeos360-otecachs.vercel.app
(o tu dominio personalizado)
```

## 🔗 Dominio Personalizado

1. En Vercel Dashboard → Settings → Domains
2. Añade tu dominio (ej: mapeos360.otecachs.cl)
3. Sigue las instrucciones de DNS
4. Espera propagación (5-48 horas)

## 📊 Analítica

Para agregar Google Analytics:

1. Crea un archivo `/app/analytics.tsx`:
```typescript
import Script from 'next/script'

export default function Analytics() {
  return (
    <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=GA_ID" />
  )
}
```

2. Añádelo en `/app/layout.tsx`

## 🧪 Testing

Para testing local:
```bash
npm run build
npm start
```

## 📝 SEO Checklist

- ✅ Title y description en metadatos
- ✅ Open Graph tags
- ✅ Headings jerárquicos (h1, h2, h3)
- ✅ Alt text en imágenes
- ✅ URLs amigables (scroll links)
- ✅ Schema.json (opcional)

## ❓ FAQ

**¿Cómo cambio el email de contacto?**
Busca `comercialotec@otecachsservicios.cl` en `page.tsx` y reemplaza.

**¿Cómo agrego más casos de uso?**
En la sección `UseCasesSection`, duplica un objeto en el array `useCases`.

**¿Cómo cambio las fuentes?**
En `layout.tsx` cambia el import de Google Fonts o en `tailwind.config.js` modifica `fontFamily`.

**¿Puedo usar la landing sin Vercel?**
Sí, funciona en cualquier hosting con soporte Node.js (Heroku, AWS, DigitalOcean, etc.)

## 📞 Soporte

Para dudas o cambios:
- Email: comercialotec@otecachsservicios.cl
- Ver documentación: https://nextjs.org/docs
- Tailwind docs: https://tailwindcss.com/docs

## 📄 Licencia

© 2024 OTEC ACHS Servicios. Todos los derechos reservados.
