/* --------------------------exercic js--------------------------- */
// ALGORITHME Exo_6_5.
function Exo_6_5_js() {
    
var N = Array(6);
var i = -1, k;
for(k = 0; k <= 6; k++){
  i = i + 2;
  N[k] = i; 
   document.getElementById('execut').innerHTML += N[k] + " ";
}
    // var i, k;
    // var N = [6];
    
    // N[0] = 1;
    // for(k = 1; k <= 6; k++){
    //   N[k] = N[k-1]+2; 
    // }
    // for(i =0; i <= 6; i++){
    //   document.getElementById('execut').innerHTML += N[i];
    // }
}

/* ---------------------------exercic jquery-------------------------- */
// ALGORITHME Exo_6_5.
function Exo_6_5_jquery() {
    var N = Array(6);
    var i = -1, k;
    for (k = 0; k <= 6; k++) {
        i = i + 2;
        N[k] = i;
        $('#execut').append(N[k]) + " ";
    }
}
    // var i, k;
    // var N = [6];
    
    // N[0] = 1;
    // for(k = 1; k <= 6; k++){
    //   N[k] = N[k-1]+2; 
    // }
    // for(i =0; i <= 6; i++){
    //   $('#execut').append(N[i]);
    // }