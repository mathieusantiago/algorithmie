<?php
$sMessage = "";
//Si le formulaire et envoyer 
if (isset($_POST['Nb'])) {
    //VARIABLE iNb, iI, sStr, bCalc
    
    //Ecrire "Entrez un nombre"
    //lire iNb
    $iNb = $_POST['Nb'];
    //sStr = " "
    $sStr = " ";
    //Pour iI = 1; iI < 11; iI++
    for ($iI = 1; $iI < 11; $iI++) {
        //bCalc = iNb * sStr
        $bCalc = $iNb * $iI;
        //sStr = sStr + iNb + 'X' + iI + '=' + bCalc + '<br>'
        $sStr = $sStr . $iNb . ' X ' . $iI . ' = ' . $bCalc . "<br>";
        //Ecrire iNb + "X" + "sStr" + "=" + bCalc
        $sMessage =  $sStr . "<br>";
      }
}
require 'exo_5_5_js.html';
?>