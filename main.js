//add textarea
let text = document.createElement('textarea');
  text.className = "text";

  document.body.append(text);

//add keyboard div 
let keyboard = document.createElement('div');
keyboard.className = "keyboard";
document.body.append(keyboard);

//add div for the first line of the keyboard
let row = document.createElement('div');
row.className = "row";
keyboard.appendChild(row);

//add first row buttons
let key = document.createElement('div');
key.className = "key";
row.appendChild(key);
key.innerHTML = "`";

let key1 = document.createElement('div');
key1.className = "key";
row.appendChild(key1);
key1.innerHTML = "1";

let key2 = document.createElement('div');
key2.className = "key";
row.appendChild(key2);
key2.innerHTML = "2";

let key3 = document.createElement('div');
key3.className = "key";
row.appendChild(key3);
key3.innerHTML = "3";

let key4 = document.createElement('div');
key4.className = "key";
row.appendChild(key4);
key4.innerHTML = "4";

let key5 = document.createElement('div');
key5.className = "key";
row.appendChild(key5);
key5.innerHTML = "5";

let key6 = document.createElement('div');
key6.className = "key";
row.appendChild(key6);
key6.innerHTML = "6";

let key7 = document.createElement('div');
key7.className = "key";
row.appendChild(key7);
key7.innerHTML = "7";

let key8 = document.createElement('div');
key8.className = "key";
row.appendChild(key8);
key8.innerHTML = "8";

let key9 = document.createElement('div');
key9.className = "key";
row.appendChild(key9);
key9.innerHTML = "9";

let key0 = document.createElement('div');
key0.className = "key";
row.appendChild(key0);
key0.innerHTML = "0";

let keyMinus = document.createElement('div');
keyMinus.className = "key";
row.appendChild(keyMinus);
keyMinus.innerHTML = "-";

let keyEqual = document.createElement('div');
keyEqual.className = "key";
row.appendChild(keyEqual);
keyEqual.innerHTML = "=";

let keyBack = document.createElement('div');
keyBack.className = "backspace";
row.appendChild(keyBack);
keyBack.innerHTML = "Backspace";

//add div for the 2nd line
let row2 = document.createElement('div');
row2.className = "row2";
keyboard.appendChild(row2);

//add second line buttons
let keyTabLeft = document.createElement('div');
keyTabLeft.className = "keyTabLeft";
row2.appendChild(keyTabLeft);
keyTabLeft.innerHTML = "Tab";

let keyQ = document.createElement('div');
keyQ.className = "key";
row2.appendChild(keyQ);
keyQ.innerHTML = "q";

let keyW = document.createElement('div');
keyW.className = "key";
row2.appendChild(keyW);
keyW.innerHTML = "w";

let keyE = document.createElement('div');
keyE.className = "key";
row2.appendChild(keyE);
keyE.innerHTML = "e";

let keyR = document.createElement('div');
keyR.className = "key";
row2.appendChild(keyR);
keyR.innerHTML = "r";

let keyT = document.createElement('div');
keyT.className = "key";
row2.appendChild(keyT);
keyT.innerHTML = "t";

let keyY = document.createElement('div');
keyY.className = "key";
row2.appendChild(keyY);
keyY.innerHTML = "y";

let keyU = document.createElement('div');
keyU.className = "key";
row2.appendChild(keyU);
keyU.innerHTML = "u";

let keyI = document.createElement('div');
keyI.className = "key";
row2.appendChild(keyI);
keyI.innerHTML = "i";

let keyO = document.createElement('div');
keyO.className = "key";
row2.appendChild(keyO);
keyO.innerHTML = "o";

let keyP = document.createElement('div');
keyP.className = "key";
row2.appendChild(keyP);
keyP.innerHTML = "p";

let keyLeftSqBr = document.createElement('div');
keyLeftSqBr.className = "key";
row2.appendChild(keyLeftSqBr);
keyLeftSqBr.innerHTML = "[";

let keyRightSqBr = document.createElement('div');
keyRightSqBr.className = "key";
row2.appendChild(keyRightSqBr);
keyRightSqBr.innerHTML = "]";

