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

let btn = document.getElementById("darkMode");

btn.addEventListener('click', ()=>{
  let container = document.getElementsByClassName('container');
  let producto = document.getElementsByClassName('product');
  let botones = document.getElementsByClassName('buy-button');
  let conta = document.getElementById('contacto');
  
    for (let i = 0; i < container.length; i++) {
      container[i].style.boxShadow = "0 0 5px yellow inset, 0 0 10px yellow, 0 0 15px yellow";
      container[i].style.textShadow = "0 0 5px yellow inset, 0 0 10px yellow, 0 0 15px yellow";
      container[i].style.color = "#ff00ff";
      container[i].style.borderRadius = "10px";
      container[i].style.border = "solid 1.5px yellow";
      container[i].style.background = "transparent";
    }

    for (let j = 0; j < producto.length; j++) {
      producto[j].style.boxShadow = "0 0 5px #ff00ff inset, 0 0 10px #ff00ff, 0 0 15px #ff00ff";
      producto[j].style.textShadow = "0 0 5px #ff00ff inset, 0 0 10px #ff00ff, 0 0 15px #ff00ff";
      producto[j].style.color = "#ff00ff";
      producto[j].style.borderRadius = "10px";
      producto[j].style.border = "solid 1.5px #ff00ff";
    }

    document.getElementById('body').style.background = "black";

    for (let k = 0; k < botones.length; k++) {
      botones[k].style.boxShadow = "0 0 5px yellow inset, 0 0 10px yellow, 0 0 15px yellow";
      botones[k].style.color = "yellow";
      botones[k].style.borderRadius = "10px";
      botones[k].style.border = "solid 1.5px yellow";
      botones[k].style.background = "transparent";
    }


    conta.style.boxShadow = "0 0 5px yellow inset, 0 0 10px yellow, 0 0 20px yellow";
    conta.style.color = "green";
    conta.style.borderRadius = "10px";
    conta.style.border = "solid 1.5px yellow";
    conta.style.background = "black"; 
  });
