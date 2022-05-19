<?php 
	$nombre = $_POST['nc'];
	$email = $_POST['email'];
	$asunto = 'Consulta Web';
    $header = "FROM:" .$email ."\r\n";
    $header .= "Reply-To: .$email" ."\r\n";
	$header .= "X-Mailer: PHP/" . phpversion();
    $comentario = "Nombre: ".$nombre."<br> Mensaje:".$_POST['comentario'];


	if(@mail('loanafferrero@gmail.com', $asunto, $mensaje, $header)){
		echo "Correo enviado";
	}
 ?>