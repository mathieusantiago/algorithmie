<?php
// ALGORITHME Exo_6_11.
$sMessage1 = "";
$sMessage2 = "";


if (isset($_POST['submit'])) {
    $filePath = "address.txt";

    
    $fStream = fopen($filePath, "r");
    
    if ($fStream) {
    
        $i = 0;
        $users = [];
        $badMailCount = 0;
    
        while (!feof($fStream)) {
            $line = fgets($fStream);
    
            $mail = str_replace("   ", "", substr($line, 60, 20) );
    
            if ( !filter_var($mail, FILTER_VALIDATE_EMAIL) ) {
                $badMailCount++;
            } else {
                $users[$i] = $line;
            }
                var_dump($mail);
            $i++;
        }
        
        fclose($fStream);
    
        if ($badMailCount > 0) {
            $fStream = fopen($filePath, "w");
    
            foreach ($users as $user) {
                fwrite($fStream, $user);
            }
    
            $sMessage1 = $badMailCount . " utilisateur(s) supprimé(s) du carnet d'adresse (mauvais email).";
        } else {
            $sMessage1 =  "Les adresses mails de tous les utilisateurs semblent correctes.";
        }
    }
} 

require 'exo_10_8_js.html';






