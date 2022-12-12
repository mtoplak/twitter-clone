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

$secret_key = $_ENV['JWT_SECRET'];
$decoded = JWT::decode($data["token"], new Key($secret_key, 'HS256'));

checkIfTokenExpired($data, $secret_key);


try {
    $poizvedba1 = $povezava->prepare("SELECT * FROM user WHERE username = :username");
    $poizvedba1->bindValue(':username', $data["username"]);
    $poizvedba1->execute();
    $rezultat1 = $poizvedba1->fetch(\PDO::FETCH_OBJ);
    unset($rezultat1->password);
    unset($rezultat1->email);
    //print_r($rezultat1);

    $poizvedba1 = $povezava->prepare("SELECT * FROM tweet WHERE fk_id_user = :fk_id_user");
    $poizvedba1->bindValue(':fk_id_user', $rezultat1->id_user);
    $poizvedba1->execute();
    $rezultat2 = $poizvedba1->fetchAll(\PDO::FETCH_OBJ);
    //print_r($rezultat2);
    //pridobi št followerjev in followings

    // number of followers
    $poizvedba3 = $povezava->prepare("SELECT * FROM user_follows_user WHERE fk_id_follower = :id1");
    $poizvedba3->bindValue(':id1', $rezultat1->id_user);
    $poizvedba3->execute();
    $rezultat3 = $poizvedba3->fetchAll(\PDO::FETCH_OBJ);
    //echo count($rezultat3);

    // number of followings
    $poizvedba4 = $povezava->prepare("SELECT * FROM user_follows_user WHERE fk_id_following = :id2");
    $poizvedba4->bindValue(':id2', $rezultat1->id_user);
    $poizvedba4->execute();
    $rezultat4 = $poizvedba4->fetchAll(\PDO::FETCH_OBJ);
    //echo count($rezultat4);

    //echo "-----";

    echo json_encode(array(
        'user' => $rezultat1,
        'tweets' => $rezultat2,
        'followers' => count($rezultat3),
        'followings' => count($rezultat4)
    ));
} catch (PDOException) {
    header("HTTP/1.1 401 Unauthorized");
}
