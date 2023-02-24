/* --------------------------exercic js--------------------------- */
function Exo_4_4_js() {
    //je declar mes variable
  var iNb = parseInt(document.getElementById('Nb').value);
  var select = document.getElementById('execut');
   //je crée ma condition
  if (iNb <= 10) {
    var iCalc = iNb * 0.10;
  }
  if (iNb <= 20 && iNb > 10) {
    var iCalc = iNb * 0.09;
  }
  if (iNb >= 20) {
    var iCalc = iNb * 0.08;
  }
    //je crée ma structure html
    var sStart = '<section class="color-code"><div class="color-result"><p>';
    var sEnd = '</p></div></section>';
    select.innerHTML = sStart + 'Votre facture sera de ' + iCalc.toFixed(2)  + '€ pour ' + iNb + ' photocopie ' +sEnd;
}

/* -----------------------------exercic jsprompt------------------------ */
function Exo_4_4_jsPrompt() {
    //je declar mes variable
    var iNb = parseInt(prompt('Etrez le nombre de copie'));
     //je crée ma condition
     if (iNb <= 10) {
      var iCalc = iNb * 0.10;
    }
    if (iNb <= 20 && iNb > 10) {
      var iCalc = iNb * 0.09;
    }
    if (iNb >= 20) {
      var iCalc = iNb * 0.08;
    }
      //je crée ma structure html
      alert('Votre facture sera de ' + iCalc.toFixed(2) + '€ pour ' + iNb + ' photocopie ');
}

/* ---------------------------exercic jquery-------------------------- */
function Exo_4_4_jquery() {
    //je declar mes variable
    var iNb = parseInt($('#Nb').val());
    var select = $('#execut');
     //je crée ma condition
    if (iNb <= 10) {
      var iCalc = iNb * 0.10;
    }
    if (iNb <= 20 && iNb > 10) {
      var iCalc = iNb * 0.09;
    }
    if (iNb >= 20) {
      var iCalc = iNb * 0.08;
    }
      //je crée ma structure html
      var sStart = '<section class="color-code"><div class="color-result"><p>';
      var sEnd = '</p></div></section>';
      select.html( sStart + 'Votre facture sera de ' + iCalc.toFixed(2)  + '€ pour ' + iNb + ' photocopie ' +sEnd);
}



