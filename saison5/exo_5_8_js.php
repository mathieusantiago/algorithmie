<?php
$sMessage = "";
//Si le formulaire et envoyer 
if (isset($_POST['Nb'])) {
    //variable iNb, iNbPlus =0, iI, iCompteurPlus = 0;
    $iNbPlus= 0;
    $iComptPlus = 0;
    //Pour iI =1, iI<21; iI++
    for ($iI = 1; $iI < 21; $iI++)
    {   //Ecrire "Entrez un nombre"
        //Lire Inb
        $iNb = intval($_POST['Nb']);
        //Si Ii == 1 || iNb > iNbOlus
        if (($iI == 1) || ($iNb > $iNbPlus)) {
            //InbPlus = iNb
            $iNbPlus= $iNb;
            // iCompteur ) iI
            $iComptPlus = $iI;
        }
    }
    //Ecrire '"Le plus grand de ces nombres est : " +iNbPlus+"<br>"'+" C'était le nombre numéro " +iComptPlus;
    $sMessage = "Le plus grand de ces nombres est : " . $iNbPlus. "<br>" . " C'était le nombre numéro " . $iComptPlus;
}
require 'exo_5_8_js.html';
?>