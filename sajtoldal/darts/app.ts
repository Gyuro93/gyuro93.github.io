
const playerOneInput = document.getElementById("playerOneImput") as HTMLInputElement;
const playerTwoInput = document.getElementById("playerTwoInput") as HTMLInputElement;

//pontszámláló ap

let playerOne: number = 501;
let playerTwo: number = 501;

function pontLeOne(): void {
    const playerOneScore = Number(playerOneInput.value);
    let szamol = playerOne - playerOneScore;
    playerOne = szamol;
    let ki = document.querySelector("#playerOne").innerHTML = playerOne "a pontszám";

}

function pontTwo(): void {
    const playerOneScore = Number(playerTwoInput.value);
    let szamol = playerTwo - playerOneScore;
    playerTwo = szamol;
    let ki = document.querySelector("#playerTwo").innerHTML = playerTwo + "Ennyi Kell még";
    if (playerTwo == 0) {
        document.write("PLAYER KETT WINNER MADER FUCKER")
    }

}

//JÁtékos roll
function whoIsStart(): void {
    let nevEgy: string = document.getElementById("nevEgy") as HTMLInputElement;
    let nevketto: string = document.getElementById("nevkett") as HTMLInputElement;
    let nyertesSzam: number = roll();
    if (nyertesSzam == 0) {
        document.querySelector("#nyertesNevKi").innerHTML = nevEgy.value;
        document.querySelector("#hNev1").innerHTML = nevEgy.value;
        document.querySelector("#hNev2").innerHTML = nevketto.value;

    } else if (nyertesSzam == 1) {
        document.querySelector("#nyertesNevKi").innerHTML = nevketto.value;
        document.querySelector("#hNev1").innerHTML = nevketto.value;
        document.querySelector("#hNev2").innerHTML = nevEgy.value;
    }

}
//randomRoll
function roll(): number {
    return Number(Math.round(Math.random() * 1))
}
function reset(): void {
    const playerTwoScore = Number(playerTwoInput.value);
    const playerOneScore = Number(playerOneInput.value);
    playerOne = 501;
    playerTwo = 501;
    document.querySelector("#playerTwo").innerHTML = playerOne;
    document.querySelector("#playerOne").innerHTML = playerTwo;
}