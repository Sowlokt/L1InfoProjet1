// DrawImage(readFile('Data/survive.png'),400,0,800,400);
var y, x, h, l, choix, rectanglex, rectangley, increcx, increcy, temps, maxTemps, maxTemps1, maxTemps2, maxTemps3, bulletx, bullety, zonex, zoney, largzonex, largzoney;
var inccerclex, inccrecleyr, g, b, incred, incgreen, incblue, decalx, decaly, cerclex, cercley, locklvl, bullet2x, bullet2y, bullet3x, bullet3y;
var pause, menu, magasin, niveau, urlclic, urlapplauses, logo, skin;

function RemiseAZero() {
  Initialiser();
  pause = -1;
  setCanvasFont('helvetica', '15pt', 'bold');
  rectanglex = Hasard(400) + 25 + decalx;
  rectangley = Hasard(100) + 10 + decaly;
  cercley = 450 + decalx;
  cerclex = 50 + decaly;
  if (niveau == 1) {
    increcx = 1.5;
    increcy = 2.5;
  } else {
    increcx = 3;
    increcy = 5;
  }
  inccerclex = 0;
  inccercley = 0;
  zonex = 0 + decalx;
  zoney = 0 + decaly;
  bulletx = Hasard(400) + 25 + decalx;
  bullety = Hasard(100) + 20 + decaly;
  largzonex = 500 + decalx;
  largzoney = 500 + decaly;
  temps = 0;
}
urlclic = "http://s1download-universal-soundbank.com/mp3/sounds/2775.mp3?fbclid=IwAR0h4NTm1q_QVHAnMIyRIYUyZ1f3eiZ_6BC9AkwEVYbpTR5AEcaFdGB1cdI";
urlapplauses = "http://s1download-universal-soundbank.com/wav/1484.wav";
var applauses = ChargerSon(urlapplauses);
var clic = ChargerSon(urlclic);
skin = 1;
maxTemps1 = 0;
maxTemps2 = 0;
maxTemps3 = 0;
locklvl = 1;
niveau = 1;
magasin = -1;
menu = 1;
pause = -1;
regle = -1;
logo = 1;
decalx = 60;
decaly = 80;
incred = 9;
incgreen = 4;
incblue = 6;
r = 50;
g = 100;
b = 150;
h = 10;
l = 10;
maxTemps = 0;
choix = 0;
RemiseAZero();

function personnage(x,y) {
  if (skin == 1) {
    RectanglePlein(x - 5, y - 5, 10, 10, rgb(26, 35, 126));
    RectanglePlein(x - 7, y - 3, 2, 6, rgb(0, 152, 136));
    RectanglePlein(x + 5, y - 3, 2, 6, rgb(0, 152, 136));
    RectanglePlein(x - 3, y - 7, 6, 2, rgb(0, 152, 136));
    RectanglePlein(x - 3, y + 5, 6, 2, rgb(0, 152, 136));
    RectanglePlein(x - 5, y - 5, 2, 2, rgb(0, 152, 136));
    RectanglePlein(x + 3, y - 5, 2, 2, rgb(0, 152, 136));
    RectanglePlein(x - 5, y + 3, 2, 2, rgb(0, 152, 136));
    RectanglePlein(x + 3, y + 3, 2, 2, rgb(0, 152, 136));
    RectanglePlein(x - 1, y - 3, 2, 6, rgb(156, 39, 176));
    RectanglePlein(x - 3, y - 1, 6, 2, rgb(156, 39, 176));
  }
if (skin==2){
	CerclePlein(x,y,10,'red');
	CerclePlein(x,y,6,'yellow');
	RectanglePlein(x-1,y-5,2,10,'yellow');
  
	for (i=0;i<=10;i++){
		Cercle(x,y,10+i,rgba(255,255,255,1-(i/10)));
	}
}
}

function rectangleMechant(x, y) {
  RectanglePlein(x, y, 50, 50, rgb(r, g, b));
  RectanglePlein(x + 15, y + 12, 10, 20, rgb(255, 255, 255));
  RectanglePlein(x + 27, y + 12, 10, 20, rgb(255, 255, 255));
  RectanglePlein(x + 11, y + 10, 9, 4, rgb(0, 0, 0));
  RectanglePlein(x + 20, y + 12, 10, 4, rgb(0, 0, 0));
  RectanglePlein(x + 30, y + 10, 10, 4, rgb(0, 0, 0));
  RectanglePlein(x + 18, y + 10, 4, 20, rgb(0, 0, 0));
  RectanglePlein(x + 30, y + 10, 4, 20, rgb(0, 0, 0));
  RectanglePlein(x, y, 4, 4, 'black');
  RectanglePlein(x + 46, y, 4, 4, "black");
  RectanglePlein(x, y + 46, 4, 4, 'black');
  RectanglePlein(x + 46, y + 46, 4, 4, 'black');
}

