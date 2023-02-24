<?php
// si la formulaire a êtes posté 
if (isset($_POST['ExecutPhp'])) {
    // si la formulaire a êtes rempli 
    if (isset($_POST['InputNB1'])) {
        if (isset($_POST['InputNB2'])) {
            // je declare mes variable   
            $iNB1 = $_POST['InputNB1'];
            $iNB2 = $_POST['InputNB2'];
            // je crée la structure html
            $sStart = '<section class="color-code"><div class="color-result"><p>';
            $sEnd = '</p></div></section>';
            //je crée une variable qui contient la structur html 
            $sPositif =   $sStart . ' Leur produit est positif' . $sEnd;
            $sNegatif =   $sStart . ' Leur produit est negatif' . $sEnd;
            $sNull =   $sStart . ' Leur produit est null' . $sEnd;
            //j'écrie mon resultat 
            if ($iNB1 == 0 || $iNB2 == 0) {
                echo $sNull;
            } else if (($iNB1 < 0 && $iNB2 < 0) || ($iNB1 > 0 && $iNB2 > 0)) {
                echo $sPositif;
            } else {
                echo $sNegatif;
            }
        }
    }
}
?>