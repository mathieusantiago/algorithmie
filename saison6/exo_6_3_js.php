<?php
// ALGORITHME Exo_5_9.
$sMessage = "";
if (isset($_POST['submit'])) {
    $iTableau= Array(9); 
    $iI; 
    //Tableau[]
    $iTableau = [];
    // Pour iI pas de 9 
    for ($iI = 0; $iI < 9; $iI++) {
    //     iTableau[Ii]
        $iTableau[$iI] = ($_POST["iN".$iI]);
        // ecrire 'les notes son :' iTableau[iT]
        $sMessage = $sMessage . "Les notes sont :" . $_POST["iN".$iI] . ' et l\'index ' . $iI .'<br>';
    // FinPour
    }
}
require 'exo_6_3_js.html';
