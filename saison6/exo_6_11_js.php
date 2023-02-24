<?php
// ALGORITHME Exo_5_9.
$sMessage = "";
if (isset($_POST['submit'])) {
    $aT1 = [4,8,7,12]; 
    $aT2 = [3,6]; 
    $aT3 = Array(); 
    $iLongueurT1 = count($aT1)-1; 
    $iLongueurT2 = count($aT2)-1;
    $i;
    $j; 
    $iSomme1 = 0;
    for ($i = 0; $i <= $iLongueurT2; $i++) {
        for ($j = 0; $j <= $iLongueurT1; $j++) {
            $aT3[$i] = $aT2[$i] * $aT1[$j];
            $iSomme1 = $iSomme1 + $aT3[$i];
        }
    }
    $sMessage = ($iSomme1);                              
}
require 'exo_6_11_js.html';
