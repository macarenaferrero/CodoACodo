// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementsByName("validarForm").addEventListener('submit', validarForm); 
//   });


// function validarForm() {    
//     var valorEmail = document.getElementById("email").value;
//     var valorNombre = document.getElementById("nc").value;
//     var valorComentario = document.getElementById("comentario").value;
//     if(valorEmail.length == 0 || valorNombre.length == 0 || valorComentario.length == 0){
//         alert("Debe completar todos los campos.");
//     }
//     alert("Gracias por contactarme.");
// }

// const button = document.querySelector("button");
// button.onclick = validarForm();

        (function(){
            var formulario = document.getElementById("formulario");
            var boton = document.getElementById("btn");

            var validarNombre = function(e){
                if (formulario.nc.length == 0){
                    alert("Completa el campo nombre");
                    e.preventDefault();
                }
            };

            var validarEmail = function(e){
                if (formulario.email.length == 0){
                    alert("Completa el campo Email");
                    e.preventDefault();
                }
            };
            
            var validarComentario = function(e){
                if(formulario.comentario.length == 0){
                    e.preventDefault();
                    }
            };

            var validarForm = function(e){
                validarNombre(e);
                validarEmail(e);
                validarComentario(e);
            };
            formulario.addEventListener("submit", validarForm);
        }())