
const subirScroll = () => {
    setTimeout( () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    },300)
}
document.querySelector('#btnInicio').click();



const btn = document.querySelectorAll('.btn_pasador');
const idioma = document.querySelectorAll('.idioma');



/* links */

function mas58() {
    open('https://mexicolectivo.com/');
}
function movistar() {
    open('https://ofertas.movistar.cl/hogar/multioferta-fija/?campaign=CL_FIJO_COL-DUO-B2C_21-01-01_SEM_LDS-WEB_AON_BRAND-PLANES-PAQUETES-HOGAR_ABT&adgroupid=58700005168480764&keyword=p73579270970')
}
function bancoEstado() {
    open('https://www.bancoestado.cl/');
}
function dubeNails() {
    open('https://www.dubenails.com/');
}

/**
 * pasador
 */

const pasador = () => {
    if (btn[0]) {
        btn[0].addEventListener('click', () => {
            if (idioma[0].style.order !== '1') {
                idiomaGeneral = 'ES';
                estilosBtnIdioma('0')
            } else {
                idiomaGeneral = 'EN';
                estilosBtnIdioma('1')
            
            }
            inicio(idiomaGeneral);
            inicioProyecto(idiomaGeneral);
            inicioContacto(idiomaGeneral);
        })
    }
}
const idiomaModal = () => {
    const modal = document.querySelectorAll('.modal')[0];
    const espanol = document.querySelector('#btnEspanol');
    const ingles = document.querySelector('#btnIngles');

    espanol.addEventListener('click', () => {
        inicio('ES');
        inicioProyecto('ES');
        inicioContacto('ES');
        estilosBtnIdioma('0')
        modal.classList.add('hideModal')
        document.querySelector('body').classList.add('showScroll')


    })
    ingles.addEventListener('click', () => {
        inicio('EN');
        inicioProyecto('EN');
        inicioContacto('EN');
        modal.classList.add('hideModal')
        document.querySelector('body').classList.add('showScroll')
    })
}


const estilosBtnIdioma = (value) => {
    if(value !== '1'){
        idioma[0].style.order = '1';
        btn[0].style.order = '2';
        idioma[0].innerHTML = 'ES';
        btn[0].classList.add('banderaEN');
        btn[0].classList.remove('banderaES');
    }else {
        idioma[0].style.order = '2';
        btn[0].style.order = '1';
        idioma[0].innerHTML = 'EN';
        btn[0].classList.add('banderaES');
        btn[0].classList.remove('banderaEN');
    }
}
idiomaModal()
pasador();










