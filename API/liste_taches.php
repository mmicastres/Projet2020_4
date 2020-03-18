<?php

header("Access-Control-Allow-Origin: *");
include "connect.php";

$liste_taches = array();

$req = "SELECT nom, description, date_butoir, id_tache from APPLI_TACHE";
$stmt = $bdd->prepare($req);
$stmt->execute();

while($tache = $stmt->fetch(PDO::FETCH_OBJ))
{
    $liste_taches[] = $tache;
}

$errorInfo = $stmt->errorInfo();
if ($errorInfo[0] != 0)
{
    print_r($errorInfo);
}

echo json_encode($liste_taches);


?>