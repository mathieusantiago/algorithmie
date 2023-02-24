<?php
// ALGORITHME Exo_6_11.
$sMessage = "";
if (isset($_POST['iValRand'])) {
  $aTableau = Array();
  $iNbValPHP;
  $iCompteur = 0;
  $iCompteur2 = 0;
  $iVal = 0;
  $iCompteur3;
  $iresult;
  
  $iNbValPHP = $_POST['iValRand'];
  $aTableau[0] = "";
  for ($iCompteur = 0; $iCompteur <= $iNbValPHP - 1; $iCompteur++) {
      $iVal = $_POST['iVal'.($iCompteur)];
      $iCompteur2 = $iCompteur + 1;
      while (($iVal < $aTableau[($iCompteur2 - 1)]) AND ($iCompteur2 > 0)) {
          $aTableau[$iCompteur2] = $aTableau[($iCompteur2 - 1)];
          $iCompteur2--;
      }
      $aTableau[$iCompteur2] = $iVal;
  }
  foreach ($aTableau as $iCompteur2) {
      $sMessage .= $iCompteur2 ." ";
  }
  for ($iCompteur3 = 0; $iCompteur3 <= $iNbValPHP - 2; $iCompteur3++) {
      if ((($aTableau[$iCompteur3 + 2] - $aTableau[$iCompteur3 + 1]) == 1)) {
          $iResult = "Les chiffres sont consécutifs" . "<br>";
      } else if (($aTableau[$iCompteur3 + 2] - $aTableau[$iCompteur3 + 1]) > 1) {
          $iResult = "Les chiffres ne sont pas consécutifs" . "<br>";
      }
  }
  $sMessage .= $iResult;
  
                              
}
require 'exo_7_1_js.html';