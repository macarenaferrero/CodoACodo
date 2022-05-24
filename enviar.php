<?php 
	include_once('db.php');

	$nombre = $_POST['nc'];
	$email = $_POST['email'];
    $comentario = $_POST['comentario'];

	// $res = $mysqli->query("INSERT INTO mensajes VALUES ('','$nombre','$email','$comentario')");

	// while($f = $res->fetch_object()){
	// 	echo $f->nombre.' <br/>';
	// }
	echo '<h2>¡Gracias por contactarte!</h2>';
	
	$conectar=conn();
	$sql = "INSERT INTO mensajes VALUES ('','$nombre','$email','$comentario')";
	$res = mysqli_query($conectar, $sql)or trigger_error("Falló sentencia SQL" .mysqli_error($conectar),E_USER_ERROR);
 ?>