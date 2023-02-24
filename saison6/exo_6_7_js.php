<?php
// ALGORITHME Exo_5_9.
$sMessage = "";
if (isset($_POST['submit'])) {
    $iTableau = Array(9);
    $iN;
    $iCalc = 0;
    $iMoyenne;
    
    for($iI = 0; $iI < 9; $iI++){
        $iTableau[] = $_POST["iN".$iI];
        $iCalc = $iCalc + $_POST["iN".$iI];
        $sMessage .= "index " .$iI ." valeur : " .$_POST["iN".$iI] ."<br>";
    }
    $sMessage .= "Total : " .$iCalc ."<br>";
    $iMoyenne = $iCalc / (count($iTableau) - 1);
    $sMessage .= "Moyenne : " .round($iMoyenne, 2) ."<br>";                                
}
require 'exo_6_7_js.html';
