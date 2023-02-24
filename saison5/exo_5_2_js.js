/* --------------------------exercic js--------------------------- */
function Exo_5_2_js() {
    //je declar mes variable

    var iNb;
    iNb = parseInt(document.getElementById("Nb").value);
    if (iNb <= 10) {
        document.getElementById("execut").innerHTML = "Trop petit !!!";
    } else if (iNb >= 20) {
        document.getElementById("execut").innerHTML = "Trop grand !!!";
    } else {
        document.getElementById("execut").innerHTML = "Bravo vous avez réussi !";
    }
}

/* ---------------------------exercic jquery-------------------------- */
function Exo_5_2_jquery() {
    //je declar mes variable
 
    var iNb;
    iNb = parseInt($("#Nb").val());
    if (iNb <= 10) {
        $("#execut").html("Trop petit !!!");
    } else if (iNb >= 20) {
        $("#execut").html("Trop grand !!!");
    } else {
        $("#execut").html("Bravo vous avez réussi !");
    }

}
