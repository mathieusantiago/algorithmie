<?php

$sMessage = "";



if (isset($_POST['Nb'])) {
    //VARIABLE iNb en NUMERIQUE
//VARIABLE i, iNb, iCalc NUMERIQUE 
//VARIABLE sExecut, sGlobal ALPHANUMÉRIQUE
$i = 0;
$iNb=  intval($_POST['Nb']);
$z = "";
// DEBUT
// Ecrire 'entre un nombre nous vous donneron les 10 suiviant' 
// Lire Inb
// i = 0
// z = ""
// iCalc = iNb + 12
// TanQue i < iCalc 
//     i++
//     iNb++
//     z+=iNb + ""
while($i<11){
    $i++;
    $iNb++;
    $z = $z . $iNb . ' ';
  }
  // FinTanQue
// Ecrire 'voici les 10 nombre suivant' z  
$sMessage = $z;         
// FIN
}


 
require 'exo_5_3_js.html';
?>