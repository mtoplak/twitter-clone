<?php
require_once "./db-connection.php";
require_once './authToken.php';

include "./vendor/autoload.php";
include __DIR__ . './vendor/autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->safeLoad();

$data = json_decode(file_get_contents('php://input'), true);

print_r($data);

$secret_key = $_ENV['JWT_SECRET'];
$decoded = JWT::decode($data["token"], new Key($secret_key, 'HS256'));

checkIfTokenExpired($data, $secret_key);

$username = $decoded->data->username;

try {
    $poizvedba1 = $povezava->prepare("SELECT id_user FROM user WHERE username = :username");
    $poizvedba1->bindValue(':username', $username);
    $poizvedba1->execute();
    $rezultat = $poizvedba1->fetch(\PDO::FETCH_OBJ);
    $id = $rezultat->id_user;


    $time = date("h:i A Y-m-d");
    $poizvedba2 = $povezava->prepare("INSERT INTO tweet (content, time_posted, fk_id_user) VALUES (:content, :time_posted, :fk_id_user)");
    $poizvedba2->bindValue(':content', $data["content"]);
    $poizvedba2->bindValue(':time_posted', $time);
    $poizvedba2->bindValue(':fk_id_user', $id);
    $poizvedba2->execute();
} catch (PDOException) {
    header("HTTP/1.1 401 Unauthorized");
}
