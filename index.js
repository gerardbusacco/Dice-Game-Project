// Test to verify if JS is working
// alert("working");

// Generate a random number from 1 to 6

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var diceImage = "images/dice" + randomNumber1 + ".png";

var img1 = document.querySelector(".img1");

img1.setAttribute("src", diceImage);

// Dice 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var diceImage = "images/dice" + randomNumber2 + ".png";

var img1 = document.querySelector(".img2");

img1.setAttribute("src", diceImage);


if (randomNumber1 > randomNumber2) {
document.querySelector("h1").innerHTML = "Player 1 Wins! ⭐️";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! ⭐️";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}

