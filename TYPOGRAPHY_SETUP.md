# Configuración de Tipografía ACHS Nueva

## Estado Actual
✅ **globals.css actualizado** con @font-face para ACHS Nueva
✅ **Header y Footer** con logos OTEC Color y Blanco
✅ **Estructura preparada** para recibir archivos WOFF/WOFF2

## Próximos Pasos

### 1. Descargar Fuentes ACHS Nueva
La landing espera los siguientes archivos en `/public/fonts/`:
- `achs-nueva-sans-vf.woff2` — Variable Sans (recomendado)
- `achs-nueva-sans-vf.woff` — Variable Sans (fallback)
- `achs-nueva-serif-vf.woff2` — Variable Serif (opcional)
- `achs-nueva-serif-vf.woff` — Variable Serif (opcional)

### 2. Ubicación de Carpeta
```
mapeos360-landing/
  public/
    fonts/
      achs-nueva-sans-vf.woff2
      achs-nueva-sans-vf.woff
```

### 3. Verificación en Navegador
Una vez copiados los archivos WOFF, la landing automáticamente:
- Cargará "ACHS Nueva" en títulos y cuerpo
- Mostrará con fallback a sistema si los archivos no están disponibles
- Renderizará con `font-display: swap` (optimizado para Core Web Vitals)

## Archivos Modificados en Esta Sesión
- **app/globals.css** — @font-face ACHS Nueva agregado
- **app/page.tsx** — Header con Logo_Otec_Color.png, Footer con Logo_Otec_Blanco.png
- **public/Logo_Otec_Color.png** ✅ 
- **public/Logo_Otec_Blanco.png** ✅

## Notas
- NO se usan logos "Aprende" (descartados como solicitó)
- Tipografía variable permite peso dinámico (100-900)
- WOFF2 es 30-40% más pequeño que WOFF (mejor performance)
