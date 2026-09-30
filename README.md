# Guía del Negocio Hispano en EE. UU.

**41 decisiones que le ahorran dinero, multas y demandas a un dueño de negocio hispano en Estados Unidos**, ordenadas según lo que te cuestan y lo que te devuelven. Cada entrada dice qué te cuesta hacerla, qué te ahorras, qué tan firme es la evidencia y cuál es la fuente oficial (IRS, SBA, FTC, FinCEN, Estado de Florida). Lo estatal está enfocado en **Florida**.

No tienes que hacerlo todo. Es una lista de opciones ordenadas por lo que rinden: con aplicar dos o tres ya vale la pena.

> **Aviso:** esto es información general, no asesoría legal, fiscal ni financiera. Las leyes y las cifras cambian: cada entrada está verificada al **30 de septiembre de 2026**. Para tu caso concreto, consulta con un CPA, un Enrolled Agent o un abogado con licencia.

**[Abrir el buscador](index.html)** · **[Skill para Claude](skills/guia-negocio-hispano/SKILL.md)**

## Qué responde esta guía

| Pregunta | Dónde verla |
|---|---|
| ¿Cómo registro el negocio sin pagar intermediarios? ¿Qué cartas "oficiales" son estafa? | [1. Arrancar legal sin pagar de más](book/01-arrancar-legal.md) |
| ¿Cuándo pago impuestos, qué puedo deducir y cómo elijo preparador? | [2. Impuestos: pagar lo justo y a tiempo](book/02-impuestos.md) |
| ¿Qué pasa con Zelle/PayPal, los 1099 y el efectivo? ¿Dónde guardo el dinero? | [3. Cobros, bancos y efectivo](book/03-cobros-bancos.md) |
| ¿Puedo mandar promociones por WhatsApp, SMS o email? ¿Y las reseñas? | [4. WhatsApp, SMS, email y reseñas](book/04-whatsapp-marketing.md) |
| ¿Qué necesito para contratar al primer empleado? | [5. Contratar gente sin meterte en problemas](book/05-contratar.md) |
| ¿Qué estafas atacan a los dueños de negocio y cómo las corto? | [6. Estafas contra dueños de negocio](book/06-estafas.md) |
| ¿Cómo protejo mi nombre, mis contratos y lo que me deben? | [7. Proteger lo que construyes](book/07-proteger.md) |
| ¿Dónde consigo dinero y asesoría sin que me exploten? | [8. Financiamiento y ayuda gratis](book/08-financiamiento-ayuda.md) |

## Cómo se ve cada entrada

```
### 2. Registra tu LLC tú mismo en Sunbiz por $125
- Costo: lo que pagas en dinero, tiempo o esfuerzo
- En corto: el resumen en lenguaje simple (con leer esto basta para decidir)
- Beneficio: qué ganas o qué te evitas, con cifras
- Evidencia: A / B / C
- Fuente: el documento oficial, con enlace
- Nota: excepciones, para quién aplica, advertencias
```

## Niveles de evidencia

| Nivel | Qué significa |
|---|---|
| **A** | Una ley, un reglamento o un documento oficial con una cifra, una fecha o un requisito concretos que puedes comprobar en la fuente. |
| **B** | Una fuente oficial que respalda la idea, pero sin una cifra exacta o con un resultado que depende de tu caso. |
| **C** | Práctica común o experiencia de negocio, sin una norma que lo exija. |

Cada entrada lleva además una etiqueta oculta de costo y beneficio (dinero, tiempo, esfuerzo, tamaño del beneficio y tipo) que usa el buscador para filtrar.

## Cómo correrlo

El buscador es una página estática: lee `README.md` y los archivos de `book/`. No tiene backend.

```bash
python3 -m http.server 8000   # y abre http://localhost:8000
```

Para publicarlo en GitHub Pages: Settings → Pages → Deploy from a branch → `main` / root.

## Créditos y licencia

Formato inspirado en [HowToLiveBetter](https://github.com/eternity4719/HowToLiveBetter) de eternity4719 (CC BY 4.0 / MIT). El contenido de esta guía es original.

- El texto (`README.md`, `book/`) se publica bajo **CC BY 4.0**: cópialo, adáptalo o úsalo comercialmente citando la fuente.
- El código (`index.html`, `skills/`) se publica bajo **MIT**.

Hecho por **Mundo en Tus Manos Tech**: implementación de IA y automatización para negocios hispanos.
