
/* --------------------------genere input   --------------------------- */
function InputMax7_1() {

    var iInput, execut_form, html = "";
    iValRand = document.getElementById("iValRand").value;
    execut_form = document.getElementById('form-rand');

    for (i = 0; i < iValRand; i++) {
        var iRandom = Math.round(Math.random() * 101) 
        html += "<input name=\"iVal" + i + "\"id=\"iVal" + i + "\" value=\"" + iRandom + "\">"
    }
    execut_form.innerHTML = html;
}

/* --------------------------exercic js--------------------------- */
// ALGORITHME Exo_6_15.
function Exo_7_1_js() {
   //     Tableau aTableau
   var aTableau = [];
   //     variables iValRand, iCompteur, iCompteur2 , iVal en numerique
   var iValRand
   var iCompteur;
   var iCompteur2;
   var iVal;
   var iCompteur3;
   var iexecut;

   //DEBUT
   //  ECRIRE "Combien de valeurs souhaitez-vous saisir ?"
   //  LIRE iValRand
   iValRand = document.getElementById("iValRand").value;
   console.log("iValRand = " + iValRand);
   // Redim aTableau(iValRand -)
   aTableau.length = iValRand - 1;
   console.log("aTableau.length = " + aTableau.length);
   aTableau[0] = "";
   //  POUR iCompteur de 0 à iValRand - 1
   for (iCompteur = 0; iCompteur <= iValRand - 1; iCompteur++) {
       // LIRE iVal
       iVal = document.getElementById("iVal" + (iCompteur)).value;
       console.log("iVal = " + iVal);
       // iCompteur2 = iCompteur
       iCompteur2 = iCompteur;
       console.log("iCompteur2 = " + iCompteur2);
       // TANTQUE (iVal < aTableau[iCompteur2]) ET (iCompteur2 > 0)
       while ((iVal < aTableau[(iCompteur2 - 1)]) && (iCompteur2 > 0)) {
           // 	aTableau[iCompteur2]= aTableau[iCompteur2 - 1]
           aTableau[iCompteur2] = aTableau[(iCompteur2 - 1)];
           // 	iCompteur2 = iCompteur2 - 1
           iCompteur2--;
           // FIN TANTQUE
       }
       // aTableau[iCompteur2] = iVal
       aTableau[iCompteur2] = iVal;
       //iCompteur SUIVANT
   }
   console.log("aTableau = " + aTableau);
   //  ECRIRE "Tableau rangé = " +aTableau
   document.getElementById("execut").innerHTML += "Tableau rangé = " + aTableau + "<br>";
   // je boucle de 0 à iValRand
   for (iCompteur3 = 0; iCompteur3 <= iValRand; iCompteur3++) {
       console.log("entrée dans boucle FOR OK");
       // Si la valeur de l'index i+2 - la valeur de l'index i+1 est égale à 1
       if (((aTableau[iCompteur3 + 2] - aTableau[iCompteur3 + 1]) == 1)) {
           console.log("entrée dans if condition 1 OK");
           iexecut = "Les chiffres sont consécutifs";
           // Si la valeur de l'index i+2 - la valeur de l'index i+1 est suppérieure à 1
       } else if ((aTableau[iCompteur3 + 2] - aTableau[iCompteur3 + 1]) > 1) {
           console.log("entrée dans if condition 2 OK");
           iexecut = "Les chiffres ne sont pas consécutifs";
       }
   }
   document.getElementById("execut").innerHTML += iexecut;
}

// ALGORITHME Exo_7_1.
function Exo_7_1_jquery() {
   //     Tableau aTableau
   var aTableau = [];
   //     variables iValRand, iCompteur, iCompteur2 , iVal en numerique
   var iValRand
   var iCompteur;
   var iCompteur2;
   var iVal;
   var iCompteur3;
   var iexecut;

   //DEBUT
   //  ECRIRE "Combien de valeurs souhaitez-vous saisir ?"
   //  LIRE iValRand
   iValRand = $("#iValRand").val();
   // Redim aTableau(iValRand -)
   aTableau.length = iValRand - 1;
   aTableau[0] = "";
   //  POUR iCompteur de 0 à iValRand - 1
   for (iCompteur = 0; iCompteur <= iValRand - 1; iCompteur++) {
       // LIRE iVal
       iVal = $("#iVal" + (iCompteur)).val();
       // iCompteur2 = iCompteur
       iCompteur2 = iCompteur;
       // TANTQUE (iVal < aTableau[iCompteur2]) ET (iCompteur2 > 0)
       while ((iVal < aTableau[(iCompteur2 - 1)]) && (iCompteur2 > 0)) {
           // 	aTableau[iCompteur2]= aTableau[iCompteur2 - 1]
           aTableau[iCompteur2] = aTableau[(iCompteur2 - 1)];
           // 	iCompteur2 = iCompteur2 - 1
           iCompteur2--;
           // FIN TANTQUE
       }
       // aTableau[iCompteur2] = iVal
       aTableau[iCompteur2] = iVal;
       //iCompteur SUIVANT
   }
   //  ECRIRE "Tableau rangé = " +aTableau
   $("#execut").append("Tableau rangé = " + aTableau + "<br>");
   // je boucle de 0 à iValRand
   for (iCompteur3 = 0; iCompteur3 <= iValRand; iCompteur3++) {
       // Si la valeur de l'index i+2 - la valeur de l'index i+1 est égale à 1
       if (((aTableau[iCompteur3 + 2] - aTableau[iCompteur3 + 1]) == 1)) {
           iexecut = "Les chiffres sont consécutifs";
           // Si la valeur de l'index i+2 - la valeur de l'index i+1 est suppérieure à 1
       } else if ((aTableau[iCompteur3 + 2] - aTableau[iCompteur3 + 1]) > 1) {
           iexecut = "Les chiffres ne sont pas consécutifs";
       }
   }
   $("#execut").append(iexecut);
}
