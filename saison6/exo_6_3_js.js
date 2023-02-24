/* --------------------------exercic js--------------------------- */
// ALGORITHME Exo_6_3.
function Exo_6_3_js() {
    var iTableau= Array(9), iI; 
    //Tableau[]
    iTableau = [];
    // Pour iI pas de 9 
    for (iI = 0; iI < 9; iI++) {
    //     iTableau[Ii]
        iTableau[iI] = document.getElementById("iN"+(iI)).value;
        // ecrire 'les notes son :' iTableau[iT]
        document.getElementById('execut').innerHTML += "Les notes sont :" + iTableau[iI] + ' et l\'index ' + iI +'<br>';
    // FinPour
    }
}

/* ---------------------------exercic jquery-------------------------- */
// ALGORITHME Exo_6_3.
function Exo_6_3_jquery() {
    var iTableau= Array(9), iI; 
    //Tableau[]
    iTableau = [];
    // Pour iI pas de 9 
    for (iI = 0; iI < 9; iI++) {
    //   Lire  iTableau[Ii]
        iTableau[iI] = $("#iN"+(iI)).val();
        // ecrire 'les notes son :' iTableau[iT]
        $('#execut').append("Les notes sont :" + iTableau[iI] + ' et l\'index ' + iI +'<br>');
    // FinPour
    }
}
