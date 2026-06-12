# 🎨 Configuración de Imágenes Iris - Mapeos 360°

## Estado Actual
✅ Sección de Pilares lista para recibir imágenes  
✅ Estructura HTML/CSS completada  
❌ Imágenes de Iris pendientes

---

## Estructura Esperada

Las imágenes deben colocarse en:
```
public/iris/
├── 01-experiencia.png    (Pilar: Experiencia)
├── 02-cercania.png       (Pilar: Cercanía)
├── 03-innovacion.png     (Pilar: Innovación)
├── 04-resultados.png     (Pilar: Resultados)
└── 05-excelencia.png     (Pilar: Excelencia)
```

---

## Cómo Agregar las Imágenes

### Opción 1: Desde Google Drive (Recomendado)
1. Descarga las imágenes de iris de la carpeta: 
   https://drive.google.com/drive/folders/1MvRi9M9wg1N2SBjaDiE7voSzk4d9EFvj

2. Optimiza cada imagen:
   ```bash
   # Reducir tamaño manteniendo calidad
   convert 01_Ensenanza.png -resize 200x200 -quality 85 public/iris/01-experiencia.png
   convert 03_Reflexion.png -resize 200x200 -quality 85 public/iris/02-cercania.png
   convert 09_Aprendizaje.png -resize 200x200 -quality 85 public/iris/03-innovacion.png
   convert 11_Excelencia.png -resize 200x200 -quality 85 public/iris/04-resultados.png
   convert 13_Colaboracion.png -resize 200x200 -quality 85 public/iris/05-excelencia.png
   ```

3. Sube los cambios:
   ```bash
   git add public/iris/
   git commit -m "feat: add iris images for pillars section"
   git push origin main
   ```

### Opción 2: Subir Directamente
Si ya tienes las imágenes locales:
1. Crea la carpeta: `mkdir -p public/iris`
2. Copia las imágenes con los nombres especificados arriba
3. Haz commit y push

---

## Especificaciones Técnicas

| Propiedad | Valor |
|-----------|-------|
| Tamaño Recomendado | 200x200 px |
| Formato | PNG con transparencia |
| Calidad | 85% (balance tamaño/calidad) |
| Tamaño Máximo Archivo | 100 KB por imagen |

---

## Mapeo de Iris → Pilares

| Imagen Actual | Pilar OTEC | Descripción |
|---|---|---|
| 01_Ensenanza.png | Experiencia | Más de una década formando personas |
| 03_Reflexion.png | Cercanía | Acompañamiento real y personalizado |
| 09_Aprendizaje.png | Innovación | Nuevas soluciones y tecnologías |
| 11_Excelencia.png | Excelencia | Altos estándares de calidad |
| 13_Colaboracion.png | Resultados | Cambios concretos en personas |

---

## Verificación

Después de agregar las imágenes:
1. Recarga la página en: https://mapeos360-landing.vercel.app/
2. Verifica que aparezcan en la sección "Nuestros Pilares"
3. Comprueba que se vean correctamente en mobile y desktop

---

## Notas

- Las imágenes aparecerán en círculos de 80x80 px en la landing (escaladas automáticamente)
- El borde azul (#003B7A) rodea cada círculo
- Las imágenes deben tener buen contraste para ser visibles
- Si alguna iris no se carga, aparecerá un círculo vacío (sin romper el diseño)

