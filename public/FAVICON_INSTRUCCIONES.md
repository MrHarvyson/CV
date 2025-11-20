Instrucciones para usar el favicon `favicon.svg`

1) Archivos creados
- `public/favicon.svg` — favicon en formato SVG (monograma JM)

2) Añadir en el `head` de tu layout o página (por ejemplo en `src/layouts/Layout.astro` o `src/pages/index.astro`):

```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<!-- fallback por si algún navegador no acepta SVG como favicon -->
<link rel="alternate icon" href="/favicon.ico">
```

3) Recomendaciones
- Opcional: generar una `favicon.ico` y `favicon-32.png` para máxima compatibilidad con herramientas que esperan ICO o PNG.
  - Puedes convertir el SVG a ICO/PNG con herramientas online o usando `imagemagick`:

```bash
# instalar imagemagick (si usas Homebrew)
brew install imagemagick
# generar PNG 32x32
magick convert public/favicon.svg -background none -resize 32x32 public/favicon-32.png
# generar ICO (incluye 16x16 y 32x32)
magick convert public/favicon.svg -background none -resize 16x16 public/favicon-16.png public/favicon-32.png public/favicon.ico
```

- Después de añadir el tag en el `head`, limpia la caché del navegador si no ves el cambio inmediatamente.

4) ¿Quieres que además convierta y añada `favicon.ico` y `favicon-32.png` al repo? Si quieres, lo hago y actualizo el `head` automáticamente.