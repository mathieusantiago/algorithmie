<?php
    $sMessage = "";
if (isset($_POST['submit']) && isset($_POST['Nb'])) {
    $iNb = intval($_POST['Nb']);
    if ($iNb <= 10) {
        $sMessage = 'Trop petit !!!';
    } else if ($iNb >= 20) {
        $sMessage = 'Trop grand !!!';
    }else{
        $sMessage = 'Bravo vous avez réussi !';
    }
}
require 'exo_5_2_js.html';
?>