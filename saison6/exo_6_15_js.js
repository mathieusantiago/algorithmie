/* --------------------------exercic js--------------------------- */
// ALGORITHME Exo_6_15.
function Exo_6_15_js(){
    //VARIABLE iTableau[] in ARRAY
    //VARIABLE iSomme, iAnnees in INTEGER
    var iTabl = [];
    var iSomme= 1000, iAnnees =0;
    //POUR i de 1 a 20
    for(i=1;i<20;i++){
        //iSomme = iSomme +(2.27 * somme/100)
        iSomme+= (2.75 * iSomme/100);
        //iTabl[i] = iSomme
        iTabl[i] = iSomme
    //FinPour
    }
        //Ecrire
        iAnnees = document.getElementById('iAnnees').value;
        document.getElementById('execut').innerHTML = 'Dans ' + iAnnees + ' vous aurez  ' + iTabl[iAnnees].toFixed(2) + '€';
}

/* ---------------------------exercic jquery-------------------------- */
// ALGORITHME Exo_6_15.
function Exo_6_15_jquery() {
    //VARIABLE iTableau[] in ARRAY
    //VARIABLE iSomme, iAnnees in INTEGER
    var iTabl = [];
    var iSomme = 1000, iAnnees = 0;
    //POUR i de 1 a 20
    for (i = 1; i < 20; i++) {
        //iSomme = iSomme +(2.27 * somme/100)
        iSomme += (2.75 * iSomme / 100);
        //iTabl[i] = iSomme
        iTabl[i] = iSomme
        //FinPour
    }
    //Ecrire
    iAnnees = $('#iAnnees').val();
    $('#execut').html('Dans ' + iAnnees + ' vous aurez  ' + iTabl[iAnnees].toFixed(2) + '€');                          
}






