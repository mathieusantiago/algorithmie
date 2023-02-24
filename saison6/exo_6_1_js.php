<?php
// ALGORITHME Exo_5_9.
$sMessage = "";

$iTableau = [];

if (isset($_POST['iIndex'])) {
 

    for ($iIndex = 0; $iIndex <= 7; $iIndex++) {
        $iTableau[$iIndex] = 0;
        $sMessage .= "Ajout de " .$iTableau[$iIndex] ." à l'index " .$iIndex ."<br>";
    }

} 
require 'exo_6_1_js.html';








?>