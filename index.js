
function validarForm() {
    var nombre = document.formulario.nc.value;
    if (nombre.length == 0) {
        alert("Tiene que escribir su nombre")
        document.formulario.nc.focus()
        return 0;
    }

    var email = document.formulario.email.value
    if (email.length == 0) {
        alert("Tiene que introducir un email válido.")
        document.formulario.email.focus()
        return 0;
    }
    var comentario = document.formulario.comentario.value;
    if (comentario.length == 0) {
        alert("No puede enviar un mensaje vacío.")
        document.formulario.comentario.focus()
        return 0;
    }

    alert("Muchas gracias por enviar el formulario");
    document.formulario.submit();

}

var modal = document.getElementById('popUp');
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var img4 = document.getElementById('img4');
var img5 = document.getElementById('img5');
var img6 = document.getElementById('img6');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img1.onclick = crearPopUp;
img2.onclick = crearPopUp;
img3.onclick = crearPopUp;
img4.onclick = crearPopUp;
img5.onclick = crearPopUp;
img6.onclick = crearPopUp;

function crearPopUp() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}