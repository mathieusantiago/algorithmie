/* --------------------------exercic js--------------------------- */
// ALGORITHME Exo_6_7.
function Exo_6_7_js() {
    //     Tableau iTableau(9)
    var iTableau = Array(9);
    var iI, iCalc = 0, iMoyenne;

    // DEBUT
    // Je boucle et je récupère iN que je stocke dans le tableau
    for (iI = 0; iI < 9; iI++) {
        iTableau[iI] = parseInt(document.getElementById("iN" + (iI)).value);
        // J'ajoute les valeurs  iCalc
        iCalc = iCalc + parseInt(document.getElementById("iN" + (iI)).value);
        // j'affiche le résultat 
        document.getElementById("execut").innerHTML += "index " + iI + " valeur : " + document.getElementById("iN" + (iI)).value + "<br>";
    }
    // je calcule la moyenne
    iMoyenne = iCalc + iTableau.length;
    // j'affiche la moyenne 
    document.getElementById("execut").innerHTML += "Moyenne : " + iMoyenne.toFixed(2);
}

/* ---------------------------exercic jquery-------------------------- */
// ALGORITHME Exo_6_7.
function Exo_6_7_jquery() {
    //     Tableau iTableau(9)
     iTableau = Array(9);
     var index,iCalc = 0,iMoyenne;
    // DEBUT
    // Je boucle et je récupère iN que je stocke dans le tableau
    for(iI = 0; iI < 9; iI++){ 
        iTableau[iI] = $("#iVal"+(iI)).val();
        // J'ajoute les valeurs  iCalc
        iCalc = iCalc + parseInt($("#iVal"+(iI)).val());
        // j'affiche le résultat 

        $("#div_result_jq_6_3").append("index " +iI +" valeur : " +$("#iVal"+iI).val() +"<br>");
    }
    // je calcule la moyenne
    iMoyenne = iCalc / iTableau.length;
    // j'affiche la moyenne 
    $("#div_result_jq_6_7").append("Moyenne : " +iMoyenne.toFixed(2));              
}
