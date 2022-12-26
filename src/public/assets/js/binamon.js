let formulario = document.getElementById('formulario');
if (formulario) {
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('nombre');
        const email = document.getElementById('correo');
        const message = document.getElementById('mensaje');

        const nombre = name.value;
        const correo = email.value;
        const mensaje = message.value;

        fetch('http://localhost:1020/correo', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({ nombre, correo, mensaje })
        })
            .then(res => {
                if (res) {
                    Swal.fire('Mensaje Enviado');
                }
            }).catch(res => {
                if (res) {
                    Swal.fire('Ocurrio un error Siga Intentando');
                }
            });
    });
}


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
    open('https://www.dubenails.xyz/');
}

/**
 * pasador
 */

const pasador = () => {
    const btn = document.querySelectorAll('.btn_pasador');
    const idioma = document.querySelectorAll('.idioma');
    if (btn[0]) {
        btn[0].addEventListener('click', () => {
            console.log('binamons')
            if (idioma[0].style.order !== '1') {
                idioma[0].style.order = '1';
                btn[0].style.order = '2';
                idioma[0].innerHTML = 'ES';
                idiomaGeneral = 'ES';
                btn[0].classList.add('banderaEN');
                btn[0].classList.remove('banderaES');
            } else {
                idioma[0].style.order = '2';
                btn[0].style.order = '1';
                idioma[0].innerHTML = 'EN';
                idiomaGeneral = 'EN';
                btn[0].classList.add('banderaES');
                btn[0].classList.remove('banderaEN');
            }
            inicio(idiomaGeneral);
            inicioProyecto(idiomaGeneral);
            inicioContacto(idiomaGeneral);
        })
    }
}
pasador();










