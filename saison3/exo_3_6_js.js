/* --------------------------exercic js--------------------------- */
function Exo_3_6_js() {
    //je declar mes variable
    var iAge = document.getElementById('age').value;
    var select = document.getElementById('execut');
    //je crée ma structure html
    var sStart = '<section class="color-code"><div class="color-result"><p>';
    var sEnd = '</p></div></section>';
    var sPoussin = sStart + 'l\'enfant est de catégorie Poussin' + sEnd
    var sPupille = sStart + 'l\'enfant est de catégorie Pupille' + sEnd;
    var sMinime = sStart + 'l\'enfant est de catégorie Minime' + sEnd;
    var sCadet = sStart + 'l\'enfant est de catégorie Cadet' + sEnd;
    if (iAge <= 6) {
        select.innerHTML = sPoussin;
    } else if (iAge <= 8) {
        select.innerHTML = sPupille;
    } else if (iAge <= 10) {
        select.innerHTML = sMinime;
    } else if (iAge <= 12) {
        select.innerHTML = sCadet;
    }
}

/* -----------------------------exercic jsprompt------------------------ */
function Exo_3_6_jsPrompt() {
    //je declare mes variable
    var iAge = prompt('Entrez l\'age de l\'enfant');
    //je crée ma structure html
    var sPoussin = 'l\'enfant est de catégorie Poussin';
    var sPupille = 'l\'enfant est de catégorie Pupille';
    var sMinime = 'l\'enfant est de catégorie Minime';
    var sCadet = 'l\'enfant est de catégorie Cadet';
    //je crée ma condition
    if (iAge <= 6) {
        alert(sPoussin);
    }else if (iAge <= 8){
       alert(sPupille);
    }else if (iAge <= 10){
       alert(sMinime);
    }else if (iAge <= 12){
       alert(sCadet);
    }
}

/* ---------------------------exercic jquery-------------------------- */
function Exo_3_6_jquery() {
    //je declare mes variable
    var iAge = $('#age').val();
    //je crée ma structure html
    var sStart = '<section class="color-code"><div class="color-result"><p>';
    var sEnd = '</p></div></section>';
    var sPoussin = sStart + 'l\'enfant est de catégorie Poussin' + sEnd
    var sPupille = sStart + 'l\'enfant est de catégorie Pupille' + sEnd;
    var sMinime = sStart + 'l\'enfant est de catégorie Minime' + sEnd;
    var sCadet = sStart + 'l\'enfant est de catégorie Cadet' + sEnd;
    //je crée ma condition
    if (iAge <= 6) {
        $('#execut').html(sPoussin);
    } else if (iAge <= 8) {
       $('#execut').html(sPupille);
    } else if (iAge <= 10) {
       $('#execut').html(sMinime);
    } else if (iAge <= 12) {
       $('#execut').html(sCadet);
    }
}



