/* --------------------------exercic js--------------------------- */
// ALGORITHME Exo_6_11.
function Exo_6_11_js() {
    //Variable aT1,aT2,aT3, in array
    //variable iLongeurT1, iLongeurT2,i, j, iSomme in Integer
    var aT1 = [4,8,7,12], aT2 = [3,6], aT3 = Array(), iLongueurT1 = aT1.length - 1, iLongueurT2 = aT2.length - 1, i, j, iSomme1 = 0;
    //pour i pas de 0 a LongeurT1 
    for (i = 0; i <= iLongueurT2; i++) {
        //pour i pas de 0 a LongeurT2 
        for (j = 0; j <= iLongueurT1; j++) {
            //je concatene le calcule de mon tableau aT1 et aT2 dans mon aT3
            aT3[i] = aT2[i] * aT1[j];
            //je concatene le aT3 dans ma variable iSomme 
            iSomme1 = iSomme1 + aT3[i];
        }
    }
    //J'ecrie le resultat dans ma div execut 
    document.getElementById("execut").innerHTML = (iSomme1);                              
}

/* ---------------------------exercic jquery-------------------------- */
// ALGORITHME Exo_6_11.
function Exo_6_11_jquery() {
    //Variable aT1,aT2,aT3, in array
    //variable iLongeurT1, iLongeurT2,i, j, iSomme in Integer
    var aT1 = [4,8,7,12], aT2 = [3,6], aT3 = Array(), iLongueurT1 = aT1.length - 1, iLongueurT2 = aT2.length - 1, i, j, iSomme1 = 0;
    //pour i pas de 0 a LongeurT1 
    for (i = 0; i <= iLongueurT2; i++) {
        //pour i pas de 0 a LongeurT2 
        for (j = 0; j <= iLongueurT1; j++) {
            //je concatene le calcule de mon tableau aT1 et aT2 dans mon aT3
            aT3[i] = aT2[i] * aT1[j];
            //je concatene le aT3 dans ma variable iSomme 
            iSomme1 = iSomme1 + aT3[i];
        }
    }
    //J'ecrie le resultat dans ma div execut 
    $("#execut").html(iSomme1);                                   
}


