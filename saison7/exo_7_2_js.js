
/* --------------------------exercic js--------------------------- */
// ALGORITHME Exo_6_15.
function Exo_7_2_js() {
    // Tableau aTableau (15,34,58,42,20)
    // Variables iIndex = 0, iLong, iLong2, iVarTemp EN NUMERIQUE
    var aTableau = [15, 34, 58, 42, 20];
    var iIndex = 0;
    var iLong;
    var iLong2;
    var iVarTemp;
    // DEBUT
    // ECRIRE "Tableau non trié : " + aTableau
    document.getElementById("execut").innerHTML += "Tri par insertion" + "<br>";
    document.getElementById("execut").innerHTML += "Tableau non trié : " + aTableau + "<br>";
    // POUR iLong2 de 0 à 3
    for (iLong2 = 0; iLong2 <= 3; iLong2++) {
        // POUR iLong de 0 à 3
        for (iLong = 0; iLong <= 3; iLong++) {
            // SI aTableau(iIndex) > aTableau(iIndex + 1) ALORS
            if (aTableau[iIndex] > aTableau[iIndex + 1]) {
                // iIndex = iIndex + 1
                iIndex++;
            }
            // SINON iVarTemp = aTableau(iIndex)
            else {
                iVarTemp = aTableau[iIndex];
                // aTableau(iIndex) = aTableau(iIndex + 1)
                aTableau[iIndex] = aTableau[iIndex + 1];
                // aTableau(iIndex + 1) = iVarTemp
                aTableau[iIndex + 1] = iVarTemp;
                // iIndex = 0
                iIndex = 0;
                // FINSI
            }
            // finSi
        }
        //finPour
    }
    // ECRIRE "Tableau trié : " + aTableau
    document.getElementById("execut").innerHTML += "Tableau trié : " + aTableau + "<br><br>";
}



// ALGORITHME Exo_7_2.
function Exo_7_2_jquery() {
    var aTableau = [15, 34, 58, 42, 20];
    var iIndex = 0;
    var iLong;
    var iLong2;
    var iVarTemp;

    $("#execut").append("Tri à bulle" + "<br>");
    $("#execut").append("Tableau non trié : " + aTableau + "<br>");
    for (iLong2 = 0; iLong2 <= 3; iLong2++) {
        for (iLong = 0; iLong <= 3; iLong++) {
            if (aTableau[iIndex] > aTableau[iIndex + 1]) {
                iIndex++;
            }
            else {
                iVarTemp = aTableau[iIndex];
                aTableau[iIndex] = aTableau[iIndex + 1];
                aTableau[iIndex + 1] = iVarTemp;
                iIndex = 0;
            }
        }
    }
    $("#execut").append("Tableau trié : " + aTableau + "<br>");
}
