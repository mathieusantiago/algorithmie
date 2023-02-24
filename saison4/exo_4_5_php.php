<?php
$sMessage = "";
    // si la formulaire a êtes rempli 
    if (isset($_POST['age'])) {
        // je declare mes variable   
        $iAge = ($_POST['age']);
        $sSex = ($_POST['sex']);
        // je crée la structure html
        $sStart = '<section class="color-code"><div class="color-result"><p>';
        $sEnd = '</p></div></section>';
        // je crée la condition
        if ($sSex === 'masculin' && $iAge >= 20) {
          $sMessage = 'vous êtes imposable';
        }else if ($sSex === "feminin" && $iAge >= 18 && $iAge <= 35) {
          $sMessage = 'vous êtes imposable';
        }else if ($sSex === 'masculin' && $iAge <= 20) {
          $sMessage = 'vous êtes non imposable';
        }else if ($sSex === "feminin" && $iAge <=18 || $iAge >=35) {
          $sMessage = 'vous êtes non imposable';
        }
    }
require 'exo_4_5_js.html';