function cadenas(x, y) {
  CerclePlein(x, y, 20, 'black');
  CerclePlein(x, y, 10, rgb(255, 102, 204));
  RectanglePlein(x - 10, y, 20, 20, rgb(255, 102, 204));
  RectanglePlein(x - 10, y, 5, 10, 'black');
  RectanglePlein(x + 5, y, 5, 10, 'black');
  RectanglePlein(x - 10, y + 5, 20, 17, 'black');
}

function Rafraichissement() {
  Initialiser();
  setCanvasFont('helvetica', '20px', 'bold');
  RectanglePlein(0, 0, 10000, 1000, 'black');
  Rectangle(zonex, zoney, largzonex - zonex, largzoney - zoney, rgb(255, 102, 204));
  Rectangle(zonex - 1, zoney - 1, largzonex - zonex + 2, largzoney - zoney + 2, rgb(255, 102, 204));
  rectangleMechant(rectanglex, rectangley);

  if (temps > 15 && niveau != 1) {
    CerclePlein(bulletx, bullety, 25, rgb(r, g, b));
  }
  if (temps > 20 && niveau == 3) {
    CerclePlein(bullet2x, bullet2y, 25, rgb(r, g, b));
  }
  if (590 + decalx < mouseX && mouseX < 717 + decalx && 217 + decaly < mouseY && mouseY < 257 + decaly) {
    RectanglePlein(590 + decalx, 217 + decaly, 127, 40, rgb(230, 70, 180)); //restart
    Rectangle(590 + decalx, 217 + decaly, 127, 40, 'white'); //restart
    Texte(600 + decalx, 245 + decaly, "RESTART", 'black'); //restart
  } else {
    RectanglePlein(590 + decalx, 217 + decaly, 127, 40, rgb(255, 102, 204)); //restart
    Rectangle(590 + decalx, 217 + decaly, 127, 40, 'white'); //restart
    Texte(600 + decalx, 245 + decaly, "RESTART", 'black'); //restart
  }
  personnage(cerclex, cercley);
  Texte(600 + decalx, 50 + decaly, 'Temps actuel  :', 'white'); //temps
  Texte(600 + decalx, 75 + decaly, temps + ' secondes', 'white'); //temps
  Texte(600 + decalx, 125 + decaly, 'Meilleur temps : ', 'white'); //meilleurtemps
  if (niveau == 1) {
    Texte(600 + decalx, 150 + decaly, maxTemps1 + ' secondes', 'white'); //meilleurtemps1
  }
  if (niveau == 2) {
    Texte(600 + decalx, 150 + decaly, maxTemps2 + ' secondes', 'white'); //meilleurtemps2
  }
  if (niveau == 3) {
    Texte(600 + decalx, 150 + decaly, maxTemps3 + ' secondes', 'white'); //meilleurtemps3
  }

  if (590 + decalx < mouseX && mouseX < 717 + decalx && 300 + decaly < mouseY && mouseY < 340 + decaly) {
    RectanglePlein(590 + decalx, 300 + decaly, 127, 40, rgb(230, 70, 180)); //pause
    Rectangle(590 + decalx, 300 + decaly, 127, 40, 'white'); //pause
    Texte(600 + decalx, 327 + decaly, 'PAUSE', 'black'); //pause
  } else {
    RectanglePlein(590 + decalx, 300 + decaly, 127, 40, rgb(255, 102, 204)); //pause
    Rectangle(590 + decalx, 300 + decaly, 127, 40, 'white'); //pause
    Texte(600 + decalx, 327 + decaly, 'PAUSE', 'black'); //pause
  }

  if (590 + decalx < mouseX && mouseX < 717 + decalx && 383 + decaly < mouseY && mouseY < 423 + decaly) {
    RectanglePlein(590 + decalx, 383 + decaly, 127, 40, rgb(230, 70, 180)); //menu
    Rectangle(590 + decalx, 383 + decaly, 127, 40, 'white'); //menu
    Texte(600 + decalx, 410 + decaly, 'MENU', 'black'); //menu
  } else {
    RectanglePlein(590 + decalx, 383 + decaly, 127, 40, rgb(255, 102, 204)); //menu
    Rectangle(590 + decalx, 383 + decaly, 127, 40, 'white'); //menu
    Texte(600 + decalx, 410 + decaly, 'MENU', 'black'); //menu
  }
  
  
}

