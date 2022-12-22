
window.onscroll = function(){

    let scroll = document.documentElement.scrollTop || document.body.scrollTop;

    if(scroll > 380){
        
      let header=  document.getElementById('header');

        header.classList.add('scrollHeader');

    }else{

            header.classList.remove('scrollHeader');

    }

}


let formulario = document.getElementById('formulario');


if(formulario){

    
formulario.addEventListener('submit', (e) => {

    e.preventDefault();

    const name = document.getElementById('nombre');
    const email = document.getElementById('correo');
    const message = document.getElementById('mensaje');

    const nombre = name.value;
    const correo = email.value;
    const mensaje = message.value;

    fetch('https://mas58.herokuapp.com/correo/contact', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        method:'POST',
        body: JSON.stringify({nombre,correo,mensaje})
})
.then(res =>  {

    if(res){
        Swal.fire('Mensaje Enviado');
    }
}

)
.catch(res => {
    if(res){
        Swal.fire('Ocurrio un error Siga Intentando');
    }
});
});

}


/* correo */ 


function mas58(){
    open('https://mexicolectivo.com/');
}

function movistar(){
   open('https://ofertas.movistar.cl/hogar/multioferta-fija/?campaign=CL_FIJO_COL-DUO-B2C_21-01-01_SEM_LDS-WEB_AON_BRAND-PLANES-PAQUETES-HOGAR_ABT&adgroupid=58700005168480764&keyword=p73579270970')
}




/* animacion cajas */ 



//let animado = document.querySelectorAll('.box');











