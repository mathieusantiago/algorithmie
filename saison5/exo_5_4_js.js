/* --------------------------exercic js--------------------------- */
function Exo_5_4_js() {
  //VARIABLE sStr en String;
  //VARIABLE iI, iNb, en INTEGER 
  //VARIABLE bCalc en BOOLEAN
  var sStr, iI, iNb, bCalc;
    //DEBUT
  // Ecrire 'Entrez in nombre'
  // Lire iNb 
  iNb = document.getElementById("Nb").value;
    //sStr = ""
  sStr = "";
  //bCalc = iNb + 12
  bCalc = +iNb + 10;
  //pour i = iNb  i < bCalc i++
  for (iI = iNb; iI < bCalc; iI++) {
    //sStr = sStr + 1 + ' '
    sStr = sStr + iI + ' ';
    //ecrire sStr
    document.getElementById("execut").innerHTML = sStr + "<br>";
  }
}

/* ---------------------------exercic jquery-------------------------- */
function Exo_5_4_jquery() {
  //VARIABLE sStr en String;
  //VARIABLE iI, iNb, en INTEGER 
  //VARIABLE bCalc en BOOLEAN
  var sStr, iI, iNb, bCalc;
    //DEBUT
  // Ecrire 'Entrez in nombre'
  // Lire iNb 
  iNb = $("#Nb").val();
    //sStr = ""
  sStr = "";
  //bCalc = iNb + 12
  bCalc = +iNb + 11;
  //pour i = iNb  i < bCalc i++
  for (iI = iNb; iI < bCalc; iI++) {
    //sStr = sStr + 1 + ' '
    sStr = sStr + iI + ' ';
    //ecrire sStr
    $("#execut").html(sStr + "<br>");
  }
}





       //VARIABLE sStr en String;
    //VARIABLE iI, iNb, en INTEGER 
    //VARIABLE bCalc en BOOLEAN
    //DEBUT
    // Ecrire 'Entrez in nombre'
    // Lire iNb 
    //sStr = ""
    //bCalc = iNb + 12
    //pour i = iNb  i < bCalc i++
      //sStr = sStr + 1 + ' '
      //ecrire sStr
    //Fin de pour  
    //FIN




    // }
    //functio
    //VARIABLE sStr en String;
    //VARIABLE iI, iNb, en INTEGER 
    //VARIABLE bCalc en BOOLEAN
    //DEBUT
    // Ecrire 'Entrez in nombre'
    // Lire iNb 
    //sStr = ""
    //bCalc = iNb + 12
    //pour iI = iNb  iI < bCalc iI++
      //sStr = sStr + 1 + ' '
      //ecrire sStr
    //Fin de pour  
    //FIN




