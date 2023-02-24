/* --------------------------exercic js--------------------------- */
// ALGORITHME Exo_5_5
function Exo_5_5_js() {
        //VARIABLE iNb, iI, sStr, bCalc
    var iNb, bCalc, iI, sStr;
    //Ecrire "Entrez un nombre"
    //lire iNb
    iNb = document.getElementById('Nb').value;
    //sStr = " "
    sStr = " ";
    //Pour iI = 1; iI < 11; iI++
    for (iI = 1; iI < 11; iI++) {
        //bCalc = iNb * sStr
        bCalc = iNb * iI;
        //sStr = sStr + iNb + 'X' + iI + '=' + bCalc + '<br>'
        sStr = sStr + iNb + ' X ' + iI + ' = ' + bCalc + "<br>";
        //Ecrire iNb + "X" + "sStr" + "=" + bCalc
        document.getElementById("execut").innerHTML = sStr + "<br>";
      }
      
}
  
  
  /* ---------------------------exercic jquery-------------------------- */
// ALGORITHME Exo_5_5
  function Exo_5_5_jquery() {
    //VARIABLE iNb, iI, sStr, bCalc
    var iNb, bCalc, iI, sStr;
    //Ecrire "Entrez un nombre"
    //lire iNb
    iNb = $('#Nb').val();
    //sStr = " "
    sStr = " ";
    //Pour iI = 1; iI < 11; iI++
    for (iI = 1; iI < 11; iI++) {
        //bCalc = iNb * sStr
        bCalc = iNb * iI;
        //sStr = sStr + iNb + 'X' + iI + '=' + bCalc + '<br>'
        sStr = sStr + iNb + ' X ' + iI + ' = ' + bCalc + "<br>";
        //Ecrire iNb + "X" + "sStr" + "=" + bCalc
        $("#execut").html(sStr + "<br>");
      }

}
  
  
  
  
