/* --------------------------exercic js--------------------------- */
function Exo_4_6_js() {
    //je declar mes variable
  var iScore1, iScore2, iScore3, iScore4
   iScore1 = document.getElementById('candidat1').value;
   iScore2 = document.getElementById('candidat2').value;
   iScore3 = document.getElementById('candidat3').value;
   iScore4 = document.getElementById('candidat4').value;
  var select = document.getElementById('execut');
  if (iScore1 > 50) {
      select.innerHTML = 'le candidat n°1 a Gagné les éléctions';
  }else if (iScore1 < 12.5) {
      select.innerHTML = 'le candidat n°1 a perdu les éléctions';
  }else if (iScore1 > iScore2 && iScore1 > iScore3 && iScore1 > iScore4) {
    select.innerHTML = 'le candidat n°1 est ballotage favorable';
  }else{
    select.innerHTML = 'le candidat n°1 est ballotage défavorable';
  }
}


/* ---------------------------exercic jquery-------------------------- */
function Exo_4_6_jquery() {
    //je declar mes variable
    var iScore1, iScore2, iScore3, iScore4
    iScore1 = $('#candidat1').val();
    iScore2 = $('#candidat2').val();
    iScore3 = $('#candidat3').val();
    iScore4 = $('#candidat4').val();
    var select = $('#execut');
    //je crée ma condition 
   if (iScore1 > 50) {
       select.html('le candidat n°1 a Gagné les éléctions');
   }else if (iScore1 < 12.5) {
       select.html('le candidat n°1 a perdu les éléctions');
   }else if (iScore1 > iScore2 && iScore1 > iScore3 && iScore1 > iScore4) {
     select.html('le candidat n°1 est ballotage favorable');
   }else{
     select.html('le candidat n°1 est ballotage défavorable');
   }
}



