/* --------------------------exercic js--------------------------- */
// ALGORITHME Exo_5_6
function Exo_5_6_js() {
    //VARIABLE iNb, iSomme, i, bClac
    var iNb, iSomme, i, bCalc;
    //Ecrire 'Entrez un nombre'
    //lire iNb
    iNb = document.getElementById('Nb').value;
    //iSomme = 0
    //iSomme = 0 ;
    iCalc = 0;
    //Pour i = 1, i <= iNb, i++
    for(i = 1; i <= iNb; i++){
        //bClac = +(i) + i
        iCalc = iCalc + i;
    }    
    //FinPour
    //Ecrire 'iSomme'
    document.getElementById('execut').innerHTML = ' la somme des entiers jusqu’à ce nombre et: '+ iCalc;
//Fin  
  
}


/* ---------------------------exercic jquery-------------------------- */
// ALGORITHME Exo_5_6
function Exo_5_6_jquery() {
    //VARIABLE iNb, iSomme, i, bClac
    var iNb, i, bCalc;
    //Ecrire 'Entrez un nombre'
    //lire iNb
    iNb = $('#Nb').val();
    //iSomme = 0
    iCalc = 0 ;
    //Pour i = 1, i <= iNb, i++
    for(i = 1; i <= iNb; i++){
        //bClac = +(i) + i
        iCalc = iCalc + i;
    }    
    //FinPour
    //Ecrire 'iSomme'
    $('#execut').html(' la somme des entiers jusqu’à ce nombre et: '+ iSomme);
//Fin  
   
}




