<?php

function conn(){

    $hostname = "localhost";
    $usuariodb = "root";
    $passworddb = "";
    $dbname = "contactoloana";

    $conectar = mysqli_connect($hostname, $usuariodb, $passworddb, $dbname);
    return $conectar;
}


?>