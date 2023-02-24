<?php

$sMessage = "";


//Si le formulaire et envoyer 
if (isset($_POST['Nb'])) {
  //VARIABLE sStr en String;
  //VARIABLE iI, iNb, en INTEGER 
  //VARIABLE bCalc en BOOLEAN
  
    //DEBUT
  // Ecrire 'Entrez in nombre'
  // Lire iNb 
  $iNb = $_POST['Nb'];
    //sStr = ""
  $sStr = "";
    //iI;
  $iI;
  //bCalc = iNb + 12
  $bCalc = +$iNb + 11;
  //pour i = iNb  i < bCalc i++
  for ($iI = $iNb; $iI < $bCalc; $iI++) {
    //sStr = sStr + 1 + ' '
    $sStr = $sStr . $iI . ' ';
    //ecrire sStr
    $sMessage = $sStr . "<br>";
  }
}


 
require 'exo_5_4_js.html';
?>