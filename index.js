var randomNumber1 = Math.floor( Math.random() * 6 ) + 1;
var randomImg1 = "images/dice" + randomNumber1 + ".png";
var x = document.querySelector(".img1");

x.setAttribute("src",randomImg1);
 

var randomNumber2 = Math.floor( Math.random() * 6 ) + 1;
var randomImg2 = "images/dice" + randomNumber2 + ".png";
var y = document.querySelector(".img2");

y.setAttribute("src",randomImg2);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "👏Player1 wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player2 wins!👏";
} else {
    document.querySelector("h1").innerHTML = "Draw!🙌";
}