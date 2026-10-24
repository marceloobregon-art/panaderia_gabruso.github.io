"use strict";

/* ==========================================================
   Gabruso Panadería: lógica del sitio (Rol 3: JavaScript)
   ----------------------------------------------------------
   1. CONFIGURA AQUÍ el número de WhatsApp de la panadería.
      Formato: código de país + número, sin + ni espacios.
      Ejemplo en Perú: "51987654321"
   2. Edita el arreglo PRODUCTOS con los productos y precios reales.
   ========================================================== */
const WHATSAPP_NUMERO = "51900000000"; // <-- CAMBIAR
const NUMERO_SIN_CONFIGURAR = "51900000000";

const CATEGORIAS = ["Panes", "Pastelería", "Bebidas"];

const PRODUCTOS = [
  { id: "pan-frances",   nombre: "Pan francés",           detalle: "Bolsa de 10 unidades, crocante por fuera y suave por dentro.", precio: 5.0,  categoria: "Panes",      icono: "bun",      estrella: true },
  { id: "masa-madre",    nombre: "Pan de masa madre",     detalle: "Hogaza grande de fermentación lenta y corteza gruesa.",        precio: 12.0, categoria: "Panes",      icono: "loaf",     estrella: true },
  { id: "baguette",      nombre: "Baguette artesanal",    detalle: "Larga y dorada, ideal para sándwiches y desayunos.",           precio: 3.5,  categoria: "Panes",      icono: "baguette" },
  { id: "pan-integral",  nombre: "Pan integral",          detalle: "Bolsa de 6 unidades con harina integral.",                     precio: 6.0,  categoria: "Panes",      icono: "bun" },
  { id: "torta-choc",    nombre: "Torta de chocolate",    detalle: "Porción húmeda con cobertura de chocolate.",                   precio: 6.0,  categoria: "Pastelería", icono: "slice-choc", estrella: true },
  { id: "tres-leches",   nombre: "Tres leches",           detalle: "Porción de bizcocho bañado en tres leches con crema.",         precio: 7.0,  categoria: "Pastelería", icono: "slice-crema" },
  { id: "alfajor",       nombre: "Alfajor",               detalle: "Dos galletas rellenas de manjar blanco.",                      precio: 2.5,  categoria: "Pastelería", icono: "cookie" },
  { id: "keke-naranja",  nombre: "Keke de naranja",       detalle: "Porción de keke suave con aroma a naranja.",                   precio: 5.0,  categoria: "Pastelería", icono: "slice-keke" },
  { id: "cafe",          nombre: "Café pasado",           detalle: "Taza de café recién preparado.",                               precio: 3.0,  categoria: "Bebidas",    icono: "cup" },
  { id: "choc-caliente", nombre: "Chocolate caliente",    detalle: "Taza de chocolate caliente espeso.",                           precio: 4.0,  categoria: "Bebidas",    icono: "cup" },
  { id: "chicha",        nombre: "Chicha morada",         detalle: "Vaso de chicha morada fría.",                                  precio: 3.5,  categoria: "Bebidas",    icono: "glass-morada" },
  { id: "emoliente",     nombre: "Emoliente",             detalle: "Vaso de emoliente caliente.",                                  precio: 2.5,  categoria: "Bebidas",    icono: "glass-ambar" }
];

/* ---------- Ilustraciones SVG de productos ---------- */
const CAFE = "#33261F", DORADO = "#D97706", CREMA = "#FEF3C7";

function slice(cuerpo, relleno, cobertura) {
  return `<svg viewBox="0 0 80 80" aria-hidden="true">
    <rect x="10" y="36" width="60" height="32" rx="4" fill="${cuerpo}"/>
    <rect x="10" y="48" width="60" height="7" fill="${relleno}"/>
    <rect x="10" y="31" width="60" height="9" rx="4.5" fill="${cobertura}"/>
    <circle cx="40" cy="26" r="5" fill="#B42318"/>
  </svg>`;
}
function glass(color) {
  return `<svg viewBox="0 0 80 80" aria-hidden="true">
    <path d="M22 16h36l-4 50a4 4 0 0 1-4 4H30a4 4 0 0 1-4-4z" fill="#fff" stroke="${CAFE}" stroke-width="3"/>
    <path d="M25 30h30l-2.6 36a2 2 0 0 1-2 2H29.6a2 2 0 0 1-2-2z" fill="${color}"/>
  </svg>`;
}

