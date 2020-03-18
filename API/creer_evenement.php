<?php
/* --- CRÉATION DE L'ÉVENEMENT EN BASE DE DONNÉES --- */

header("Access-Control-Allow-Origin: *");
include "connect.php";

// On récupère le corps de fetchOptions contenant nos invités, puis on le génère dans un tableau JSON
$evenement = json_decode(file_get_contents('php://input'), true);
//print_r($evenement);

$stmt = $bdd->prepare("SELECT MAX(id_evenement) AS MAXIMUM FROM APPLI_EVENEMENT");
$stmt->execute();
$newId = $stmt->fetchColumn()+1;

$req = "INSERT INTO APPLI_EVENEMENT(ID_ORGANISATEUR, NOM_EVENEMENT, DEBUT, FIN, LIEU, TYPE, ID_EVENEMENT) values(1, ?, ?, ?, ?, ?, ?)";
$stmt = $bdd->prepare($req);
$stmt->execute(array($evenement['nom'], $evenement['debut'] /*. ':00'*/, $evenement['fin'] /*. ':00'*/, $evenement['lieu'], $evenement['type'], $newId));

echo '{ "Évènement créé" : "' . $evenement['nom'] . '"}';

?>