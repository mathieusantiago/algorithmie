
/* --------------------------exercic js--------------------------- */
//variable tTableau <- Array(10,10) in Array
// variable axeY axeY
// ALGORITHME Exo_8_7.
// function créer le plateau 
    // variable imput  pour positioner le pion 
    //variable sHtml pour le header du tableau
    //Pour i de 0 a 12
        //tTableau[i] <- Array(10)
        //Pour j de 0 a 10
            //tTableau[i][j] <- Random
        //j Suivant
    //i Suivant
    //Pour a de 0 a 10
        //sHtml += '<tr><td>' + a + '</td>'; 
        //Pour b de 0 a 10
            //Si a et impaire et b aussi
                // couleur black
            //SiNonSi a et paire et b aussi 
                    //couleur noire
            //Si non 
                //couleur black 
           
        //b Suivant
        //sHtml = sHtml + '</tr>'
    //a Suivant 
    //Ecrire 
    //Ecrire 
//Fin

//fucontion controle de saisie 
    //lire axeX
    //variable Boolean axeY<=0 || axeY<=10)&&(axeY != -0
    //Si bSaisie2_Ok == true
        //lire ltr = la saisie de l'utilisateur 
        //ecrire saisie correct 
        //lire ltr = la saisie de l'utilisateur 
        //ecrire Seuls les chiffres enter 0 et 10 sont autorisés

//Fin

//fucontion controle de saisie 
    //lire axeY
    //variable Boolean axeY<=0 || axeY<=10)&&(axeY != -0
    //Si bSaisie2_Ok == true
        //lire ltr = la saisie de l'utilisateur 
        //ecrire saisie correct 
        //lire ltr = la saisie de l'utilisateur 
        //ecrire Seuls les chiffres enter 0 et 10 sont autorisés
//Fin


    //lire axeY
    //Lire axeX
    //variable Boolean axeX>=0 || axeX<=10) && (axeY<=0 || axeY<=10)&&(axeX != -0
    //bSaisieOk == True
        //Ecrire  tTableau[axeX][axeY] = image de pion
        //Effacé le formulaire de placement du pion 
        //rafraichire le tableau avec la position du pion 
        //Si Non
        //ecrire la saisie et inncorecte 

//Fin
//fuction deplacePion()
    //lire le déplacement du pion
    // tTableau[axeX][axeY] = " "; j'efface l'ancienne position du pion 
    //Si l'axeY >=0 || l'axeX >=0 && l'axeY <=10 || l'axeX <=10
        //Si Moove = 0
            //axeX=axeX-1
            //axeX=axeX-1
            //placer le pion a la position axeY axeX
            //refresh le pion a ça nouvelle position axeY axeX
        //Si Moove = 1
            //axeX=axeX-1
            //axeX=axeX+1
            //placer le pion a la position axeY axeX
            //refresh le pion a ça nouvelle position axeY axeX
        //Si Moove = 2
            //axeX=axeX+1
            //axeX=axeX-1
            //placer le pion a la position axeY axeX
            //refresh le pion a ça nouvelle position axeY axeX
        //Si Moove = 3
            //axeX=axeX+1
            //axeX=axeX+1
            //placer le pion a la position axeY axeX
            //refresh le pion a ça nouvelle position axeY axeX
    //finSi
    //SiNon
        //ecrire 'deeplacement imposible 
    //FinSi    
//Fin
//function refresh
    //variable sSelectMouve création des impute de déplacement 
    //variable création du header tu tableau 
    //Pour a de 0 a 10
        //sHtml += '<tr><td>' + a + '</td>';
        //Pour b de 0 a 10
            //Si a et impaire et b aussi couleur black
                //SiNonSi a et paire et b aussi couleur noire
                //Si non couleur black 
         //b Suivant
        // sHtml = sHtml + '</tr>'
     //a Suivant 
    //Ecrire sHtml  +  sSelectMouv
 //Fin