const ICONOS = {
  bun: `<svg viewBox="0 0 80 80" aria-hidden="true">
    <ellipse cx="40" cy="48" rx="27" ry="19" fill="#B45309"/>
    <ellipse cx="40" cy="43" rx="27" ry="19" fill="${DORADO}"/>
    <path d="M26 36c5-5 23-5 28 0" stroke="${CREMA}" stroke-width="3" fill="none" stroke-linecap="round" opacity=".8"/>
    <path d="M33 40l4 10M43 40l4 10" stroke="${CREMA}" stroke-width="3" stroke-linecap="round"/>
  </svg>`,
  loaf: `<svg viewBox="0 0 80 80" aria-hidden="true">
    <circle cx="40" cy="43" r="28" fill="#B45309"/>
    <circle cx="40" cy="40" r="28" fill="${DORADO}"/>
    <path d="M26 26l28 28M54 26L26 54" stroke="${CREMA}" stroke-width="3.5" stroke-linecap="round" opacity=".85"/>
  </svg>`,
  baguette: `<svg viewBox="0 0 80 80" aria-hidden="true">
    <g transform="rotate(-30 40 40)">
      <rect x="4" y="30" width="72" height="20" rx="10" fill="${DORADO}"/>
      <path d="M20 33l6 14M34 33l6 14M48 33l6 14M62 33l5 14" stroke="${CREMA}" stroke-width="3" stroke-linecap="round"/>
    </g>
  </svg>`,
  cookie: `<svg viewBox="0 0 80 80" aria-hidden="true">
    <ellipse cx="40" cy="56" rx="27" ry="10" fill="#C58A2B"/>
    <rect x="13" y="44" width="54" height="12" fill="${CREMA}"/>
    <ellipse cx="40" cy="44" rx="27" ry="10" fill="#D9A441"/>
    <ellipse cx="40" cy="44" rx="27" ry="10" fill="none" stroke="#B9791F" stroke-width="2"/>
  </svg>`,
  cup: `<svg viewBox="0 0 80 80" aria-hidden="true">
    <path d="M26 24c-3-4 3-6 0-11M37 24c-3-4 3-6 0-11M48 24c-3-4 3-6 0-11" stroke="${DORADO}" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M54 42h4a8 8 0 0 1 0 16h-6" fill="none" stroke="${CAFE}" stroke-width="5"/>
    <path d="M16 34h40v16a16 16 0 0 1-16 16h-8a16 16 0 0 1-16-16z" fill="${CAFE}"/>
    <ellipse cx="36" cy="34" rx="20" ry="4" fill="#7C4A2D"/>
  </svg>`,
  "slice-choc": slice("#4A2E22", CREMA, "#2A1B14"),
  "slice-crema": slice("#F6DFA3", "#FFFBF0", "#FFFBF0"),
  "slice-keke": slice("#E9A23B", "#F5C76A", "#FDE68A"),
  "glass-morada": glass("#6B2B5E"),
  "glass-ambar": glass("#C27A1A")
};

/* ---------- Utilidades ---------- */
const $ = (selector, raiz = document) => raiz.querySelector(selector);
const moneda = (n) => "S/ " + n.toFixed(2);

