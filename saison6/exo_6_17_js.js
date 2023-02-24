
/* --------------------------genere input   --------------------------- */
function InputMax6_17() {

    var iInput, result_form, html = "";
    iValRand = document.getElementById("iValRand").value;
    result_form = document.getElementById('form-rand');

    for (i = 0; i < iValRand; i++) {
        var iRandom = Math.round(Math.random() * 101) 
        html += "<input name=\"iVal" + i + "\"id=\"iVal" + i + "\" value=\"" + iRandom + "\">"
    }
    result_form.innerHTML = html;
}

/* --------------------------exercic js--------------------------- */
// ALGORITHME Exo_6_15.
function Exo_6_17_js() {
   //variable tab[] in ARRAY
    //variable iInput, iValRand in Integer
    var tab = [];
    var iInput;
    var iValRand = document.getElementById("iValRand").value;
    // Ecrire 'compien de formulaire vouez vous'
    //Lire iValRand
    for (i = 0; i < iValRand; i++) {
        iInput = parseInt(document.getElementById("iVal" + i).value);
        tab[i] = parseInt(iInput);
    }
    
    function sort(tab) {
        //nombre des éléments dans le tableau
        var len = tab.length;       
        var tmp, i, j;                  
        
        for(i = 1; i < len; i++) {
          //stocker la valeur actuelle 
          tmp = tab[i]
          j = i - 1
          while (j >= 0 && tab[j] > tmp) {
            // déplacer le nombre
            tab[j+1] = tab[j] +" ";
            j--
          }
          //Insère la valeur temporaire à la position 
          //correcte dans la partie triée.
          tab[j+1] = tmp +" ";
        }
        return tab
      }
      //trie du tableau 
      sort(tab);
      document.getElementById('execut').innerHTML = tab;
}

// ALGORITHME Exo_6_17.
function Exo_6_17_jquery() {

       //variable tab[] in ARRAY
    //variable iInput, iValRand in Integer
    var tab = [];
    var iInput;
    var iValRand = $("#iValRand").val();
    // Ecrire 'compien de formulaire vouez vous'
    //Lire iValRand
    for (i = 0; i < iValRand; i++) {
        iInput = parseInt($("#iVal" + i).val());
        tab[i] = parseInt(iInput);
    }
    function sort(tab) {
        //nombre des éléments dans le tableau
        var len = tab.length;       
        var tmp, i, j;                  
        
        for(i = 1; i < len; i++) {
          //stocker la valeur actuelle 
          tmp = tab[i]
          j = i - 1
          while (j >= 0 && tab[j] > tmp) {
            // déplacer le nombre
            tab[j+1] = tab[j] + " ";
            j--
          }
          //Insère la valeur temporaire à la position 
          //correcte dans la partie triée.
          tab[j+1] = tmp + " ";
        }
        return tab
      }
      //trie du tableau 
      sort(tab);
      $('#execut').html(tab);                 
}
