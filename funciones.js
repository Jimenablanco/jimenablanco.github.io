window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle('down', window.scrollY>0);

    var logo = document.querySelector(".brand img");
    if (window.scrollY>0) {
        logo.setAttribute('src', '/imagenes/logorosa.png');
    } else {
        logo.setAttribute('src', '/imagenes/logoblanco.png');
    }
});

var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menu-btn');
var closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener("click", () => {
  menu.classList.add('active');
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove('active');
});

/** Ocultar menu */
let ubicacionPrincipal = window.scrollY
let $header = document.querySelector('#nav')

window.addEventListener('scroll', function() {
    let ubicacionActual = window.scrollY

    console.log (ubicacionActual)
    if (ubicacionPrincipal >= ubicacionActual) {
        $header.style.top = "0px"
    } else {
        $header.style.top = "-120px"
    }

    ubicacionPrincipal = ubicacionActual
})