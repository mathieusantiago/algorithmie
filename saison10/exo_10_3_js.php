<?php
// ALGORITHME Exo_6_11.
$sMessage1 = "";
$sMessage2 = "";


if (isset($_POST['submit'])) {
 
  $longueur = 20;
  
  $nom = str_pad($_POST['Nom'], $longueur);
  $prenom = str_pad($_POST['Prenom'], $longueur);
  $tel = str_pad($_POST['tel'], $longueur);
  $mail = str_pad($_POST['mail'], $longueur);
  
  $concatenated = PHP_EOL . $nom . $prenom . $tel . $mail;
  
  $fille = fopen("address.txt", "a");
  
  if ($fille) {
      fwrite($fille, $concatenated) . "<br>";
     
      $sMessage2 = "Une ligne a été ajoutée à address.txt";
  }


  $sHtml = file_get_contents('address.txt');
  $sMessage1 = str_replace('  ', ' ', trim($sHtml));
  fclose($fille);
} 

require 'exo_10_3_js.html';




// $filePath = "scripts/173/address.txt";


// function formatData(String $data, $length = 20):String {
//     return strtolower( str_pad($data, $length) );
// }

// $concatenated = formatData($_POST['firstname']);
// $concatenated .= formatData($_POST['name']);
// $concatenated .= formatData($_POST['tel']);
// $concatenated .= formatData($_POST['mail']);
// $concatenated .= PHP_EOL;


// $fStream = fopen($filePath, "r");

// if ($fStream) {

//     $i = 0;
//     $users = [];

//     while (!feof($fStream)) {
//         $users[$i] = fgets($fStream);
//         $i++;
//     }

//     if (!in_array($concatenated, $users)) {
//         array_push($users, $concatenated);
//         sort($users);

//         fclose($fStream);

//         $fStream = fopen($filePath, "w");

//         foreach ($users as $user) {
//             fwrite($fStream, $user);
//         }

//         fclose($fStream);

//         echo $_POST['firstname'] . " a été ajouté au carnet d'adresses.";
//     } else {
//         echo $_POST['firstname'] . " est déjà dans le carnet d'adresses !";
//     }
// }





// $filePath = "scripts/174/address.txt";


// function formatData(String $data, $length = 20):String {
//     return strtolower( str_pad($data, $length) );
// }

// $nameToEdit = formatData($_POST['nameToEdit']);


// $fStream = fopen($filePath, "r");

// if ($fStream) {

//     $i = 0;
//     $users = [];
//     $userFound = FALSE;

//     while (!feof($fStream)) {
//         $line = fgets($fStream);

//         if (substr($line, 0, 20) == formatData($nameToEdit)) {
//             $userFound = TRUE;
//             $line = str_replace(formatData($nameToEdit), formatData($_POST['newName']), $line);
//         }

//         $users[$i] = $line;

//         $i++;
//     }

//     fclose($fStream);

//     if ($userFound) {

//         $fStream = fopen($filePath, "w");

//         foreach ($users as $user) {
//             fwrite($fStream, $user);
//         }

//         fclose($fStream);

//         echo "Le carnet d'adresse à été changé";
//     } else {
//         echo "Aucun nom correspondant dans le carnet d'adresse.";
//     }
// }



// $filePath = "scripts/175/address.txt";

// $fStream = fopen($filePath, "r");

// if ($fStream) {

//     $i = 0;
//     $users = [];
//     $badMailCount = 0;

//     while (!feof($fStream)) {
//         $line = fgets($fStream);

//         $mail = str_replace(" ", "", substr($line, 60, 20) );

//         if ( !filter_var($mail, FILTER_VALIDATE_EMAIL) ) {
//             $badMailCount++;
//         } else {
//             $users[$i] = $line;
//         }

//         $i++;
//     }

//     fclose($fStream);

//     if ($badMailCount > 0) {
//         $fStream = fopen($filePath, "w");

//         foreach ($users as $user) {
//             fwrite($fStream, $user);
//         }

//         echo $badMailCount . " utilisateur(s) supprimé(s) du carnet d'adresse (mauvais email).";
//     } else {
//         echo "Les adresses mails de tous les utilisateurs semblent correctes.";
//     }
// }