/* --------------------------exercic js--------------------------- */
function Exo_3_2_js() {
  
    //je declar mes variable
    var iNB1 = document.getElementById('InputNB1').value;
    var iNB2 = document.getElementById('InputNB2').value;
    var select = document.getElementById('execut');
    //je crée ma structure html
    var sStart = '<section class="color-code"><div class="color-result"><p>';
    var sEnd = '</p></div></section>';
    var sPositif = sStart  + 'Leur produit est positif' + sEnd
    var sNegatif = sStart  + 'Leur produit est negatif' + sEnd;
    //je crée ma condition
    if ((iNB1 > 0 && iNB2 > 0) || (iNB1 < 0 && iNB2 < 0)) {
      select.innerHTML = sPositif;  
    } else {
      select.innerHTML = sNegatif;
    }
  }
  
  /* -----------------------------exercic jsprompt------------------------ */
  function Exo_3_2_jsPrompt() {
    //je declare mes variable
    var iNB1 = prompt('Entrez un nombre');
    var iNB2 = prompt('Entrez un nombre');
    //je crée ma structure html
    var sPositif = ' Leur produit est positif';
    var sNegatif = ' Leur produit est negatif';
    if ((iNB1 > 0 && iNB2 > 0) || (iNB1 < 0 && iNB2 < 0)) {
      alert(sPositif);
    } else {
      alert(sNegatif);
    }
  }
  
  /* ---------------------------exercic jquery-------------------------- */
  function Exo_3_2_jquery() {
    //je declare mes variable
    var iNB1 = $('#InputNB1').val();
    var iNB2 = $('#InputNB2').val();
    //je crée ma structure html
    var sStart = '<section class="color-code"><div class="color-result"><p>';
    var sEnd = '</p></div></section>';
    var sPositif = sStart +'Leur produit est positif' + sEnd;
    var sNegatif = sStart +' Leur produit est negatif' + sEnd;
    //je crée ma condition
    if ((iNB1 > 0 && iNB2 > 0) || (iNB1 < 0 && iNB2 < 0)) {
      $('#execut').html(sPositif);
    } else {
      $('#execut').html(sNegatif);
    }
  }
  
  
  
  