<?php
// ALGORITHME Exo_5_9.
//variable isPHP, iPrix1, iPrix2, iPrix3, iPrixTotal, iPaiement, iRendu, iBillet10, iBillet5, iPiece1, sMessageTotal sMessagePaiement $sMessagePaiemesMessageARendr sMessageBillet sMessageBillet sMessagePiece1  ;
$iPrix1;
$iPrix2;
$iPrix3;
$iPrixTotal;
$iPaiement;
$iRendu;
$iBillet10 = 0;
$iBillet5 = 0;
$iPiece1 = 0;
$sMessageTotal = "";
$sMessagePaiement = "";
$sMessageARendre = "";
$sMessageBillet10 = "";
$sMessageBillet5 = "";
$sMessagePiece1 = "";

//Si le formulaire et envoyer 
if (isset($_POST['iPrix1'])) {
    //Ecrire "Entrez un PRIX"
    //Lire iPrix
    $iPrix1 = $_POST['iPrix1'];
    $iPrix2 = $_POST['iPrix2'];
    $iPrix3 = $_POST['iPrix3'];
    $iPaiement = $_POST['iPaiement'];
    $iPrixTotal = $iPrix1 + $iPrix2 + $iPrix3;
    $iRendu = $iPaiement - $iPrixTotal;
    $iARendre = $iRendu;

    while ($iRendu != 0) {
        if ($iRendu >= 10) {
            $iRendu = $iRendu -10;
            $iBillet10 = $iBillet10 + 1;
        }  
        else if ($iRendu >= 5) {
            $iRendu = $iRendu - 5;
            $iBillet5 = $iBillet5 + 1;
            
        }
        else {
            $iRendu = $iRendu - 1;
            $iPiece1 = $iPiece1 + 1;
        }
    }

    $sMessageTotal = "Prix Total à payer : " .$iPrixTotal ." €" ."<br>";
    $sMessagePaiement = "Paiement client : " .$iPaiement ." €" ."<br>";
    $sMessageARendre = "Total à rendre : " .$iARendre ." €" ."<br>";
    $sMessageBillet10 = "Nombre de billets de 10€ : " .$iBillet10 ."<br>";
    $sMessageBillet5 = "Nombre de billets de 5€ : " .$iBillet5 ."<br>";
    $sMessagePiece1 = "Nombre de pièces de 1€ : " .$iPiece1 ."<br>";



} else {
    $sMessage = 'Pas de variable envoyée';
}

require 'exo_5_10_js.html';


?>