
let animado = document.querySelector('#proyectos-link');

window.onscroll = () => {

    let scroll = document.documentElement.scrollTop;
    let alturaCaja = animado.offsetTop;

    if(alturaCaja - 700 < scroll){
        animado.style.opacity = 1;
        animado.classList.add('animado');
    }
}