<?php
$sMessage = "";
//Si le formulaire et envoyer 
if (isset($_POST['Nb'])) {
    //VARIABLE iNb, iSomme, i, bClac
    //Ecrire 'Entrez un nombre'
    //lire iNb
    $iNb = $_POST['Nb'];
    //iSomme = 0
    $iSomme = 0 ;
    //Pour i = 1, i <= iNb, i++
    for($i = 1; $i <= $iNb; $i++){
        //bClac = +(i) + i
        $bCalc = +($i) + $i;
        //iSomme = iSomme + bClac / 2
        $iSomme = $iSomme + $bCalc / 2;
    }    
    //FinPour
    //Ecrire 'iSomme'
    $sMessage = 'la somme des entiers jusqu’à ce nombre et:' . $iSomme;
//Fin
}
require 'exo_5_6_js.html';
?>