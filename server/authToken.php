<?php
require_once "./db-connection.php";
include "./vendor/autoload.php";
include __DIR__ . './vendor/autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->safeLoad();

$data = json_decode(file_get_contents('php://input'), true);

//echo $data["token"] . "<br/> <br/>";

$secret_key = $_ENV['JWT_SECRET'];
try {
    $decoded = JWT::decode($data["token"], new Key($secret_key, 'HS256'));
} catch (\Firebase\JWT\ExpiredException $e) {
    header("HTTP/1.1 401 Unauthorized");
    exit();
}

//print_r($decoded->exp);

$expirationTime = $decoded->exp;

//echo '<br/>'.(time());

/*

checkIfTokenExpired($decoded);

function checkIfTokenExpired($token) {
    $expirationTime = $token->exp;

    if ($expirationTime < time()) { //<
        header("HTTP/1.1 401 Unauthorized");
        exit();
    }
}
*/

checkIfTokenExpired($data, $secret_key);

function checkIfTokenExpired($data, $secret_key){
    try {
        $decoded = JWT::decode($data["token"], new Key($secret_key, 'HS256'));
        //print_r($decoded);
    } catch (\Firebase\JWT\ExpiredException $e) {
        echo $e->getMessage();
        header("HTTP/1.1 401 Unauthorized");
        exit();
    }
}