let keyEnter = document.createElement('div');
keyEnter.className = "enter";
row2.appendChild(keyEnter);
keyEnter.innerHTML = "Enter";

//add div for the 3rd line
let row3 = document.createElement('div');
row3.className = "row3";
keyboard.appendChild(row3);

let keyCaps = document.createElement('div');
keyCaps.className = "caps";
row3.appendChild(keyCaps);
keyCaps.innerHTML = "Capslock";

let keyA = document.createElement('div');
keyA.className = "key";
row3.appendChild(keyA);
keyA.innerHTML = "a";

let keyS = document.createElement('div');
keyS.className = "key";
row3.appendChild(keyS);
keyS.innerHTML = "s";

let keyD = document.createElement('div');
keyD.className = "key";
row3.appendChild(keyD);
keyD.innerHTML = "d";

let keyF = document.createElement('div');
keyF.className = "key";
row3.appendChild(keyF);
keyF.innerHTML = "f";

let keyG = document.createElement('div');
keyG.className = "key";
row3.appendChild(keyG);
keyG.innerHTML = "g";

let keyH = document.createElement('div');
keyH.className = "key";
row3.appendChild(keyH);
keyH.innerHTML = "h";

let keyJ = document.createElement('div');
keyJ.className = "key";
row3.appendChild(keyJ);
keyJ.innerHTML = "j";

let keyK = document.createElement('div');
keyK.className = "key";
row3.appendChild(keyK);
keyK.innerHTML = "k";

let keyL = document.createElement('div');
keyL.className = "key";
row3.appendChild(keyL);
keyL.innerHTML = "l";

let keySemicolon = document.createElement('div');
keySemicolon.className = "key";
row3.appendChild(keySemicolon);
keySemicolon.innerHTML = ";";

let keyQuote = document.createElement('div');
keyQuote.className = "key";
row3.appendChild(keyQuote);
keyQuote.innerHTML = "'";

let keyEnter2 = document.createElement('div');
keyEnter2.className = "enter2";
row3.appendChild(keyEnter2);
keyEnter2.innerHTML = "Enter";




//add div for the 4th line
let row4 = document.createElement('div');
row4.className = "row4";
keyboard.appendChild(row4);

let keyLeftShift = document.createElement('div');
keyLeftShift.className = "shiftL";
row4.appendChild(keyLeftShift);
keyLeftShift.innerHTML = "Shift";

let keyBackSlash = document.createElement('div');
keyBackSlash.className = "key";
row4.appendChild(keyBackSlash);
keyBackSlash.innerHTML = "\\";

let keyZ = document.createElement('div');
keyZ.className = "key";
row4.appendChild(keyZ);
keyZ.innerHTML = "z";

let keyX = document.createElement('div');
keyX.className = "key";
row4.appendChild(keyX);
keyX.innerHTML = "x";

let keyC = document.createElement('div');
keyC.className = "key";
row4.appendChild(keyC);
keyC.innerHTML = "c";

let keyV = document.createElement('div');
keyV.className = "key";
row4.appendChild(keyV);
keyV.innerHTML = "v";

let keyB = document.createElement('div');
keyB.className = "key";
row4.appendChild(keyB);
keyB.innerHTML = "b";

let keyN = document.createElement('div');
keyN.className = "key";
row4.appendChild(keyN);
keyN.innerHTML = "n";

let keyM = document.createElement('div');
keyM.className = "key";
row4.appendChild(keyM);
keyM.innerHTML = "m";

let keyComma = document.createElement('div');
keyComma.className = "key";
row4.appendChild(keyComma);
keyComma.innerHTML = ",";

let keyDot = document.createElement('div');
keyDot.className = "key";
row4.appendChild(keyDot);
keyDot.innerHTML = ".";

let keySlash = document.createElement('div');
keySlash.className = "key";
row4.appendChild(keySlash);
keySlash.innerHTML = "/";

