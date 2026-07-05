# EliteTrack — Sitio estático

Instrucciones rápidas para desarrollo local.

Requisitos

- `Node.js` y `npm` instalados.

Comandos principales

```powershell
cd c:\Users\Manuel\tesis\elitetrack-web
npm install
npm start
```

- `npm start` inicia un servidor de desarrollo (`live-server`) y abre `index.html` en `http://127.0.0.1:5173`.
- Para detener el servidor, presiona `Ctrl+C` en la terminal donde corre.

Archivos relevantes

- `index.html` — entrada principal.
- `package.json` — scripts y dependencias de desarrollo.
- El código fuente de la aplicación está en la carpeta `src/` (React + TypeScript + Tailwind).

Notas

- Este es un sitio estático; no hay paso de compilación por defecto.
- Este es un sitio migrado a React + Vite + TypeScript + Tailwind; el código fuente está en `src/`.
- Para producción puede servirse desde cualquier host estático o CDN.# EliteTrack Web Corporativa

Sitio estático independiente para publicar en `/var/www/elitetrack-web`.

## Despliegue

```bash
sudo mkdir -p /var/www/elitetrack-web
sudo rm -rf /var/www/elitetrack-web/*
sudo cp -r * /var/www/elitetrack-web/
sudo chown -R www-data:www-data /var/www/elitetrack-web
sudo nginx -t
sudo systemctl reload nginx
```

La plataforma Traccar queda en `https://app.elitetrack.site`.
