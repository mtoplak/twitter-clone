<?php
include "./db-connection.php";

// PRIPRAVA POIZVEDBE
$poizvedba = $povezava->prepare('SELECT * FROM user');

// IZVEDBA POIZVEDBE
$poizvedba->execute();

// PRIDOBIVANJE REZULTATOV
$rezultat = $poizvedba->fetchAll(\PDO::FETCH_ASSOC);
echo '<br /><br />';

echo print_r($rezultat);
echo "<br/><br />";

$json = json_encode($rezultat);

//$rezultat = json_encode($rezultat);
echo $json;

// IZPIS REZULTATOV
echo "<ul>";
foreach (json_decode($json) as $vrstica) { // ZANKA, KI SE PONOVI ZA VSAKO VRSTICO IZ REZULTATA
    echo "<li>";
    echo $vrstica->id_user . ", " . $vrstica->username; // IZPIŠI VSEBINE TABELE: v tem primeru [ID presledek IME]
    echo "</li>";
}
echo "</ul>";
