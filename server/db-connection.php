<?php

// PODATKI ZA POVEZAVO NA PODATKOVNO BAZO
include "./config.php";


header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Method: POST');
//header('Content-Type: application/json');

// USTVARJANJE POVEZAVE NA PODATKOVNO BAZO
try {
  $povezava = new PDO('mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=utf8mb4', DB_USER, DB_PASS);
  //echo "Connectied successfully!!!!!!!";
} catch (PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}
