<?php
/* --- INSERTION DES NOUVEAUX INVITÉS EN BASE DE DONNÉES (faire les tests avec Advanced Rest Client) --- */

header("Access-Control-Allow-Origin: *");
include "connect.php";

// On récupère le corps de fetchOptions contenant nos invités, puis on le génère dans un tableau JSON
$budget = json_decode(file_get_contents('php://input'), true);
//print_r($invite);

$stmt = $bdd->prepare("SELECT MAX(id_budget) AS MAXIMUM FROM APPLI_BUDGET");
$stmt->execute();
$newId = $stmt->fetchColumn()+1;

$req = "INSERT INTO APPLI_BUDGET(id_evenement, montant, id_budget) values(1, ?, ?)";
$stmt = $bdd->prepare($req);
$stmt->execute(array($budget['montant'], $newId));

echo '{ "Budget modifié" : "' . $budget['montant'] . '"}';

?>