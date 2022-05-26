<?php 
	require_once './db.php';

	$nombre = $_POST['nc'];
	$email = $_POST['email'];
    $comentario = $_POST['comentario'];

	echo ' <h2>¡Gracias por contactarte ' .$nombre .'!</h2>';
	
 	$conectar=conn();
	
	$consulta = $conectar->prepare("INSERT INTO mensajes (nombre_completo, email, comentario) VALUES (:nombre_completo, :email, :comentario)");
        $consulta->bindValue(':nombre_completo', $nombre, PDO::PARAM_STR);
        $consulta->bindValue(':email', $email, PDO::PARAM_STR);
        $consulta->bindValue(':comentario', $comentario, PDO::PARAM_STR);
        $consulta->execute();
 ?>