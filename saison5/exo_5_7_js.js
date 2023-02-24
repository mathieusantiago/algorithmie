/* --------------------------exercic js--------------------------- */
// ALGORITHME Exo_5_7
function Exo_5_7_js() {
    //VARIABLE iRes, iNb, iI en Numérique
    var iRes, iNb, iI;
    //DEBUT 
    //iRes = 1
    var iRes = 1;
    //Ecrire 'Entrez un nombre'
    //lire iNb
    var iNb = document.getElementById('Nb').value;
    //Pour iI = 1,iI <= nb, iT++
    for (iI = 1; iI <= iNb; iI++) {
        //iRes = iRes * iT
        iRes = iRes * iI;
        //FinPour
    }
    //Ecrire iRes
    document.getElementById('execut').innerHTML = iRes;
    //FIN  
}


/* ---------------------------exercic jquery-------------------------- */
// ALGORITHME Exo_5_7
function Exo_5_7_jquery() {
//VARIABLE iRes, iNb, iI en Numérique
    var iRes, iNb, iI;
//DEBUT 
    //iRes = 1
    var iRes = 1;
    //Ecrire 'Entrez un nombre'
    //lire iNb
    var iNb = $('#Nb').val();
    //Pour iI = 1,iI <= nb, iT++
    for (iI = 1; iI <= iNb; iI++) {
        //iRes = iRes * iT
        iRes = iRes * iI;
        //FinPour
    }
    //Ecrire iRes
    $('#execut').html(iRes);
//FIN 
}




