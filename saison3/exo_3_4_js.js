/* --------------------------exercic js--------------------------- */
function Exo_3_4_js() {
    //je declar mes variable
    var iNB = document.getElementById('InputNB').value;
    var select = document.getElementById('execut');
    //je crée ma structure html
    var sStart = '<section class="color-code"><div class="color-result"><p>';
    var sEnd = '</p></div></section>';
    var sPositif = sStart + iNB + ' est un nombre positif' + sEnd
    var sNegatif = sStart + iNB + '   est un nombre negatif' + sEnd;
    var sNull = sStart + iNB + '   est un nombre null' + sEnd;

    //je crée ma condition
    if (iNB < 0) {
      select.innerHTML = sNegatif;
    } else if(iNB == 0) {
      select.innerHTML = sNull;
    }else{
      select.innerHTML = sPositif;
    }
  }
  
  /* -----------------------------exercic jsprompt------------------------ */
  function Exo_3_4_jsPrompt() {
    var iNB = prompt('Entrez un nombre');
    //je crée ma structure html
    var sPositif = iNB + ' est un nombre positif';
    var sNegatif = iNB + ' est un nombre negatif';
    var sNull = iNB + ' est un nombre null';
    if (iNB < 0) {
      alert(sNegatif);
    } else if(iNB == 0) {
      alert(sNull);
    }else{
      alert(sPositif);
    }
  }
  
  /* ---------------------------exercic jquery-------------------------- */
  function Exo_3_4_jquery() {
    var iNB = $('#InputNB').val();
    //je crée ma structure html
    var sStart   = '<section class="color-code"><div class="color-result"><p>';
    var sEnd     = '</p></div></section>';
    var sPositif = sStart + iNB + ' est un nombre positif' + sEnd;
    var sNegatif = sStart + iNB + ' est un nombre negatif' + sEnd;
    var sNull    = sStart + iNB + ' est un nombre null' + sEnd;
    //je crée ma condition
    if (iNB < 0) {
      $('#execut').html(sNegatif);
    } else if(iNB == 0) {
      $('#execut').html(sNull);
    }else{
      $('#execut').html(sPositif);
    }
    
  }
  
  
  
  