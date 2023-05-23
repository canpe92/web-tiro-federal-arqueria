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
let datos =
    [
        {
            imagen:'noved1.jpg',
            dia: 28,
            mes: 'Dic',
            anio: '2023',
            lugar: 'tiro federal',
            titulo: 'Titulo de entrada',
            intro: 'Texto introductorio 1',
            info: 'Lorem, ipsum dolor sit amet consectetur, adipisicing '
        },
        {
            
            imagen:'noved2.jpg',
            dia: 30,
            mes: 'Sep',
            anio: '2023',
            lugar: 'tiro federal',
            titulo: 'Titulo de entrada',
            intro: 'Texto introductorio 2',
            info: 'Lorem, ipsum dolor sit amet consectetur, adipisicing '
        },
        {
            imagen:'noved3.jpg',
            dia: 15,
            mes: 'Oct',
            anio: '2023',
            lugar: 'tiro federal',
            titulo: 'Titulo de entrada',
            intro: 'Texto introductorio 3',
            info: 'Lorem, ipsum dolor sit amet consectetur, adipisicing '
        },
        {
            imagen:'noved4.jpg',
            dia: 05,
            mes: 'Nov',
            anio: '2023',
            lugar: 'tiro federal',
            titulo: 'Titulo de entrada',
            intro: 'Texto introductorio 4',
            info: 'Lorem, ipsum dolor sit amet consectetur, adipisicing '
        },
        {
            imagen:'noved5.jpg',
            dia: 18,
            mes: 'Feb',
            anio: '2023',
            lugar: 'tiro federal',
            titulo: 'Titulo de entrada',
            intro: 'Texto introductorio 5',
            info: 'Lorem, ipsum dolor sit amet consectetur, adipisicing '
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
                <li><i class="fa fa-calendar" aria-hidden="true"></i>` + datos.mes + ` ` + datos.dia + `, ` + datos.anio + `</li>
            </ul>
            <p>`+ dato.intro + `</p>
            <button id="btn-abrir-popup" class="btn-abrir-popup">Ver mas...</button>

        </div>
    </div>`;

})

var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
    
	overlay.classList.add('active');
	popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});

$(document).ready(function () {
    $("#news-slider").owlCarousel({
        items: 3,
        navigation: true,
        navigationText: ["", ""],
        autoPlay: true
    });
});

/* Validacion formulario bootstrap */
// Example starter JavaScript for disabling form submissions if there are invalid fields
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