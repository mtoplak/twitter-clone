<?php
include "./db-connection.php";

// PRIPRAVA POIZVEDBE
$poizvedba = $povezava->prepare('SELECT id_tweet, username, name, lastname, content, time_posted FROM tweet INNER JOIN user ON fk_id_user = id_user ORDER BY id_tweet DESC');


// IZVEDBA POIZVEDBE
$poizvedba->execute();


// PRIDOBIVANJE REZULTATOV
$rezultat = $poizvedba->fetchAll(\PDO::FETCH_ASSOC);


// PRETVORBA ARRAY-A V JSON
$json = json_encode($rezultat);


//IZPIS POIZVEDBE V JSON
echo $json;

