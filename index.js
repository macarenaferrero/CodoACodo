
function validarForm() {
    if (document.formulario.nc.value.length == 0) {
        alert("Tiene que escribir su nombre")
        document.formulario.nc.focus()
        return 0;
    }

    email = document.formulario.email.value
    if (email.length == 0) {
        alert("Tiene que introducir un email válido.")
        document.formulario.email.focus()
        return 0;
    }

    if (document.formulario.comentario.value.length == 0) {
        alert("No puede enviar un mensaje vacío.")
        document.formulario.comentario.focus()
        return 0;
    }

    alert("Muchas gracias por enviar el formulario");
    document.formulario.submit();
}