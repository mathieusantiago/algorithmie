/* --------------------------exercic js--------------------------- */

function Exo_2_1_js() {

//je declar mes variable
  var iVal = 231;
  var iDouble = iVal * 2;
  var sMessage = "";

//je selectionne mon element
  var currentDiv = document.getElementById('execut');

//je crée ma structure html
  sMessage += '<section class="color-code"><div class="color-result"><p>';
  sMessage += ' La valeur de Val:' + iVal + '<br> La valeur de Double:' + iDouble;
  sMessage += '</p></div></section>';

//j'écrie mon resultat 
  currentDiv.innerHTML = sMessage;
}


/* -----------------------------exercic jsprompt------------------------ */
function Exo_2_1_jsPrompt() {

//je declar mes variable
  var iVal = 231;
  var iDouble = iVal * 2;
  
//j'écrie mon resultat 
  alert('La valeur de Val:' + iVal + ' La valeur de Double:' + iDouble);
}

/* ---------------------------exercic jquery-------------------------- */
function Exo_2_1_jquery() {

//je declar mes variable
  var iVal = 231;
  var iDouble = iVal * 2;

//j'écrie mon resultat 
  $('#execut').html("<section class='color-code'><div class='color-result'><p> La valeur de Val:" + iVal + "<br> La valeur de Double:" + iDouble + "</p></div></section>")
}


