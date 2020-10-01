var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var diceimg1 = "dice" + randomNumber1 + ".png"
var imgfolder1 = "images/" + diceimg1;
document.querySelector(".img1").setAttribute("src", imgfolder1);


var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var diceimg2 = "dice" + randomNumber2 + ".png"
var imgfolder2 = "images/" + diceimg2;
document.querySelector(".img2").setAttribute("src", imgfolder2);

if (randomNumber1 < randomNumber2) {
document.querySelector("h1").innerText = "Player 2 wins 🚩"
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerText = "🚩 Player 1 wins "
} else {
  document.querySelector("h1").innerText = "Draw!"
}
