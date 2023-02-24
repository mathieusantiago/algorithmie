<?php
// ALGORITHME Exo_5_9.
$sMessage = "";
if (isset($_POST['submit'])) {
   $N = Array(6);
    $i = -1; 
    $k;
    for ($k = 0; $k <= 6; $k++) {
        $i = $i + 2;
        $N[$k] = $i;
        $sMessage = $sMessage . $N[$k];
    }
}



require 'exo_6_5_js.html';
