<?php

header("Access-Control-Allow-Origin: *");
include "connect.php";

$liste_invites = array();

$req = "SELECT NOM, PRENOM from APPLI_INVITE";
$stmt = $bdd->prepare($req);
$stmt->execute();

while($invite = $stmt->fetch(PDO::FETCH_OBJ))
{
    $liste_invites[] = $invite;
}

$errorInfo = $stmt->errorInfo();
if ($errorInfo[0] != 0)
{
    print_r($errorInfo);
}

echo json_encode($liste_invites);


?>