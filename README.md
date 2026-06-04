# Website

Full stack competition project website built with React, Vite, Framer Motion, Node.js, and Express.

## Team

- Mustaqim Chowdhury: Website, presentation, documentation
- Amar: Unity development, gameplay, technical systems

## Features

- Animated React landing page
- Timeline section
- Story chapter cards
- Unity WebGL placeholder
- Screenshot gallery
- Presentation download button
- Source code download button
- Express API for project data
- Fast static fallback if backend is offline

## Setup

```bash
npm run install-all
npm run dev
```

Frontend:

```text
http://localhost:5173
```

Backend:

```text
http://localhost:5000/api/project
```

## Where to put files

Unity WebGL build:

```text
client/public/unity/
```

Presentation:

```text
client/public/downloads/presentation.pdf
server/public/downloads/presentation.pdf
```

Source code ZIP:

```text
client/public/downloads/source-code.zip
server/public/downloads/source-code.zip
```

Screenshots:

```text
client/public/screenshots/
server/public/screenshots/
```

## Deployment idea

- Frontend: Cloudflare Pages
- Backend: Render, Railway, or local-only during development
- Source code: GitHub
