/* --------------------------exercic js--------------------------- */
function Exo_4_8_js(){
    //je declar mes variable
var dJour, dMois, dAnnee
var result = document.getElementById('execut');
dJour = document.getElementById('jour').value;
dMois = document.getElementById('mois').value;
dAnnee = document.getElementById('annee').value;
    //je declar mes conditions
    if (dMois < 1 || dMois > 31) {
        result.innerHTML = "La date saisie est invalide"
    }else if (dMois == 2) {
        if (dAnnee % 4 === 0 && dAnnee % 100 > 0 || dAnnee % 400 === 0) {
            if ( dJour >= 1 || dJour <= 29) {
                result.innerHTML = "La date saisie est valide"
            }else{
                result.innerHTML = "La date saisie est invalide"
            }
        }else{
            if (dJour >= 1 && dJour <= 28) {
                result.innerHTML = "La date saisie est valide"
            }else{
                result.innerHTML = "La date saisie est invalide"
            }
        }
        
    }else if (dMois == 4 || dMois == 6 || dMois == 9 || dMois == 11) {
        if (dJour >= 1 || dJour <= 30) {
            result.innerHTML = "La date saisie est valide"
        }else{
            result.innerHTML = "La date saisie est invalide"
        }
    }else{
        if (dJour >= 1 || dJour <= 31) {
            result.innerHTML = "La date saisie est valide"
        }else{
            result.innerHTML = "La date saisie est invalide"
        }
    }
}
/* ---------------------------exercic jquery-------------------------- */
function Exo_4_8_jquery() {
    //je declar mes variable
var dJour, dMois, dAnnee
var result = $('#execut');
dJour = $('#jour').val();
dMois = $('#mois').val();
dAnnee = $('#annee').val();
    //je declar mes conditions
    if (dMois < 1 || dMois > 31) {
        result.html( "La date saisie est invalide");
    }else if (dMois == 2) {
        if (dAnnee % 4 === 0 && dAnnee % 100 > 0 || dAnnee % 400 === 0) {
            if ( dJour >= 1 || dJour <= 29) {
                result.html( "La date saisie est valide");
            }else{
                result.html( "La date saisie est invalide");
            }
        }else{
            if (dJour >= 1 && dJour <= 28) {
                result.html( "La date saisie est valide");
            }else{
                result.html( "La date saisie est invalide");
            }
        }
        
    }else if (dMois == 4 || dMois == 6 || dMois == 9 || dMois == 11) {
        if (dJour >= 1 && dJour <= 30) {
            result.html( "La date saisie est valide");
        }else{
            result.html( "La date saisie est invalide");
        }
    }else{
        if (dJour >= 1 || dJour <= 31) {
            result.html( "La date saisie est valide");
        }else{
            result.html( "La date saisie est invalide");
        }
    }

}



