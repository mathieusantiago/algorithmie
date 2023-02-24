/* --------------------------exercic js--------------------------- */
function Exo_5_3_js() {
//VARIABLE iNb en NUMERIQUE
//VARIABLE i, iNb, iCalc NUMERIQUE 
//VARIABLE sExecut, sGlobal ALPHANUMÉRIQUE
// i = 0
// z = ""
var i = 0;
var sExecut = document.getElementById("execut");
var z = "";
// DEBUT
// Ecrire 'entre un nombre nous vous donneron les 10 suiviant' 
// Lire Inb
var iNb=  document.getElementById("Nb").value;
// iCalc = iNb + 12
// TanQue i < iCalc 
//     i++
//     iNb++
//     z+=iNb + ""
while(i<11){
    i++;
    iNb++;
    z+=iNb + ' ';
  }
// FinTanQue
// Ecrire 'voici les 10 nombre suivant' z  
sExecut.innerHTML = z;          
// FIN
}

/* ---------------------------exercic jquery-------------------------- */
function Exo_5_3_jquery() {
//VARIABLE iNb en NUMERIQUE
//VARIABLE i, iNb, iCalc NUMERIQUE 
//VARIABLE sExecut, sGlobal ALPHANUMÉRIQUE
var i = 0;
var iNb=  $("#Nb").val();
var sExecut = $("#execut");
var z = "";
// DEBUT
// Ecrire 'entre un nombre nous vous donneron les 10 suiviant' 
// Lire Inb
// i = 0
// z = ""
// iCalc = iNb + 12
// TanQue i < iCalc 
//     i++
//     iNb++
//     z+=iNb + ""
while(i<11){
    i++;
    iNb++;
    z+=iNb + '';
  }
// FinTanQue
// Ecrire 'voici les 10 nombre suivant' z  
sExecut.html(z)          
// FIN
}


