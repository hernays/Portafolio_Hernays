
let animado = document.querySelector('.proyectos');

const f = () => {
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
                    console.log('lllllll',res)
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
}


window.onscroll = () => {

    let scroll = document.documentElement.scrollTop;
    let alturaCaja = animado.offsetTop;

    if(alturaCaja - 700 < scroll){
        animado.style.opacity = 1;
        animado.classList.add('animado');
    }
}