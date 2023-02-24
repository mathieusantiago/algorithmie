<?php
// si la formulaire a êtes posté tu execute  
if (isset($_POST['ExecutPhp'])){
    if (isset($_POST['InputHT'])){
        if (isset($_POST['InputNB'])){
            if (isset($_POST['InputTVA'])){
                //je declar mes variable
                $iInputHT = $_POST['InputHT'];
                $iInputNB = $_POST['InputNB'];
                $iInputTVA = $_POST['InputTVA'];

                $iCalc = $iInputNB * $iInputHT *(1 + $iInputTVA / 100);
                //je crée mes variable qui crée mon html 
                $sStart = '<section class="color-code"><div class="color-result"><p>';
                $sEnd = '</p></div></section>';
                //je crée une variable qui contient le résultat 
                $sInsertHTML =  $sStart .  'Le prix TTC et de: ' . $iCalc . $sEnd;
                //j'écrie mon resultat 
                echo $sInsertHTML;
            }
        }
    }
}
