/* --------------------------exercic js--------------------------- */
// ALGORITHME Exo_5_10.
//variable globlal iCalcPirx = 0 en NUMERIQUE
let iCalcPrix = 0
function Exo_5_10_js() {
    //variable iPrix, NUMERIQUE
    //variable sBtn, STRING
    var iPrix, sBtn;
    sBtn = '<button id="Monais" onClick="Exo_5_10_jsRendu()" class="btnExecut btn btn-info" name="Monais"><p>Rendu monais</p></button>'
    //Ecrire 'entrez le prix de vos article'
    //lire iPrix
    iPrix = prompt('Entrez le prix de vos article');                    
    //TanQue iPrix <>0
    while (iPrix != 0) {
        //iCalcPrix = iCaclPrix + iPrix
        iCalcPrix = parseInt(iCalcPrix) + parseInt(iPrix);
        //Ecrire 'entrez le prix de vos article'
        //Lire iPrix
        iPrix = prompt('Entrez le prix de vos article')
    }
    //ecrire 'Total a pyer' + iCalcPrix + '€"
    document.getElementById('execut').innerHTML = 'Total a payer ' + iCalcPrix + '€ <br>' + sBtn;
}
function Exo_5_10_jsRendu() {
    //Variable iRendu, iPaiment, iBiller10 =0, iBiller5 =0, iPiece1 =0 
    var iRendu, iPaiment = 0, iBiller5 =0, iBiller10=0, iPiece1=0;
    //Ecrire " vous devez "
    //Lire iPaiment
    iPaiment = document.getElementById('Nb').value;
    //iRendu = iPaiment -iCalcPrix
    iRendu = iPaiment - iCalcPrix;
    //Ecrire 'total a rendre' + iRendu + '€'
    document.getElementById('execut').innerHTML = 'Total a rendre : '+ iRendu + '€ <br>';
    //Tanque iRendu <>
    while (iRendu !=0 ) {
        //Si iRendu >= 10
        if (iRendu >= 10) {
            //iRendu = iRendu -10
            iRendu = iRendu -10;
            //iBiller10 = iBiller10 +1;          
            iBiller10 = iBiller10 +1;
        //SiNonSi iRendu >= 5    
        }else if (iRendu >= 5) {
            //iRendu = iRendu - 5;
            iRendu = iRendu - 5;
            //iBiller5 = iBiller5 +1
            iBiller5 = iBiller5 +1
        //SiNon    
        }else{
            //iRendu = iRendu -1;
            iRendu = iRendu -1;
            //iPiece1 =iPiece1 +1
            iPiece1 =iPiece1 +1
        }
    }
    //Ecrire 'rendre" + iBiller10 + billets de 10€
    //Ecrire 'rendre" + iBiller5 + billets de 5€
    //Ecrire 'rendre" + iPiece1 + piece1 de 1€
    document.getElementById("execut").innerHTML += "Rendre " +iBiller10 +" billets de 10€" +"<br>";
    document.getElementById("execut").innerHTML += "Rendre " +iBiller5 +" billets de 5€" +"<br>";
    document.getElementById("execut").innerHTML += "Rendre " +iPiece1 +" pièces de 1€" +"<br>";
}


/* ---------------------------exercic jquery-------------------------- */
// ALGORITHME Exo_5_10.
//variable globlal iCalcPirx = 0 en NUMERIQUE

function Exo_5_10_jquery() {
    //variable iPrix, NUMERIQUE
    //variable sBtn, STRING
    var iPrix, sBtn;
    sBtn = '<button id="Monais" onClick="Exo_5_10_jsRendu()" class="btnExecut btn btn-info" name="Monais"><p>Rendu monais</p></button>'
    //Ecrire 'entrez le prix de vos article'
    //lire iPrix
    iPrix = prompt('Entrez le prix de vos article');
    //TanQue iPrix <>0
    while (iPrix != 0) {
        //iCalcPrix = iCaclPrix + iPrix
        iCalcPrix = parseInt(iCalcPrix) + parseInt(iPrix);
        //Ecrire 'entrez le prix de vos article'
        //Lire iPrix
        iPrix = prompt('Entrez le prix de vos article')
    }
    //ecrire 'Total a pyer' + iCalcPrix + '€"
    $('#execut').html('Total a payer ' + iCalcPrix + '€ <br>' + sBtn);
}
function Exo_5_10_jsRendu() {
    //Variable iRendu, iPaiment, iBiller10 =0, iBiller5 =0, iPiece1 =0 
    var iRendu, iPaiment = 0, iBiller5 =0, iBiller10=0, iPiece1=0;
    //Ecrire " vous devez "
    //Lire iPaiment
    iPaiment = $('#Nb').val();
    //iRendu = iPaiment -iCalcPrix
    iRendu = iPaiment - iCalcPrix;
    //Ecrire 'total a rendre' + iRendu + '€'
    $('#execut').html('Total a rendre : '+ iRendu + '€ <br>');
    //Tanque iRendu <>
    while (iRendu !=0 ) {
        //Si iRendu >= 10
        if (iRendu >= 10) {
            //iRendu = iRendu -10
            iRendu = iRendu -10;
            //iBiller10 = iBiller10 +1;          
            iBiller10 = iBiller10 +1;
        //SiNonSi iRendu >= 5    
        }else if (iRendu >= 5) {
            //iRendu = iRendu - 5;
            iRendu = iRendu - 5;
            //iBiller5 = iBiller5 +1
            iBiller5 = iBiller5 +1
        //SiNon    
        }else{
            //iRendu = iRendu -1;
            iRendu = iRendu -1;
            //iPiece1 =iPiece1 +1
            iPiece1 =iPiece1 +1
        }
    }
    //Ecrire 'rendre" + iBiller10 + billets de 10€
    //Ecrire 'rendre" + iBiller5 + billets de 5€
    //Ecrire 'rendre" + iPiece1 + piece1 de 1€
    $("#execut").append( "Rendre " +iBiller10 +" billets de 10€" +"<br>");
    $("#execut").append( "Rendre " +iBiller5 +" billets de 5€" +"<br>");
    $("#execut").append( "Rendre " +iPiece1 +" pièces de 1€" +"<br>");
}