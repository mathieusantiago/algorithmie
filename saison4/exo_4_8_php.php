<?php
$sMessage = "";
// si la formulaire a êtes posté 
if (isset($_POST['ExecutPhp'])) {
    // si la formulaire a êtes rempli 
    if (isset($_POST['jour']) && isset($_POST['mois']) && isset($_POST['annee'])) {
        $dJour = $_POST['jour'];
        $dMois = $_POST['mois'];
        $dAnnee = $_POST['annee'];
            //je declar mes conditions
                if ($dMois < 1 || $dMois > 31) {
                    $sMessage = "La date saisie est invalide";
                }else if ($dMois == 2) {
                    if ($dAnnee % 4 === 0 && $dAnnee % 100 > 0 || $dAnnee % 400 === 0) {
                        if ( $dJour >= 1 || $dJour <= 29) {
                            $sMessage = "La date saisie est valide";
                        }else{
                            $sMessage = "La date saisie est invalide";
                        }
                    }else{
                        if ($dJour >= 1 && $dJour <= 28) {
                            $sMessage = "La date saisie est valide";
                        }else{
                            $sMessage = "La date saisie est invalide";
                        }
                    }
                }else if ($dMois == 4 || $dMois == 6 || $dMois == 9 || $dMois == 11) {
                    if ($dJour >= 1 && $dJour <= 30) {
                        $sMessage = "La date saisie est valide";
                    }else{
                        $sMessage = "La date saisie est invalide";
                    }
                }else{
                    if ($dJour >= 1 || $dJour <= 31) {
                        $sMessage = "La date saisie est valide";
                    }else{
                        $sMessage = "La date saisie est invalide";
                    }
                }
    }
}
require 'exo_4_8_js.html';

