/* --------------------------exercic js--------------------------- */
// ALGORITHME Exo_6_4.
function Exo_6_4_js() {
    var iI, iTablNb = [5];
    for (iI = 0; iI < 5; iI++) {
        iTablNb[iI] = iI * iI;
        document.getElementById('execut').innerHTML += ' ' + iTablNb[iI] + "<br>";
    }

}

/* ---------------------------exercic jquery-------------------------- */
// ALGORITHME Exo_6_4.
function Exo_6_4_jquery() {
    var iI, iTablNb = [5];
    for (iI = 0; iI < 5; iI++) {
        iTablNb[iI] = iI * iI;
        $('#execut').append(' ' + iTablNb[iI] + "<br>");
    }
}
