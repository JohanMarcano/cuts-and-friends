# Estilos globales para Elementor — Cuts And Friends

> ⚠️ **OBSOLETO — no usar.** Escrito antes de conocer el sistema de
> Foundations del Figma (Variables + Estilos nombrados). Usa nombres
> inventados y valores no derivados de los alias reales. Reemplazado
> por `docs/elementor-setup.md`, que sí usa los nombres del sistema.
> Se conserva solo como referencia histórica de las decisiones que se
> tomaron a ciegas antes de tener el Figma reconstruido.

Derivado de `docs/design-tokens.md`. Esta es la lista depurada que se
carga en **Elementor → Ajustes del sitio**, no la extracción cruda.

Los valores desktop vienen del frame HOME 1920px. Los valores mobile
**no** son los del Figma: el diseño mobile trae cuerpo de 8-9px, que es
ilegible en un teléfono. Los de abajo son una escala usable propuesta,
para ajustar viendo el sitio real en el celular.

---

## Colores globales

| Nombre en Elementor | Hex | Uso |
|---|---|---|
| Primario | `#3EA69B` | Botones, acentos, indicador activo |
| Secundario | `#000000` | Fondos oscuros, tarjetas FAQ |
| Texto | `#FFFFFF` | Texto sobre fondo oscuro |
| Acento | `#D9D9D9` | Labels, rieles, elementos secundarios |
| Nav Gray | `#8E918E` | Fondo de la barra superior de contacto |

**Decisión aplicada:** `#060606` se unifica con `#000000`. La diferencia
es imperceptible y casi seguro es un accidente del diseño manual. Si la
diseñadora confirma que era intencional, se agrega como sexto color.

---

## Fuentes globales

Familia: **Montserrat** (Google Font, disponible nativa en Elementor).
Familia decorativa: **GOOD_BRUSH** — requiere subir el archivo en
Elementor → Fuentes personalizadas. Pendiente de recibir.

| Nombre en Elementor | Familia / Peso | Desktop | Mobile | Line-height | Letter-spacing | Transform |
|---|---|---|---|---|---|---|
| Hero Brush | GOOD_BRUSH Regular | 128px | 48px | normal | — | — |
| Hero Título | Montserrat Light | 77px | 32px | 1.2 | — | — |
| Título Sección | Montserrat Bold | 45px | 24px | normal | 10.35px / 5px | uppercase |
| Subtítulo Sección | Montserrat Medium | 34px | 18px | 1.3 | 7.82px / 4px | uppercase |
| Título Tarjeta | Montserrat SemiBold | 23px | 17px | normal | 5.29px / 3px | uppercase |
| Cuerpo | Montserrat Regular | 20px | 16px | 1.6 | — | — |
| Botón | Montserrat Bold | 21px | 14px | 1.4 | 4.83px / 3px | uppercase |

El letter-spacing también hay que reducirlo en mobile: los valores de
desktop son muy abiertos y en pantalla chica rompen las palabras.

---

## Inconsistencias del Figma — decisiones propuestas

Estas tres las marcó el MCP sin resolverlas. Conviene zanjarlas antes
de maquetar, no durante:

1. **FAQ alterna 21px y 23px** sin patrón por columna → normalizar a
   **21px**. Es diferencia de 2px, no hay intención de diseño ahí.
2. **"Nosotros" usa 52px, el resto de H1 usa 45px** → normalizar a
   **45px**, salvo que la diseñadora diga que esa sección va destacada.
3. **`#060606` vs `#000000`** → unificado en `#000000`, como se indicó
   arriba.

Si la diseñadora confirma alguna como intencional, se revierte en el
estilo correspondiente. Ninguna bloquea el avance.

---

## Pendientes con diseño

- Archivo de fuente **GOOD_BRUSH** (.ttf o .woff2) y confirmación de
  licencia para uso web.
- Confirmar si el mobile de 8-9px fue intencional o un descuido.
- Versión desktop de **CONTACTO**, **BLOG HOME** y **BLOG POST**. Hoy
  solo HOME tiene desktop definitivo.

---

## Cómo cargarlo

Editor de Elementor → menú hamburguesa (arriba izquierda) →
**Ajustes del sitio** → **Colores globales** y **Fuentes globales**.

En cada fuente, el ícono de dispositivos permite definir el valor de
tablet y mobile por separado. Configurar los tres breakpoints de una
vez ahorra rehacerlo después.

**Regla de maquetación:** en cada widget, aplicar siempre el estilo
global en vez de escribir el tamaño a mano. Es lo que hace que un
ajuste posterior se propague a todo el sitio en lugar de obligar a
tocar elemento por elemento.
