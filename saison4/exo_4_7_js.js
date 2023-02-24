/* --------------------------exercic js--------------------------- */
function Exo_4_7_js() {
    //je declar mes variable
    var iAge, iPermis, iSinistre, iAssurance;
    iAge = document.getElementById('age').value;
    iPermis = document.getElementById('permis').value;
    iSinistre = document.getElementById("sinistre").value;
    iAssurance = document.getElementById("assurance").value;
    sResult = document.getElementById('execut');
    //je declar mes conditions
    if (iAge <= 25 && iPermis <= 2) {
        if (iSinistre == 1) {
            sResult.innerHTML = "Nous ne pouvons pas vous assurer au vu des informations saisies.";
        } else {
            sResult.innerHTML = "Au vu des informations saisies, nous vous accordons le tarif rouge.";
        }
    } else if () {
        if (iSinistre === '1') {
            if (iAssurance == '5') {
                sResult.innerHTML = "Au vu des informations saisies, nous vous accordons le tarif orange.";
            } else {
                sResult.innerHTML = "Au vu des informations saisies, nous vous accordons le tarif rouge.";
            }
        } else if (iSinistre == '0') {
            sResult.innerHTML = "Au vu des informations saisies, nous vous accordons le tarif orange.";
        } else {
            sResult.innerHTML = "Nous ne pouvons pas vous assurer au vu des informations saisies.";
        }
    } else if (iAge >= 25 && iPermis <= 2) {
        if (iSinistre == '1') {
            sResult.innerHTML = "Au vu des informations saisies, nous vous accordons le tarif rouge.";
        } else if (iSinistre == '0') {
            sResult.innerHTML = "Au vu des informations saisies, nous vous accordons le tarif orange.";
        } else {
            sResult.innerHTML = "Nous ne pouvons pas vous assurer au vu des informations saisies.";
        }
    } else if (iAge >= 25 && iPermis >= 2) {
        if (iSinistre == '2') {
            if (iAssurance == '5') {
                sResult.innerHTML = "Au vu des informations saisies, nous vous accordons le tarif orange.";
            } else {
                sResult.innerHTML = "Au vu des informations saisies, nous vous accordons le tarif rouge.";
            }
        } else if (iSinistre == '1') {
            if (iAssurance == '5') {
                sResult.innerHTML = "Au vu des informations saisies, nous vous accordons le tarif vert.";
            } else {
                sResult.innerHTML = "Au vu des informations saisies, nous vous accordons le tarif orange.";
            }
        } else if (iSinistre == '0') {
            if (iAssurance == '5') {
                sResult.innerHTML = "Au vu des informations saisies, nous vous accordons le tarif bleu.";
            } else {
                sResult.innerHTML = "Au vu des informations saisies, nous vous accordons le tarif vert.";
            }
        } else {
            sResult.innerHTML = "Nous ne pouvons pas vous assurer au vu des informations saisies.";
        }
    }
}
/* ---------------------------exercic jquery-------------------------- */
function Exo_4_7_jquery() {
    //je declar mes variable
    var iAge, iPermis, iSinistre, iAssurance;
    iAge = $('#age').val();
    iPermis = $('#permis').val();
    iSinistre = $("#sinistre").val();
    iAssurance = $("#assurance").val();
    sResult = $('#execut');
    //je declar mes conditions
    if (iAge <= 25 && iPermis <= 2) {
        if (iSinistre == 1) {
            sResult.html("Nous ne pouvons pas vous assurer au vu des informations saisies.");
        } else {
            sResult.html("Au vu des informations saisies, nous vous accordons le tarif rouge.");
        }
    } else if (iAge <= 25 && iPermis >= 2) {
        if (iSinistre === '1') {
            if (iAssurance == '5') {
                sResult.html("Au vu des informations saisies, nous vous accordons le tarif orange.");
            } else {
                sResult.html("Au vu des informations saisies, nous vous accordons le tarif rouge.");
            }
        } else if (iSinistre == '0') {
            sResult.html("Au vu des informations saisies, nous vous accordons le tarif orange.");
        } else {
            sResult.html("Nous ne pouvons pas vous assurer au vu des informations saisies.");
        }
    } else if (iAge >= 25 && iPermis <= 2) {
        if (iSinistre == '1') {
            sResult.html("Au vu des informations saisies, nous vous accordons le tarif rouge.");
        } else if (iSinistre == '0') {
            sResult.html("Au vu des informations saisies, nous vous accordons le tarif orange.");
        } else {
            sResult.html("Nous ne pouvons pas vous assurer au vu des informations saisies.");
        }
    } else if (iAge >= 25 && iPermis >= 2) {
        if (iSinistre == '2') {
            if (iAssurance == '5') {
                sResult.html("Au vu des informations saisies, nous vous accordons le tarif orange.");
            } else {
                sResult.html("Au vu des informations saisies, nous vous accordons le tarif rouge.");
            }
        } else if (iSinistre == '1') {
            if (iAssurance == '5') {
                sResult.html("Au vu des informations saisies, nous vous accordons le tarif vert.");
            } else {
                sResult.html("Au vu des informations saisies, nous vous accordons le tarif orange.");
            }
        } else if (iSinistre == '0') {
            if (iAssurance == '5') {
                sResult.html("Au vu des informations saisies, nous vous accordons le tarif bleu.");
            } else {
                sResult.html("Au vu des informations saisies, nous vous accordons le tarif vert.");
            }
        } else {
            sResult.html("Nous ne pouvons pas vous assurer au vu des informations saisies.");
        }
    }
}



