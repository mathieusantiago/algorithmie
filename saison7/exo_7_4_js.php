<?php
// ALGORITHME Exo_6_11.
$sMessage = "";
if (isset($_POST['iVal'])) {
    $aTableau = ['JavaScript', 'Php', 'JQuery', 'Ajax'];
    $aTableau2 = [];
    $iChoix;
    $iIndex;
    
    $iChoix = $_POST['iVal'];
    for ($iIndex = 0; $iIndex < $iChoix; $iIndex++) {
        $aTableau2[$iIndex] = $aTableau[$iIndex];
    }
    $iIndex++;
    while ($iIndex < count($aTableau)) {
        $aTableau2[$iIndex - 1] = $aTableau[$iIndex];
        $iIndex++;
    }
    $sMessage = "Votre nouveau tableau" . implode($aTableau2) . "<br>";
}
require 'exo_7_4_js.html';