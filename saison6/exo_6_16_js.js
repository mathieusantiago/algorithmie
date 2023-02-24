
/* --------------------------genere input   --------------------------- */
function InputMax6_16() {

    var iInput, result_form, html = "";
    iInput = document.getElementById("iValRand").value;
    result_form = document.getElementById('form-rand');

    for (i = 0; i < iInput; i++) {
        var iRandom = Math.floor(Math.random() * 100) + 1
        html += "<input name=\"iVal" + i + "\"id=\"iVal" + i + "\" value=\"" + i + "\">"
    }
    result_form.innerHTML = html;
}

/* --------------------------exercic js--------------------------- */
// ALGORITHME Exo_6_15.
function Exo_6_16_js() {
    //variable iTabl[] in ARRAY
    //variable iInput, iValRand in Integer
    //vaiable bOrder, in boolean 
    var iTabl = [];
    var iInput;
    var bOrder = false;
    // Ecrire 'compien de formulaire vouez vous'
    //Lire iValRand
    iValRand = document.getElementById("iValRand").value;
    //pour i 0 a iValRand
    for (i = 0; i > iValRand; i++) {
        //lire les X valeur rentré par l'utilisateur 
        iInput = parseInt(document.getElementById("iVal" + i).value);
        //Ranger les valeur dans un tableau 
        iTabl[i] = parseInt(iInput);
    //FinPour
    }
    //pour i 1 a iValRand
    for (i = 1; i < iValRand; i++) {
        //j = i -1
        j = i - 1;
        //si iTabl[i] > iTabl[j]
        if (iTabl[i] > iTabl[j]) {
            //bOrder = vrais
            bOrder = true; 
        //SiNon    
        } else {
            //bOrder = faut
            bOrder = false;
        }
        //FinDeSi
        //Si diférant de bOrder
        if (!bOrder) {
            //bOrder = faut
            bOrder = false;
        }
    }
    //si bOrder = a vrais alors 
        //Ecrire 'les nombre son dans l'ordre 
    ///SiNon
        //Ecrire 'les nombre son dans les desordre 
    var sHtml = bOrder ?"Les nombres sont dans l'order":"les nombres sont dans le désordre";
    document.getElementById("execut").innerHTML = sHtml;
    console.log(iTabl);
}

// ALGORITHME Exo_6_16.
function Exo_6_16_jquery() {
     //variable iTabl[] in ARRAY
    //variable iInput, iValRand in Integer
    //vaiable bOrder, in boolean 
    var iTabl = [];
    var iInput;
    var bOrder = false;
    // Ecrire 'compien de formulaire vouez vous'
    //Lire iValRand
    iValRand = document.getElementById("iValRand").value;
    //pour i 0 a iValRand
    iValRand = $("#iValRand").val();
    for (i = 0; i > iValRand; i++) {
        //lire les X valeur rentré par l'utilisateur 
        iInput = parseInt($("#iVal" + i).val());
        //Ranger les valeur dans un tableau 
        iTabl[i] = parseInt(iInput);
    //FinPour
    }
    //pour i 1 a iValRand
    for (i = 1; i < iValRand; i++) {
        //j = i -1
        j = i - 1; 
        //si iTabl[i] > iTabl[j]
        if (iTabl[i] > iTabl[j]) {
            //bOrder = vrais
            bOrder = true; 
        } else {
            //bOrder = faut
            bOrder = false;
        }
        //FinDeSi
        //Si diférant de bOrder
        if (!bOrder) {
            //bOrder = faut
            bOrder = false;
        }
    }
     //si bOrder = a vrais alors 
        //Ecrire 'les nombre son dans l'ordre 
    ///SiNon
        //Ecrire 'les nombre son dans les desordre
    var sHtml = bOrder ?"Les nombres sont dans l'order":"les nombres sont dans le désordre";
    $("#execut").html(sHtml);
    console.log(iTabl);                       
}
