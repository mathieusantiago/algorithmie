<?php
$bRep = isset($_POST['submit']) && isset($_POST['Nb']);
$sMessage = "";
$iNb;
$iCont = 0;
if ($bRep) {
    $iNb = $_POST['Nb'];
    $iNombreRandom = $_POST['rand'];
    $iCont = $_POST['iCont'];
    if ($iNb != $iNombreRandom) {
        $iCont++;
        if ($iNb < $iNombreRandom) {
            ;
            $sMessage = "Trop petit !!!" .  var_dump($iNombreRandom);
        } elseif ($iNb > $iNombreRandom) {
            
            $sMessage = "Trop grand !!!" .  var_dump($iNombreRandom);
        } 
    }else {
        $sMessage = "Bravo vous avez réussi !" . $iCont . " en essai";
        $iNombreRandom = rand(1, 100);
        $iCont = 0;
    }  
}else{
    $iNombreRandom = rand(1, 100);
    $iNb;
    $sMessage = '' . var_dump($iNombreRandom);
}

require 'exo_5_2b_js.html';
?>