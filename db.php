<?php

function conn(){
date_default_timezone_set('America/Argentina/Buenos_Aires');

    $hostname = 'localhost';
    $usuariodb = 'root';
    $passworddb = '';
    $dbname = 'contactoloana';

    try {
    $conn = new PDO("mysql:host=$hostname;dbname=$dbname", $usuariodb, $passworddb);
    $conn->exec("SET CHARACTER SET utf8");
    echo "Conexión exitosa";
    return $conn;
    } catch (PDOException $e) {
        print "Error: " . $e->getMessage();
        die();
    }
    
}


?>