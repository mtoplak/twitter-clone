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

checkIfTokenExpired($decoded);
