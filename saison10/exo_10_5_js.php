<?php
// ALGORITHME Exo_6_11.
$sMessage1 = "";
$sMessage2 = "";


if (isset($_POST['submit'])) {

$filePath = "address.txt";


function formatData(String $data, $length = 20):String {
    return strtolower( str_pad($data, $length) );
}

$concatenated = formatData($_POST['Nom']);
$concatenated .= formatData($_POST['Prenom']);
$concatenated .= formatData($_POST['tel']);
$concatenated .= formatData($_POST['mail']);
$concatenated .= PHP_EOL;


$fStream = fopen($filePath, "r");

if ($fStream) {

    $i = 0;
    $users = [];

    while (!feof($fStream)) {
        $users[$i] = fgets($fStream);
        $i++;
    }

    if (!in_array($concatenated, $users)) {
        array_push($users, $concatenated);
        sort($users);

        fclose($fStream);

        $fStream = fopen($filePath, "w");

        foreach ($users as $user) {
            fwrite($fStream, $user);
        }
        $sHtml = file_get_contents('address.txt');
        $sMessage1 = str_replace('  ', ' ', trim($sHtml));
        fclose($fStream);

        $sMessage2 =  $_POST['Prenom'] . " a été ajouté au carnet d'adresses.";
    } else {
        $sMessage2 = $_POST['Prenom'] . " est déjà dans le carnet d'adresses !";
    }
}

} 

require 'exo_10_5_js.html';




