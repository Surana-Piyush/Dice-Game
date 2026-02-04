
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// console.log(randomNumber);

document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");

var text = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
    text.innerHTML = "Player 1 won!!";
}
else if (randomNumber1 < randomNumber2) {
    text.innerHTML = "Player 2 won!!";
}
else {
    text.innerHTML = "Draw";
}

// if (randomNumber1 > randomNumber2) {
//     document.querySelector("h1").innerHTML = "Player 1 won!!";
// } 
// else if (randomNumber1 < randomNumber2) {
//     document.querySelector("h1").innerHTML = "Player 2 won!!";
// }
// else {
//     document.querySelector("h1").innerHTML = "Draw";
// }