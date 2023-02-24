<?php
    $sMessage = "";
if (isset($_POST['submit']) && isset($_POST['Nb'])) {
    $iNb = intval($_POST['Nb']);
    if ($iNb < 2 || $iNb > 2) {
        $sMessage = 'concentres toi!!';
    } else {
        $sMessage = 'Bravo vous avez réussi !';
    }
}
require 'exo_5_1_js.html';
?>