function Menu() {
  setCanvasFont('helvetica', '33px', 'bold');

  RectanglePlein(0, 0, 400, 15000, 'black');
  RectanglePlein(1000, 0, 500, 15000, 'black');
  RectanglePlein(0, 400, 15000, 15000, 'black');
  RectanglePlein(0, 0, 15000, 100, 'black');
  if (100 < mouseX && mouseX < 350 && 90 < mouseY && mouseY < 190) {
    RectanglePlein(100, 90, 250, 100, rgb(240, 80, 190));
    RectanglePlein(105, 95, 240, 90, rgb(230, 70, 180));
  } else {
    RectanglePlein(100, 90, 250, 100, rgb(230, 70, 180));
    RectanglePlein(105, 95, 240, 90, rgb(255, 102, 204));
  }
  Texte(115, 155, 'NIVEAU 1', 'black');
  Rectangle(105, 95, 240, 90, 'black');

  if (100 < mouseX && mouseX < 350 && 210 < mouseY && mouseY < 310 && maxTemps1 >= 20) {
    RectanglePlein(100, 210, 250, 100, rgb(240, 80, 190));
    RectanglePlein(105, 215, 240, 90, rgb(230, 70, 180));
  } else {
    RectanglePlein(100, 210, 250, 100, rgb(230, 70, 180));
    RectanglePlein(105, 215, 240, 90, rgb(255, 102, 204));
  }
  if (maxTemps1 < 20) {
    cadenas(320, 255);
  }
  Texte(115, 275, 'NIVEAU 2', 'black');
  Rectangle(105, 215, 240, 90, 'black');

  if (100 < mouseX && mouseX < 350 && 330 < mouseY && mouseY < 430 && maxTemps2 >= 20) {
    RectanglePlein(100, 330, 250, 100, rgb(240, 80, 190));
    RectanglePlein(105, 335, 240, 90, rgb(230, 70, 180));
  } else {
    RectanglePlein(100, 330, 250, 100, rgb(230, 70, 180));
    RectanglePlein(105, 335, 240, 90, rgb(255, 102, 204));
  }
  if (maxTemps2 < 20) {
    cadenas(320, 375);
  }
  Texte(115, 395, 'NIVEAU 3', 'black');
  Rectangle(105, 335, 240, 90, 'black');

  if (400 < mouseX && mouseX < 650 && 450 < mouseY && mouseY < 550) {
    RectanglePlein(400, 450, 250, 100, rgb(240, 80, 190));
    RectanglePlein(405, 455, 240, 90, rgb(230, 70, 180));
  } else {
    RectanglePlein(400, 450, 250, 100, rgb(230, 70, 180));
    RectanglePlein(405, 455, 240, 90, rgb(255, 102, 204));
  }

  Texte(415, 515, 'REGLE', 'black');
  Rectangle(405, 455, 240, 90, 'black');

  if (700 < mouseX && mouseX < 950 && 450 < mouseY && mouseY < 550) {
    RectanglePlein(700, 450, 250, 100, rgb(240, 80, 190));
    RectanglePlein(705, 455, 240, 90, rgb(230, 70, 180));
  } else {
    RectanglePlein(700, 450, 250, 100, rgb(230, 70, 180));
    RectanglePlein(705, 455, 240, 90, rgb(255, 102, 204));
  }

  Texte(715, 515, 'MAGASIN', 'black');
  Rectangle(705, 455, 240, 90, 'black');

  if (locklvl == 0) {
    if (100 < mouseX && mouseX < 350 && 450 < mouseY && mouseY < 550) {
      RectanglePlein(100, 450, 250, 100, rgb(240, 80, 190));
      RectanglePlein(105, 455, 240, 90, rgb(230, 70, 180));
    } else {
      RectanglePlein(100, 450, 250, 100, rgb(230, 70, 180));
      RectanglePlein(105, 455, 240, 90, rgb(255, 102, 204));
    }
    Texte(115, 515, 'BONUS', 'black');
    Rectangle(105, 455, 240, 90);
  }
}

function Logo() {
  DrawImage(readFile('Data/survive.png'), 270, 40, 800, 400);
}

