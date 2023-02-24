
/* --------------------------exercic js--------------------------- */
//variable tTableau <- Array(10,10) in Array
var tTableau = Array(10);
// variable axeY axeY
var axeY = 0;
var axeX = 0;
var imgPion = "<img src='../css/img/pion.png' style='width:83px; position: absolute;margin: -43px;' alt=''>"
var croixRouge = '<i class="fas fa-times" style="text-align:center; position:absolute; top:2150px; right:315px; font-size:500px; color:red;"><br><p style="font-size:100px">dépacement impossible<p>'
// ALGORITHME Exo_8_7.
// function créer le plateau 
function Exo_8_7_js() {
    // variable imput  pour positioner le pion 
    var sInput = '<label>entre la position en X de votre pion </label><br><input onkeyup="saisie1(this.value)" type="text" id="iPositionA" name="iPositionA"><br><p id="lrt1"></p><br><label>entre la position en Y de votre pion </label><br><input onkeyup="saisie2(this.value)" type="text" id="iPositionB" name="iPositionB"><br><p id="lrt2"></p><br><button onClick="placerPion()" class="btn mt-3 btn-info">placer le pions</button>';
    //variable sHtml pour le header du tableau
    var sHtml = "<thead><tr><th style='width: 60px;'>#</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th></tr></thead>";
    //Pour i de 0 a 12
    for (i = 0; i <= 10; i++) {
        //tTableau[i] <- Array(10)
        tTableau[i] = Array(10)
        //Pour j de 0 a 10
        for (j = 0; j <= 10; j++) {
            //tTableau[i][j] <- Random
            tTableau[i][j] = ' ';
        }//j Suivant
    }//i Suivant
    //Pour a de 0 a 10
    for (a = 0; a <= 10; a++) {
        //sHtml += '<tr><td>' + a + '</td>'; 
        sHtml += '<tr><td>' + a + '</td>';
        //Pour b de 0 a 10
        for (b = 0; b <= 10; b++) {
            //Si a et impaire et b aussi couleur black
            if (a % 2 == 0 && b % 2 == 0) {
                sHtml += '<td  style="background:white; width:175px; color:black;height: 77px;">' + tTableau[a][b] + '</td>'
                //SiNonSi a et paire et b aussi couleur noire
            } else if ((a % 2 !== 0 && b % 2 !== 0)) {
                sHtml += '<td style="background:white; color:black;width:175px;height: 77px;">' + tTableau[a][b] + '</td>'
                //Si non couleur black 
            } else {
                sHtml += '<td style="background:black; color:white;width:175px;height: 77px;">' + tTableau[a][b] + '</td>'
            }
        }//b Suivant
        //sHtml = sHtml + '</tr>'
        sHtml = sHtml + '</tr>';
    }//a Suivant 
    //Ecrire 
    //Ecrire 
    document.getElementById('execut').innerHTML = '<br><table style="width: 65%;">' + sHtml + '</table><br>';
    document.getElementById('divInput').innerHTML = sInput;
}//Fin

//fucontion controle de saisie 
function saisie2() {
    //lire axeX
    var axeY = +document.getElementById('iPositionB').value;
    //variable Boolean axeY<=0 || axeY<=10)&&(axeY != -0
    var bSaisie2_Ok = (axeY <= 0 || axeY <= 10) && (axeY > -1)
    //Si bSaisie2_Ok == true
    if (bSaisie2_Ok) {
        //lire ltr = la saisie de l'utilisateur 
        lrt = document.getElementById("lrt2");
        //ecrire saisie correct 
        lrt.style.display = "block";
        lrt.style.color = "lime";
        lrt.innerHTML = "<i class='fas fa-check'>Saisie corecte</i> "
    } else {
        //lire ltr = la saisie de l'utilisateur 
        lrt = document.getElementById("lrt2");
        //ecrire Seuls les chiffres enter 0 et 10 sont autorisés
        lrt.style.display = "block";
        lrt.style.color = "red";
        lrt.innerHTML = "<i class='fas fa-times'>Seuls les chiffres enter 0 et 10 sont autorisés</i> "
    }

}//Fin

