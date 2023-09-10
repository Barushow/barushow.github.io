/*precarga*/

window.onload = function(){
  $("#onload").fadeOut();
  $("body").removeClass("hidden");
  }


  /*navbar*/

  $(document).ready(main);

  var contador = 1;

  function main(){
      $('.bt-menu').click(function(){
          if(contador == 1){
              $('nav').animate({
                  left: '0'
              });
              contador = 0;
          } else {
              contador = 1;
              $('nav').animate({
                  left: '-100%'
              });
          }
      });

      $(document).click(function(event){
          var target = event.target;
          if(!$(target).closest('.bt-menu').length && !$(target).closest('nav').length){
              $('nav').animate({
                  left: '-100%'
              });
              contador = 1;
          }
      });
  }
  /*telefono*/


  function telefono() {
      Swal.fire({
          title: "Telefono",
          text: "+393881767398",
          imageUrl: "https://cdn-icons-gif.flaticon.com/10690/10690137.gif",
          imageWidth: 50,
          imageHeight: 50,
          imageAlt: "Custom image",
          
      });
  }




//alerta lenguajes
function portugues() {
  Swal.fire({
    title: "Portugues",
    text: "Avanzado-Comunicacion constante-Buen dominio de la lengua.",
    imageUrl: "https://cdn-icons-gif.flaticon.com/10690/10690297.gif",
    imageWidth: 50,
    imageHeight: 50,
  });
}

function italiano() {
  Swal.fire({
    title: "Italiano",
    text: "Intermedio-Comunicacion laboral e Intrapersonal-Buen dominio de la lengua.",
    imageUrl: "https://cdn-icons-gif.flaticon.com/10690/10690297.gif",
    imageWidth: 50,
    imageHeight: 50,
  });
}

function ingles() {
  Swal.fire({
    title: "Ingles",
    text: "Medio-Aprendizaje del ingles tecnico-Capacitacion a personal-Manejo intermedio de la lengua.",
    imageUrl: "https://cdn-icons-gif.flaticon.com/10690/10690297.gif",
    imageWidth: 50,
    imageHeight: 50,
    imageAlt: "Custom image",
  });
}

function ingles() {
  Swal.fire({
    title: "Ingles",
    text: "Medio-Aprendizaje del ingles tecnico-Capacitacion a personal-Manejo intermedio de la lengua.",
    imageUrl: "https://cdn-icons-gif.flaticon.com/10690/10690297.gif",
    imageWidth: 50,
    imageHeight: 50,
  });
}

function español() {
  Swal.fire({
    title: "Español",
    text: "Lengua materna-Español Castellano-Manejo formal-tecnico e ingenieril de la lengua.",
    imageUrl: "https://cdn-icons-gif.flaticon.com/10690/10690297.gif",
    imageWidth: 50,
    imageHeight: 50,
  });
}

function arabe() {
  Swal.fire({
    title: "Arabe",
    text: "Aprendizaje de la lengua por hobbie-Lectura y escritura del idioma nivel basico.",
    imageUrl: "https://cdn-icons-gif.flaticon.com/10690/10690297.gif",
    imageWidth: 50,
    imageHeight: 50,
    imageAlt: "Custom image",
  });
}



