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

1. En Render, haz clic en `+ New`.
2. Selecciona `Static Site`.
3. Conecta tu cuenta de GitHub si Render lo pide.
4. Elige el repositorio `JUANESTEBANORTIZRENDON/Neogranada`.
5. Configura el sitio así:

```txt
Name: neogranada
Branch: main
Root Directory: dejar vacío
Build Command: npm install && npm run build
Publish Directory: dist
```

6. Agrega la regla necesaria para React Router en `Settings` -> `Redirects/Rewrites`:

```txt
Source: /*
Destination: /index.html
Action: Rewrite
```

Esta regla se configura en Render, no en el código. Permite que rutas como `/estado`, `/participacion`, `/constitucion-base` y `/poder-publico` funcionen al abrirse directamente o al recargar la página.

7. Guarda los cambios.
8. Si Render no redeploya solo, usa `Manual Deploy` -> `Deploy latest commit`.

También existe `npm run start` para servir Vite escuchando en `0.0.0.0` cuando sea útil en entornos de prueba.

## Persistencia futura con SQLite

El frontend funciona con datos TypeScript locales en `src/app/data`. Si se requiere persistencia mínima, se puede agregar SQLite para innovaciones, métricas simuladas, calificaciones ciudadanas de prueba y usuarios ficticios.

En Render, SQLite es recomendable solo para prototipo o datos iniciales: en servicios gratuitos el sistema de archivos puede reiniciarse en cada redeploy. Para persistencia real conviene migrar a PostgreSQL o configurar disco persistente en Render.

## Build de producción

```bash
npm run build
```
