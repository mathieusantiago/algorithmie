
/* --------------------------global variable --------------------------- */
//variable tTableau <- Array(10,10) in Array
var tTableau = Array(10);
// variable axeY axeY a 0
var axeY = 0;
var axeX = 0;
//variable pour le header du tableau 
var tabHeader = "<thead><tr><th style='width: 60px;'>#</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th></tr></thead>";
//variable pour la croix rouge de sortie de piste 
var croixRouge = '<i class="fas fa-times" style="text-align:center; position:absolute; top:2150px; right:315px; font-size:500px; color:red;"><br><p style="font-size:100px">dépacement impossible<p>'
//variable création des input de déplacement des pions 
var sSelectMouv = '<label for="pion-select">quel mouvement voulez vous faire</label><select id="Moove"><option value="">--Veuillez choisir une option--</option><option value="0">en haut à gauche</option><option value="1">en haut à droite</option><option value="2">en bas à gauche</option><option value="3">en bas à droite</option></select><button onClick="deplacerpoin()" class="btn mt-3 btn-info">Valider le mouvement</button>';
//variable sHtml pour le header du tableau
var sHtml = tabHeader
// ALGORITHME Exo_8_8.
var noir = 'noir';
var blanc = 'blanc';
var color = ''

//
//création du tableau de 10 par 10
//

function creatTabl() {
    //Pour i de 0 a 12
    for (i = 0; i < 10; i++) {
        //tTableau[i] <- Array(10)
        tTableau[i] = Array(10)
        //Pour j de 0 a 10
        for (j = 0; j < 10; j++) {
            //tTableau[i][j] <- Random
            tTableau[i][j] = ' ';
        }//j Suivant
    }//i Suivant
    return sHtml
}//Fin

//
//création des pions blanc 
//

function creatPionBlanc() {
    //Pour x de 0 a 4
    for (x = 0; x < 4; x++) {
        //Pour y de 0 a 10
        for (y = 0; y < 10; y++) {
            //Si a et impaire et b aussi pion noire
            if (x % 2 == 0 && y % 2 == 0) {
                tTableau[x][y] = "<img id='pionBlanc" + x + y + "' value=blanc'  onClick='colorPion(blanc)'  src='../css/img/pion.png' style='width:83px; position: absolute;margin: -43px;' alt=''>";
                //SiNonSi a et paire et b aussi pion noire
            } else if ((x % 2 !== 0 && y % 2 !== 0)) {
                tTableau[x][y] = "<img id='pionBlanc" + x + y + "' value=blanc' onClick='colorPion(blanc)'  src='../css/img/pion.png' style='width:83px; position: absolute;margin: -43px;' alt=''>";
            }
        }//b Suivant
    }//a Suivant 
}//Fin

//
//création des pions Noire 
//

function creatPionNoire() {
    //Pour x de 6 a 10
    for (x = 6; x < 10; x++) {
        //Pour y de 0 a 10
        for (y = 0; y < 10; y++) {
            //Si a et impaire et b aussi couleur black
            if (x % 2 == 0 && y % 2 == 0) {
                tTableau[x][y] = "<img id='pionNoir" + x + y + "' value='noir' onClick='colorPion(noir)' src='../css/img/pionNoire.png' style='width:105px; position: absolute;margin: -52px -57px;' alt=''>";
                //SiNonSi a et paire et b aussi couleur noire
            } else if ((x % 2 !== 0 && y % 2 !== 0)) {
                tTableau[x][y] = "<img id='pionNoir" + x + y + "' value='noir' onClick='colorPion(noir)' src='../css/img/pionNoire.png' style='width:105px; position: absolute;margin: -52px -57px;' alt=''>";
            }
        }//b Suivant
    }//a Suivant 
}//Fin

//
//création des couleur Noire et Blanc des case du jeu
//

function creatColorCase() {
    //Pour a de 0 a 10
    for (a = 0; a < 10; a++) {
        //sHtml += '<tr><td>' + a + '</td>'; 
        sHtml += '<tr><td>' + a + '</td>';
        //Pour b de 0 a 10
        for (b = 0; b < 10; b++) {
            //Si a et impaire et b aussi couleur black
            if (a % 2 == 0 && b % 2 == 0) {
                sHtml += "<input type='hidden' id=" + a + '.' + b + " value=" + a + '.' + b + "><td onClick='indexPion(value=" + a + '.' + b + ")' style='background-image: url(../css/img/marbreblanc.jpg); width:175px; color:black;height: 77px;'>" + tTableau[a][b] + '</td>'
                //SiNonSi a et paire et b aussi couleur noire
            } else if ((a % 2 !== 0 && b % 2 !== 0)) {
                sHtml += "<input type='hidden' id=" + a + '.' + b + " value=" + a + '.' + b + "><td onClick='indexPion(value=" + a + '.' + b + ")' style='background-image: url(../css/img/marbreblanc.jpg); width:175px; color:black;height: 77px;'>" + tTableau[a][b] + '</td>'
                //Si non couleur black 
            } else {

                sHtml += '<td style="background-image: url(../css/img/marbrenoir.jpg); color:white;width:175px;height: 77px;">' + tTableau[a][b] + '</td>'
            }
        }//b Suivant
        //sHtml = sHtml + '</tr>'
        sHtml = sHtml + '</tr>';
    }//a Suivant 
    //Ecrire 
    document.getElementById('execut').innerHTML = '<br><table style="width: 65%;">' + sHtml + '</table><br> ' + sSelectMouv;
}//Fin

