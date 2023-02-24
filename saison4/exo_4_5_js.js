/* --------------------------exercic js--------------------------- */
function Exo_4_5_js() {
    //je declar mes variable
  var sSex = document.getElementById('sex').value;
  var iAge = document.getElementById('age').value;
  var select = document.getElementById('execut');
  
  var sImpot = "";
     //je crée ma condition
  if (sSex === 'masculin' && iAge >= 20) {
    sImpot = 'vous êtes imposable';
  }else if (sSex === "feminin" && iAge >= 18 && iAge <= 35) {
    sImpot = 'vous êtes imposable';
  }else if (sSex === 'masculin' && iAge <= 20) {
    sImpot = 'vous êtes non imposable';
  }else if (sSex === "feminin" && iAge <=18 || iAge >=35) {
    sImpot = 'vous êtes non imposable';
  }
  select.innerHTML = sImpot;
  var iAge = document.getElementById('age').value = " ";
}

/* -----------------------------exercic jsprompt------------------------ */
function Exo_4_5_jsPrompt() {
    //je declar mes variable
    var sSex = prompt('quel est votre sex');
    var iAge = prompt('quel age avez vous');

  
    var sImpot = "";
       //je crée ma condition
    if (sSex === 'masculin' && iAge >= 20) {
      sImpot = 'vous êtes imposable';
    }else if (sSex === "feminin" && iAge >= 18 && iAge <= 35) {
      sImpot = 'vous êtes imposable';
    }else if (sSex === 'masculin' && iAge <= 20) {
      sImpot = 'vous êtes non imposable';
    }else if (sSex === "feminin" && iAge <=18 || iAge >=35) {
      sImpot = 'vous êtes non imposable';
    }
    alert(sImpot);
}

/* ---------------------------exercic jquery-------------------------- */
function Exo_4_5_jquery() {
    //je declar mes variable
    var sSex = $('#sex').val();
    var iAge = $('#age').val();
    var select = $('#execut');
  
    var sImpot = "";
       //je crée ma condition
    if (sSex === 'masculin' && iAge >= 20) {
      sImpot = 'vous êtes imposable';
    }else if (sSex === "feminin" && iAge >= 18 && iAge <= 35) {
      sImpot = 'vous êtes imposable';
    }else if (sSex === 'masculin' && iAge <= 20) {
      sImpot = 'vous êtes non imposable';
    }else if (sSex === "feminin" && iAge <=18 || iAge >=35) {
      sImpot = 'vous êtes non imposable';
    }
    select.html(sImpot);
    var iAge = $('#age').val(' ');

}



