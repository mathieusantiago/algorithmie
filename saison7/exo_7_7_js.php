<?php
// ALGORITHME Exo_6_11.
$sMessage = "";
if (isset($_POST['submit'])) {
    //var tableau1 <- [xxxxxx] 
    $tA = ['1', '3', '5', '7'];
    //var tableau2 <- [xxxxxx] 
    $tB = ['2', '4', '6', '8', '9','10'];
    //var tableau3 <- [] 
    $tC = [];
    //var bloolean 1 <- faut
    $bFinA = false;
    //var bloolean 2 <- faut
    $bFinB = false;
    //var iCompteur 1 <- 0
    $iComptA = 0;
    //var iCompteur 2 <- 0
    $iComptB = 0;
    //var iCompteur 3 <- 0
    $iCompt = -1;
    //var iNbA <- Longueur Tableau1
    $iNbA = count($tA);
    //var iNbA <- Longueur Tableau2
    $iNbB = count($tB);
    //var iNbGlob <- Longeur des deux tableau
    $iNbGlob = intval($iNbA + $iNbB);
    //DEBUT
    //Tanque iCompteur 3 < Longeur des deux tableau
    while ($iCompt < $iNbGlob -1) {
        //iCompteur3 + 1
        $iCompt++;
 
        //Si tableau1[iCompteur1] < tableau2[iCompteur2] 
        if (($tA[$iComptA]< $tB[$iComptB]) && (!$bFinA)) {
            //tableau3[compteur1] <- tableau1[compteur1]
            $tC[$iCompt] = $tA[$iComptA];
            //iCompteur + 1
            $iComptA++;
            //Si Compteur1 > Longueur Tableau1
            if ($iComptA == $iNbA) {
                //boolean1 <- vrai
                $bFinA = true;
                $iComptA = $iNbA- 1;
                //SiNon
            } else {
                //bloolean1 <- faut
                $bFinA = false;
            } //FinSi
            //SiNonSi
        } else if ((!$bFinB)|| ($bFinA)){
            //tableau3[iCompteur3] <- tableau2[icompteur2]
            $tC[$iCompt] = $tB[$iComptB];
            //iCompteur2 <- +1
            $iComptB++;
            //Si iCompteur2 > Longueur Tableau2
            if ($iComptB == $iNbB) {
                //bloolean2 <- vrai
                $bFinB = true;
                $iComptB = $iNbB -1;
            } else {
                //bloolean2 <- faux
                $bFinB = false;
            } //FinSi
        } //FinSi

    } //FinTanQue
    $sMessage = 'Mon Tableau 1 est: ' . implode($tA) . "<br>" . 'Mon Tableau 2 est: ' . implode($tB) . '<br>' . 'Mes Tableaux triés sont: ' . implode($tC);
}
require 'exo_7_7_js.html';
