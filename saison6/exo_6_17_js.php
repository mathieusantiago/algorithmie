<?php
// ALGORITHME Exo_6_11.
$sMessage = "";
if (isset($_POST['iValRand'])) {
    //variable tab[] in ARRAY
    //variable iInput, iValRand in Integer
    $tab = [];
    $iInput = "";
    $iValRand = $_POST["iValRand"];
    $sHtml = "";
    // Ecrire 'compien de formulaire vouez vous'
    //Lire iValRand
    for ($i = 0; $i < $iValRand; $i++) {
        $iInput = $_POST["iVal" . $i];
        $tab[$i] = $iInput;
    }

    function sort1($tab) {
        //nombre des éléments dans le tableau
        $len = count($tab);       
        $tmp = ""; 
        $i = 0;
        $j = 0;                  

        for($i = 1; $i < $len; $i++) {
          //stocker la valeur actuelle 
          $tmp = $tab[$i];
          $j = $i - 1;
          while ($j >= 0 && $tab[$j] > $tmp) {
            // déplacer le nombre
            $tab[$j + 1] = $tab[$j] . " ";
            $j--;
          }
          //Insère la valeur temporaire à la position 
          //correcte dans la partie triée.
          $tab[$j + 1] = $tmp . " ";
        }
        return $tab;
      }
      $tab = sort1($tab);
      //trie du tableau
     for ($i=1; $i < $iValRand ; $i++) { 
       $sMessage = $sMessage . $tab[$i] . ' ';
     } 
}
require 'exo_6_17_js.html';