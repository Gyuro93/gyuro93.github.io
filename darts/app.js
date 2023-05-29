var playerOneInput = document.getElementById("playerOneImput");
var playerTwoInput = document.getElementById("playerTwoInput");
//pontszámláló ap
var playerOne = 501;
var playerTwo = 501;
function pontLeOne() {
    var playerOneScore = Number(playerOneInput.value);
    var szamol = playerOne - playerOneScore;
    playerOne = szamol;
    var ki = document.querySelector("#playerOne").innerHTML = playerOne;
    "a pontszám";
}
function pontTwo() {
    var playerOneScore = Number(playerTwoInput.value);
    var szamol = playerTwo - playerOneScore;
    playerTwo = szamol;
    var ki = document.querySelector("#playerTwo").innerHTML = playerTwo + "Ennyi Kell még";
    if (playerTwo == 0) {
        document.write("PLAYER KETT WINNER MADER FUCKER");
    }
}
//JÁtékos roll
function whoIsStart() {
    var nevEgy = document.getElementById("nevEgy");
    var nevketto = document.getElementById("nevkett");
    var nyertesSzam = roll();
    if (nyertesSzam == 0) {
        document.querySelector("#nyertesNevKi").innerHTML = nevEgy.value;
        document.querySelector("#hNev1").innerHTML = nevEgy.value;
        document.querySelector("#hNev2").innerHTML = nevketto.value;
    }
    else if (nyertesSzam == 1) {
        document.querySelector("#nyertesNevKi").innerHTML = nevketto.value;
        document.querySelector("#hNev1").innerHTML = nevketto.value;
        document.querySelector("#hNev2").innerHTML = nevEgy.value;
    }
}
//randomRoll
function roll() {
    return Number(Math.round(Math.random() * 1));
}
function reset() {
    var playerTwoScore = Number(playerTwoInput.value);
    var playerOneScore = Number(playerOneInput.value);
    playerOne = 501;
    playerTwo = 501;
    document.querySelector("#playerTwo").innerHTML = playerOne;
    document.querySelector("#playerOne").innerHTML = playerTwo;
}
