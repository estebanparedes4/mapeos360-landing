# 📋 Resumen de Cambios - Sesión Mapeos 360° (12 Junio 2026)

## ✅ COMPLETADO

### 1. Limpieza de Interfaz
- ❌ Suprimido: "PUNTOS DE INTERÉS" del componente TourPreview
- ❌ Suprimido: Disclaimer sobre "Demos de 30 segundos"  
- ❌ Suprimido: Legenda de colores de hotspots
- **Resultado**: Landing más limpia y enfocada

### 2. Nueva Sección: Pilares de OTEC
- ✅ Agregada sección **"Nuestros Pilares"** entre tours y cursos VR
- ✅ 5 tarjetas interactivas con círculos para iris
- ✅ Alineación con pilares reales de OTEC ACHS:
  - 🎓 **Experiencia**: "11+ años formando personas con respaldo de Achs"
  - 🤝 **Cercanía**: "Acompañamiento real y personalizado"
  - 💡 **Innovación**: "Soluciones y tecnologías educativas"
  - 📈 **Resultados**: "Cambios concretos en personas y equipos"
  - ⭐ **Excelencia**: "Altos estándares en calidad y diseño"

### 3. Preparación para Imágenes Iris
- ✅ Estructura HTML lista para recibir iris (carpeta `/public/iris/`)
- ✅ Nombres de archivo estandarizados:
  - `01-experiencia.png`
  - `02-cercania.png`
  - `03-innovacion.png`
  - `04-resultados.png`
  - `05-excelencia.png`

### 4. Nueva Sección: Simuladores VR con Videos
- ✅ Agregada sección **"Simuladores VR en Acción"** con videos de YouTube
- ✅ 2 simuladores integrados:
  - 🔥 **Simulador Virtual de Incendios** (https://www.youtube.com/watch?v=2183wiIs8bQ)
    - 0:37 de duración
    - Identificación y extinción de incendios
    - Procedimientos de evacuación
  - ⛏️ **Simulador Trabajo en Altura** (https://www.youtube.com/watch?v=-HBeXSKb4mQ)
    - 0:46 de duración
    - Práctica de anclajes y arneses
    - Procedimientos de rescate
- ✅ CTA para solicitar demostración
- ✅ Link en navegación (nav + id="simuladores")

---

## 📝 PENDIENTE

### Imágenes de Iris (Usuario debe hacer)
```bash
# Carpeta de drive con iris disponibles:
https://drive.google.com/drive/folders/1MvRi9M9wg1N2SBjaDiE7voSzk4d9EFvj?usp=drive_link

# Iris recomendadas:
- 01_Ensenanza.png     → 01-experiencia.png
- 03_Reflexion.png     → 02-cercania.png
- 09_Aprendizaje.png   → 03-innovacion.png
- 11_Excelencia.png    → 04-resultados.png (NOTA: aquí usamos 11_Excelencia para el pilar de excelencia)
- 13_Colaboracion.png  → 05-excelencia.png (NOTA: aquí usamos 13_Colaboracion para resultados)
```

**CORRECCIÓN**: 
- Pilar "Excelencia" debería usar iris 11_Excelencia.png
- Pilar "Resultados" debería usar iris 13_Colaboracion.png

### Pasos para completar:
1. Descargar iris de Drive
2. Optimizar a 200x200px con calidad 85%
3. Guardar en `/public/iris/` con nombres estandarizados
4. Hacer push a GitHub
5. Verificar en https://mapeos360-landing.vercel.app/

---

## 🔄 CAMBIOS GIT

```bash
# Commit 1: Limpieza de interfaz
b70b765..2c93620: feat: remove hotspot legend and disclaimer text

# Commit 2: Sección iris
2c93620..c450b40: feat: add pillars section with iris images placeholder

# Commit 3: Documentación
c450b40..923e89e: docs: add iris setup guide and session summary

# Commit 4: Simuladores VR
923e89e..77fbc4b: feat: add VR simulators section with YouTube videos

# Commit 5: Navegación
77fbc4b..2197b31: feat: add simulators link to navigation
```

---

## 📊 ESTADO DE LA LANDING

| Sección | Estado | Notas |
|---------|--------|-------|
| Header | ✅ Completo | Navegación funcional + link Simuladores |
| Hero | ✅ Completo | Stats y CTAs |
| Tours 360° | ✅ Completo | 4 tours con videos demo |
| **Pilares** | 🟡 En Progreso | Estructura lista, falta iris |
| **Simuladores VR** | ✅ Completo | 2 videos YouTube incrustados |
| Cursos VR | ✅ Completo | 5 cursos del PDF |
| Beneficios | ✅ Completo | 6 beneficios |
| Cómo Funciona | ✅ Completo | 4 pasos |
| CTA Contacto | ✅ Completo | Gradiente azul |
| Footer | ✅ Completo | Links y contacto |

---

## 📦 URLs DE REFERENCIA

- **Landing Live**: https://mapeos360-landing.vercel.app/
- **GitHub Repo**: https://github.com/estebanparedes4/mapeos360-landing
- **Documentación Iris**: `/mapeos360-landing/IRIS_SETUP.md`
- **Carpeta Iris Drive**: https://drive.google.com/drive/folders/1MvRi9M9wg1N2SBjaDiE7voSzk4d9EFvj
- **Web OTEC**: https://achsotec.cl/
- **Contacto**: comercialotec@otecachsservicios.cl

---

## 💡 Próximos Pasos (Sugerencias)

1. **Agregar iris** (prioritario)
2. Agregar dominio personalizado: `mapeos360.otecachs.cl`
3. Integrar Formspree para formulario de contacto
4. Agregar Google Analytics
5. Considerar agregar "simuladores" mencionados en la web (si aplica)

---

## 🎨 BRANDING APLICADO

- **Colores**: Usando paleta OTEC (azul #003B7A, naranja #FF6B35, oscuro #0A1628, claro #F5F5F5)
- **Tipografía**: Tailwind CSS nativa
- **Layouts**: Responsivos (mobile-first)
- **Alineación**: Con 5 pilares oficiales de OTEC ACHS Servicios

