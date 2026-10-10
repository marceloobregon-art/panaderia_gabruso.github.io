# Gabruso Panadería: sitio web (Grupo 6, "Los chambeadores")

Proyecto de Desarrollo de Aplicaciones Web, FII UNMSM. Sitio estático: HTML5, CSS3 y JavaScript, sin dependencias.

```
panaderia-gabruso/
├── index.html        Estructura (Inicio, Catálogo, Nosotros, Pedidos)
├── css/styles.css    Paleta, tipografías, Flexbox/Grid y responsive
└── js/main.js        Catálogo, filtros, pedido, validación y WhatsApp
```

## Antes de publicar (2 cambios obligatorios)

1. Abre `js/main.js` y cambia `WHATSAPP_NUMERO` por el número real, con código de país y sin `+` ni espacios. Ejemplo: `"51987654321"`.
   Mientras no lo cambies, el botón de enviar avisa que falta configurarlo.
2. En el mismo archivo, revisa el arreglo `PRODUCTOS`. Los nombres, descripciones y **precios son de ejemplo**: reemplázalos por los reales de la panadería.

El texto de "Nosotros" (en `index.html`) también conviene ajustarlo con la historia real de la familia.

## Publicar en GitHub Pages

1. En GitHub: **New repository**, nombre `panaderia-gabruso`, público.
2. Sube el contenido de esta carpeta (**Add file → Upload files**) y confirma con **Commit changes**. `index.html` debe quedar en la raíz del repositorio.
3. Ve a **Settings → Pages**. En *Build and deployment*, elige **Deploy from a branch**, rama `main`, carpeta `/ (root)` y guarda.
4. En 1 a 3 minutos tu sitio estará en `https://TU-USUARIO.github.io/panaderia-gabruso/`.

## Publicar con Git (terminal)

```bash
cd panaderia-gabruso
git init
git add .
git commit -m "Sitio web Gabruso Panadería"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/panaderia-gabruso.git
git push -u origin main
```
Luego activa Pages como en el paso 3.

## Probar en local

Abre `index.html` con doble clic, o usa un servidor simple: `python -m http.server` y entra a `http://localhost:8000`.
