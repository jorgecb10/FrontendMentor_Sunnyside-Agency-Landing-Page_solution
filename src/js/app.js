document.addEventListener("DOMContentLoaded", () => {
    console.log('documento listo');

    const iconoNavegacion = document.querySelector('#imagen-nav')
    const navegacion = document.querySelector('#navegacion')

    iconoNavegacion.addEventListener('click', () => {
        navegacion.classList.toggle('oculto')
        navegacion.classList.toggle('visible')
    })
})