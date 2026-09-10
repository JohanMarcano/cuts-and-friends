# Cuts And Friends — instrucciones del repo

Migración del sitio de la barbería Cuts And Friends (cutsandfriends.cl)
desde Wix a WordPress + Elementor, sobre un diseño ya aprobado en Figma.
Cliente de Shopbot Agency. El proyecto está atrasado: la prioridad es
desbloquear y avanzar, no ampliar alcance ni rediscutir diseño.

## Qué es este repo

No contiene el sitio WordPress. Es el repo de operaciones de la
migración: respaldos de zona DNS, inventario del sitio viejo, mapa de
redirecciones, scripts de crawl, notas de tokens de Figma y la
documentación del proyecto.

Estructura:

```
docs/      CONTEXTO.md, ESTADO.md
dns/       exports de zona (Wix, Cloudflare)
crawl/     inventario del sitio Wix: URLs, textos, metadatos
redirects/ mapa de 301
scripts/   utilidades de crawl y verificación
```

## Estado del proyecto

El estado real vive en `docs/ESTADO.md`. Al empezar cualquier sesión,
léelo antes de proponer nada. Al cerrar, entrega el bloque actualizado
para pegar.

El plan por hitos está en `docs/CONTEXTO.md`. Cada hito tiene criterio
de salida; no se avanza al siguiente sin cumplirlo.

## Reglas duras

- **Nunca proponer cambios sobre producción** — el Wix actual o el DNS
  vivo — sin confirmación explícita de Johan.
- **No cancelar el plan de Wix** hasta después del cutover. La zona DNS
  todavía vive en `ns2.wixdns.net` / `ns3.wixdns.net`.
- Antes de tocar DNS, verificar que existe el export completo de la zona
  actual en `dns/`.
- El staging va siempre con **noindex y protección por contraseña**.
- Sin secretos en el repo: credenciales de cPanel, Cloudflare, Google
  Workspace o Agenda Pro no se commitean nunca.

## Datos de infraestructura

| Dato | Valor |
|---|---|
| Registrador | NIC Chile (`.cl`), no Wix |
| Nameservers actuales | ns2.wixdns.net / ns3.wixdns.net |
| A del dominio raíz | 185.230.63.107 / .171 / .186 (Wix) |
| www | CNAME cdn3.wixdns.net |
| Correo | Google Workspace (MX a aspmx.l.google.com) |
| SPF | `v=spf1 include:_spf.google.com ~all` |
| DKIM / DMARC | No publicados |
| Agenda | Agenda Pro, embebida por iframe |
| Hosting staging | Webempresa, cPanel + SSH |

El correo no depende de Wix. Los MX no se tocan en el cutover.

## Estilo de trabajo

- Respuestas concisas y accionables. Si falta un dato para avanzar,
  preguntarlo en vez de asumirlo.
- Comandos destructivos o que tocan servicios externos: mostrarlos
  primero, ejecutarlos después de confirmación.
- Escribir en español.
