<?php
/* --- AJOUT D'UNE NOUVELLE TÂCHE EN BASE DE DONNÉES --- */

header("Access-Control-Allow-Origin: *");
include "connect.php";

// On récupère le corps de fetchOptions contenant nos invités, puis on le génère dans un tableau JSON
$tache = json_decode(file_get_contents('php://input'), true);
//print_r($invite);

$stmt = $bdd->prepare("SELECT MAX(id_tache) AS MAXIMUM FROM APPLI_TACHE");
$stmt->execute();
$newId = $stmt->fetchColumn()+1;

$req = "INSERT INTO APPLI_TACHE(id_evenement, nom, description, date_butoir, id_tache) values(1, ?, ?, ?, ?)";
$stmt = $bdd->prepare($req);
$stmt->execute(array($tache['nom'], $tache['description'], $tache['date_butoir'], $newId));

echo '{ "Tâche ajoutée" : "' . $tache['nom'] . '"}';

?>