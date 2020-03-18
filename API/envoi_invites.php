<?php
/* --- INSERTION DES NOUVEAUX INVITÉS EN BASE DE DONNÉES (faire les tests avec Advanced Rest Client) --- */

header("Access-Control-Allow-Origin: *");
include "connect.php";

// On récupère le corps de fetchOptions contenant nos invités, puis on le génère dans un tableau JSON
$invite = json_decode(file_get_contents('php://input'), true);
//print_r($invite);

$stmt = $bdd->prepare("SELECT MAX(id_invite) AS MAXIMUM FROM APPLI_INVITE");
$stmt->execute();
$newId = $stmt->fetchColumn()+1;

$req = "INSERT INTO APPLI_INVITE(nom, prenom, adresse_mail, numero_de_telephone, id_invite) values(?, ?, ?, ?, ?)";
$stmt = $bdd->prepare($req);
$stmt->execute(array($invite['nom'], $invite['prenom'], $invite['mail'], $invite['numero de telephone'], $newId));

echo '{ "Invité ajouté" : "' . $invite['prenom'] . '"}';

?>