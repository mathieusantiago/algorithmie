
/* --------------------------exercic js--------------------------- */
// ALGORITHME Exo_6_15.
function Exo_8_1_js() {
        //VARIABLE TableauA = Array(5);
        var tTableau = Array(5);
        //VARIABLE a,b In Integer;
        var a, b;
        //Debut
        //Pour a de 0 à 5 a++
        for (a = 0; a < 5; a++) {
            //TableauA[a] = Array(12);
            tTableau[a] = Array(12);
            //pour b de 0 à 12  b++
            for (b = 0; b < 12; b++) {
                //TableauA[a][b] = 0;   
                tTableau[a][b] = 0;
            }//FinPour
        }//FinPour
    document.getElementById('execut').innerHTML = tTableau;
}//Fin

// ALGORITHME Exo_8_1.
function Exo_8_1_jquery() {
    //VARIABLE TableauA = Array(5);
    var tTableau = Array(5);
    //VARIABLE a,b In Integer;
    var a, b;
    //Debut
    //Pour a de 0 à 5 a++
    for (a = 0; a < 5; a++) {
        //TableauA[a] = Array(12);
        tTableau[a] = Array(12);
        //pour b de 0 à 12  b++
        for (b = 0; b < 12; b++) {
            //TableauA[a][b] = 0;
            tTableau[a][b] = 0;
        }//FinPour
    }//FinPour
    tTableau[2][5] = "x";
    $('#execut').html(tTableau);
}//Fin
