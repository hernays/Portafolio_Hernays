const inicioContacto = (idioma) => {
    /**
     * Contacto traducción
     */
    const contacto = document.querySelectorAll('#formContacto h1')[0];
    const parrafo = document.querySelectorAll('#formContacto p')[0];
    const formulario = document.querySelectorAll('#formulario label');
    const enviar = document.querySelectorAll('.enviar')[0];
    if (idioma === 'EN') {
        contacto.innerHTML = 'Contact';
        parrafo.innerHTML = `I am currently looking for new opportunities. Whether you have a
        questions or just want to say hi, I'll do my best to answer you!`;
        formulario[0].innerHTML = 'Name';
        formulario[1].innerHTML = 'Email';
        formulario[2].innerHTML = 'Message';
        enviar.value = 'Submit';
    } else {
        contacto.innerHTML = 'Contacto';
        parrafo.innerHTML = `Actualmente estoy buscando nuevas oportunidades. Ya sea que tenga una pregunta o simplemente quiera saludar, ¡haré todo lo posible para responderle!`;
        formulario[0].innerHTML = 'Nombre';
        formulario[1].innerHTML = 'Correo';
        formulario[2].innerHTML = 'Mensaje';
        enviar.value = 'Enviar';
    }
}