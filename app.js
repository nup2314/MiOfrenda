// ==========================================================
//  CONFIGURACIÓN: pega aquí tus enlaces de internet
// ==========================================================
const FONDO = "https://img.magnific.com/vector-premium/dia-muertos-o-marco-festivo-dia-muertos-calaveras-azucar-mexicanas-fondo-vectorial-catrina-calavera-musicos-mariachi-esqueleto-flores-tropicales-sombrero-guitarra-marco_8071-57157.jpg?semt=ais_hybrid&w=740&q=80";

const fotos = [
  { src: "https://imgs.search.brave.com/AswXv6arTqkVzhlRRZTvdPgSBYxOe1Ye17nBgD8HPeI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4t/My5leHBhbnNpb24u/bXgvZGltczQvZGVm/YXVsdC81MGRjZTBk/LzIxNDc0ODM2NDcv/c3RyaXAvdHJ1ZS9j/cm9wLzEwMjR4NTc3/KzArNzAvcmVzaXpl/LzYwMHgzMzghL2Zv/cm1hdC93ZWJwL3F1/YWxpdHkvNjAvP3Vy/bD1odHRwczovL2Nk/bi0zLmV4cGFuc2lv/bi5teC9mNS83Ny83/MmFiMDU0OTQwYTdi/ZTUxMjY0YTk4YjY0/NDFlL2dldHR5aW1h/Z2VzLTExNzQ0MTQy/MjkuanBn", descripcion: "Un recuerdo que vive en el corazón" },
  { src: "https://imgs.search.brave.com/gZq2GYHJ53lU3Nc42xRcIWp7lwjERTd1j6Fl3OO6ir8/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS50ZW5vci5jb20v/eE5OYUlMQUFnN2NB/QUFBTS90dW5nLXNh/aHVyLmdpZg.jpeg", descripcion: "Momentos que nunca olvidaremos" },
  { src: "https://imgs.search.brave.com/0MEmIYBO5N-1k3mRijOdVsdH9UbVUnAuMZySj0T7D7Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/Y2VsbC1jbGVhcmx5/LWlkZW50aWZpZXMt/YXMtYS1tYW4td2h5/LWRvLXRoZXktY2Fs/bC1oaW0taXQtaW4t/djAtNW55dDZrdjd2/eGRkMS5qcGVnP3dp/ZHRoPTEwMDAmZm9y/bWF0PXBqcGcmYXV0/bz13ZWJwJnM9MzE1/OTE3OTFkN2FhYWFm/MzAzZWU2M2U2Mjhh/MWNkYjE1YjI3Y2Ez/Zg", descripcion: "Su cariño nos acompaña" },
  { src: "https://imgs.search.brave.com/Hsv3HqefekvbaTkA6RSEe6fUnMXa-QGZIfmagSHeQj0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLmlt/Z2ZsaXAuY29tLzQv/YWdqc2pyLmpwZw", descripcion: "Siempre presente en nuestra memoria" }
];
// ==========================================================

// --- Variables y elementos del DOM ---
let indice = 0;
let intervalo;

const imagen = document.getElementById("imagenOfrenda");
const descripcion = document.getElementById("descripcion");
const anterior = document.getElementById("anterior");
const siguiente = document.getElementById("siguiente");
const puntos = document.getElementById("puntos");

// --- Crear indicadores (puntos) ---
function crearIndicadores() {
  puntos.innerHTML = "";
  fotos.forEach((_, i) => {
    const punto = document.createElement("span");
    punto.classList.add("punto");
    punto.addEventListener("click", () => {
      mostrarFoto(i);
      reiniciarAutomatico();
    });
    puntos.appendChild(punto);
  });
}

// --- Mostrar foto según el índice ---
function mostrarFoto(nuevoIndice) {
  indice = (nuevoIndice + fotos.length) % fotos.length;
  imagen.src = fotos[indice].src;
  descripcion.textContent = fotos[indice].descripcion;
  actualizarIndicadores();
}

// --- Actualizar indicadores ---
function actualizarIndicadores() {
  const puntosElem = document.querySelectorAll(".punto");
  puntosElem.forEach((punto, i) => {
    punto.classList.toggle("activo", i === indice);
  });
}

// --- Eventos de navegación ---
anterior.addEventListener("click", () => {
  mostrarFoto(indice - 1);
  reiniciarAutomatico();
});

siguiente.addEventListener("click", () => {
  mostrarFoto(indice + 1);
  reiniciarAutomatico();
});

// --- Cambio automático de imágenes (opcional) ---
function iniciarAutomatico() {
  intervalo = setInterval(() => {
    mostrarFoto(indice + 1);
  }, 6000); // Cambia cada 6 segundos
}

// --- Pausar cambio automático al interactuar ---
function reiniciarAutomatico() {
  clearInterval(intervalo);
  iniciarAutomatico();
}

// --- Inicializar al cargar la página ---
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.backgroundImage = `url("${FONDO}")`;
  crearIndicadores();
  mostrarFoto(0); // Mostrar la primera imagen
  iniciarAutomatico();
});
