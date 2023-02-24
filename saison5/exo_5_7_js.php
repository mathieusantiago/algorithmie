<?php
$sMessage = "";
//Si le formulaire et envoyer 
if (isset($_POST['Nb'])) {
//VARIABLE iRes, iNb, iI en Numérique
//DEBUT 
    //iRes = 1
    $iRes = 1;
    //Ecrire 'Entrez un nombre'
    //lire iNb
    $iNb = $_POST['Nb'];
    //Pour iI = 1,iI <= nb, iT++
    for ($iI = 1; $iI <= $iNb; $iI++) {
        //iRes = iRes * iT
        $iRes = $iRes * $iI;
        //FinPour
    }
    //Ecrire iRes
    $sMessage = $iRes;
}
require 'exo_5_7_js.html';
?>