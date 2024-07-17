const proyectos = () => {
    return ` 
    <h1 class="tituloProjectos">PROJECTS</h1>
    <div id="cards-content">
        <div class="cards" onclick="movistar()">
            <h4 class="hp">Movistar</h4>
            <img src="https://www.upacifico.cl/wp-content/uploads/2022/01/Movistar.png">
            <p>
            Updating and maintenance of the content of landings of movistar offers, development of new functionalities and improvements to the code.
            </p>
            <p>
            Work modality agile Scrum methodology, task organization with trello platform.
            <p>
            Applied technologies: HTML - CSS - SASS - JavaScript - Jquery - PHP - Git.
            </p>
        </div>
        <div class="cards" onclick="mas58()">
            <h4 class="hp">Pando - Mexico Colectivo</h4>
            <img class="mexico" src="assets/img/mxc.png">
            <p> 
            Development of new functionalities with Angular for a public entity, front and back development, management of http, Rxjs, Git protocols. Using Trello as administration system, Agile/Scrum methodology, integration with REST services.
            </p>
            <p>
            <stron>FrontEnd Technologies:</stron> HTML / SASS / JavaScript / Angular 13.
            <br><br>
            <stron>BackEnd Technologies:</stron> NodeJs / MongoDB / Express / JWT / Cloudinary / Postman.
            </p>
        </div>
        <div class="cards" onclick="bancoEstado()">
            <h4 class="hp">Banco Estado
            </h4>
            <img class="mexico" src="https://www.oriencoop.cl/resources/upload/174908-bancoestado.png">
            <p> Development of web applications with Angular for Bank entity, front and back development,
            Test tests with Jest both in front and in back, performance tests, Documentation, handling protocols http, Rxjs, Git.Using Jira as a management system, methodology
            Agile / Scrum, integration with REST services.
            </p>
            <p>
            Front end Web development with Angular v10 - v16, integration with REST services, HTML / SASS / Librariesbank internals / Recaptcha google.
            <br/><br/> 
            Back end development with NodeJs, NestJs, relational and non-relational database integration, Express / MongoDB / MySql/Postman/JEST/Jmeter.
            </p>
        </div>
        <div class="cards" onclick="dubeNails()">
            <h4 class="hp">DubeNails</h4>
            <img class="mexico" src="./assets/img/dube.jpg">
            <p> Development of web applications with Angular for Estetica entity, front and back development, deploy to Ubuntu server with Nginx and pm2.
            handling of http protocols, Rxjs, Github, push notification, integration with REST services.
            </p>
            <p>
            <stron>FrontEnd Technologies:</stron> HTML / SASS / JavaScript / Angular 13.
            <br><br>
            <stron>BackEnd Technologies:</stron> NodeJs / MongoDB / Express / JWT / Cloudinary / Postman.</p>
        </div>
    </div>
`;
}

const seccion = document.querySelectorAll('.proyectos')[0];

seccion.innerHTML = proyectos();