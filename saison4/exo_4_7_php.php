<?php
$sMessage = "";

// si la formulaire a êtes posté 
if (isset($_POST['resultphp'])) {
    // si la formulaire a êtes rempli 
    if (isset($_POST['age']) && isset($_POST['permis']) && isset($_POST['sinistre'])  && isset($_POST['assurance'])) {
        // je declare mes variable   
        $iAge = $_POST['age'];
        $iPermis = $_POST['permis'];
        $iSinistre = $_POST['sinistre'];
        $iAssurance = $_POST['assurance'];
        // je crée la structure html
        $sStart = '<section class="color-code"><div class="color-result"><p>';
        $sEnd = '</p></div></section>';
        // je crée la condition
        if ($iAge <= 25 && $iPermis <= 2){
            if ($iSinistre == 1) {
                $sMessage = $sStart .  "Nous ne pouvons pas vous assurer au vu des informations saisies.".$sEnd;
            } else {
                $sMessage = $sStart .  "Au vu des informations saisies, nous vous accordons le tarif rouge.".$sEnd;
            }
        } else if ($iAge <= 25 && $iPermis >= 2) {
            if ($iSinistre === '1') {
                if ($iAssurance == '5') {
                    $sMessage = $sStart .  "Au vu des informations saisies, nous vous accordons le tarif orange.".$sEnd;
                } else {
                    $sMessage = $sStart .  "Au vu des informations saisies, nous vous accordons le tarif rouge.".$sEnd;
                }
            } else if ($iSinistre == '0') {
                $sMessage = $sStart .  "Au vu des informations saisies, nous vous accordons le tarif orange.".$sEnd;
            } else {
                $sMessage = $sStart .  "Nous ne pouvons pas vous assurer au vu des informations saisies.".$sEnd;
            }
        } else if ($iAge >= 25 && $iPermis <= 2) {
            if ($iSinistre == '1') {
                $sMessage = $sStart .  "Au vu des informations saisies, nous vous accordons le tarif rouge.".$sEnd;
            } else if ($iSinistre == '0') {
                $sMessage = $sStart .  "Au vu des informations saisies, nous vous accordons le tarif orange.".$sEnd;
            } else {
                $sMessage = $sStart .  "Nous ne pouvons pas vous assurer au vu des informations saisies.".$sEnd;
            }
        } else if ($iAge >= 25 && $iPermis >= 2) {
            if ($iSinistre == '2') {
                if ($iAssurance == '5') {
                    $sMessage = $sStart .  "Au vu des informations saisies, nous vous accordons le tarif orange.".$sEnd;
                } else {
                    $sMessage = $sStart .  "Au vu des informations saisies, nous vous accordons le tarif rouge.".$sEnd;
                }
            } else if ($iSinistre == '1') {
                if ($iAssurance == '5') {
                    $sMessage = $sStart .  "Au vu des informations saisies, nous vous accordons le tarif vert.".$sEnd;
                } else {
                    $sMessage = $sStart .  "Au vu des informations saisies, nous vous accordons le tarif orange.".$sEnd;
                }
            } else if ($iSinistre == '0') {
                if ($iAssurance == '5') {
                    $sMessage = $sStart .  "Au vu des informations saisies, nous vous accordons le tarif bleu.".$sEnd;
                } else {
                    $sMessage = $sStart .  "Au vu des informations saisies, nous vous accordons le tarif vert.".$sEnd;
                }
            } else {
                $sMessage = $sStart .  "Nous ne pouvons pas vous assurer au vu des informations saisies.".$sEnd;
            }
        }
    }
}
require 'exo_4_7_js.html';
