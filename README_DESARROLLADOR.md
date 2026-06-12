# Mapeos 360° — Landing OTEC ACHS Servicios

Landing page de captación de leads para el servicio **Mapeos 360°** de OTEC ACHS Servicios.

- **Producción:** https://mapeos360-landing.vercel.app/
- **Repositorio:** https://github.com/estebanparedes4/mapeos360-landing
- **Stack:** Next.js 13 (App Router) · TypeScript · Tailwind CSS · Resend (emails)

> ⚠️ **Este paquete es la versión más actualizada del código.** Si difiere de lo que hay en GitHub, este paquete manda. Primer paso recomendado: pushear este contenido al repo.

---

## 1. Levantar el proyecto en local

```bash
npm install
cp .env.example .env.local   # luego editar y poner la API key real
npm run dev                  # abre http://localhost:3000
```

Build de producción:

```bash
npm run build
npm start
```

## 2. Variables de entorno

| Variable | Descripción |
|---|---|
| `RESEND_API_KEY` | API key de Resend (https://resend.com → Settings → API Keys). El dueño del proyecto tiene la cuenta. |

- `.env.local` NO se versiona (está en `.gitignore`).
- En Vercel debe configurarse en **Settings → Environment Variables**.

## 3. Estructura

```
app/
├── page.tsx                  # Página principal (header, hero, secciones, footer)
├── layout.tsx                # Layout global
├── ContactForm.tsx           # Formulario de contacto (cliente)
├── TourPreview.tsx           # Tarjetas "Experimenta Mapeos 360°"
├── BenefitsCarousel3D.tsx    # Carrusel de beneficios
├── AnimatedCounter.tsx       # Contadores animados
└── api/send-email/route.ts   # Endpoint POST: envía el lead por email vía Resend
public/
├── Logo_Otec_Blanco.png      # Logo oficial (blanco, fondo transparente) — usado en header y footer
├── *-opt.mp4 / *-opt.jpg     # Videos y posters optimizados de los tours
└── contact-team-hero.webp
```

## 4. Formulario de contacto / envío de emails

- `ContactForm.tsx` hace `POST /api/send-email` con: nombre, rut, email, teléfono, empresa, mensaje.
- `route.ts` valida campos requeridos (nombre, email, mensaje), arma un HTML corporativo y envía con **Resend** a:
  - **Destino:** `comercialotec@otecachsservicios.cl`
  - **Reply-To:** el email del lead.
- El remitente (`from`) actualmente usa un dominio de prueba. **Pendiente recomendado:** verificar un dominio propio en Resend (ej: `otecachsservicios.cl`) para mejor entregabilidad.

## 5. Branding

- Header: fondo `otec-blue` (#003B7A), navegación blanca, hover naranja.
- Logo: usar SIEMPRE `Logo_Otec_Blanco.png` sobre fondos oscuros (header/footer).
- Colores corporativos definidos en `tailwind.config.js` (prefijo `otec-`).

## 6. Pendientes sugeridos

1. **Seguridad del endpoint:** agregar rate limiting y honeypot anti-spam en `/api/send-email`.
2. **Next.js 13.5.6 tiene vulnerabilidad conocida** → actualizar a la versión parcheada (ver aviso de npm al instalar).
3. Verificar dominio propio en Resend (punto 4).
4. Email de confirmación automática al lead (opcional).
5. Conectar el formulario con Salesforce (CRM de OTEC) si se requiere trazabilidad comercial.

## 7. Deploy

El proyecto está conectado a Vercel: cada push a `main` despliega automáticamente. Recordar configurar `RESEND_API_KEY` en Vercel antes del primer deploy con emails.
