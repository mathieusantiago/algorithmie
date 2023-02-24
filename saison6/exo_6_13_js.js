/* --------------------------genere input   --------------------------- */
function InputMax() {

    var iInput, result_form, html = "";
    iInput = document.getElementById("iValRand").value;
    result_form = document.getElementById('form-rand');
  
    for (i = 1; i < iInput; i++) {
      var iRandom = Math.floor(Math.random() * 100) + 1
      html += "<input name=\"iVal" + i + "\"id=\"iVal" + i + "\" value=\"" + iRandom + "\">"
    }
    result_form.innerHTML = html;
  }
  


/* --------------------------exercic js--------------------------- */
// ALGORITHME Exo_6_13.
function Exo_6_13_js(){
    // Algorithme 6.13
    // Tableau aTableau
    // Variables iVal, iNbPlusGrand = 1, iPosition = 0 en numerique
    var iTabl= [], iNbPlusGrand = 0, iPosition = 0;
    result = document.getElementById('execut');
    result_form = document.getElementById('iValRand').value;
    // POUR i = 1 à result_form
    for(i=1; i<result_form; i++){
    //     ECRIRE "Combien de valeurs souhaitez-vous saisir ?"
    // LIRE iNbVal
        iVal = +document.getElementById('iVal' + i).value;
        // SI (iVal > iNbPlusGrand) ALORS
        if (iVal>iNbPlusGrand){
            // iNbPlusGrand = iVal
            iNbPlusGrand = iVal;
            // iPosition = i
            iPosition = i;
        //FINSI
        }
        // aTableau(i) = iVal
        iTabl[i] = iNbPlusGrand;
    }
    // ECRIRE "Plus grand = " + iPlusGrand
    // ECRIRE "Position = " + iPosition
    result.innerHTML = 'Le nombre le plus grand est = ' + iNbPlusGrand + "<br>" +  'Position ' + iPosition;                    
}

/* ---------------------------exercic jquery-------------------------- */
// ALGORITHME Exo_6_13.
function Exo_6_13_jquery() {
    var iTabl= [], iNbPlusGrand = 0, iPosition = 0;
    result = $('#execut');
    result_form = $('#iValRand').val();

    for(i=1; i<result_form; i++){
        iVal = +$('#iVal' + i).val();
        if (iVal>iNbPlusGrand){
            iNbPlusGrand = iVal;
            iPosition = i;
        }
        iTabl[i] = iNbPlusGrand;
    }
    result.html('Le nombre le plus grand est = ' + iNbPlusGrand + "<br>" +  'Position ' + iPosition);                               
}






