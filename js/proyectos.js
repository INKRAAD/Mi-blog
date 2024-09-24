document.addEventListener("DOMContentLoaded", function() {
    // Inicializa los elementos del DOM
    const botones = document.querySelectorAll('.boton-proyecto');

    botones.forEach(boton => {
        boton.addEventListener('click', function(event) {
            event.preventDefault();
            const url = this.getAttribute('href');
            // Lógica para manejar la navegación o carga del proyecto
            console.log(`Navegando a: ${url}`);
            // Aquí puedes agregar más lógica para cargar el proyecto
        });
    });
});
