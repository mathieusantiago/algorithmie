<?php
$sMessage = "";
// si la formulaire a êtes rempli 
if (isset($_POST['candidat1']) && isset($_POST['candidat2']) && isset($_POST['candidat3'])  && isset($_POST['candidat4'])) {
    // je declare mes variable   
    $iCandidat1 = $_POST['candidat1'];
    $iCandidat2 = $_POST['candidat2'];
    $iCandidat3 = $_POST['candidat3'];
    $iCandidat4 = $_POST['candidat4'];
    // je crée la structure html
    $sStart = '<section class="color-code"><div class="color-result"><p>';
    $sEnd = '</p></div></section>';
    // je crée la condition
    if ($iCandidat1 > 50) {
        // je ecrie le resultat 
        $sMessage = $sStart .  'le candidat n°1 a Gagné les éléctions' .$sEnd;
    }elseif ($iCandidat1 < 12.5) {
        // je ecrie le resultat 
        $sMessage = $sStart .  'le candidat n°1 a perdu les éléctions' .$sEnd;
    }elseif ($iCandidat1 > $iCandidat2 && $iCandidat1 > $iCandidat3 && $iCandidat1 > $iCandidat4) {
        // je ecrie le resultat 
        $sMessage = $sStart . 'le candidat n°1 est ballotage favorable' .$sEnd;
    }else{
        // je ecrie le resultat 
        $sMessage = $sStart . 'le candidat n°1 est ballotage défavorable' .$sEnd;
    } 
}



require 'exo_4_6_js.html';
