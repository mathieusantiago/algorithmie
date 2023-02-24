/* --------------------------exercic js--------------------------- */
function Exo_3_3_js() {
  
    //je declar mes variable
    var sName1 = document.getElementById('Name1').value;
    var sName2 = document.getElementById('Name2').value;
    var sName3 = document.getElementById('Name3').value;
    var select = document.getElementById('execut');
    //je crée ma structure html
    var sStart = '<section class="color-code"><div class="color-result"><p>';
    var sEnd = '</p></div></section>';
    var sOrder = sStart  + 'Ces noms sont classés par ordre alphabetique' + sEnd
    var sNoOrder = sStart  + 'Ces noms ne sont pas classés par ordre alphabetique' + sEnd;
    //je crée ma condition
    if (sName1 < sName2 && sName2 < sName3){
      select.innerHTML = sOrder;  
    } else {
      select.innerHTML = sNoOrder;  
    }
  }
  
  /* -----------------------------exercic jsprompt------------------------ */
  function Exo_3_3_jsPrompt() {
    //je declare mes variable
    var sName1 = prompt('Entrez un nom');
    var sName2 = prompt('Entrez un nom');
    var sName3 = prompt('Entrez un nom');

    //je crée ma structure html
    var sOrder = ' Ces noms sont classés par ordre alphabetique';
    var sNoOrder = ' Ces noms ne sont pas classés par ordre alphabetique';
    if (sName1 < sName2 && sName2 < sName3) {
      alert(sOrder);
    } else {
      alert(sNoOrder);
    }
  }
  
  /* ---------------------------exercic jquery-------------------------- */
  function Exo_3_3_jquery() {
    //je declare mes variable
    var sName1 = $('#Name1').val();
    var sName2 = $('#Name2').val();
    var sName3 = $('#Name3').val();
    //je crée ma structure html
    var sStart = '<section class="color-code"><div class="color-result"><p>';
    var sEnd = '</p></div></section>';
    var sOrder = sStart +'Ces noms sont classés par ordre alphabetique' + sEnd;
    var sNoOrder = sStart +' Ces noms ne sont pas classés par ordre alphabetique' + sEnd;
    //je crée ma condition
    if  (sName1 < sName2 && sName2 < sName3) {
      $('#execut').html(sOrder);
    } else {
      $('#execut').html(sNoOrder);
    }
  }
  
  
  
  