function Regle() {
  setCanvasFont('helvetica', '15px', '');
  RectanglePlein(400, 90, 600, 340, 'black');
  Rectangle(400, 90, 545, 340, rgb(255, 102, 204));
  Texte(405, 110, 'Le but le du jeu est de survivre le plus longtemps possible.', 'white');
  Texte(405, 130, 'Pour cela il va falloir éviter objets et bords de la zone !', 'white');
  Texte(405, 150, "Sinon c'est le GAME OVER", 'white');
  Texte(405, 190, 'Plusieurs niveaux sont disponibles.', 'white');
  Texte(405, 210, 'Pour les débloquer il faudra faire un score minimum au', 'white');
  Texte(405, 230, 'niveau précédent (20 sec).', 'white');
  Texte(405, 270, 'Utilisez les touches ZQSD pour vous déplacez', 'white');
  setCanvasFont('helvetica', '25pX', 'bold');
  Texte(405, 310, '      BONNE CHANCE ET BON JEU !', 'white');
  rectangleMechant(425, 340);
  CerclePlein(500, 370, 25, rgb(r, g, b));
  Texte(530, 380, 'A EVITER !', 'white');
}

function Magasin() {
  setCanvasFont('helvetica', '20px', '');
  RectanglePlein(400, 90, 600, 340, 'black');
  Rectangle(400, 90, 545, 340, rgb(255, 102, 204));
  Texte(405, 120, 'Joueur', 'white');
  Texte(405, 180, 'Ennemi', 'white');
  Texte(405, 240, 'Interface', 'white');
}

function difficulte(tr, tz, tf, multrecx, multrecy, inczonex, inczoney) {
  if (niveau != 1) {
    if (temps < tz) {
      if (temps < tr) {
        increcx = increcx * multrecx;
        increcy = increcy * multrecy;
      } else {
        zonex = zonex + inczonex;
        zoney = zoney + inczoney;
        largzonex = largzonex - inczonex;
        largzoney = largzoney - inczoney;
      }
    } else {
      if (tf > temps && temps > tz) {
        zonex = zonex - inczonex;
        zoney = zoney - inczoney;
        largzonex = largzonex + inczonex;
        largzoney = largzoney + inczoney;
      }
    }
  }
}

Logo();

var horloge = setInterval(function() {
  if (pause == -1 && menu == -1) {
    temps = temps + 1;
  }
}, 1000);

var event = setInterval(function() {
  if (r > 230 || r < 20) {
    incred = -incred;
  }
  if (g > 230 || g < 20) {
    incgreen = -incgreen;
  }
  if (b > 230 || b < 20) {
    incblue = -incblue;
  }
  r = r + incred;
  g = g + incgreen;
  b = b + incblue;
  if (pause == -1 && menu == -1) {

    Rafraichissement();

    cerclex = cerclex + inccerclex;
    cercley = cercley + inccercley;
	if (hiddeLevel!=1){
    if (rectanglex < zonex) {
      if (increcx < 0) {
        increcx = -increcx;
      }
    }

    if (rectanglex + 50 > largzonex) {
      if (increcx > 0) {
        increcx = -increcx;
      }
    }

    if (rectangley < zoney) {
      if (increcy < 0) {
        increcy = -increcy;
      }
    }

    if (rectangley + 50 > largzoney) {
      if (increcy > 0) {
        increcy = -increcy;
      }
    }
  }else {
    if (rectanglex < 0) {
      if (increcx < 0) {
        increcx = -increcx;
      }
    }

    if (rectanglex + 50 > 1600) {
      if (increcx > 0) {
        increcx = -increcx;
      }
    }

    if (rectangley < 0) {
      if (increcy < 0) {
        increcy = -increcy;
      }
    }

    if (rectangley + 50 > 800) {
      if (increcy > 0) {
        increcy = -increcy;
      }
    }
  }
    rectanglex = rectanglex + increcx;
    rectangley = rectangley + increcy;
    if (niveau != 1) {
      if ((cerclex - bulletx) > 0) {
        bulletx = bulletx + 0.5; //vitesse x du bullet
      }
      if ((cerclex - bulletx) < 0) {
        bulletx = bulletx - 0.5;
      }
      if ((cercley - bullety) > 0) {
        bullety = bullety + 0.5; //vitesse y du bullet
      }
      if ((cercley - bullety) < 0) {
        bullety = bullety - 0.5;
      }
    }
    if (niveau == 3) {
      if ((cerclex - bullet2x) > 0) {
        bullet2x = bullet2x + 0.7; //vitesse x du bullet 2
      }
      if ((cerclex - bullet2x) < 0) {
        bullet2x = bullet2x - 0.7;
      }
      if ((cercley - bullet2y) > 0) {
        bullet2y = bullet2y + 0.7; //vitesse y du bullet 2
      }
      if ((cercley - bullet2y) < 0) {
        bullet2y = bullet2y - 0.7;
      }
    }

    if (niveau == 1 && temps > maxTemps1) {
      maxTemps1 = temps;
    }
    if (niveau == 2 && temps > maxTemps2) {
      maxTemps2 = temps;
    }
    if (niveau == 3 && temps > maxTemps3) {
      maxTemps3 = temps;
    }

    if (zonex + 5 > cerclex || cerclex > largzonex - 5 || zoney + 5 > cercley || cercley > largzoney - 5 || (rectanglex - 5 < cerclex && cerclex < rectanglex + 55 && rectangley - 5 < cercley && cercley < rectangley + 55 && hiddeLevel!=1)) {
      RemiseAZero(); //perdu par contact avec zone ou rectangle tueur
    }
    
    if (0 > cerclex || cerclex > 1600 || 0 > cercley || cercley > 800 || (rectanglex - 5 < cerclex && cerclex < rectanglex + 55 && rectangley - 5 < cercley && cercley < rectangley + 55 && hiddeLevel==1)) {
      RemiseAZero(); //perdu par contact avec zone ou rectangle tueur
    }

    if (((Math.abs(bulletx - cerclex)) < 20) && ((Math.abs(bullety - cercley)) < 20) && temps > 15 && niveau != 1) {
      RemiseAZero(); //perdu par contact avec cercle tueur
    }

    if (((Math.abs(bullet2x - cerclex)) < 20) && ((Math.abs(bullet2y - cercley)) < 20) && temps > 20 && niveau == 3) {
      RemiseAZero(); //perdu par contact avec cercle tueur 2
    }


    if (temps == 15) {
      bulletx = zonex;
      bullety = zoney;
    }
    if (temps == 20) {
      bullet2x = largzonex;
      bullet2y = largzoney;
    }
    if (maxTemps3 > 30) {
      locklvl = 1;
    }
    if (temps == 20 && (niveau == 1 || niveau == 2)) {
      applauses.play();
    }
    difficulte(10, 15, 21, 1.0001, 1.0001, 0.1, 0.1);
  } else {
    if (menu == 1) {
      Menu();
      if (regle == 1) {
        Regle();
      }
      if (magasin == 1) {
        Magasin();
      }
    }
  }
}, 10);

