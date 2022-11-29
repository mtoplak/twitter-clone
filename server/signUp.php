<?php
include "./db-connection.php";
//header('Content-type: application/json'); //???


$data = json_decode(file_get_contents('php://input'), true);
echo print_r($data);
/*
//echo $data;
var_dump($data);
echo '<br />';
echo $data['password'];
*/
$hashed_pass = password_hash($data['password'], PASSWORD_DEFAULT);
try {
    // PRIPRAVA POIZVEDBE
    $poizvedba = $povezava->prepare("INSERT INTO user (username, email, password, name, lastname, date_joined) VALUES(:username, :email, :password, :name, :lastname, :date_joined)");

    // PRIPRAVA VREDNOSTI
    $poizvedba->bindValue(':email', $data['email']);
    $poizvedba->bindValue(':username', $data['username']);
    $poizvedba->bindValue(':name', $data['name']);
    $poizvedba->bindValue(':password', $hashed_pass);
    $poizvedba->bindValue(':lastname', $data['lastname']);
    $poizvedba->bindValue(':date_joined', date("Y-m-d"));
    // DEJANSKA IZVEDBA POIZVEDBE
    $poizvedba->execute();
} catch (PDOException) {
    header("HTTP/1.1 401 Unauthorized");
}


// ID NAZADNJE VSTAVLJENE VRSTICE
$idVstavljeneVrstice = $povezava->lastInsertId();

//echo $idVstavljeneVrstice;
//echo json_encode(array('response_code' => 200));
//header(200);
//http_response_code(404);
