/* --------------------------exercic js--------------------------- */

function Exo_2_2_js() {

     /* ------ecrire dans le label ---------- */
     document.getElementById('form-label').innerHTML = 'Entrez un nombre';
     /* --------recupere la valeur de l'input---------- */
     var iInput = document.getElementById('InputEmail1').value;
     /* ---------on calcule -------- */
     var iClalc = iInput * iInput;
     /* ---------------------ej select un element ----------------------- */
     var sSelector = document.getElementById('execut');
     /* -------------------je crée mon html----------------------- */
     sMessage= "";
     sMessage += '<section class="color-code"><div class="color-result"><p>';
     sMessage += 'Son carré est: ' + iClalc;
     sMessage += '</p></div></section>';

     sSelector.innerHTML = sMessage;
}

function Exo_2_2_jsPrompt(){

    /* ------------------ecrire dans le label ------------------------- */
    document.getElementById('form-label').innerHTML = 'Entrez un nombre';

    /* ---------------------je select un element ----------------------- */
    var sReturn = prompt('Entrez une valeur');

     /* ---------------------on calcule ----------------------- */
     var iClalc = sReturn * sReturn;

    alert('Son carré est:' + iClalc);
}

/* ---------------------------exercic jquery-------------------------- */
function Exo_2_2_jquery(){

    //je declar mes variable
      var sInput = $('#InputEmail1').val();
      var iCalc = sInput * sInput;

    //j'écrie mon resultat 
      $('#execut').html("<section class='color-code'><div class='color-result'><p> Son carré est:" + iCalc + "</p></div></section>");
}
    
    