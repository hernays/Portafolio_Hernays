
let animado = document.querySelector('.proyectos');

const f = () => {
    let formulario = document.getElementById('formulario');
        formulario.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('nombre');
            const email = document.getElementById('correo');
            const message = document.getElementById('mensaje');
    
            const nombre = name.value;
            const correo = email.value;
            const mensaje = message.value;
    
            fetch('https://hernays.dubenails.com/correo', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
                    "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
                    "Access-Control-Allow-Origin": "*"
                },
                method: 'POST',
                body: JSON.stringify({ nombre, correo, mensaje })
            })
                .then(res => {
                    if (res !== 500) {
                    Swal.fire('Mensaje Enviado');
                    }
                }).catch(res => {
                    if (res) {
                        Swal.fire('Ocurrio un error Siga Intentando');
                    }
                }).finally(() => {
                    name.value = '';
                    email.vale = '';
                    message.value = '';
                    setTimeout(() => {
                        window.location.reload()
                    },2000)
                })
        })
}


window.onscroll = () => {

    let scroll = document.documentElement.scrollTop;
    let alturaCaja = animado.offsetTop;

    if(alturaCaja - 700 < scroll){
        animado.style.opacity = 1;
        animado.classList.add('animado');
    }
}