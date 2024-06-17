$(document).ready(function () {
  // Smooth scrolling para los enlaces internos
  $('a[href^="#"]').on("click", function (event) {
    var target = $(this.getAttribute("href"));
    if (target.length) {
      event.preventDefault();
      $("html, body").stop().animate(
        {
          scrollTop: target.offset().top,
        },
        1000
      );
    }
  });

  // Envío del formulario de contacto (simulado)
  $("#contact-form").submit(function (event) {
    event.preventDefault();
    //podemos agregar la logica para enviar el form

    alert("¡Formulario enviado correctamente!");
    $(this)[0].reset();
  });
});

let btn= document.getElementById("toggle-dark-mode");

btn.addEventListener('click', ()=>{
 let container = document.getElementsByClassName('container');
container.forEach(elemento => {
  elemento.style.boxShadow = "0 0 5px green inset, 0 0 10px green, 0 0 20px green";
  elemento.color = "lightgreen";
}
})









