<?php
// ALGORITHME Exo_6_11.
$sMessage = "";
if (isset($_POST['submit'])) {
    //VARIABLE TableauA = Array(5);
    $tTableau = array(5);
    //VARIABLE a,b In Integer;
    $a;
    $b;
    $sHtml = "";
    //Debut
    //Pour a de 0 à 5 a++
    for ($a = 0; $a < 5; $a++) {
        //TableauA[a] = Array(12);
        $tTableau[$a] = array(12);
        //pour b de 0 à 12  b++
        for ($b = 0; $b < 13; $b++) {
            //TableauA[a][b] = 0;
            $tTableau[$a][$b] = 0;
        } //FinPour
    } //FinPour
    for ($i = 0; $i < count($tTableau); $i++) {
        $tTableau[$i] = $tTableau[$i];
        $sHtml .= implode($tTableau[$i]) . "<br> ";
    }
    $sMessage = $sHtml;
    var_dump($tTableau);
}
require 'exo_8_1_js.html';
