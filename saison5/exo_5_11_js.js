/* --------------------------exercic js--------------------------- */
// ALGORITHME Exo_5_11.
function Exo_5_11_js() {
    //VARIABLES iNbPartants, iNbJoues, iChanceOrdre, iChanceDésordre
    var iNbPartants, iNbJoues, iFactNbPartants = 1, iFactNbJoues = 1,i,x=0,y=0,iFacNp=1;
    // DEBUT
    //ECRIRE "Nombre de chevaux partants : "
    //LIRE iNbPartants
    iNbPartants = document.getElementById("iNbPartants").value;
    //ECRIRE "Nombre de chevaux joués : "
    //LIRE iNbJoues
    iNbJoues = document.getElementById("iNbJoues").value;
    //Factorielle du nombre de partants :
    //pour i a iNbParants
    for (i = 1; i < iNbPartants; i++) {
        //iFactNbPartants+=  iFactNbPartants * i;
        iFactNbPartants+=  iFactNbPartants * i;
    }
   //fin pour
    // Factorielle du nomre de joués :
    //pour i a iNbJoues
    for (i = 1; i < iNbJoues; i++) {
        //iFactNbJoues+= iFactNbJoues * i;
        iFactNbJoues+= iFactNbJoues * i;
    }
    //fin pour
    // Factorielle du nomre de joués :
    //pour i a iNbParants - iNbJoues
    for (i = 1; i < (iNbPartants-iNbJoues); i++) {
        //iFacNp+= iFacNp * i;
        iFacNp+= iFacNp * i;
    }
    //fin pour 
    //x= iFactNbPartants/iFacNp;
    x= iFactNbPartants/iFacNp;
    //y=x/iFactNbJoues;
    y=x/iFactNbJoues;
    //ECRIRE "Dans l'ordre : une chance sur " iChanceOrdre " de gagner"
    document.getElementById("execut").innerHTML += "Dans l'ordre : une chance sur " + x + " de gagner" + "<br>";
    //ECRIRE "Dans le désordre : une chance sur " iChanceDésordre " de gagner"
    document.getElementById("execut").innerHTML += "Dans le désordre : une chance sur " + y + " de gagner";
}



/* ---------------------------exercic jquery-------------------------- */
// ALGORITHME Exo_5_11.
//variable globlal iCalcPirx = 0 en NUMERIQUE

function Exo_5_11_jquery() {
    //VARIABLES iNbPartants, iNbJoues, iChanceOrdre, iChanceDésordre
    var iNbPartants, iNbJoues, iFactNbPartants = 1, iFactNbJoues = 1,i,x=0,y=0,iFacNp=1;
    // DEBUT
    //ECRIRE "Nombre de chevaux partants : "
    //LIRE iNbPartants
    iNbPartants = $("#iNbPartants").val();
    //ECRIRE "Nombre de chevaux joués : "
    //LIRE iNbJoues
    iNbJoues = $("#iNbJoues").val();
    //Factorielle du nombre de partants :
    for (i = 1; i < iNbPartants; i++) {
        iFactNbPartants+=  iFactNbPartants * i;
    }
   
    // Factorielle du nomre de joués :
    for (i = 1; i < iNbJoues; i++) {
        iFactNbJoues+= iFactNbJoues * i;
    }
 
    for (i = 1; i < (iNbPartants-iNbJoues); i++) {
        iFacNp+= iFacNp * i;
    }
    x= iFactNbPartants/iFacNp;
    //iChanceOrdre = iNbPartants! / (iNbPartants - iNbJoues)!
    y=x/iFactNbJoues;
    //iChanceDésordre = iNbPartants! / (iNbPartants! * (iNbJoues - iNbPartants)!
    
    //ECRIRE "Dans l'ordre : une chance sur " iChanceOrdre " de gagner"
    //ECRIRE "Dans le désordre : une chance sur " iChanceDésordre " de gagner"
    $("#execut").html("Dans l'ordre : une chance sur " + x + " de gagner" + "<br> Dans le désordre : une chance sur " + y + " de gagner");
}
