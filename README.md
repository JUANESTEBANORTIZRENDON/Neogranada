# Portal de Estado Neogranada

Aplicación frontend React + Vite para presentar el portal institucional ficticio de la República de Neogranada. Conserva la estética neo-futurista del prototipo exportado desde Figma y organiza el contenido en vistas independientes con React Router.

## Stack

- React
- Vite
- Tailwind CSS
- Radix UI
- Lucide React
- Motion/react
- Anime.js

## Instalación y desarrollo

```bash
npm install
npm run dev
```

El servidor local de Vite se abrirá normalmente en `http://localhost:5173`.

## Rutas principales

- `/inicio`
- `/estado`
- `/innovaciones`
- `/participacion`
- `/constitucion-base`
- `/poder-publico`
- `/mi-cuenta`

La navegación usa rutas reales de SPA, no anclas de scroll.

## Despliegue en Render

Para esta etapa el proyecto debe desplegarse como **Static Site**.

- Build command: `npm install && npm run build`
- Publish directory: `dist`

También existe `npm run start` para servir Vite escuchando en `0.0.0.0` cuando sea útil en entornos de prueba.

## Persistencia futura con SQLite

El frontend funciona con datos TypeScript locales en `src/app/data`. Si se requiere persistencia mínima, se puede agregar SQLite para innovaciones, métricas simuladas, calificaciones ciudadanas de prueba y usuarios ficticios.

En Render, SQLite es recomendable solo para prototipo o datos iniciales: en servicios gratuitos el sistema de archivos puede reiniciarse en cada redeploy. Para persistencia real conviene migrar a PostgreSQL o configurar disco persistente en Render.

## Build de producción

```bash
npm run build
```
