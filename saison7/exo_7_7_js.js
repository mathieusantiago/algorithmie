
/* --------------------------exercic js--------------------------- */
// ALGORITHME Exo_7_7.
function Exo_7_7_js() {
    //var tableau1 <- [xxxxxx] 
    var tA = ['1', '2', '3', '4', '5'];
    //var tableau2 <- [xxxxxx] 
    var tB = ['6', '7', '8', '9', '10'];
    //var tableau3 <- [] 
    var tC = [];
    //var bloolean 1 <- faut
    var bFinA = false;
    //var bloolean 2 <- faut
    var bFinB = false;
    //var iCompteur 1 <- 0
    var iComptA = 0;
    //var iCompteur 2 <- 0
    var iComptB = 0;
    //var iCompteur 3 <- 0
    var iCompt = -1;
    //var iNbA <- Longueur Tableau1
    var iNbA = tA.length;
    //var iNbA <- Longueur Tableau2
    var iNbB = tB.length;
    //var iNbGlob <- Longeur des deux tableau
    var iNbGlob = iNbA + iNbB;
    //DEBUT
    //Tanque iCompteur 3 < Longeur des deux tableau
    while (iCompt < iNbGlob) {
        //iCompteur3 + 1
        iCompt++;
        //Si tableau1[iCompteur1] < tableau2[iCompteur2] 
        if (tA[iComptA] < tB[iComptB]) {
            //tableau3[compteur1] <- tableau1[compteur1]
            tC[iComptA] = tA[iComptA]
            //iCompteur + 1
            iComptA++;
            //Si Compteur1 > Longueur Tableau1
            if (iComptA > iNbA) {
                //boolean1 <- vrai
                bFinA = true;
                //SiNon
            } else {
                //bloolean1 <- faut
                bFinA = false;
            }//FinSi
            //SiNonSi
        } else {
            //tableau3[iCompteur3] <- tableau2[icompteur2]
            tC[iCompt] = tB[iComptB];
            //iCompteur2 <- +1
            iComptB++;
            //Si iCompteur2 > Longueur Tableau2
            if (iComptB > iNbB) {
                //bloolean2 <- vrais
                bFinB = true;
            } else {
                //bloolean2 <- faut
                bFinB = true;
            }//FinSi
        }//FinSi
    }//FinTanQue
    document.getElementById('execut').innerHTML = 'Mon Tableau 1 est: ' + tA + "<br>" + 'Mon Tableau 2 est: ' + tB + '<br>' + 'Mes Tableaus trier sont: ' + tC;  
}//Fin



// ALGORITHME Exo_7_7.
function Exo_7_7_jquery() {
 //var tableau1 <- [xxxxxx] 
    var tA = ['1', '3', '5', '7'];
    //var tableau2 <- [xxxxxx] 
    var tB = ['2', '6', '8', '9', '10'];
    //var tableau3 <- [] 
    var tC = [];
    //var bloolean 1 <- faut
    var bFinA = false;
    //var bloolean 2 <- faut
    var bFinB = false;
    //var iCompteur 1 <- 0
    var iComptA = 0;
    //var iCompteur 2 <- 0
    var iComptB = 0;
    //var iCompteur 3 <- 0
    var iCompt = -1;
    //var iNbA <- Longueur Tableau1
    var iNbA = tA.length;
    //var iNbA <- Longueur Tableau2
    var iNbB = tB.length;
    //var iNbGlob <- Longueur des deux tableaux
    var iNbGlob = iNbA + iNbB;
    //DEBUT
    //Tant que iCompteur 3 < Longueur des deux tableaux
    while (iCompt < iNbGlob) {
        //iCompteur3 + 1
        iCompt++;
        //Si tableau1[iCompteur1] < tableau2[iCompteur2] 
        if (tA[iComptA] < tB[iComptB]) {
            //tableau3[compteur1] <- tableau1[compteur1]
            tC[iCompt] = tA[iComptA]
            //iCompteur + 1
            iComptA++;
            //Si Compteur1 > Longueur Tableau1
            if (iComptA == iNbA) {
                //boolean1 <- vrai
                bFinA = true;
                //SiNon
            } else {
                //bloolean1 <- faut
                bFinA = false;
            }//FinSi
            //SiNonSi
        } else {
            //tableau3[iCompteur3] <- tableau2[icompteur2]
            tC[iCompt] = tB[iComptB];
            //iCompteur2 <- +1
            iComptB++;
            //Si iCompteur2 > Longueur Tableau2
            if (iComptB ==iNbB) {
                //bloolean2 <- vrais
                bFinB = true;
            } else {
                //bloolean2 <- faut
                bFinB = true;
            }//FinSi
        }//FinSi
    }//FinTanQue
    $('#execut').html('Mon Tableau 1 est: ' + tA + "<br>" + 'Mon Tableau 2 est: ' + tB + '<br>' + 'Mes Tableaus trier sont: ' + tC);  
}//FIN









