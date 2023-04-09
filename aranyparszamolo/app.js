//Alap programkód
calulateButton.addEventListener("click", documentWrite);

//Százalékszámító
function szazalek() {
    let ertekEgy = document.querySelector("#darabEgy").value
    let ertekKetto = document.querySelector("#darabKetto").value
    let calulate = (ertekEgy / 100);
    let szazalek = (ertekKetto / calulate).toFixed(2);
    return szazalek
}

//Ki irató függvény
function documentWrite() {
    if (szazalek() == "NaN") {
        alert = ("Nem adtál meg értéket")
    } else {
        document.querySelector("#szazalakKi").innerHTML = "Kiszámolt érték : " + szazalek() + "%";
    }

    if (document.querySelector("#tojas").value == "") {
        document.querySelector("#tojasKi").innerHTML = "-";
    } else {
        document.querySelector("#tojasKi").innerHTML = tojas() + " db";
    }
    if (document.querySelector("#tevVizBe").value == "") {
        document.querySelector("#tevVizKi").innerHTML = "-";
    } else {
        document.querySelector("#tevVizKi").innerHTML = tejViz() + " ml";
    }
    if (document.querySelector("#kisKanalBe").value == "") {
        document.querySelector("#kisKanalKi").innerHTML = "-";
    } else {
        document.querySelector("#kisKanalKi").innerHTML = kisKanal() + " kk";
    }
    if (document.querySelector("#evoKanalBe").value == "") {
        document.querySelector("#evoKanalKi").innerHTML = "-";
    } else {
        document.querySelector("#evoKanalKi").innerHTML = evoKanal() + " ek";
    }



}


//További számoló függvények
function tojas() {
    let ertek = document.querySelector("#tojas").value;
    let szamolas = (ertek * szazalek()) / 100;
    return szamolas
}

function tejViz() {
    let ertek = document.querySelector("#tevVizBe").value;
    let szamolas = (ertek * szazalek()) / 100;
    return szamolas
}
function kisKanal() {
    let ertek = document.querySelector("#kisKanalBe").value;
    let szamolas = (ertek * szazalek()) / 100;
    return szamolas
}
function evoKanal() {
    let ertek = document.querySelector("#evoKanalBe").value;
    let szamolas = (ertek * szazalek()) / 100;
    return szamolas
}