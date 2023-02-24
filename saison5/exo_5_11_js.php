<?php
// ALGORITHME Exo_5_9.
$sMessage = "";


//Si le formulaire et envoyer 
if (isset($_POST['iNbPartants'])) {
    //VARIABLES iNbPartants, iNbJoues, iChanceOrdre, iChanceDésordre
    $iNbPartants;
    $iNbJoues;
    $iFactNbPartants = 1; 
    $iFactNbJoues = 1;
    $i;
    $x=0;
    $y=0;
    $iFacNp=1;
    // DEBUT
    //ECRIRE "Nombre de chevaux partants : "
    //LIRE iNbPartants
    $iNbPartants =$_POST["iNbPartants"];
    //ECRIRE "Nombre de chevaux joués : "
    //LIRE iNbJoues
    $iNbJoues = $_POST["iNbJoues"];
    //Factorielle du nombre de partants :
    for ($i = 1; $i < $iNbPartants; $i++) {
        $iFactNbPartants+=  $iFactNbPartants * $i;
    }
   
    // Factorielle du nomre de joués :
    for ($i = 1; $i < $iNbJoues; $i++) {
        $iFactNbJoues+= $iFactNbJoues * $i;
    }
 
    for ($i = 1; $i < ($iNbPartants-$iNbJoues); $i++) {
        $iFacNp+= $iFacNp * $i;
    }
    $x= $iFactNbPartants/$iFacNp;
    //iChanceOrdre = iNbPartants! / (iNbPartants - iNbJoues)!
    $y=$x/$iFactNbJoues;
    //iChanceDésordre = iNbPartants! / (iNbPartants! * (iNbJoues - iNbPartants)!
    
    //ECRIRE "Dans l'ordre : une chance sur " iChanceOrdre " de gagner"
    $sMessage = "Dans l'ordre : une chance sur " . $x . " de gagner" . "<br> Dans le désordre : une chance sur " . $y . " de gagner";
    //ECRIRE "Dans le désordre : une chance sur " iChanceDésordre " de gagner"
   
}

require 'exo_5_11_js.html';




?>