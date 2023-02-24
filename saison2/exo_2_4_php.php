<?php
// si la formulaire a êtes posté tu execute  
if (isset($_POST['ExecutPhp'])){
    // je crée mes variable 
    $sString1 = " belle marquise ";
    $sString2 = " vos beaux yeux me ";
    $sString3 = " font mourir d’amour ";
    // je crée mes string  
    $sStringA = $sString1. $sString2. $sString3;
    $sStringB = $sString2. $sString1. $sString3;
    $sStringC = $sString3. $sString2. $sString1;
    $sStringD = $sString3. $sString1. $sString2;
    // je crée ma structure html 
    $sStart = '<section class="color-code"><div class="color-result"><p>';
    $sEnd = '</p></div></section>';
    echo($sStart. "<br>" . $sStringA . "<br>" . $sStringB . "<br>" . $sStringC . "<br>" . $sStringD . "<br>" . $sEnd);
   
}
