<?php 
require_once './db.php';

$nombre = $_POST['nc'];
$email = $_POST['email'];
$comentario = $_POST['comentario'];
$fecha = date('Y-m-d H:i:s');

echo ' <h2>¡Gracias por contactarte ' .$nombre .'!</h2>';

	$conectar=conn();

$consulta = $conectar->prepare("INSERT INTO mensajes (nombre_completo, email, comentario, fecha) VALUES (:nombre_completo, :email, :comentario, :fecha)");
	$consulta->bindValue(':nombre_completo', $nombre, PDO::PARAM_STR);
	$consulta->bindValue(':email', $email, PDO::PARAM_STR);
	$consulta->bindValue(':comentario', $comentario, PDO::PARAM_STR);
	$consulta->bindValue(':fecha', $fecha, PDO::PARAM_STR);
	$consulta->execute();
 ?>