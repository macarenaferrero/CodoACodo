document.addEventListener("DOMContentLoaded", function() {
    document.getElementsByName("validarForm").addEventListener('submit', validarForm); 
  });


function validarForm() {    
    var valorEmail = document.getElementById("email").value;
    var valorNombre = document.getElementById("nc").value;
    var valorComentario = document.getElementById("comentario").value;
    if(valorEmail.length == 0 || valorNombre.length == 0 || valorComentario.length == 0){
        alert("Debe completar todos los campos.");
        return 0;
    }

    alert("Gracias por contactarme.");
    document.validarForm.submit();
}