let keyUp = document.createElement('div');
keyUp.className = "key";
row4.appendChild(keyUp);
keyUp.innerHTML = "↑";

let keyRightShift = document.createElement('div');
keyRightShift.className = "shiftR";
row4.appendChild(keyRightShift);
keyRightShift.innerHTML = "Shift";

//add div for the 5th line
let row5 = document.createElement('div');
row5.className = "row5";
keyboard.appendChild(row5);

let keyFn = document.createElement('div');
keyFn.className = "key";
row5.appendChild(keyFn);
keyFn.innerHTML = "Fn";

let keyLeftControl = document.createElement('div');
keyLeftControl.className = "shiftL";
row5.appendChild(keyLeftControl);
keyLeftControl.innerHTML = "Ctrl";

let keyWin = document.createElement('div');
keyWin.className = "key";
row5.appendChild(keyWin);
keyWin.innerHTML = "Win";

let keyAlt = document.createElement('div');
keyAlt.className = "key";
row5.appendChild(keyAlt);
keyAlt.innerHTML = "Alt";

let keySpace = document.createElement('div');
keySpace.className = "space";
row5.appendChild(keySpace);
keySpace.innerHTML = " ";

let keyAltGr = document.createElement('div');
keyAltGr.className = "key";
row5.appendChild(keyAltGr);
keyAltGr.innerHTML = "AltG";

let keyPrt = document.createElement('div');
keyPrt.className = "key";
row5.appendChild(keyPrt);
keyPrt.innerHTML = "Prt";

let keyRightControl = document.createElement('div');
keyRightControl.className = "key";
row5.appendChild(keyRightControl);
keyRightControl.innerHTML = "Ctrl";

let keyLeft = document.createElement('div');
keyLeft.className = "key";
row5.appendChild(keyLeft);
keyLeft.innerHTML = "←";

let keyDown = document.createElement('div');
keyDown.className = "key";
row5.appendChild(keyDown);
keyDown.innerHTML = "↓";

let keyRight = document.createElement('div');
keyRight.className = "key";
row5.appendChild(keyRight);
keyRight.innerHTML = "→";