//
//Fonction recupéré la position du pion au clique
//

function indexPion(selectpion) {
    //variable chaine <- chain de caractère de la valeur du pion 
    var chaine = String(selectpion)

    //on transforme la chain de caractère en un tableau 
    var index = chaine.split('.');
    console.log(index);
    //on enregistre la position du pion qu'on veut déplacé en axeX et axeY
    axeX = index[0]
    axeY = index[1]
}//Fin


function colorPion(colorpion) {
    //variable chaine <- chain de caractère de la valeur du pion 
    var chaine2 = String(colorpion)
    //on transforme la chain de caractère en un tableau 
    index2 = chaine2.split('.');
    //on enregistre la couleur du pion 
    color = index2[0]
}//Fin


//
//fonction déplacer les pions 
//

function deplacerpoin() {
    //var moove <- vide
    var Moove = " "
    console.log(color);
    // lire moove
    Moove = +document.getElementById('Moove').value;
    switch (Moove) {
        //Si Moove = 0
        case Moove = 0:
            tTableau[axeX][axeY] = " ";
            //axeX=axeX-1
            axeX = axeX - 1
            //axeX=axeX-1
            axeY = axeY - 1
            //Si l'axeY >=0 || l'axeX >=0 && l'axeY <=10 || l'axeX <=10
            if ((axeY >= 0 && axeX >= 0) && (axeY <= 10 && axeX <= 10)) {
                if (color == "blanc") {
                    //placer le pion a la position axeY axeX
                    tTableau[axeX][axeY] = "<img src='../css/img/pion.png' style='width:83px; position: absolute;margin: -43px;' alt=''>";
                    //refresh le pion a ça nouvelle position axeY axeX
                } else if (color == 'noir') {
                    //placer le pion a la position axeY axeX
                    tTableau[axeX][axeY] = "<img src='../css/img/pionNoire.png' style='width:105px; position: absolute;margin: -52px -57px;' alt=''>";
                    //refresh le pion a ça nouvelle position axeY axeX
                }
            } else {
                //axeX=axeX-1
                axeX++
                //axeX=axeX-1
                axeY = axeY + 1
                tTableau[axeX][axeY] = "<img src='../css/img/pion.png' style='width:83px; position: absolute;margin: -43px;' alt=''>";
                alert('impossible');
            }
            break;
        //Si Moove = 1
        case Moove = 1:
            tTableau[axeX][axeY] = " ";
            //axeX=axeX-1
            axeX = axeX - 1
            //axeX=axeX+1
            axeY++
            //Si l'axeY >=0 || l'axeX >=0 && l'axeY <=10 || l'axeX <=10
            if ((axeY >= 0 && axeX >= 0) && (axeY <= 10 && axeX <= 10)) {
                if (color === "blanc") {
                    //placer le pion a la position axeY axeX
                    tTableau[axeX][axeY] = "<img src='../css/img/pion.png' style='width:83px; position: absolute;margin: -43px;' alt=''>";
                    //refresh le pion a ça nouvelle position axeY axeX
                } else if (color === 'noir') {
                    //placer le pion a la position axeY axeX
                    tTableau[axeX][axeY] = "<img src='../css/img/pionNoire.png' style='width:105px; position: absolute;margin: -52px -57px;' alt=''>";
                    //refresh le pion a ça nouvelle position axeY axeX
                }
            } else {
                //axeX=axeX-1
                axeX = axeX + 1
                //axeX=axeX-1
                axeY = axeY - 1
                tTableau[axeX][axeY] = "<img src='../css/img/pion.png' style='width:83px; position: absolute;margin: -43px;' alt=''>";
                alert('impossible');
            }
            break;
        //Si Moove = 2
        case Moove = 2:
            tTableau[axeX][axeY] = " ";
            //axeX=axeX+1
            axeX++
            //axeX=axeX-1
            axeY = axeY - 1
            //Si l'axeY >=0 || l'axeX >=0 && l'axeY <=10 || l'axeX <=10
            if ((axeY >= 0 && axeX >= 0) && (axeY <= 10 && axeX <= 10)) {
                if (color === "blanc") {
                    //placer le pion a la position axeY axeX
                    tTableau[axeX][axeY] = "<img src='../css/img/pion.png' style='width:83px; position: absolute;margin: -43px;' alt=''>";
                    //refresh le pion a ça nouvelle position axeY axeX
                } else if (color === 'noir') {
                    //placer le pion a la position axeY axeX
                    tTableau[axeX][axeY] = "<img src='../css/img/pionNoire.png' style='width:105px; position: absolute;margin: -52px -57px;' alt=''>";
                    //refresh le pion a ça nouvelle position axeY axeX
                }
            } else {
                //axeX=axeX-1
                axeX = axeX - 1
                //axeX=axeX-1
                axeY++
                tTableau[axeX][axeY] = "<img src='../css/img/pion.png' style='width:83px; position: absolute;margin: -43px;' alt=''>";
                alert('impossible');
            }
            break;
        //Si Moove = 3
        case Moove = 3:
            tTableau[axeX][axeY] = " ";
            //axeX=axeX+1
            axeX++
            //axeX=axeX+1
            axeY++
            //Si l'axeY >=0 || l'axeX >=0 && l'axeY <=10 || l'axeX <=10
            if ((axeY >= 0 && axeX >= 0) && (axeY <= 10 && axeX <= 10)) {
                if (color === "blanc") {
                    //placer le pion a la position axeY axeX
                    tTableau[axeX][axeY] = "<img src='../css/img/pion.png' style='width:83px; position: absolute;margin: -43px;' alt=''>";
                    //refresh le pion a ça nouvelle position axeY axeX
                } else if (color === 'noir') {
                    //placer le pion a la position axeY axeX
                    tTableau[axeX][axeY] = "<img src='../css/img/pionNoire.png' style='width:105px; position: absolute;margin: -52px -57px;' alt=''>";
                    //refresh le pion a ça nouvelle position axeY axeX
                }
            } else {
                //axeX=axeX-1
                axeX = axeX - 1
                //axeX=axeX-1
                axeY = axeY - 1
                tTableau[axeX][axeY] = "<img src='../css/img/pion.png' style='width:83px; position: absolute;margin: -43px;' alt=''>";
                alert('impossible');
            }
            break;
    }//finSi
    //SiNon
    //ecrire 'deeplacement imposible 
    //FinSi    
    console.log("deplacePion ~ axeY", axeY);
    console.log("deplacePion ~ axeX", axeX);
    refresh()
}
//
//refresh page 
//

