<?php

function conn(){
date_default_timezone_set('America/Argentina/Buenos_Aires');

    $hostname = 'localhost';
    $usuariodb = 'id18986582_root';
    $passworddb = 'Lw2qH(k$TQf+Q5G+';
    $dbname = 'id18986582_contactoloana';

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