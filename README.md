# EliteTrack Web Corporativa

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
