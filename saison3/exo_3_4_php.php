<?php
// si la formulaire a êtes posté 
if (isset($_POST['ExecutPhp'])) {
    // si la formulaire a êtes rempli 
    if (isset($_POST['InputNB'])) {
        // je declare mes variable   
        $iNB = $_POST['InputNB'];
        // je crée la structure html
        $sStart = '<section class="color-code"><div class="color-result"><p>';
        $sEnd = '</p></div></section>';
        //je crée une variable qui contient le résultat avec la structur html 
        $sPositif =  $iNB . ' Est un nombre positif' . $sEnd;
        $sNegatif =  $iNB . ' Est un nombre negatif' . $sEnd;
        $sNull =  $iNB . ' Est un nombre null' . $sEnd;
        //je crée ma condition
        if ($iNB < 0) {
            echo $sNegatif;
        } else if ($iNB == 0) {
            echo $sNull;
        } else {
            echo $sPositif;
        }
    }
}
?>