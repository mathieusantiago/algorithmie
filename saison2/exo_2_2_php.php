<?php
// si la formulaire a êtes posté tu execute  
if (isset($_POST['ExecutPhp'])) {
    if (isset($_POST['Input'])) {
        //je declar mes variable
        $iInput = $_POST['Input'];
        $iCalc = $iInput * $iInput;
        //je crée mes variable qui crée mon html 
        $sStart = '<section class="color-code"><div class="color-result"><p>';
        $sEnd = '</p></div></section>';
        //je crée une variable qui contient le résultat 
        $sInsertHTML =  $sStart .  'Son carré est: '. $iCalc . $sEnd;
        //j'écrie mon resultat 
        echo $sInsertHTML;
    }
}