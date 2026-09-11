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

Estructura actual (lo demás — `dns/`, `crawl/`, `redirects/`,
`scripts/` — todavía no se creó; no asumir que existe):

```
docs/      CONTEXTO.md, ESTADO.md, tokens de diseño, guía de Elementor
```

## Estado del proyecto

El estado real vive en `docs/ESTADO.md`. Al empezar cualquier sesión,
léelo antes de proponer nada. Al cerrar, entrega el bloque actualizado
para pegar.

El plan por hitos está en `docs/CONTEXTO.md`. Cada hito tiene criterio
de salida; no se avanza al siguiente sin cumplirlo.

## Alcance

Fase 1 es **solo HOME**. CONTACTO está fuera del proyecto (no se
maqueta, no se estima, no se menciona como pendiente de esta fase). El
blog (BLOG HOME, BLOG POST) es fase 2, a futuro.

## Fuente de verdad del diseño

- `docs/design-tokens.md` — tokens extraídos del sistema
  "01 · Foundations" del Figma (Variables + Estilos nombrados). Es la
  fuente autoritativa de colores, tipografía y espaciado.
- `docs/elementor-setup.md` — guía de carga de esos tokens como
  estilos globales en Elementor.
- Los archivos con sufijo `-v1` o `-OBSOLETO` son históricos. **No
  usarlos ni citarlos como referencia** — quedaron desactualizados por
  cambios posteriores en el Figma o en el enfoque.
- El Figma tiene páginas antiguas ("CUTS&FRIENDS DESKTOP" y
  "CUTS&FRIENDS MOBILE") que ya no aplican. Los frames vigentes están
  en "01 · Foundations", "02 · Components" y "03 · Landing".

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
- Los tamaños de texto mobile del Figma son ilegibles en varios
  estilos (body 9px, button 11px). Al maquetar se usan los valores de
  la columna "Mobile propuesto" de `docs/elementor-setup.md`, no los
  del Figma.
- Al maquetar en Elementor, aplicar siempre estilos globales en los
  widgets, nunca valores escritos a mano.

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
