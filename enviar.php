<?php 
	$mysqli = new mysqli("localhost","root","","contactoloana") or die("<h2>Error para conectar base de datos</h2>");;

	$nombre = $_POST['nc'];
	$email = $_POST['email'];
    $comentario = $_POST['comentario'];

	$res = $mysqli->query("INSERT INTO mensajes VALUES ('','$nombre','$email','$comentario')");

	while($f = $res->fetch_object()){
		echo $f->nombre.' <br/>';
	}
	echo'
	<h2>¡Gracias por contactarte!</h2>';
	
 ?>