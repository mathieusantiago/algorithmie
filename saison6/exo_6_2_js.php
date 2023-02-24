<?php
// ALGORITHME Exo_5_9.
$sMessage = "";
if (isset($_POST['submit'])) {
    //Variable iTableau[]
    $iTableau = [];
    //iTableau[x] = 'x'
    $iTableau[0] = 'a';
    $iTableau[1] = 'e';
    $iTableau[2] = 'i';
    $iTableau[3] = 'o';
    $iTableau[4] = 'u';
    $iTableau[5] = 'y';
    //Ecrire 'mon tableau et :'
    $sMessage = 'mon tableau et: <br>' . $iTableau[0] . '<br>' . $iTableau[1] . '<br>' . $iTableau[2] . '<br>' . $iTableau[3] . '<br>' . $iTableau[4] . '<br>' . $iTableau[5] . '<br>';
}
require 'exo_6_2_js.html';
