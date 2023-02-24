<?php
// ALGORITHME Exo_6_11.
$sMessage = "";
if (isset($_POST['iVal'])) {
    require 'mon_petit_dico.php';
    $sRecherche = 0;
    $iValMax = 0;
    $iValMin = 0;
    $iCompare = 0;
    $iDifference = 0;
    $iCompteur = 0;

    $iValMax = count($aOfWords) - 1;
    $sRecherche = $_POST['iVal'];
    for ($iCompteur = 0; $iCompteur < 20; $iCompteur++) {
        $iDifference = $iValMax - $iValMin;
        $iCompare = $iValMin + ($iDifference / 2);
        if ($sRecherche > $aOfWords[$iCompare]) {
            $iValMin = $iCompare;
        } else if ($sRecherche < $aOfWords[$iCompare]) {
            $iValMax = $iValMax - ($iDifference / 2);
        }
    }
    if ($sRecherche == $aOfWords[$iCompare]) {
        $sMessage = "Le mot " . $sRecherche . " est dans le dictionnaire" . " à l'index " . array_search($sRecherche, $aOfWords) . "<br>";
    } else {
        $sMessage = "Le mot " . $sRecherche . " n'est pas dans le dictionnaire" . "<br>";
    }
}
require 'exo_7_5_js.html';
