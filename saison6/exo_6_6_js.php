<?php
// ALGORITHME Exo_5_9.
$sMessage = "";
if (isset($_POST['submit'])) {
    $iTabSuite = [1, 1];
    $sHtml ='';
    for ($i = 2; $i < 7; $i++) {
        $iTabSuite[] = + ($iTabSuite[$i - 1] + $iTabSuite[$i - 2]);
    }
    for ($i = 0; $i < 7; $i++) {
         $sHtml = $sHtml . "Les Nombres son :" .   $iTabSuite[$i] . '<br>';   
    }
    $sMessage = $sHtml;
}
require 'exo_6_6_js.html';
