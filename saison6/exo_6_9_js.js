/* --------------------------exercic js--------------------------- */
// ALGORITHME Exo_6_9.
function Exo_6_9_js() {
    // Tableau iTableau(9)
    var iTableau = Array(9);
    var iI, iCalc = 0;
    // DEBUT
    // Je boucle et je récupère iN que je stocke dans le tableau
    for (iI = 0; iI < 9; iI++) {
        iTableau[iI] = parseInt(document.getElementById("iN" + (iI)).value);
        // J'ajoute les valeurs  iCalc
        iCalc+=  parseInt(document.getElementById("iN" + (iI)).value);
        // j'affiche le résultat 
    }
    // j'affiche la moyenne 
    document.getElementById("execut").innerHTML += "Somme : " + iCalc.toFixed(2);
}

/* ---------------------------exercic jquery-------------------------- */
// ALGORITHME Exo_6_9.
function Exo_6_9_jquery() {
    //     Tableau iTableau(9)
    var iTableau = Array(9);
    var iI, iCalc = 0;
    // DEBUT
    // Je boucle et je récupère iN que je stocke dans le tableau
    for (iI = 0; iI < 9; iI++) {
        iTableau[iI] = parseInt($("#iN" + (iI)).val());
        // J'ajoute les valeurs  iCalc
        iCalc+=  parseInt($("#iN" + (iI)).val());
        // j'affiche le résultat 

    }
    // j'affiche la moyenne 
    $("#execut").append("Somme : " + iCalc.toFixed(2));             
}


