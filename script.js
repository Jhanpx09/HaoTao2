addEventListener('DOMContentLoaded', () => {

    // Array que contiene las rutas de las imágenes del slideshow
    const imagenes = ['media/1.webp', 'media/2.webp', 'media/3.webp', 'media/4.webp',
        'media/5.webp', 'media/6.webp', 'media/7.webp'
    ]

    let i = 1; // Variable para llevar el seguimiento de la imagen actual
    const img1 = document.querySelector('#img1'); // Referencia a la primera imagen
    const img2 = document.querySelector('#img2'); // Referencia a la segunda imagen
    const progressBar = document.querySelector('#progress-bar'); // Referencia a la barra de progreso
    const divIndicadores = document.querySelector('#indicadores'); // Referencia al contenedor de indicadores
    let porcentaje_base = 100 / imagenes.length; // Porcentaje base para el progreso
    let porcentaje_actual = porcentaje_base; // Porcentaje actual para el progreso

    // Creación de los indicadores de progreso (círculos)
    for (let index = 0; index < imagenes.length; index++) {
        const div = document.createElement('div'); // Crear elemento div
        div.classList.add('circles'); // Agregar la clase 'circles'
        div.id = index; // Asignar el índice como ID
        divIndicadores.appendChild(div); // Agregar el div al contenedor de indicadores
    }

    progressBar.style.width = `${porcentaje_base}%`; // Establecer el ancho de la barra de progreso inicial
    img1.src = imagenes[0]; // Establecer la primera imagen del slideshow
    const circulos = document.querySelectorAll('.circles'); // Obtener todos los elementos con la clase 'circles'
    circulos[0].classList.add('resaltado'); // Agregar la clase 'resaltado' al primer círculo

    // Función que cambia las imágenes y actualiza el progreso
    const slideshow = () => {
        img2.src = imagenes[i]; // Asignar la siguiente imagen al elemento img2
        const circulo_actual = Array.from(circulos).find(el => el.id == i); // Encontrar el círculo correspondiente a la imagen actual
        Array.from(circulos).forEach(cir => cir.classList.remove('resaltado')); // Remover la clase 'resaltado' de todos los círculos
        circulo_actual.classList.add('resaltado'); // Agregar la clase 'resaltado' al círculo actual

        img2.classList.add('active'); // Agregar la clase 'active' a img2 para que se muestre

        i++; // Incrementar el contador de imagen
        porcentaje_actual += porcentaje_base; // Actualizar el porcentaje actual sumando el porcentaje base
        progressBar.style.width = `${porcentaje_actual}%`; // Actualizar el ancho de la barra de progreso

        if (i == imagenes.length) { // Si se llega a la última imagen, reiniciar el contador y el porcentaje actual
            i = 0;
            porcentaje_actual = porcentaje_base - porcentaje_base;
        }
    }

    setTimeout(() => {
        img1.src = img.src
        img2.classList.remove('active')
    }, 1000)

    setInterval(slideshow, 2000)

})



//Formulario

var inputs = document.getElementsByClassName('formulario__input');

for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function () {
        if (this.value.length >= 1) {
            this.nextElementSibling.classList.add('fijar');
        } else {
            this.nextElementSibling.classList.remove('fijar');
        }
    });
}