//fucontion controle de saisie 
function saisie1() {
    //lire axeY
    var axeY = +document.getElementById('iPositionA').value;
    //variable Boolean axeY<=0 || axeY<=10)&&(axeY != -0
    var bSaisie_1Ok = (axeY <= 0 || axeY <= 10) && (axeY > -1)
    //Si bSaisie2_Ok == true
    if (bSaisie_1Ok) {
        //lire ltr = la saisie de l'utilisateur 
        lrt = document.getElementById("lrt1");
        //ecrire saisie correct 
        lrt.style.display = "block";
        lrt.style.color = "lime";
        lrt.innerHTML = "<i class='fas fa-check'>Saisie corecte</i>"
    } else {
        //lire ltr = la saisie de l'utilisateur 
        lrt = document.getElementById("lrt1");
        //ecrire Seuls les chiffres enter 0 et 10 sont autorisés
        lrt.style.display = "block";
        lrt.style.color = "red";
        lrt.innerHTML = "<i class='fas fa-times'> Seuls les chiffres enter 0 et 10 sont autorisés</i>"
    }
}//Fin


function placerPion() {
    //lire axeY
    axeX = +document.getElementById('iPositionA').value;
    //Lire axeX
    axeY = +document.getElementById('iPositionB').value;
    //variable Boolean axeX>=0 || axeX<=10) && (axeY<=0 || axeY<=10)&&(axeX != -0
    var bSaisieOk = (axeX >= 0 || axeX <= 10) && (axeY <= 0 || axeY <= 10) && (axeX > -1)
    //bSaisieOk == True
    if (bSaisieOk) {
        //Ecrire  tTableau[axeX][axeY] = image de pion
        tTableau[axeX][axeY] = imgPion;
        //Effacé le formulaire de placement du pion 
        document.getElementById('divInput').style.display = 'none';
        //rafraichire le tableau avec la position du pion 
        refresh()
        //Si Non
    } else {
        //ecrire la saisie et inncorecte 
        lrt = document.getElementById("divInput");
        lrt.style.display = "block";
        lrt.style.color = "red";
        lrt.innerHTML = "<i class='fas fa-times'> Seuls les chiffres enter 0 et 10 sont autorisés</i>"
    }

}//Fin
//fuction deplacePion()
function deplacePion() {
    //le déplacement de pion
    var Moove = +document.getElementById('Moove').value;
    // tTableau[axeX][axeY] = " "; j'efface l'ancienne position du pion 
    tTableau[axeX][axeY] = " ";

    switch (Moove) {
        //Si Moove = 0
        case Moove = 0:
            //axeX=axeX-1
            axeX = axeX - 1
            //axeX=axeX-1
            axeY = axeY - 1
            //Si l'axeY >=0 || l'axeX >=0 && l'axeY <=10 || l'axeX <=10
            if ((axeY >= 0 && axeX >= 0) && (axeY <= 10 && axeX <= 10)) {
                //placer le pion a la position axeY axeX
                tTableau[axeX][axeY] = imgPion;
                //refresh le pion a ça nouvelle position axeY axeX
                document.getElementById("popUp").innerHTML = " "              
                refresh()
            } else {
                //axeX=axeX-1
                axeX = axeX + 1
                //axeX=axeX-1
                axeY = axeY + 1
                document.getElementById("popUp").innerHTML = croixRouge
            }
            break;
        //Si Moove = 1
        case Moove = 1:
            //axeX=axeX-1
            axeX = axeX - 1
            //axeX=axeX+1
            axeY = axeY + 1
            //Si l'axeY >=0 || l'axeX >=0 && l'axeY <=10 || l'axeX <=10
            if ((axeY >= 0 && axeX >= 0) && (axeY <= 10 && axeX <= 10)) {
                //placer le pion a la position axeY axeX
                tTableau[axeX][axeY] = imgPion;
                //refresh le pion a ça nouvelle position axeY axeX
                document.getElementById("popUp").innerHTML = " "              
                refresh()
            } else {
                //axeX=axeX-1
                axeX = axeX + 1
                //axeX=axeX-1
                axeY = axeY - 1
                document.getElementById("popUp").innerHTML = croixRouge               
            }
            break;
        //Si Moove = 2
        case Moove = 2:
            //axeX=axeX+1
            axeX = axeX + 1
            //axeX=axeX-1
            axeY = axeY - 1
            //Si l'axeY >=0 || l'axeX >=0 && l'axeY <=10 || l'axeX <=10
            if ((axeY >= 0 && axeX >= 0) && (axeY <= 10 && axeX <= 10)) {
                //placer le pion a la position axeY axeX
                tTableau[axeX][axeY] = imgPion;
                //refresh le pion a ça nouvelle position axeY axeX
                document.getElementById("popUp").innerHTML = " "              
                refresh()
            } else {
                //axeX=axeX-1
                axeX = axeX - 1
                //axeX=axeX-1
                axeY = axeY + 1
                document.getElementById("popUp").innerHTML = croixRouge
            }
            break;
        //Si Moove = 3
        case Moove = 3:
            //axeX=axeX+1
            axeX = axeX + 1
            //axeX=axeX+1
            axeY = axeY + 1
            //Si l'axeY >=0 || l'axeX >=0 && l'axeY <=10 || l'axeX <=10
            if ((axeY >= 0 && axeX >= 0) && (axeY <= 10 && axeX <= 10)) {
                //placer le pion a la position axeY axeX
                tTableau[axeX][axeY] = imgPion;
                //refresh le pion a ça nouvelle position axeY axeX
                document.getElementById("popUp").innerHTML = " "              
                refresh()
            } else {
                //axeX=axeX-1
                axeX = axeX - 1
                //axeX=axeX-1
                axeY = axeY - 1
                document.getElementById("popUp").innerHTML = croixRouge              
            }
            break;
    }//finSi


    //SiNon
    //ecrire 'deeplacement imposible 
    //FinSi    
    console.log("deplacePion ~ axeY", axeY);
    console.log("deplacePion ~ axeX", axeX);
}//Fin
//function refresh
function refresh() {
    //variable sSelectMouve création des impute de déplacement 
    var sSelectMouv = '<label for="pet-select">quel mouvement voulez vous faire</label><select id="Moove"><option value="">--Veuillez choisir une option--</option><option value="0">en haut à gauche</option><option value="1">en haut à droite</option><option value="2">en bas à gauche</option><option value="3">en bas à droite</option></select><button onClick="deplacePion()" class="btn mt-3 btn-info">Valider le mouvement</button>';
    //variable création du header tu tableau 
    var sHtml = "<thead><tr><th style='width: 60px;'>#</th><th>00</th><th>01</th><th>02</th><th>03</th><th>04</th><th>05</th><th>06</th><th>07</th><th>08</th><th>09</th><th>10</th></tr></thead>";
    //Pour a de 0 a 10
    for (a = 0; a <= 10; a++) {
        //sHtml += '<tr><td>' + a + '</td>';
        sHtml += '<tr><td>' + a + '</td>';
        //Pour b de 0 a 10
        for (b = 0; b <= 10; b++) {

            //Si a et impaire et b aussi couleur black
            if (a % 2 == 0 && b % 2 == 0) {
                sHtml += '<td  style="background:white; width:175px; color:black;height: 77px;">' + tTableau[a][b] + '</td>'
                //SiNonSi a et paire et b aussi couleur noire
            } else if ((a % 2 !== 0 && b % 2 !== 0)) {
                sHtml += '<td style="background:white; color:black;width:175px;height: 77px;">' + tTableau[a][b] + '</td>'
                //Si non couleur black 
            } else {
                sHtml += '<td style="background:black; color:white;width:175px;height: 77px;">' + tTableau[a][b] + '</td>'
            }
        }//b Suivant
        // sHtml = sHtml + '</tr>'
        sHtml = sHtml + '</tr>';
    }//a Suivant 
    //Ecrire sHtml  +  sSelectMouv
    document.getElementById('execut').innerHTML = '<br><table style="width: 65%;">' + sHtml + '</table><br>' + sSelectMouv;
}//Fin




// ALGORITHME Exo_10_6.
function Exo_8_6_jquery() {

}//Fin
