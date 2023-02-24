/* --------------------------exercic js--------------------------- */
// ALGORITHME Exo_6_2.
function Exo_6_2_js() {
    //Variable iTableau[]
    var iTableau = [];
    //iTableau[x] = 'x'
    iTableau[0] = 'a';
    iTableau[1] = 'e';
    iTableau[2] = 'i';
    iTableau[3] = 'o';
    iTableau[4] = 'u';
    iTableau[5] = 'y';
    //Ecrire 'mon tableau et :'
    document.getElementById('execut').innerHTML = 'mon tableau et: <br>' + iTableau[0] + '<br>' + iTableau[1] + '<br>' + iTableau[2] + '<br>' + iTableau[3] + '<br>' + iTableau[4] + '<br>' + iTableau[5] + '<br>';
    console.log(iTableau[4]);
}

/* ---------------------------exercic jquery-------------------------- */
// ALGORITHME Exo_6_2.


function Exo_6_2_jquery() {
    var iTableau = [];

    iTableau[0] = 'a';
    iTableau[1] = 'e';
    iTableau[2] = 'i';
    iTableau[3] = 'o';
    iTableau[4] = 'u';
    iTableau[5] = 'y';

    $('#execut').html('mon tableau et: <br>' + iTableau[0] + '<br>' + iTableau[1] + '<br>' + iTableau[2] + '<br>' + iTableau[3] + '<br>' + iTableau[4] + '<br>' + iTableau[5] + '<br>');
    console.log(iTableau[4]);
}
