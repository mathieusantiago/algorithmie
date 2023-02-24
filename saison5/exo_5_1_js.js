/* --------------------------exercic js--------------------------- */
function Exo_5_1_js() {
    //je declar mes variable
    var iNb;
    iNb = parseInt(document.getElementById("Nb").value);
    if (iNb < 2 || iNb > 2) {
        document.getElementById("execut").innerHTML = "concentres toi!!";
    } else {
        document.getElementById("execut").innerHTML = "Bravo vous avez réussi !";
    }
}



/* ---------------------------exercic jquery-------------------------- */
function Exo_5_1_jquery() {
    //je declar mes variable
    var iNb;
    iNb = parseInt($("#Nb").val());
    //je crée ma condition
    if (iNb < 2 || iNb > 2) {
        $("#execut").html("concentres toi!!");
    } else {
        $("#execut").html("Bravo vous avez réussi !");
    }
}



