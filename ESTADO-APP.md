# Estado Doinglight App Fresh

Fecha de referencia: 2026-03-23

## Punto de inicio valido

- La app ya arranca en web exportada desde `dist/`.
- `catalogos`, `contacto` y `luxometro` renderizan correctamente.
- El error de `asistente` estaba causado por archivos vacios copiados a medias.

## Errores ya corregidos

- `sections/AssistantSection.js` restaurado.
- `sections/CatalogosSection.js` restaurado.
- `styles/appStyles.js` restaurado.
- `components/RoofIcon.js` restaurado.
- `SafeAreaProvider` anadido en `index.js`.
- Eliminado badge debug `Doinglight Web OK`.

## Problemas pendientes

1. La portada `inicio` sigue viendose sobreescalada en navegador.
2. Validar que `asistente` ya renderiza sin error tras restaurar `RoofIcon`.
3. Definir una version web mas refinada para la home, en vez de reutilizar sin ajustes los banners moviles.

## Archivos clave

- `App.js`
- `sections/HomeSection.js`
- `sections/AssistantSection.js`
- `components/RoofIcon.js`
- `styles/appStyles.js`

## Forma estable de prueba

1. Exportar web:
   - `npx expo export --platform web`
2. Servir `dist/`:
   - `cd dist`
   - `python3 -m http.server 8090`
3. Abrir:
   - `http://localhost:8090`
