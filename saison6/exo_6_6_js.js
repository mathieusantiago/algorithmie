/* --------------------------exercic js--------------------------- */
// ALGORITHME Exo_6_6.
function Exo_6_6_js() {
    var iTabSuite = [1, 1];
    sHtml ='';
    for (i = 2; i < 7; i++) {
        iTabSuite.push(iTabSuite[i - 1] + iTabSuite[i - 2]);
    }
    for (i = 0; i < 7; i++) {
         sHtml+= "Les Nombres son :" +   iTabSuite[i] + '<br>'; 
    }
    document.getElementById('execut').innerHTML = sHtml;
}


/* ---------------------------exercic jquery-------------------------- */
// ALGORITHME Exo_6_6.
function Exo_6_6_jquery() {
    var iTabSuite = [1, 1];
    sHtml ='';
    for (i = 2; i < 7; i++) {
        iTabSuite.push(iTabSuite[i - 1] + iTabSuite[i - 2]);
    }
    for (i = 0; i < 7; i++) {
         sHtml+= "Les Nombres son :" +   iTabSuite[i] + '<br>';
    }
    $('#execut').html(sHtml);
}
