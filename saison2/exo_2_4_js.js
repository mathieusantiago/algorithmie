function Exo_2_4_js() {
    /* ------je crée mes variable ---------- */
    var sString1 = " belle marquise ";
    var sString2 = " vos beaux yeux me ";
    var sString3 = " font mourir d’amour ";
    var sStringA = sString1 + sString2 + sString3;
    var sStringB = sString2 + sString1 + sString3;
    var sStringC = sString3 + sString2 + sString1;
    var sStringD = sString3 + sString1 + sString2;
    /* -------------------je crée mon selecteur----------------------- */
    var sSelector = document.getElementById('execut');
    /* -------------------je crée mon html----------------------- */
    sMessage = "";
    sMessage += '<section class="color-code"><div class="color-result"><p>';
    sMessage += sStringA + "<br>" + sStringB +"<br>"+ sStringC +"<br>"+ sStringD;
    sMessage += '</p></div></section>';
    sSelector.innerHTML = sMessage;
}

function Exo_2_4_jsPrompt() {
    /* ------je crée mes variable ---------- */
    var sString1 = " belle marquise ";
    var sString2 = " vos beaux yeux me ";
    var sString3 = " font mourir d’amour ";
    var sStringA = sString1 + sString2 + sString3;
    var sStringB = sString2 + sString1 + sString3;
    var sStringC = sString3 + sString2 + sString1;
    var sStringD = sString3 + sString1 + sString2;
    /* -------je crée mon Prompt---------------- */
    alert(sStringA + "\n" + sStringB + "\n" + sStringC + "\n" + sStringD);
}

function Exo_2_4_jquery() {
    /* ------je crée mes variable ---------- */
    var sString1 = " belle marquise ";
    var sString2 = " vos beaux yeux me ";
    var sString3 = " font mourir d’amour ";
    var sStringA = sString1 + sString2 + sString3;
    var sStringB = sString2 + sString1 + sString3;
    var sStringC = sString3 + sString2 + sString1;
    var sStringD = sString3 + sString1 + sString2;
    /* -------------------je crée mon 
    /* -------------------je crée mon html----------------------- */
    sMessage = "";
    sMessage += sStringA +"<br>"+ sStringB +"<br>"+ sStringC +"<br>"+ sStringD;
    $('#execut').html("<section class='color-code'><div class='color-result'><p>" + sMessage + "</p></div></section>");
  
}

