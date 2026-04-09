# Instrucciones para habilitar PWA

## Paso 1: Generar los iconos

1. Abre el archivo `generar-iconos.html` en tu navegador
2. Descarga cada icono haciendo clic en "Descargar"
3. Guarda los iconos en la carpeta `pwa/icons/` con los nombres correctos:
   - icon-72x72.png
   - icon-96x96.png
   - icon-128x128.png
   - icon-144x144.png
   - icon-152x152.png
   - icon-192x192.png
   - icon-384x384.png
   - icon-512x512.png

## Paso 2: Mover archivos

Mueve estos archivos a la carpeta raíz (junto a index.html):
- `manifest.json` -> mover a la raíz
- `icons/` (carpeta completa) -> mover a la raíz

## Paso 3: Agregar código al index.html

Agrega el siguiente código dentro del `<head>` del index.html, después de la línea `<title>`:

```html
<!-- PWA Meta Tags -->
<meta name="theme-color" content="#1e3a5f">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Asistencia INSA">
<meta name="application-name" content="Asistencia INSA">
<meta name="msapplication-TileColor" content="#1e3a5f">
<meta name="msapplication-TileImage" content="icons/icon-144x144.png">

<!-- PWA Manifest -->
<link rel="manifest" href="manifest.json">

<!-- Icons -->
<link rel="icon" type="image/png" sizes="32x32" href="icons/icon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="icons/icon-72x72.png">
<link rel="apple-touch-icon" sizes="180x180" href="icons/icon-192x192.png">
<link rel="apple-touch-icon" sizes="152x152" href="icons/icon-152x152.png">
<link rel="apple-touch-icon" sizes="144x144" href="icons/icon-144x144.png">
<link rel="apple-touch-icon" sizes="120x120" href="icons/icon-128x128.png">
```

## Paso 4: Actualizar el Service Worker

El archivo `sw.js` ya existe y funciona. Solo necesita una pequeña mejora.
Reemplaza el contenido de `sw.js` con el archivo `sw-mejorado.js` que está en esta carpeta.

## Paso 5: Verificar

1. Abre la aplicación en Chrome
2. Abre DevTools (F12)
3. Ve a la pestaña "Application"
4. En el panel izquierdo, haz clic en "Manifest"
5. Deberías ver la información de tu PWA
6. En "Service Workers" verifica que esté registrado

## Paso 6: Instalar la PWA

- En Chrome desktop: aparecerá un icono de instalación en la barra de direcciones
- En Android: aparecerá un banner "Agregar a pantalla de inicio"
- En iOS Safari: Menú compartir -> "Agregar a pantalla de inicio"

---

## Estructura final de archivos:

```
ASISTENCIA/
├── index.html (modificado con meta tags)
├── manifest.json
├── sw.js (actualizado)
├── icons/
│   ├── icon-72x72.png
│   ├── icon-96x96.png
│   ├── icon-128x128.png
│   ├── icon-144x144.png
│   ├── icon-152x152.png
│   ├── icon-192x192.png
│   ├── icon-384x384.png
│   ├── icon-512x512.png
│   └── icon.svg (opcional, como respaldo)
└── pwa/ (puede eliminarse después)
```
