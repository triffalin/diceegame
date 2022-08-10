/** LEFT DICE */

var randomNumberLeft = Math.floor(Math.random () * 6) + 1; //1-6 dicees

var randomDiceImageLeft = "dice" + randomNumberLeft + ".png"; //choose 1 pict of 6

var randomImageSourceLeft = "images/" + randomDiceImageLeft; // choose from /images dice 1 to 6

var imageLeft = document.querySelectorAll("img")[0];

imageLeft.setAttribute("src", randomImageSourceLeft);



/** RIGHT DICE */
var randomNumberRight = Math.floor(Math.random () * 6) +1; // 1-6 dicees

var randomDiceImageRight = "dice" + randomNumberRight + ".png"; //choose 1 pict of 6

var randomImageSourceRight = "images/" + randomDiceImageRight; // choose from /images dice 1 to 6

var imageRight = document.querySelectorAll("img")[1];

imageRight.setAttribute("src", randomImageSourceRight);


/** GAME RULES */
/** player 1 wins */
if (randomNumberLeft > randomNumberRight) {
  document.querySelector("h1").innerHTML = "🥇 Player 1 Wins!";
} else if (randomNumberRight > randomNumberLeft) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🥇";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
