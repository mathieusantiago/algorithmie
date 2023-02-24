/* --------------------------exercic js--------------------------- */
// ALGORITHME Exo_6_1.
function Exo_6_1_js() {
    //VARIABLES itableau, iI,
  var iTableau = [];
  //Pour iI pas de 7 iI+
  for (iI =1; iI <= 7; iI++) {
      //iTableau[index]
      iTableau[iI] = 0;
      //Ecrire 'les numeros son: index  iTableau
      document.getElementById('execut').innerHTML += '<br> Les numeros sont: ' + iI + ' ' + iTableau;
      
  }

}

/* ---------------------------exercic jquery-------------------------- */
// ALGORITHME Exo_6_1.
//variable globlal iCalcPirx = 0 en NUMERIQUE

function Exo_6_1_jquery() {
    //VARIABLES itableau, iI,
    var iTableau = [];
    //Pour iI pas de 7 iI+
    for (iI =0; iI <= 7; iI++) {
        //iTableau[index]
        iTableau[iI] = 0;
        //Ecrire 'les numeros son: index  iTableau
        $('#execut').append('<br> Les numeros son: ' + iI + ' ' + iTableau);
        
    }
}
