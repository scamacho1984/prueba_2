// Menu Burger para movil
// Seleccion de los elementos
const buttonBurger = document.querySelector('.button-burger')
const menu = document.querySelector('.menu2')
const li = document.querySelectorAll('.li-oscuros')
const botonCierre = document.querySelector('.button-burger-icono')
// Cambio de visualizacion de los elementos al hacer click
buttonBurger.addEventListener('click', () => {
  menu.classList.toggle('ocultar')
  botonCierre.classList.toggle('ocultar')
  li.forEach(icon => { icon.classList.toggle('ocultar') })
})


// Uso de Siema para cambiar los Slides del Hero
const slidesSiema = new Siema({ loop: true, duration: 1200 })
const botonAnterior = document.querySelectorAll('.siema-botones-anterior')
const botonSiguiente = document.querySelectorAll('.siema-botones-siguiente')
// Funcion para cambiar la direccion del slide dependiendo del boton
const botonSlides = (boton, tipo) => {
  boton.addEventListener('click', () => slidesSiema[tipo]() )
}
// Ejecucion del cambio de Slide segun boton
botonAnterior.forEach(boton => botonSlides(boton, 'prev'))
botonSiguiente.forEach(boton => botonSlides(boton, 'next'))
