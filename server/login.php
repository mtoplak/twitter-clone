<?php
include "./db-connection.php";
include "./vendor/autoload.php";

//define('BASE_PATH', realpath(__DIR__.'/../../'));

use Firebase\JWT\JWT;
//header('Content-type: application/json'); //???

include __DIR__ . './vendor/autoload.php';


$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->safeLoad();

//echo $_ENV['JWT_SECRET'];
//print_r($_ENV);

$data = json_decode(file_get_contents('php://input'), true);
//echo print_r($data);

/*
var_dump($data);
echo '<br />';
echo $data['password'];
*/

try {
    // PRIPRAVA POIZVEDBE
    $poizvedba = $povezava->prepare("SELECT id_user, email, username, password, name FROM user WHERE email = :emailOrPassword OR username = :emailOrPassword");

    // PRIPRAVA VREDNOSTI
    $poizvedba->bindValue(':emailOrPassword', $data['emailOrPassword']);

    // DEJANSKA IZVEDBA POIZVEDBE
    $poizvedba->execute();

    // PRIDOBIVANJE REZULTATOV
    $rezultat = $poizvedba->fetch(\PDO::FETCH_OBJ);

    $rezultat = json_decode(json_encode($rezultat), true);
    //echo print_r($rezultat);


    // preveri ali obstaja v bazi
    if (gettype($rezultat) == 'boolean') { // ko user ne obstaja v bazi, vrne tip boolean
        echo 'ne obstaja v bazi';
        header("HTTP/1.1 401 Unauthorized");
        exit();
    }

    /*
    echo '<br /></br /><br /><br /';
    $array = json_decode(json_encode($rezultat), true);
    echo print_r($array);
    */

    // preveri ali se gesli ujemata
    if (password_verify($data['password'], $rezultat["password"])) { // preveri ali se gesli ujemata
        //echo 'gesli se ujemata';
        $payload = [
            'iss' => "localhost",
            'aud' => 'localhost',
            'iat' => time(), // issued at
            'exp' => time() + 86400, // will expire in 1 day
            'data' => [
                'id' => $rezultat['id_user'],
                'name' => $rezultat['name'],
                'username' => $rezultat['username'],
                'email' => $rezultat['email'],
            ],
        ];
        //$secret_key = "secret";
        $secret_key = $_ENV['JWT_SECRET'];
        $jwt = JWT::encode($payload, $secret_key, 'HS256');
        $token = json_encode([
            'token' => $jwt,
            'name' => $rezultat['name'],
            'username' => $rezultat['username'],
        ]);
        header('Content-type: application/json');
        echo $token;
        exit();
    } else {
        echo 'gesli se ne ujemata';
        header("HTTP/1.1 401 Unauthorized");
        exit();
    }
} catch (PDOException) {
    header("HTTP/1.1 401 Unauthorized");
}