function fechaLocalISO(fecha = new Date()) {
  const y = fecha.getFullYear();
  const m = String(fecha.getMonth() + 1).padStart(2, "0");
  const d = String(fecha.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

/* ---------- Estado del pedido ---------- */
const CLAVE_PEDIDO = "gabruso_pedido_v1";
let pedido = {}; // { idProducto: cantidad }

function cargarPedido() {
  try {
    const guardado = JSON.parse(localStorage.getItem(CLAVE_PEDIDO) || "{}");
    Object.keys(guardado).forEach((id) => {
      if (PRODUCTOS.some((p) => p.id === id) && Number.isInteger(guardado[id]) && guardado[id] > 0) {
        pedido[id] = guardado[id];
      }
    });
  } catch (e) { pedido = {}; }
}
function guardarPedido() {
  try { localStorage.setItem(CLAVE_PEDIDO, JSON.stringify(pedido)); } catch (e) { /* sin almacenamiento */ }
}

function cambiarCantidad(id, delta) {
  const nueva = (pedido[id] || 0) + delta;
  if (nueva <= 0) delete pedido[id]; else pedido[id] = Math.min(nueva, 99);
  guardarPedido();
  renderPedido();
}

function lineasPedido() {
  return Object.keys(pedido).map((id) => {
    const prod = PRODUCTOS.find((p) => p.id === id);
    return { prod, cantidad: pedido[id], subtotal: prod.precio * pedido[id] };
  });
}

/* ---------- Catálogo ---------- */
function tarjetaProducto(p) {
  return `<article class="producto">
    <div class="producto-media">${ICONOS[p.icono]}</div>
    <div class="producto-body">
      <p class="categoria">${p.categoria}</p>
      <h3>${p.nombre}</h3>
      <p class="detalle">${p.detalle}</p>
      <div class="producto-pie">
        <span class="precio">${moneda(p.precio)}</span>
        <button type="button" class="btn-agregar" data-agregar="${p.id}" aria-label="Agregar ${p.nombre} al pedido">Agregar</button>
      </div>
    </div>
  </article>`;
}

let filtroActual = "Todos";

function renderCatalogo() {
  const lista = PRODUCTOS.filter((p) => filtroActual === "Todos" || p.categoria === filtroActual);
  $("#catalogo-grid").innerHTML = lista.map(tarjetaProducto).join("");
  const n = lista.length;
  $("#catalogo-estado").textContent =
    `${n} ${n === 1 ? "producto" : "productos"}` + (filtroActual === "Todos" ? "" : ` en ${filtroActual}`);
}

function renderEstrellas() {
  $("#estrellas-lista").innerHTML = PRODUCTOS.filter((p) => p.estrella).map((p) =>
    `<div class="estrella">
      <div class="mini">${ICONOS[p.icono]}</div>
      <div><h3>${p.nombre}</h3><p>${moneda(p.precio)}</p></div>
    </div>`).join("");
}

function iniciarFiltros() {
  const botones = document.querySelectorAll(".chip");
  botones.forEach((btn) => {
    btn.addEventListener("click", () => {
      filtroActual = btn.dataset.filtro;
      botones.forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
      renderCatalogo();
    });
  });
  $("#catalogo-grid").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-agregar]");
    if (!btn) return;
    cambiarCantidad(btn.dataset.agregar, 1);
    const original = btn.textContent;
    btn.textContent = "Agregado";
    setTimeout(() => { btn.textContent = original; }, 900);
  });
}

/* ---------- Resumen del pedido ---------- */
function renderPedido() {
  const lineas = lineasPedido();
  const cont = $("#resumen-lista");
  const totalBox = $("#resumen-total");
  const unidades = lineas.reduce((s, l) => s + l.cantidad, 0);
  $("#contador-pedido").textContent = unidades;

  if (!lineas.length) {
    cont.innerHTML = `<p class="vacio">Aún no agregaste productos. Elige del <a href="#catalogo">catálogo</a> y aparecerán aquí.</p>`;
    totalBox.hidden = true;
    return;
  }

  cont.innerHTML = lineas.map(({ prod, cantidad, subtotal }) => `
    <div class="item">
      <span class="item-nombre">${prod.nombre}</span>
      <span class="item-sub">${moneda(subtotal)}</span>
      <span class="cantidad">
        <button type="button" data-menos="${prod.id}" aria-label="Quitar una unidad de ${prod.nombre}">−</button>
        <output aria-label="Cantidad de ${prod.nombre}">${cantidad}</output>
        <button type="button" data-mas="${prod.id}" aria-label="Agregar una unidad de ${prod.nombre}">+</button>
      </span>
    </div>`).join("");

  $("#total-monto").textContent = moneda(lineas.reduce((s, l) => s + l.subtotal, 0));
  totalBox.hidden = false;
}

