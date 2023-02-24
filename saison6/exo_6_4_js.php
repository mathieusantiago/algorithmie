<?php
// ALGORITHME Exo_5_9.
$sMessage = "";
if (isset($_POST['submit'])) {
    $iI;
    $iTablNb = [5];
    for ($iI = 0; $iI < 5; $iI++) {
        $iTablNb[$iI] = $iI * $iI;
        $sMessage = $sMessage . ' ' . $iTablNb[$iI] . "<br>";
    }
}
require 'exo_6_4_js.html';
