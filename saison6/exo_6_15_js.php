<?php
// ALGORITHME Exo_6_11.
$sMessage = "";
if (isset($_POST['iAnnees'])) {
   
    $iTabl = [];
    $iSomme = 1000;
    $iAnnees = 0;

    for ($i = 1; $i < 20; $i++) {
        
        $iSomme += (2.75 * $iSomme / 100);
    
        $iTabl[$i] = $iSomme;
        
    }
    
    $iAnnees = $_POST['iAnnees'];
    $sMessage = 'Dans ' . $iAnnees . ' vous aurez  ' . round($iTabl[$iAnnees], 2) . '€';                  
}
require 'exo_6_15_js.html';


