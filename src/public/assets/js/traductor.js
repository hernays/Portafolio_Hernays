
const inicio = (idioma) => {
    const tituloSobreMi = document.querySelector('#sobreMi h1');
    const tituloHeader  = document.querySelectorAll('.nombre-flex-2')[0];
    const menu = document.querySelectorAll('.ul li a');
    const sobreMi1 = document.querySelectorAll('.sobreMi1')[0];
    const sobreMi2 = document.querySelectorAll('.sobreMi2')[0];
    const habilidades = document.querySelectorAll('.habilidades')[0];
    const hobbies = document.querySelectorAll('.hobbies li');
    if(idioma === 'EN'){
        /**
         * traducción ingles
         */
        menu[0].innerHTML = 'About me';
        menu[1].innerHTML = 'Projects';
        menu[2].innerHTML = 'Contact';
        menu[3].innerHTML = 'Curriculum';
        tituloHeader.innerHTML = 'Developer Web'
        tituloSobreMi.innerHTML = 'About me';
        sobreMi1.innerHTML = 'I am a systems engineer with more than 2 years of experience, I constantly continue taking courses for my professional development, I consider myself a person who likes to always be at the forefront of technological advances.';
        sobreMi2.innerHTML = 'Today I am looking for a company that gives me the opportunity to contribute my knowledge and in the same way allows me to grow both professionally and personally.';
        habilidades.innerHTML = 'Skills';
        hobbies[0].innerHTML = 'Family';
        hobbies[1].innerHTML = 'Nature';
        hobbies[2].innerHTML = 'Share';
        hobbies[3].innerHTML = 'Travels';
        hobbies[4].innerHTML = 'Sports';
    
    }else{
  /**
         * traducción español
         */
   menu[0].innerHTML = 'Sobre Mi';
   menu[1].innerHTML = 'Proyectos';
   menu[2].innerHTML = 'Contacto';
   menu[3].innerHTML = 'Curriculo';
   tituloHeader.innerHTML = 'Desarrollador Web'
   tituloSobreMi.innerHTML = 'Sobre Mi';
   sobreMi1.innerHTML = 'Soy ingeniero en sistemas con mas de 2 años de experincia, contantemente sigo haciendo cursos para mi desarrollo profesional, me considero una persona que le gustar estar siempre a la vanguardia con los avances tecnologicos.';
   sobreMi2.innerHTML = 'hoy en dia me encuentro en la busqueda de una empresa que me de la oportunidad de poder aportar mis conocimientos y de la misma manera me permita crecer tanto de manera profesional como personal.';
   habilidades.innerHTML = 'Habilidades';
   hobbies[0].innerHTML = 'Familia';
   hobbies[1].innerHTML = 'Naturaleza';
   hobbies[2].innerHTML = 'Compartir';
   hobbies[3].innerHTML = 'Viajes';
   hobbies[4].innerHTML = 'Deportes';
    }
}