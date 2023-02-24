/* --------------------------exercic js--------------------------- */
var NbTest = "";
var iNombreRandom = Math.floor(Math.random(1) * 100);
function Exo_5_2b_js() {
    //je declar mes variable
    var iNb;
    iNb = parseInt(document.getElementById("Nb").value);
    //je declar mes condition
    if (iNb < iNombreRandom) {
        NbTest++
        document.getElementById("execut").innerHTML = "Trop petit !!!";
    } else if (iNb > iNombreRandom) {
        NbTest++
        document.getElementById("execut").innerHTML = "Trop grand !!!";
    } else {
        document.getElementById("execut").innerHTML = "Bravo vous avez réussi ! en " + NbTest + " essai";
    }
}

/* ---------------------------exercic jquery-------------------------- */
function Exo_5_2b_jquery() {
    //je declar mes variable
    var iNb;
    iNb = parseInt(document.getElementById("Nb").value);
    //je declar mes condition
    if (iNb < iNombreRandom) {
        $("#execut").html("Trop petit !!!");
    } else if (iNb > iNombreRandom) {
        $("#execut").html("Trop grand !!!");
    } else {
        $("#execut").html("Bravo vous avez réussi !" + NbTest + " essai");
    }
}