function refresh() {
    //variable sSelectMouve création des impute de déplacement 
    var sSelectMouv = '<label for="pet-select">quel mouvement voulez vous faire</label><select id="Moove"><option value="">--Veuillez choisir une option--</option><option value="0">en haut à gauche</option><option value="1">en haut à droite</option><option value="2">en bas à gauche</option><option value="3">en bas à droite</option></select><button onClick="deplacerpoin()" class="btn mt-3 btn-info">Valider le mouvement</button>';
    //variable création du header tu tableau 
    var sHtml = tabHeader
    //Pour a de 0 a 10
    for (a = 0; a < 10; a++) {
        //sHtml += '<tr><td>' + a + '</td>'; 
        sHtml += '<tr><td>' + a + '</td>';
        //Pour b de 0 a 10
        for (b = 0; b < 10; b++) {
            //Si a et impaire et b aussi couleur black
            if (a % 2 == 0 && b % 2 == 0) {
                sHtml += "<input type='hidden' id=" + a + '.' + b + " value=" + a + '.' + b + "><td onClick='indexPion(value=" + a + '.' + b + ")' style='background-image: url(../css/img/marbreblanc.jpg); width:175px; color:black;height: 77px;'>" + tTableau[a][b] + '</td>'
                //SiNonSi a et paire et b aussi couleur noire
            } else if ((a % 2 !== 0 && b % 2 !== 0)) {
                sHtml += "<input type='hidden' id=" + a + '.' + b + " value=" + a + '.' + b + "><td onClick='indexPion(value=" + a + '.' + b + ")' style='background-image: url(../css/img/marbreblanc.jpg); width:175px; color:black;height: 77px;'>" + tTableau[a][b] + '</td>'
                //Si non couleur black 
            } else {

                sHtml += '<td style="background-image: url(../css/img/marbrenoir.jpg); color:white;width:175px;height: 77px;">' + tTableau[a][b] + '</td>'
            }
        }//b Suivant
        //sHtml = sHtml + '</tr>'
        sHtml = sHtml + '</tr>';
    }//a Suivant 
    //Ecrire 
    //Ecrire 
    document.getElementById('execut').innerHTML = '<br><table style="width: 65%;">' + sHtml + '</table><br>' + sSelectMouv;
}//Fin


//
//execut 
//


function Exo_8_8_js() {
    //appel fonction création du tableau
    creatTabl();
    //appel fonction création des pions blanc
    creatPionBlanc();
    //appel fonction création des pions noire
    creatPionNoire();
    //appel fonction création des case de couleur 
    creatColorCase();
}//Fin