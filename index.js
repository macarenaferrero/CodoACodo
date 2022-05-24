
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