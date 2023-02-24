function Exo_2_3_js() {

    /* ------ecrire dans le label ---------- */
    document.getElementById('form-labelHT').innerHTML = 'Entrez le prix HT';
    document.getElementById('form-labelNB').innerHTML = 'Entrez le nombre d\'article';
    document.getElementById('form-labelTVA').innerHTML = 'Entrez taux de TVA';
    /* --------recupere la valeur de l'input---------- */
    var iInputPHT = document.getElementById('InputPHT').value;
    var iInputNB = document.getElementById('InputNB').value;
    var iInputTVA = document.getElementById('InputTVA').value;

    /* ---------on calcule -------- */
    var iClalc = iInputNB * iInputPHT *(1 + iInputTVA / 100);

    /* ---------------------ej select un element ----------------------- */
    var sSelector = document.getElementById('execut');

    /* -------------------je crée mon html----------------------- */
    sMessage= "";
    sMessage += '<section class="color-code"><div class="color-result"><p>';
    sMessage += 'le prix TTC et de: ' + iClalc + '€';
    sMessage += '</p></div></section>';

    sSelector.innerHTML = sMessage;
}


function Exo_2_3_jsPrompt() {
    
    /* ------ecrire dans le label ---------- */
    document.getElementById('form-labelHT').innerHTML = 'Entrez le prix HT';
    document.getElementById('form-labelNB').innerHTML = 'Entrez le nombre d\'article';
    document.getElementById('form-labelTVA').innerHTML = 'Entrez taux de TVA';
    /* --------recupere la valeur de l'input---------- */
    var iInputPHT = prompt('Entrez le prix HT');
    var iInputNB = prompt('Entrez le nombre d\'article');
    var iInputTVA = prompt('Entrez taux de TVA');

    /* ---------on calcule -------- */
    var iClalc = iInputNB * iInputPHT *(1 + iInputTVA / 100);

    /* -------------------je crée mon Prompt----------------------- */
    alert('le prix TTC et de: ' + iClalc + '€');

    sSelector.innerHTML = sMessage;
}


function Exo_2_3_jquery() {

    /* ------ecrire dans le label ---------- */
    $('#form-labelHT').html('Entrez le prix HT');
    $('#form-labelNB').html('Entrez le nombre d\'article');
    $('#form-labelTVA').html('Entrez taux de TVA');
    /* --------recupere la valeur de l'input---------- */
    var iInputPHT = $('#InputPHT').val();
    var iInputNB  = $('#InputNB').val();
    var iInputTVA = $('#InputTVA').val();

    /* ---------on calcule -------- */
    var iClalc = iInputNB * iInputPHT *(1 + iInputTVA / 100);

    /* -------------------je crée mon html----------------------- */
    $('#execut').html("<section class='color-code'><div class='color-result'><p>le prix TTC et de:" + iClalc + "€</p></div></section>");

}