function iniciarResumen() {
  $("#resumen-lista").addEventListener("click", (e) => {
    const menos = e.target.closest("[data-menos]");
    const mas = e.target.closest("[data-mas]");
    if (menos) cambiarCantidad(menos.dataset.menos, -1);
    if (mas) cambiarCantidad(mas.dataset.mas, 1);
  });
}

/* ---------- Validación del formulario ---------- */
const REGLAS = {
  nombre(v) {
    v = v.trim();
    if (!v) return "Escribe tu nombre.";
    if (v.length < 3) return "El nombre debe tener al menos 3 letras.";
    if (!/^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ' .-]{3,60}$/.test(v)) return "Usa solo letras en el nombre (máximo 60).";
    return "";
  },
  telefono(v) {
    const limpio = v.replace(/[\s-]/g, "");
    if (!limpio) return "Escribe tu número de celular.";
    if (!/^\d+$/.test(limpio)) return "El celular solo puede tener números.";
    if (!/^9\d{8}$/.test(limpio)) return "El celular debe tener 9 dígitos y empezar con 9.";
    return "";
  },
  direccion(v, form) {
    if (form.entrega.value !== "Delivery") return "";
    if (v.trim().length < 6) return "Escribe la dirección completa para el delivery.";
    return "";
  },
  fecha(v) {
    if (!v) return "Elige una fecha.";
    if (v < fechaLocalISO()) return "La fecha no puede ser anterior a hoy.";
    return "";
  },
  notas(v) {
    if (v.length > 200) return "Las notas no pueden pasar de 200 caracteres.";
    return "";
  }
};

function validarCampo(form, nombre) {
  const campo = form.elements[nombre];
  const error = REGLAS[nombre](campo.value, form);
  const caja = $("#error-" + nombre);
  caja.textContent = error;
  if (error) campo.setAttribute("aria-invalid", "true"); else campo.removeAttribute("aria-invalid");
  return error === "";
}

function armarMensaje(form) {
  const lineas = lineasPedido();
  const total = lineas.reduce((s, l) => s + l.subtotal, 0);
  const [a, m, d] = form.fecha.value.split("-");
  const partes = [
    "Hola, quiero hacer un pedido en Gabruso Panadería.",
    "",
    "*Pedido*",
    ...lineas.map((l) => `- ${l.cantidad} x ${l.prod.nombre} (${moneda(l.subtotal)})`),
    `Total referencial: ${moneda(total)}`,
    "",
    `*Nombre:* ${form.nombre.value.trim()}`,
    `*Celular:* ${form.telefono.value.replace(/[\s-]/g, "")}`,
    `*Entrega:* ${form.entrega.value}` + (form.entrega.value === "Delivery" ? ` (${form.direccion.value.trim()})` : ""),
    `*Fecha:* ${d}/${m}/${a}`
  ];
  if (form.notas.value.trim()) partes.push(`*Notas:* ${form.notas.value.trim()}`);
  return partes.join("\n");
}

function mostrarEstado(texto, tipo) {
  const el = $("#estado-envio");
  el.textContent = texto;
  el.className = "estado" + (tipo ? " " + tipo : "");
}

function iniciarFormulario() {
  const form = $("#form-pedido");
  const campoDir = $("#campo-direccion");
  const campos = ["nombre", "telefono", "direccion", "fecha", "notas"];

  form.fecha.min = fechaLocalISO();

  // Mostrar u ocultar la dirección según el tipo de entrega
  form.querySelectorAll('input[name="entrega"]').forEach((radio) => {
    radio.addEventListener("change", () => {
      const delivery = form.entrega.value === "Delivery";
      campoDir.hidden = !delivery;
      form.direccion.required = delivery;
      if (!delivery) { form.direccion.value = ""; validarCampo(form, "direccion"); }
    });
  });

  // Validar mientras escribe (después de salir del campo la primera vez)
  campos.forEach((nombre) => {
    const campo = form.elements[nombre];
    campo.addEventListener("blur", () => validarCampo(form, nombre));
    campo.addEventListener("input", () => {
      if (campo.getAttribute("aria-invalid") === "true") validarCampo(form, nombre);
    });
  });

  // El celular solo acepta números
  form.telefono.addEventListener("input", () => {
    form.telefono.value = form.telefono.value.replace(/[^\d\s-]/g, "").slice(0, 11);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    mostrarEstado("", "");

    const resultados = campos.map((c) => validarCampo(form, c));
    const primerError = campos.find((c, i) => !resultados[i]);

    if (!lineasPedido().length) {
      mostrarEstado("Agrega al menos un producto desde el catálogo antes de enviar.", "mal");
      return;
    }
    if (primerError) {
      mostrarEstado("Revisa los campos marcados en rojo.", "mal");
      form.elements[primerError].focus();
      return;
    }
    if (WHATSAPP_NUMERO === NUMERO_SIN_CONFIGURAR) {
      mostrarEstado("Falta configurar el número de WhatsApp en js/main.js (constante WHATSAPP_NUMERO).", "mal");
      return;
    }

    const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(armarMensaje(form))}`;
    const ventana = window.open(url, "_blank");
    if (ventana) {
      ventana.opener = null;
      mostrarEstado("Listo. Se abrió WhatsApp con tu pedido. Envíalo desde ahí para confirmarlo.", "ok");
    } else {
      // El navegador bloqueó la ventana emergente: ofrecer un enlace directo
      const el = $("#estado-envio");
      el.className = "estado ok";
      el.innerHTML = `Tu pedido está listo. <a href="${url}" target="_blank" rel="noopener">Abrir WhatsApp</a>`;
    }
  });
}

/* ---------- Menú móvil ---------- */
function iniciarMenu() {
  const boton = $(".nav-toggle");
  const menu = $("#menu");
  const cerrar = () => {
    menu.classList.remove("abierto");
    boton.setAttribute("aria-expanded", "false");
    boton.querySelector(".sr-only").textContent = "Abrir menú";
  };
  boton.addEventListener("click", () => {
    const abierto = menu.classList.toggle("abierto");
    boton.setAttribute("aria-expanded", String(abierto));
    boton.querySelector(".sr-only").textContent = abierto ? "Cerrar menú" : "Abrir menú";
  });
  menu.addEventListener("click", (e) => { if (e.target.closest("a")) cerrar(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") cerrar(); });
}

/* ---------- Inicio ---------- */
document.addEventListener("DOMContentLoaded", () => {
  cargarPedido();
  renderEstrellas();
  renderCatalogo();
  renderPedido();
  iniciarFiltros();
  iniciarResumen();
  iniciarFormulario();
  iniciarMenu();
  iniciarLogin();
  $("#anio").textContent = new Date().getFullYear();
});


/* ---------- Ventana de inicio de sesión ---------- */
function iniciarLogin() {
  const dialogo = $("#dialogo-login");
  const abrir = $("#abrir-login");
  const cerrar = $("#cerrar-login");
  const form = $("#form-login");
  const mensaje = $("#login-mensaje");

  if (!dialogo || !abrir || !cerrar || !form || !mensaje) return;

  abrir.addEventListener("click", () => {
    mensaje.textContent = "El acceso seguro debe configurarse antes de habilitar cuentas.";
    mensaje.classList.remove("error");
    dialogo.showModal();
    $("#login-correo").focus();
  });

  cerrar.addEventListener("click", () => dialogo.close());
  dialogo.addEventListener("click", (e) => {
    if (e.target === dialogo) dialogo.close();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    mensaje.textContent = "La pantalla está preparada, pero aún falta conectar un servicio de autenticación seguro. No se ha iniciado sesión.";
    mensaje.classList.add("error");
  });
}
