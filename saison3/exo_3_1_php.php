<?php
$sMessage = "";
// si la formulaire a êtes rempli 
if (isset($_POST['InputNB'])) {
    // je declare mes variable   
    $iNB = $_POST['InputNB'];
    // je crée la structure html
    $sStart = '<section class="color-code"><div class="color-result"><p>';
    $sEnd = '</p></div></section>';
    //je crée une variable qui contient le résultat avec la structur html 
    $sPositif =  $iNB .' Est un nombre positif'. $sEnd;
    $sNegatif =  $iNB .' Est un nombre negatif'. $sEnd;
    //j'écrie mon resultat 
    if ($iNB > 0) {
        $sMessage = $sPositif;
    }else{
        $sMessage = $sNegatif;
    }
}

require 'exo_3_1_js.html';

?>
