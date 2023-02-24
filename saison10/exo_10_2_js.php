<?php
// ALGORITHME Exo_6_11.
$sMessage = "";
if (isset($_POST['submit'])) {
$sHtml = file_get_contents('demo.txt');
$sMessage = str_replace('/', ' ', $sHtml);
}
require 'exo_10_2_js.html';