function Keypressed(k) {
  if (pause == -1 || menu == -1) {
    if (k == Caractere_vers_Ascii('Z')) {
      if (inccerclex != 0) {
        inccerclex = 0;
      }
      inccercley = -2;
    } else {
      if (k == Caractere_vers_Ascii('S')) {
        if (inccerclex != 0) {
          inccerclex = 0;
        }
        inccercley = 2;
      }
      if (k == Caractere_vers_Ascii('D')) {
        if (inccercley != 0) {
          inccercley = 0;
        }
        inccerclex = 2;
      } else {
        if (k == Caractere_vers_Ascii('Q')) {
          if (inccercley != 0) {
            inccercley = 0;
          }
          inccerclex = -2;
        }
      }
    }
  }
}

function MouseClick(x, y) {
  if (menu == -1) {
    if (590 + decalx < x && x < 717 + decalx && 217 + decaly < y && y < 257 + decaly) { //RESTART
      RemiseAZero();
      clic.play();
    }
    if (590 + decalx < x && x < 717 + decalx && 300 + decaly < y && y < 340 + decaly) { //PAUSE
      pause = -pause;
      clic.play();
    }
    if (590 + decalx < x && x < 717 + decalx && 383 + decaly < y && y < 423 + decaly) {
      menu = -menu;
      clic.play();
      Logo();
    }

  }
  if (menu == 1) {
    if (100 < x && x < 350 && 90 < y && y < 190) {
      niveau = 1;
      menu = -1;
      RemiseAZero();
      clic.play();
    }
    if (100 < x && x < 350 && 210 < y && y < 310 && maxTemps1 >= 20) {
      niveau = 2;
      menu = -1;
      RemiseAZero();
      clic.play();
    }
    if (100 < x && x < 350 && 330 < y && y < 430 && maxTemps2 >= 20) {
      niveau = 3;
      menu = -1;
      RemiseAZero();
      clic.play();
    }
    if (100 < x && x < 350 && 450 < y && y < 550 && locklvl != 1) {
      niveau=3;
      hiddenLevel = 1;
      RemiseAZero();
      clic.play();
    }

    if (300 < x && x < 650 && 450 < y && y < 550) {
      regle = -regle;
      magasin = -1;
      logo = -1;
      clic.play();
      Rectangle(400, 200, 600, 240, rgb(255, 102, 204));
      if (regle == -1) {
        Logo();
      }
    }

    if (700 < x && x < 1050 && 450 < y && y < 550) {
      magasin = -magasin;
      regle = -1;
      logo = -1;
      clic.play();
      Rectangle(400, 200, 600, 240, rgb(255, 102, 204));
      if (magasin == -1) {
        Logo();
      }
    }
  }
}