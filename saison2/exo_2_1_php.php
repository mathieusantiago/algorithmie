<?php
// si la formulaire a êtes posté tu execute  
if (isset($_POST['ExecutPhp'])) {
    //je declar mes variable
        $iVal = 231;
        $iDouble = $iVal * 2;
    //je crée mes variable qui crée mon html 
        $sStart = '<section class="color-code"><div class="color-result"><p>';
        $sEnd ='</p></div></section>';
    //je crée une variable qui contient le résultat 
        $sInsertHTML =  $sStart .  'La valeur de Val et: '. $iVal . '<br> La valeur de Double et: ' . $iDouble . $sEnd;
    //j'écrie mon resultat 
        echo $sInsertHTML;    
}
?>
