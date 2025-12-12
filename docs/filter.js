document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los botones de filtro y todas las tarjetas de proyecto
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    // Agrega un "escuchador de eventos" (listener) a cada botón
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 1. Obtiene el valor del filtro (ej: 'rstudio', 'powerbi', 'all')
            const filterValue = this.getAttribute('data-filter');

            // 2. Manejo de la clase 'active' para el estilo del botón
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // 3. Iterar sobre las tarjetas para mostrar u ocultar
            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (filterValue === 'all' || cardCategory === filterValue) {
                    // Si el filtro es 'all' o la categoría de la tarjeta coincide, la mostramos
                    card.classList.remove('hidden');
                    // Asegura que la tarjeta se muestre en el diseño de la cuadrícula
                    card.style.display = 'block'; // O 'grid', si tu .portfolio-grid usa display: grid
                } else {
                    // Si no coincide, la ocultamos aplicando la clase 'hidden' (que definimos en el CSS)
                    card.classList.add('hidden');
                }
            });
        });
    });
});