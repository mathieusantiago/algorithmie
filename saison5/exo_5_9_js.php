<?php
// ALGORITHME Exo_5_9.
//variable sMessage, iNombre, iNombrePlusGrand, iTableau, iIndex ;
$sMessage = "";
$iNombre = 0;
$iNombrePlusGrand = 0;
$iTableau = 0;
$iIndex = 0;
//Si le formulaire et envoyer 
if (isset($_POST['Nb'])) {
    //Ecrire "Entrez un nombre"
    //Lire Inb
    $iNombre = $_POST['Nb'];
    //Ecrire "création du tableau de données"
    $iTableau = explode(" ", $iNombre);
    $iNombrePlusGrand = max($iTableau);
    $iIndex = array_search($iNombrePlusGrand, $iTableau);
    //Ecrire "Le plus grand de ces nombres est : " iNombrePlusGrand 
    $sMessage .= "Le plus grand de ces nombres est : " .$iNombrePlusGrand ."<br>";
    //Ecrire "C'était le nombre numéro " iIndex+1 
    $sMessage .= "C'était le nombre numéro " .($iIndex+1);
} else {
    //Ecrire "Pas de variable envoyée" 
    $sMessage = 'Pas de variable envoyée';
    
}
require 'exo_5_9_js.html';
?>