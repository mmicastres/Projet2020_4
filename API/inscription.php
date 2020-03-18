<?php
/* --- INSERTION DES NOUVEAUX INVITÉS EN BASE DE DONNÉES (faire les tests avec Advanced Rest Client) --- */

include "connect.php";

// On récupère le corps de fetchOptions contenant nos invités, puis on le génère dans un tableau JSON
$invite = json_decode(file_get_contents('php://input'), true);
//print_r($invite);

$stmt = $bdd->prepare("SELECT MAX(id_organisateur) AS MAXIMUM FROM APPLI_ORGANISATEUR");
$stmt->execute();
$newId = $stmt->fetchColumn()+1;

$req = "INSERT INTO APPLI_ORGANISATEUR(nom, prenom, adresse_mail, numero_de_telephone, mdp, id_organisateur) values(?, ?, ?, ?, ?, ?)";
$stmt = $bdd->prepare($req);
$stmt->execute(array($invite['nom'], $invite['prenom'], $invite['mail'], $invite['numero de telephone'],$invite['mot de passe'], $newId));

echo "Invité ajouté !";

?>
