const inicioProyecto = (idioma) => {
    /**
     * proyectos traducción
     */
    const proyectos = document.querySelectorAll('.tituloProjectos')[0];
    const hp = document.querySelectorAll('.hp')[2];
    const parrafos = document.querySelectorAll('.cards p');

    if (idioma === 'EN') {
        hp.innerHTML = 'Banco Estado';
        proyectos.innerHTML = 'PROJECTS';
        parrafos[0].innerHTML = 'Updating and maintenance of the content of landings of movistar offers, development of new functionalities and improvements to the code.';
        parrafos[1].innerHTML = 'Work modality agile Scrum methodology, task organization with trello platform.';
        parrafos[2].innerHTML = 'Applied technologies: HTML - CSS - SASS - JavaScript - Jquery - PHP - Git.';
        parrafos[3].innerHTML = 'Development of new functionalities with Angular for a public entity, front and back development, management of http, Rxjs, Git protocols. Using Trello as administration system, Agile/Scrum methodology, integration with REST services.';
        parrafos[4].innerHTML = ` 
         <stron>FrontEnd Technologies:</stron> HTML / SASS / JavaScript / Angular 13.
        <br><br>
        <stron>BackEnd Technologies:</stron> NodeJs / MongoDB / Express / JWT / Cloudinary / Postman.`;
        parrafos[5].innerHTML = `Development of web applications with Angular for Bank entity, front and back development,
        Test tests with Jest both in front and in back, performance tests, Documentation, handling protocols http, Rxjs, Git.Using Jira as a management system, methodology
        Agile / Scrum, integration with REST services.`;
        parrafos[6].innerHTML = `Front end Web development with Angular, integration with REST services, HTML / SASS / Librariesbank internals.
        
        <br/><br/> Back end development with NodeJs, relational and non-relational database integration, Express / MongoDB / MySql/Postman/JEST/Jmeter.`;
        parrafos[7].innerHTML = `Development of web applications with Angular for Estetica entity, front and back development, deploy to Ubuntu server with Nginx and pm2.
        handling of http protocols, Rxjs, Github, push notification, integration with REST services.`;
        parrafos[8].innerHTML = `<stron>FrontEnd Technologies:</stron> HTML / SASS / JavaScript / Angular 13.
        <br><br>
        <stron>BackEnd Technologies:</stron> NodeJs / MongoDB / Express / JWT / Cloudinary / Postman.`;
    } else {
        hp.innerHTML = 'Banco Estado';
        proyectos.innerHTML = 'PROYECTOS';
        parrafos[0].innerHTML = 'Actualización y mantenimiento del contenido de landings ofertas de movistar, desarrollo de nuevas funcionalidades y mejoras al codigo.';
        parrafos[1].innerHTML = 'Modalidad de trabajo metodologia ágil Scrum, organización de tareas con plataforma trello.';
        parrafos[2].innerHTML = 'Tecnologías aplicadas: HTML - CSS - SASS - JavaScript - Jquery - PHP - Git.';
        parrafos[3].innerHTML = 'Desarrollo de nuevas funcionalidades con Angular para entidad publica, desarrollo de front y back, manejo de protocolos http, Rxjs, Git. Usando Trello como sistema de administración, metodología Agile/Scrum, integración con servicios REST.';
        parrafos[4].innerHTML = ` 
            <stron>Tecnologias en FrontEnd:</stron> HTML / SASS / JavaScript / Angular Material.
                    <br><br>
            <stron>Tecnologias en BackEnd:</stron> NodeJs / MongoDB / Express / JWT / Postman.`;
        parrafos[5].innerHTML = `Desarrollo de aplicaciones web con Angular para entidad Bancaria, desarrollo de front y back, pruebas de Test con Jest tanto en front como en back , pruebas de performance, Documentación, manejo de protocolos http, Rxjs, Git. Usando Jira como sistema de administración, metodología Agile/Scrum, integración con servicios REST, microFront.`;
        parrafos[6].innerHTML = `  Desarrollo Front end Web con Angular v10 - v16, integración con servicios REST, HTML / SASS / Librerias
                    internas del banco.
                    <br><br>
                    Desarrollo Back end con NodeJs y  NestJs, integración de base de datos relacionales y no relacionales, Express
                    / MongoDB /
                    MySql / Postman / JEST / Jmeter / PLMC.
                `;
        parrafos[7].innerHTML = `Desarrollo de aplicaciones web con Angular para entidad Estetica, desarrollo de front y back, desplegue en servidor Ubuntu con Nginx y pm2.
        manejo de protocolos http, Rxjs, Github, notificacionPush, integración con servicios REST.`;
        parrafos[8].innerHTML = `<stron>Tecnologias en FrontEnd:</stron> HTML / SASS / JavaScript / Angular 13.
                    <br><br>
                    <stron>Tecnologias en BackEnd:</stron> NodeJs / MongoDB / Express / JWT / Cloudinary / Postman.
                `;
    }
}
