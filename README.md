
**CV — Sitio personal (Portafolio / Curriculum)**

- **Descripción**: Proyecto personal creado con Astro y TailwindCSS que actúa como CV/portafolio. Contiene secciones para encabezado, experiencia, educación y proyectos, y usa componentes de Astro con partes interactivas en React cuando es necesario.

**Características**:
- **Sitio estático y rápido**: construido con `astro` para páginas rápidas y SEO-friendly.
- **Estilos con TailwindCSS**: integración con `@astrojs/tailwind` y `tailwindcss` para un diseño moderno y configurable.
- **Componentes reutilizables**: varias componentes en `src/components` para secciones como experiencia, educación y proyectos.

**Tecnologías**:
- **Framework**: `astro` (^5.x)
- **CSS**: `tailwindcss`
- **React**: usado para componentes interactivos (`react`, `react-dom`, `@astrojs/react`)

**Requisitos**:
- Node.js (recomendado >= 18)
- npm (o usa tu gestor de paquetes preferido)

**Instalación y ejecución local**:
1. Instalar dependencias:

```
npm install
```

2. Levantar servidor de desarrollo:

```
npm run dev
```

3. Construir para producción:

```
npm run build
```

4. Previsualizar la versión construida:

```
npm run preview
```

Estos scripts están definidos en `package.json`:

- `dev`: `astro dev`
- `build`: `astro build`
- `preview`: `astro preview`
- `astro`: `astro`

**Estructura del proyecto (resumen)**
- `src/` : código fuente del sitio
	- `components/` : componentes reutilizables (p. ej. `header`, `experience`, `projects`)
	- `layouts/` : layouts de páginas
	- `pages/` : páginas (p. ej. `index.astro`)
- `public/` : activos públicos (imágenes, mocks JSON, etc.)
- `astro.config.mjs`, `tailwind.config.mjs`, `tsconfig.json`, `jsconfig.json`

Ejemplo de archivos clave:
- `src/pages/index.astro` — página principal
- `src/components/header/Intro.astro` — componente de introducción
- `public/mocks/experiencia.json` — datos de experiencia (mock)

**Despliegue**:

Este proyecto está listo para ser desplegado como sitio estático. Opciones comunes:
- Vercel: conectar el repositorio y usar el comando de build `npm run build`.
- Netlify: configurar el build command `npm run build` y publicar la carpeta de salida (`dist` por defecto de Astro).

Recomendación: configurar variables de entorno si vas a añadir integraciones (analytics, formularios, etc.).

**Cómo contribuir**:
- Crea un fork o una rama nueva, realiza cambios y abre un pull request.
- Mantén la convención de componentes en `src/components` y sigue el estilo de Tailwind ya usado.

**Licencia**:
- No se especifica una licencia en el repositorio. Añade un archivo `LICENSE` si quieres declarar una licencia (p. ej. MIT).

**Contacto**:
- Si quieres que ajuste este README (más secciones, traducción, badges, instrucciones de despliegue específicas), dímelo y lo actualizo.

---
Generado automáticamente: contiene instrucciones básicas para desarrollo, build y despliegue. Personaliza las secciones de contacto y licencia según prefieras.


