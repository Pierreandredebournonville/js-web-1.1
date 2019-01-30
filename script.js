/*1.1 - Color selector
Display three buttons named "Blue", "Red" and "Green" as well as
a <div> shaped like a square which should be black by default.

When you click on any of these buttons it should change the color
 of the <div> to the corresponding color.

1.1 - Sélecteur de couleur
Affiche trois boutons nommés "Bleu", "Rouge" et "Vert", ainsi que la
<div>forme d’un carré qui devrait être noir par défaut.

Lorsque vous cliquez sur l’un de ces boutons, la couleur de la
<div>couleur correspondante doit être modifiée .


*/
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/


function changeToBlue() {
  document.getElementById('rectangle').style.backgroundColor = "blue";
}

document.getElementById('blueButton').addEventListener('click', () => changeToBlue());

function changeToRed() {
  document.querySelector("#rectangle").style.backgroundColor = "red";
}
  document.querySelector("#redButton").addEventListener("click", () => changeToRed());

function changeToGreen() {
  document.querySelector("#rectangle").style.backgroundColor = "green";

}
  document.querySelector("#greenButton").addEventListener("click", () => changeToGreen());
