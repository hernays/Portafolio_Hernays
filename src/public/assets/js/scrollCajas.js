
let animado = document.querySelector('#proyectos-link');

window.onscroll = () => {

    let scroll = document.documentElement.scrollTop;
    let alturaCaja = animado.offsetTop;

    console.log(scroll);

    console.log(alturaCaja);

    if(alturaCaja - 450 < scroll){
        animado.style.opacity = 1;
        animado.classList.add('animado');
    }

}