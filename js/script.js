// Paleta de colores
const colores = [
    '#FF5733', // Rojo
    '#33FF57', // Verde
    '#3357FF', // Azul
    '#F1C40F', // Amarillo
    '#8E44AD', // Púrpura
    '#E67E22', // Naranja
    '#1ABC9C', // Turquesa
    '#2C3E50', // Azul oscuro
    '#D35400', // Naranja oscuro
    '#C0392B'  // Rojo oscuro
];

// Función para simular el efecto de escritura
function escribirTexto(elemento, texto, velocidad) {
    let i = 0;
    function escribir() {
        if (i < texto.length) {
            let char = texto.charAt(i);
            // Seleccionar un color aleatorio de la paleta
            let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
            // Aplicar color a cada carácter
            elemento.innerHTML += `<span style="color: ${colorAleatorio};">${char}</span>`;
            i++;
            setTimeout(escribir, velocidad);
        }
    }
    escribir();
}

// Función para animar imágenes
function animarImagenes() {
    const imagenes = document.querySelectorAll('.imagen-perfil, .imagen-estudios');
    imagenes.forEach((img, index) => {
        img.style.animation = `fadeIn 1s ease-in-out ${index * 0.5}s forwards`; // Animación escalonada
    });
}

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    const bienvenida = document.querySelector('.bienvenida h2');
    escribirTexto(bienvenida, "Hola, soy Juan Pérez", 100);
    animarImagenes(); // Llamar a la función de animación
});
