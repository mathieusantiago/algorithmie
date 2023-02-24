<?php
// ALGORITHME Exo_6_11.
$sMessage = "";
if (isset($_POST['submit'])) {
    $aTableau = [15,34,58,42,20];
    $iNbValPHP;
    $iIndex = 0;
    $iLong;
    $iLong2;
    $iVarTemp;
    $iVal;
    $iVal2;
    $iResult = "";
    $iResult2 = "";
    
    foreach ($aTableau as $iVal) {
        $iResult .= $iVal ." ";
    }
    $sMessage .= "Tableau non trié : " .$iResult ."<br>";
    
    for ($iLong2 = 0; $iLong2 <= 3; $iLong2++) {
        for ($iLong = 0; $iLong <= 3; $iLong++) {
            if ($aTableau[$iIndex] > $aTableau[$iIndex + 1]) {
                $iIndex++;
            }  
            else {
                    $iVarTemp = $aTableau[$iIndex];
                    $aTableau[$iIndex] = $aTableau[$iIndex + 1];
                    $aTableau[$iIndex + 1] = $iVarTemp;
                    $iIndex = 0;
            }
        }
    }
    foreach ($aTableau as $iVal2) {
        $iResult2 .= $iVal2 ." ";
    }
    $sMessage .= "Tableau trié : " .$iResult2;       
}
require 'exo_7_2_js.html';