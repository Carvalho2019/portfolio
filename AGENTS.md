# Base44 Dev Environment

## Project
Next.js 14 portfolio (Pages Router, TypeScript, Sass). No database, no external services, no secrets required.

## Running
```bash
docker compose -f docker-compose.base44.yml up -d --build
```
The app listens on host port 3000. The container runs `npm install` then `next dev -H 0.0.0.0`.

## Key details
- **allowedDevOrigins**: `next.config.js` references `BASE44_PUBLIC_HOST_SUFFIX` to allow the preview origin for HMR/dev assets. The env var is passed via compose `environment:`.
- **No env vars needed**: The contact form uses a `mailto:` link, not a transactional email service.
- **Sass**: `sass` is a dependency; SCSS modules are used throughout `src/components/*/styles.module.scss`.
- **Source is bind-mounted**: Edits to files under `src/` hot-reload in the preview without rebuilding.
