/* --------------------------exercic js--------------------------- */
function Exo_4_2_js() {
    //je declar mes variable
  var iHeurs = parseInt(document.getElementById('heurs').value);
  var iMin = parseInt(document.getElementById('min').value);
  var iMin = parseInt(iMin + 1);
  var select = document.getElementById('execut');
   //je crée ma condition
   if (iMin === 60) {
    iMin = 0;
    iHeurs = iHeurs + 1;
   }
   if (iHeurs === 24) {
    iHeurs = 0;
   }
    //je crée ma structure html
    var sStart = '<section class="color-code"><div class="color-result"><p>';
    var sEnd = '</p></div></section>';
    select.innerHTML = sStart + ' Dans un minute il sera <br>' + iHeurs + ' Heurs ' + iMin + ' Minutes ' + sEnd;
    
       

}

/* -----------------------------exercic jsprompt------------------------ */
function Exo_4_2_jsPrompt() {
    //je declar mes variable
    var iHeurs = parseInt(prompt('Entrez une heur au format 24/'));
    var iMin = parseInt(prompt('Entrez une minutes'));
    var iMin = parseInt(iMin + 1);
     //je crée ma condition
     if (iMin === 60) {
      iMin = 0;
      iHeurs = iHeurs + 1;
     }
     if (iHeurs === 24) {
      iHeurs = 0;
     }
      //je crée ma structure html
      alert(' Dans un minute il sera \n' + iHeurs + ' Heurs ' + iMin + ' Minutes ');

}

/* ---------------------------exercic jquery-------------------------- */
function Exo_4_2_jquery() {
    //je declar mes variable
    var iHeurs = parseInt($('#heurs').val());
    var iMin = parseInt($('#min').val());
    var iMin = parseInt(iMin + 1);
    var select = $('#execut');
     //je crée ma condition
     if (iMin === 60) {
      iMin = 0;
      iHeurs = iHeurs + 1;
     }
     if (iHeurs === 24) {
      iHeurs = 0;
     }
      //je crée ma structure html
      var sStart = '<section class="color-code"><div class="color-result"><p>';
      var sEnd = '</p></div></section>';
      select.html(sStart + ' Dans un minute il sera <br>' + iHeurs + ' Heurs ' + iMin + ' Minutes ' + sEnd); 
}



