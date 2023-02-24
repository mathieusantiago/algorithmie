/* --------------------------exercic js--------------------------- */
function Exo_3_1_js() {
  //je declar mes variable
  var iNB = document.getElementById('InputNB').value;
  var select = document.getElementById('execut');
  //je crée ma structure html
  var sStart = '<section class="color-code"><div class="color-result"><p>';
  var sEnd = '</p></div></section>';
  var sPositif = sStart + iNB + ' est un nombre positif' + sEnd
  var sNegatif = sStart + iNB + '   est un nombre negatif' + sEnd;
  //je crée ma condition
  if (iNB > 0) {
    select.innerHTML = sPositif;
  } else {
    select.innerHTML = sNegatif;
  }
}

/* -----------------------------exercic jsprompt------------------------ */
function Exo_3_1_jsPrompt() {
  var iNB = prompt('Entrez un nombre');
  //je crée ma structure html
  var sPositif = iNB + ' est un nombre positif';
  var sNegatif = iNB + ' est un nombre negatif';
  if (iNB > 0) {
    alert(sPositif);
  } else {
    alert(sNegatif);
  }
}

/* ---------------------------exercic jquery-------------------------- */
function Exo_3_1_jquery() {
  var iNB = $('#InputNB').val();
  var sSelect = $('#execut');
  //je crée ma structure html
  var sStart = '<section class="color-code"><div class="color-result"><p>';
  var sEnd = '</p></div></section>';
  var sPositif = sStart + iNB + ' est un nombre positif' + sEnd;
  var sNegatif = sStart + iNB + ' est un nombre negatif' + sEnd;
  //je crée ma condition
  if (iNB > 0) {
    $('#execut').html(sPositif);
  } else {
    $('#execut').html(sNegatif);
  }
  
}