addEventListener("keydown", function(event) {
  if (event.keyCode == 192){
    document.querySelector('.text').value += "`";
  }
  else if (event.keyCode == 49){
    document.querySelector('.text').value += "1";
  }  
  else if (event.keyCode == 50){
    document.querySelector('.text').value += "2";
  }
  else if (event.keyCode == 51){
    document.querySelector('.text').value += "3";
  }
  else if (event.keyCode == 52){
    document.querySelector('.text').value += "4";
  }
  else if (event.keyCode == 53){
    document.querySelector('.text').value += "5";
  }
  else if (event.keyCode == 54){
    document.querySelector('.text').value += "6";
  }
  else if (event.keyCode == 55){
    document.querySelector('.text').value += "7";
  }
  else if (event.keyCode == 56){
    document.querySelector('.text').value += "8";
  }
  else if (event.keyCode == 57){
    document.querySelector('.text').value += "9";
  }
  else if (event.keyCode == 48){
    document.querySelector('.text').value += "0";
  }
  else if (event.keyCode == 189){
    document.querySelector('.text').value += "-";
  }
  else if (event.keyCode == 187){
    document.querySelector('.text').value += "=";
  }
  else if (event.keyCode == 8){
    document.querySelector('.text').value = "\b";//backspace
  }
  else if (event.keyCode == 9){
    document.querySelector('.text').value += "\t";//tab
  }
  else if (event.keyCode == 81){
    document.querySelector('.text').value += "q";
  }
  else if (event.keyCode == 87){
    document.querySelector('.text').value += "w";
  }
  else if (event.keyCode == 69){
    document.querySelector('.text').value += "e";
  }
  else if (event.keyCode == 82){
    document.querySelector('.text').value += "r";
  }
  else if (event.keyCode == 84){
    document.querySelector('.text').value += "t";
  }
  else if (event.keyCode == 89){
    document.querySelector('.text').value += "y";
  }
  else if (event.keyCode == 85){
    document.querySelector('.text').value += "u";
  }
  else if (event.keyCode == 73){
    document.querySelector('.text').value += "i";
  }
  else if (event.keyCode == 79){
    document.querySelector('.text').value += "o";
  }
  else if (event.keyCode == 80){
    document.querySelector('.text').value += "p";
  }
  else if (event.keyCode == 219){
    document.querySelector('.text').value += "[";
  }
  else if (event.keyCode == 221){
    document.querySelector('.text').value += "]";
  }
  else if (event.keyCode == 13){
    document.querySelector('.text').value += "\n";//enter
  }
  else if (event.keyCode == 20){
    document.querySelector('.text').value += "";//CapsLock
  }
  else if (event.keyCode == 65){
    document.querySelector('.text').value += "a";
  }
  else if (event.keyCode == 83){
    document.querySelector('.text').value += "s";
  }
  else if (event.keyCode == 68){
    document.querySelector('.text').value += "d";
  }
  else if (event.keyCode == 70){
    document.querySelector('.text').value += "f";
  }
  else if (event.keyCode == 71){
    document.querySelector('.text').value += "g";
  }
  else if (event.keyCode == 72){
    document.querySelector('.text').value += "h";
  }
  else if (event.keyCode == 74){
    document.querySelector('.text').value += "j";
  }
  else if (event.keyCode == 75){
    document.querySelector('.text').value += "k";
  }
  else if (event.keyCode == 76){
    document.querySelector('.text').value += "l";
  }
  else if (event.keyCode == 186){
    document.querySelector('.text').value += ";";
  }
  else if (event.keyCode == 222){
    document.querySelector('.text').value += "'";
  }
  else if (event.keyCode == 220){
    document.querySelector('.text').value += "\\";
  }
  else if (event.keyCode == 72){
    document.querySelector('.text').value += "h";
  }
  else if (event.keyCode == 16){
    document.querySelector('.text').value += "";//ShiftLeft
  }
  else if (event.keyCode == 226){
    document.querySelector('.text').value += "\\";
  }
  else if (event.keyCode == 90){
    document.querySelector('.text').value += "z";
  }
  else if (event.keyCode == 88){
    document.querySelector('.text').value += "x";
  }
  else if (event.keyCode == 67){
    document.querySelector('.text').value += "c";
  }
  else if (event.keyCode == 86){
    document.querySelector('.text').value += "v";
  }
  else if (event.keyCode == 66){
    document.querySelector('.text').value += "b";
  }
  else if (event.keyCode == 78){
    document.querySelector('.text').value += "n";
  }
  else if (event.keyCode == 77){
    document.querySelector('.text').value += "m";
  }
  else if (event.keyCode == 188){
    document.querySelector('.text').value += ",";
  }
  else if (event.keyCode == 190){
    document.querySelector('.text').value += ".";
  }
  else if (event.keyCode == 191){
    document.querySelector('.text').value += "/";
  }
    else if (event.keyCode == 16){
      document.querySelector('.text').value += "";//ShiftRight
    }
  else if (event.keyCode == 38){
    document.querySelector('.text').value += "up";
  }
  else if (event.keyCode == 255){
    document.querySelector('.text').value += "";//Fn
  }
  else if (event.keyCode == 17){
    document.querySelector('.text').value += "";//ControlLeft
  }
  else if (event.keyCode == 91){
    document.querySelector('.text').value += "";//Win
  }
  else if (event.keyCode == 18){
    document.querySelector('.text').value += "";//AltLeft
  }
  else if (event.keyCode == 32){
    document.querySelector('.text').value += " ";
  }
  else if (event.keyCode == 18){
    document.querySelector('.text').value += "";//AltGr
  }
  else if (event.keyCode == 17){
    document.querySelector('.text').value += "";//ControlRight
  }
  else if (event.keyCode == 37){
    document.querySelector('.text').value += "left";
  }
  else if (event.keyCode == 40){
    document.querySelector('.text').value += "down";
  }
  else if (event.keyCode == 39){
    document.querySelector('.text').value += "right";
  }

});


