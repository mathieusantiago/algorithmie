/* --------------------------exercic js--------------------------- */
// ALGORITHME Exo_5_8
function Exo_5_8_js() {
    //variable iNb, iNbPlus =0, iI, iCompteurPlus = 0;
    var iNb, iNbPlus= 0, iI, iComptPlus = 0;
    //Pour iI =1, iI<21; iI++
    for (iI = 1; iI < 21; iI++)
    {   //Ecrire "Entrez un nombre"
        //Lire Inb
        iNb = +prompt("Entrez un nombre : ");
        //Si Ii == 1 || iNb > iNbOlus
        if ((iI == 1) || (iNb > iNbPlus)) {
            //InbPlus = iNb
            iNbPlus= iNb;
            // iCompteur ) iI
            iComptPlus = iI;
        }
    }
    //Ecrire '"Le plus grand de ces nombres est : " +iNbPlus+"<br>"'+" C'était le nombre numéro " +iComptPlus;
    document.getElementById("execut").innerHTML += "Le plus grand de ces nombres est : " +iNbPlus+"<br>" +" C'était le nombre numéro " +iComptPlus;
}


/* ---------------------------exercic jquery-------------------------- */
// ALGORITHME Exo_5_8
function Exo_5_8_jquery() {
    //variable iNb, iNbPlus =0, iI, iCompteurPlus = 0;
    var iNb, iNbPlus= 0, iI, iComptPlus = 0;
    //Pour iI =1, iI<21; iI++
    for (iI = 1; iI < 21; iI++)
    {   //Ecrire "Entrez un nombre"
        //Lire Inb
        iNb = +prompt("Entrez un nombre : ");
        //Si Ii == 1 || iNb > iNbOlus
        if ((iI == 1) || (iNb > iNbPlus)) {
            //InbPlus = iNb
            iNbPlus= iNb;
            // iCompteur ) iI
            iComptPlus = iI;
        }
    }
    //Ecrire '"Le plus grand de ces nombres est : " +iNbPlus+"<br>"'+" C'était le nombre numéro " +iComptPlus;
    $("#execut").html( "Le plus grand de ces nombres est : " +iNbPlus+"<br>" +" C'était le nombre numéro " +iComptPlus);
}



