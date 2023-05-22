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

$(document).ready(function(){
    $("#news-slider").owlCarousel({
        items:3,
        navigation:true,
        navigationText:["",""],
        autoPlay:true
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