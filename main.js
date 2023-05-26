/* Script nav menu responsive */

let openMenu = document.querySelector("#open-menu");
let closeMenu = document.querySelector("#close-menu");
let navList = document.querySelector("#nav-list");
let navLinks = document.querySelectorAll(".nav-list");


openMenu.addEventListener("click", () => {
    navList.classList.add("active");
})

closeMenu.addEventListener("click", () => {
    navList.classList.remove("active");
})

navLinks.forEach(navLink => {
    navLink.addEventListener("click", () => {
        navList.classList.remove("active");
    })
})

/* Script slider novedades */

const datos =
    [
        {
            id:1,
            imagen:'noved1.jpg',
            dia: 06,
            mes: 'Mayo',
            anio: '2023',
            lugar: 'tiro federal',
            titulo: 'Curso de iniciación al tiro con arco de Mayo',
            intro: '',
            info: 'Este sábado dimos inicio al esperado curso de arquería en el Club Tiro Federal Trelew. Durante la primera clase, nuestros aspirantes pudieron disfrutar de una experiencia única, aprendiendo las técnicas básicas para comenzar a practicar este deporte tan apasionante. Mientras tanto, nuestros arqueros más avanzados continuaron con sus prácticas y otros se dedicaron al armado de las contenciones para garantizar la seguridad de todos. ¡Estamos muy felices de haber comenzado este nuevo ciclo de aprendizaje y esperamos verlos pronto en nuestra próxima clase!'
        },
        {
            id:2,
            imagen:'noved2.jpg',
            dia: 26,
            mes: 'Marzo',
            anio: '2023',
            lugar: 'tiro federal',
            titulo: 'Torneo Social Fundación Ceferino Puerto Madryn',
            intro: '',
            info: 'Este domingo, participamos en el Torneo 3D Social de Arquería de la Fundación Ceferino Namuncurá y tuvimos el agrado de compartir una jornada agradable junto a arqueros de diversos clubes. Felicitamos a Romina, @LaPeque, miembro de nuestro club, Tiro Federal Trelew, quien en su primer torneo obtuvo el primer puesto en la categoría tradicional escuela. Esperamos que este triunfo sea el primero de muchos más. Agradecemos a la Fundación Ceferino Namuncurá por organizar este torneo y los esperamos el próximo 8 de abril en el JJCC que organizamos en Trelew.'
        },
        {
            id:3,
            imagen:'noved3.jpg',
            dia: 12,
            mes: 'Abril',
            anio: '2023',
            lugar: 'tiro federal',
            titulo: 'Juego de campo rankeable zona patagónica  en el Tiro Federal Trelew',
            intro: '',
            info: '¡Hola arqueros! 🎯 Queremos contarles que el sábado pasado tuvimos una increíble competencia de juego de campo en el Tiro Federal Trelew. ¡Y fue todo un éxito gracias a la participación de 57 arqueros provenientes de diferentes localidades y provincias aledañas! Queremos felicitar especialmente a los arqueros de nuestro club que participaron en la competencia, Además, queremos agradecer a todos los colaboradores que nos ayudaron tanto en la preparación de las deliciosas pizzas como en la organización del campo. También queremos agradecer a @canal12trelew por la cobertura que nos brindaron.'
        },
        {
            id:4,
            imagen:'noved4.jpg',
            dia: 06,
            mes: 'Diciembre',
            anio: '2022',
            lugar: 'tiro federal',
            titulo: 'Cena Fin de año',
            intro: '',
            info: 'Este sábado se llevó a cabo la cena anual, de cierre de actividades. Dónde fueron distinguidos algunos de nuestros arqueros, por su gran participación en competencias de la Federación Argentina de tiro con Arco. Hemos tenido un gran 2022....y esperamos tener un 2023 aún mejor, con muchos más desafíos.'
        },
        {
            id:5,
            imagen:'noved5.jpg',
            dia: 18,
            mes: 'Febrero',
            anio: '2023',
            lugar: 'tiro federal',
            titulo: '¡Seguimos Avanzando!',
            intro: '',
            info: 'Muy felices por la nueva adquisición de figuras 3D para arquería. Muy pronto podremos comenzar con los torneos en la modalidad 3D. ¡Seguimos Avanzando!'
        },
    ]

let carrusel = document.querySelector("#news-slider")

datos.forEach(dato => {
carrusel.innerHTML += `<div class="news-grid">
    <div class="news-grid-image"><img src="img/fotos novedades/` + dato.imagen +`" alt="">
        <div class="news-grid-box">
            <h1>`+ dato.dia + `</h1>
            <p>`+ dato.mes + `</p>
        </div></div>
        <div class="news-grid-txt">
            <span>`+ dato.lugar + `</span>
            <h2>`+ dato.titulo + `</h2>
            <ul>
                <li><i class="fa fa-calendar" aria-hidden="true"></i>` + dato.mes + ` ` + dato.dia + `, ` + dato.anio + `</li>
            </ul>
            <p>`+ dato.intro + `</p>
            <a id="btn-abrir-popup" class="btn-abrir-popup">Ver mas...</a>

        </div>
    </div>`;

})

var btnAbrirPopup = document.getElementsByClassName('btn-abrir-popup'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('popup');
 


datos.forEach( dato =>{
btnAbrirPopup[dato.id-1].addEventListener('click', function(){
    let detalle = document.querySelector("#popup")
    detalle.innerHTML += 
    `<div id="novedad">
                <h3>`+ dato.titulo +`</h3>
                <p >`+ dato.info +`<p>
    </div>`
	overlay.classList.add('active');
	popup.classList.add('active');
   
   
});

})


btnCerrarPopup.addEventListener('click', function(){
    let novedad = document.querySelector("#novedad")
    $('#novedad').remove();
    
   
    overlay.classList.remove('active');
    popup.classList.remove('active');
})



$(document).ready(function () {
    $("#news-slider").owlCarousel({
        items: 3,
        navigation: true,
        navigationText: ["", ""],
        autoPlay: true
    });
});

/* Validacion formulario bootstrap */ // Example starter JavaScript for disabling form submissions if there are invalid fields

(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

fetch('https://apis.datos.gob.ar/georef/api/provincias')
    .then(response => response.json())
    .then(respuestaApi => {
        let provincias = respuestaApi.provincias;

        const $select = document.getElementById("provincia")
        //empty option
        const $option = document.createElement("option")
        $option.value = ""
        $option.innerHTML = "Seleccione una provincia"
        $select.appendChild($option)
        provincias.forEach(provincia => {
            const $option = document.createElement("option")
            $option.value = provincia.nombre
            $option.innerHTML = provincia.nombre
            $select.appendChild($option)
        })




    })
    .catch((err) => {
        console.log(err)
    })

   
/* ocultar - mostrar formulario */

let btnCursos = document.querySelector("#btn-cursos");


btnCursos.addEventListener("click", () => {
    formulario.classList.add("active");
})