<?php
include "connect.php";

// On récupère le corps de fetchOptions contenant nos invités, puis on le génère dans un tableau JSON
$invite = json_decode(file_get_contents('php://input'), true);

$stmt = $bdd->prepare("SELECT MAX(id_organisateur) AS MAXIMUM FROM APPLI_ORGANISATEUR");
$stmt->execute();

$req = "SELECT NOM, MDP,ID_ORGANISATEUR FROM APPLI_ORGANISATEUR WHERE NOM = :nom";
$stmt = $bdd->prepare($req);
$stmt->execute(array( 'nom' =>$invite['nom']));

$donnees = $stmt->fetch();


echo "lé bon !";

?>
