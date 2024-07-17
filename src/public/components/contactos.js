const contacto = () => {
    return `<section id="formContacto">
    <h1>Contact</h1>
    <p>I am currently looking for new opportunities. Whether you have a
    questions or just want to say hi, I'll do my best to answer you!</p>
    <div>
       <img src="assets/img/contactM.png"  width="35%" height="400px">
        <form id="formulario">
            <label for="nombre">Name</label><br>
            <input type="text" id="nombre" placeholder="Luis Gonzalez"/>
            <br>

            <label for="correo">Email</label><br>
            <input type="email"  id="correo" placeholder="email@gmail.com"/>
            <br>

            <label for="mensaje">Message</label><br>
            <textarea id="mensaje"></textarea>
            <br>

            <input class="enviar" type="submit" value="Submit" onclick="f()" />
        </form>
    </div>
</section>`;
}

const seccionContacto = document.querySelectorAll('.contacto')[0];
seccionContacto.innerHTML = contacto();