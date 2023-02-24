
/* --------------------------exercic js--------------------------- */
// ALGORITHME Exo_6_15.
function Exo_8_6_js() {
 //variable tTableau <- Array(12,8) in Array
 var tTableau = Array(12);
 //variable iNbPlusGrand <- 0 In Integer
 var iNbPlusGrand = 0;
 var iNbA,iNbB,sHtml= "<thead style='background: red'><tr><th>#</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th></tr></thead><td>";
 //Pour i de 0 a 12
 for (i = 0; i < 12; i++) {
     //tTableau[i] <- Array(8)
    
     tTableau[i] = Array(8)
     //Pour j de 0 a 12
     for (j = 0; j <= 8; j++) {
         //Variable iRand <- Random 
         var iRand = Math.floor(Math.random() * 100);
         //tTableau[i][j] <- Random
         tTableau[i][j] = iRand;
     }//j Suivant

 
 }//i Suivant
 //Pour a de 0 a 12
 for (a = 0; a < 12; a++) {
     //Pour b de 0 a 8
     sHtml+= '<tr><td style="background:red">' + a + '</td>';
     for (b = 0; b <= 8; b++) {
         //Si iNbPlusGrand < tTableau[a][b]
        sHtml+= '<td>' + tTableau[a][b]+ '</td>'

         if (iNbPlusGrand < tTableau[a][b]) {
             //iNbPlusGrand <- Tableau[a][b]
             iNbPlusGrand = tTableau[a][b];
             iNbA = a;
             iNbB = b;
         }//Fin Si
     

     }//b Suivant

     sHtml= sHtml+ '</tr>';
 }//a Suivant 
 //Ecrire "Le tableau et: saut de linge" + tTableau
 //Ecrire "Le nombre le plus grand est:" + iNbPlusGrand
document.getElementById('execut').innerHTML = 'Voici mon tableau : <br><table style="width:100%">' + sHtml + '</table><br><br> Le nombre le plus grand du tableau est : ' + iNbPlusGrand + " <br> a la position " + iNbA + ' / ' + iNbB;

}//Fin

// ALGORITHME Exo_8_6.
function Exo_8_6_jquery() {
    //variable tTableau <- Array(12,8) in Array
    var tTableau = Array(12);
    //variable iNbPlusGrand <- 0 In Integer
    var iNbPlusGrand = 0;
    var iNbA,iNbB,sHtml= "<thead style='background: red'><tr><th>#</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th></tr></thead><td>";
    //Pour i de 0 a 12
    for (i = 0; i < 12; i++) {
        //tTableau[i] <- Array(8)
       
        tTableau[i] = Array(8)
        //Pour j de 0 a 12
        for (j = 0; j <= 8; j++) {
            //Variable iRand <- Random 
            var iRand = Math.floor(Math.random() * 100);
            //tTableau[i][j] <- Random
            tTableau[i][j] = iRand;
        }//j Suivant

    
    }//i Suivant
    //Pour a de 0 a 12
    for (a = 0; a < 12; a++) {
        //Pour b de 0 a 8
        sHtml+= '<tr><td style="background:red">' + a + '</td>';
        for (b = 0; b <= 8; b++) {
            //Si iNbPlusGrand < tTableau[a][b]
           sHtml+= '<td>' + tTableau[a][b]+ '</td>'

            if (iNbPlusGrand < tTableau[a][b]) {
                //iNbPlusGrand <- Tableau[a][b]
                iNbPlusGrand = tTableau[a][b];
                iNbA = a;
                iNbB = b;
            }//Fin Si
        

        }//b Suivant

        sHtml= sHtml+ '</tr>';
    }//a Suivant 
    //Ecrire "Le tableau et: saut de linge" + tTableau
    //Ecrire "Le nombre le plus grand est:" + iNbPlusGrand
   $('#execut').html('Voici mon tableau : <br><table style="width:100%">' + sHtml + '</table><br><br> Le nombre le plus grand du tableau est : ' + iNbPlusGrand + " <br> a la position " + iNbA + ' / ' + iNbB);
}//Fin
