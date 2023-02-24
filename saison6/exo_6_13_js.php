<?php
// ALGORITHME Exo_6_11.
$sMessage = "";
if (isset($_POST['iValRand'])) {
    $iTabl= [];
    $iNbPlusGrand = 0;
    $iPosition = 0;
    $result_form = $_POST['iValRand'];

    for($i=1; $i<$result_form; $i++){
        $iVal = +$_POST['iVal' . $i];
        if ($iVal>$iNbPlusGrand){
            $iNbPlusGrand = $iVal;
            $iPosition = $i;
        }
        $iTabl[$i] = $iNbPlusGrand;
    }
    $sMessage = 'Le nombre le plus grand est = ' . $iNbPlusGrand . "<br>" .  'Position ' . $iPosition;                    
}
require 'exo_6_13_js.html';


