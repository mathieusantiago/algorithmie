<?php
$sMessage = "";

// si la formulaire a êtes posté 
if (isset($_POST['heurs'])) {
    // si la formulaire a êtes rempli 
    if (isset($_POST['heurs']) && isset($_POST['min'])) {
        // je declare mes variable   
        $iHeurs = intval($_POST['heurs']);
        $iMin = intval($_POST['min']);
        $iSec = intval($_POST['sec']);
        $iSec = intval($iSec + 1);
        //j'écrie ma condition
        if ($iSec === 60) {
            $iSec = 0;
            $iMin = $iMin + 1;
        }
        if ($iMin === 60) {
            $iMin = 0;
            $iHeurs = $iHeurs + 1;
        }
        if ($iHeurs === 24) {
            $iHeurs = 0;
        }
        // je crée la structure html
        $sStart = '<section class="color-code"><div class="color-result"><p>';
        $sEnd = '</p></div></section>';
        // je ecrie le resultat 
        $sMessage = $sStart .' Dans un minute il sera <br>' . $iHeurs . ' Heurs ' . $iMin . ' Minutes ' . $iSec . ' Seconde' . $sEnd;
    }
}
require 'exo_4_3_js.html';
