<?php
// si la formulaire a êtes posté 
if (isset($_POST['ExecutPhp'])) {
    // si la formulaire a êtes rempli 
    if (isset($_POST['age'])) {
        // je declare mes variable   
        $iAge = $_POST['age'];
        // je crée la structure html
        $sStart = '<section class="color-code"><div class="color-result"><p>';
        $sEnd = '</p></div></section>';
        //je crée une variable qui contient la structur html 
        $sPoussin = $sStart . 'l\'enfant est de catégorie Poussin' . $sEnd;
        $sPupille = $sStart . 'l\'enfant est de catégorie Pupille' . $sEnd;
        $sMinime = $sStart . 'l\'enfant est de catégorie Minime' . $sEnd;
        $sCadet = $sStart . 'l\'enfant est de catégorie Cadet' . $sEnd;
        //j'écrie mon resultat 
        if ($iAge <= 6) {
            echo $sPoussin;
        } else if ($iAge <= 8) {
            echo $sPupille;
        } else if ($iAge <= 10) {
            echo $sMinime;
        } else if ($iAge <= 12) {
            echo $sCadet;
        }
    }
}
?>