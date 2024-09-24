// Paleta de colores
const colores = [
    '#FF5733', '#33FF57', '#3357FF', '#F1C40F',
    '#8E44AD', '#E67E22', '#1ABC9C', '#2C3E50',
    '#D35400', '#C0392B'
];

// Función para simular el efecto de escritura
function escribirTexto(elemento, texto, velocidad) {
    let i = 0;
    function escribir() {
        if (i < texto.length) {
            let char = texto.charAt(i);
            let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
            elemento.innerHTML += `<span style="color: ${colorAleatorio};">${char}</span>`;
            i++;
            setTimeout(escribir, velocidad);
        }
    }
    escribir();
}

// Función para aplicar el efecto de escritura a múltiples elementos
function aplicarEfectoEscritura(selector, velocidad) {
    const elementos = document.querySelectorAll(selector);
    elementos.forEach(elemento => {
        const texto = elemento.textContent;
        elemento.textContent = ''; // Limpiar el contenido antes de empezar
        escribirTexto(elemento, texto, velocidad); // Aplicar el efecto de escritura
    });
}

// Observador de intersección para detectar cuando el usuario ve la sección
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            aplicarEfectoEscritura('h2, p', 100); // Aplicar efecto al entrar en vista
        }
    });
});

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    const secciones = document.querySelectorAll('h2, p');
    secciones.forEach(seccion => {
        observer.observe(seccion); // Observar cada sección
    });
});