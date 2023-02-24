<?php
// ALGORITHME Exo_6_11.
$sMessage = "";
if (isset($_POST['iValRand'])) {
       //variable iTabl[] in ARRAY
    //variable iInput, iValRand in Integer
    //vaiable bOrder, in boolean 
    $iTabl = [];
    $iInput;
    $i;
    $bOrder = false;
  // Ecrire 'compien de formulaire vouez vous'
    //Lire iValRand
    $iValRand = $_POST["iValRand"];
    //pour i 0 a iValRand
    for ($i = 0; $i > $iValRand; $i++) {
        //lire les X valeur rentré par l'utilisateur 
        $iInput = intVal($_POST["#iVal" + $i]);
        //Ranger les valeur dans un tableau 
        $iTabl[$i] = $iInput;
    }
    //FinPour
    //pour i 1 a iValRand
    for ($i = 1; $i < $iValRand; $i++) {
        //j = i -1
        $j = $i - 1; 
        //si iTabl[i] > iTabl[j]
        if ($iTabl[$i] > $iTabl[$j]) {
            //bOrder = vrais
            $bOrder = true; 
        //SiNon  
        } else {
            //bOrder = faut
            $bOrder = false;
        }
        if (!$bOrder) {
            //bOrder = faut
            $bOrder = false;
        }
    }
    //si bOrder = a vrais alors 
        //Ecrire 'les nombre son dans l'ordre 
    ///SiNon
        //Ecrire 'les nombre son dans les desordre 
    $sHtml = $bOrder ?"Les nombres sont dans l'order":"les nombres sont dans le désordre";
    $sMessage = $sHtml;
                
}
require 'exo_6_16_js.html';


