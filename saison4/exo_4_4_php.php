<?php
$sMessage = "";

    // si la formulaire a êtes rempli 
    if (isset($_POST['Nb'])) {
        // je declare mes variable   
        $iNb = intval($_POST['Nb']);
        // je crée la structure html
        $sStart = '<section class="color-code"><div class="color-result"><p>';
        $sEnd = '</p></div></section>';
        // je crée la condition
        if ($iNb <= 10) {
            $iCalc = $iNb * 0.10;
          }
          if ($iNb <= 20 && $iNb > 10) {
            $iCalc = $iNb * 0.09;
          }
          if ($iNb >= 20) {
            $iCalc = $iNb * 0.08;
          }
        // je ecrie le resultat 
        $sMessage = $sStart . 'Votre facture sera de ' . $iCalc  . '€ pour ' . $iNb . ' photocopie ' .$sEnd;
    }

require 'exo_4_4_js.html';
