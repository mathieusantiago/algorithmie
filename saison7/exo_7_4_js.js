
/* --------------------------exercic js--------------------------- */
// ALGORITHME Exo_6_15.
//VARIABLE tType = Array['JavaScirpt', 'Php', 'JQuery', 'Ajax']
var tType = ['JavaScirpt', 'Php', 'JQuery', 'Ajax'];
//VARIABLE  sValue,  sHtml In STRING
var sValue, sHtml = ' '; 
//VARIABLE i In INTEGER
var i = 0;
//Affichage de mon tableau non modifier 
//Pour i=0 i< tTyple.longeur i++ 
for (i = 0; i < tType.length; i++) {
    //recuper les valeurs du tableau 
    //sValue = tType[i] 
    sValue = tType[i];
    //On concaténe les valeur de i et sValue pour les affichier dans nomre tableau html
    //sHtml = shtml '<tr><td>'+ i +'</td><td>' + sValue + '</td></tr>'
    sHtml += '<tr><td>'+ i +'</td><td>' + sValue + '</td></tr>';
}
//on affichie la totalité de notre tableau Js avec la construction d'un tableau html
document.getElementById('execut').innerHTML = "<table style='width: 100 % '><tr><th>Index</th><th colspan='2'>Value</th></tr>" + sHtml + "</table>";
//fonction qui supprime  un element du tableau a partire de sont index
function Exo_7_4_js() {
    //VARIABLE iUtilisateur In INTEGER
    var iUserIndex;
    //VARIABLE sHtml In STRING
    //je vide ma vairable sHtml  pour l'ancien tableau et afficher le neauveau tableau modifiée
    var sHtml = ' ';
    //On recupere l'index saisie par l'utilisateur 
    //LIRE iUserIndex 
    iUserIndex =document.getElementById('iVal').value;
    //on retire l'index et la valeur du tableau retiré(Index a retiré, Nombre d'élément a retiré)
    //tType.retiré(iUserIndex, 1)
    tType.splice(iUserIndex, 1);
    console.log(tType);
    //je réaffiche mon nouveau tableau modifier
    //Pour i=0 i< tTyple.longeur i++
    for (i = 0; i < tType.length; i++) {
        //recuper les valeurs du tableau 
        //sValue = tType[i] 
        sValue = tType[i];
        //On concaténe les valeur de i et sValue pour les affichier dans nomre tableau html
        //sHtml = shtml '<tr><td>'+ i +'</td><td>' + sValue + '</td></tr>'
        sHtml += '<tr><td>'+ i +'</td><td>' + sValue + '</td></tr>';
    }
    //on affichie la totalité de notre nouveau tableau Js avec la construction d'un tableau html
    document.getElementById('execut').innerHTML = "Voici votre nouveau tableau <br> <table style='width: 100 % '><tr><th>Index</th><th colspan='2'>Value</th></tr>" + sHtml + "</table>";
}



// ALGORITHME Exo_7_4.
function Exo_7_4_jquery() {
    //VARIABLE iUtilisateur In INTEGER
    var iUserIndex;
    //VARIABLE sHtml In STRING
    //je vide ma vairable sHtml  pour l'ancien tableau et afficher le neauveau tableau modifiée
    var sHtml = ' ';
    //On recupere l'index saisie par l'utilisateur 
    //LIRE iUserIndex 
    iUserIndex =$('#iVal').val();
    //on retire l'index et la valeur du tableau retiré(Index a retiré, Nombre d'élément a retiré)
    //tType.retiré(iUserIndex, 1)
    tType.splice(iUserIndex, 1);
    console.log(tType);
    //je réaffiche mon nouveau tableau modifier
    //Pour i=0 i< tTyple.longeur i++
    for (i = 0; i < tType.length; i++) {
        //recuper les valeurs du tableau 
        //sValue = tType[i] 
        sValue = tType[i];
        //On concaténe les valeur de i et sValue pour les affichier dans nomre tableau html
        //sHtml = shtml '<tr><td>'+ i +'</td><td>' + sValue + '</td></tr>'
        sHtml += '<tr><td>'+ i +'</td><td>' + sValue + '</td></tr>';
    }
    //on affichie la totalité de notre nouveau tableau Js avec la construction d'un tableau html
    $('#execut').html("Voici votre nouveau tableau <br> <table style='width: 100 % '><tr><th>Index</th><th colspan='2'>Value</th></tr>" + sHtml + "</table>");
}
