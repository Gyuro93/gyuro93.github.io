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
        document.querySelector("#tojasKi").innerHTML = tojas() + " /db";
    }
    if (document.querySelector("#tevVizBe").value == "") {
        document.querySelector("#tevVizKi").innerHTML = "-";
    } else {
        document.querySelector("#tevVizKi").innerHTML = tejViz() + " /ml";
    }
    if (document.querySelector("#kisKanalBe").value == "") {
        document.querySelector("#kisKanalKi").innerHTML = "-";
    } else {
        document.querySelector("#kisKanalKi").innerHTML = kisKanal() + " /kk";
    }
    if (document.querySelector("#evoKanalBe").value == "") {
        document.querySelector("#evoKanalKi").innerHTML = "-";
    } else {
        document.querySelector("#evoKanalKi").innerHTML = evoKanal() + " /ek";
    }
    if (document.querySelector("#liszt").value == "") {
        document.querySelector("#lisztKi").innerHTML = "-";
    } else {
        document.querySelector("#lisztKi").innerHTML = liszt() + " /g";
    }
    if (document.querySelector("#csomag").value == "") {
        document.querySelector("#csomagKi").innerHTML = "-";
    } else {
        document.querySelector("#csomagKi").innerHTML = csomag() + " /csomag";
    }
    if (document.querySelector("#tejfol").value == "") {
        document.querySelector("#tejfolKi").innerHTML = "-";
    } else {
        document.querySelector("#tejfolKi").innerHTML = tejfolSz() + " /csomag";
    }


}


//További számoló függvények
function tojas() {
    let ertek = document.querySelector("#tojas").value;
    let szamolas = ((ertek * szazalek()) / 100).toFixed(1);
    return szamolas
}

function tejViz() {
    let ertek = document.querySelector("#tevVizBe").value;
    let szamolas = ((ertek * szazalek()) / 100).toFixed(1);
    return szamolas
}
function kisKanal() {
    let ertek = document.querySelector("#kisKanalBe").value;
    let szamolas = ((ertek * szazalek()) / 100).toFixed(1);
    return szamolas
}
function evoKanal() {
    let ertek = document.querySelector("#evoKanalBe").value;
    let szamolas = ((ertek * szazalek()) / 100).toFixed(1);
    return szamolas
} function liszt() {
    let ertek = document.querySelector("#liszt").value;
    let szamolas = ((ertek * szazalek()) / 100).toFixed(1);
    return szamolas
}
function csomag() {
    let ertek = document.querySelector("#csomag").value;
    let szamolas = ((ertek * szazalek()) / 100).toFixed(1);
    return szamolas
}
function tejfolSz() {
    let ertek = document.querySelector("#tejfol").value;
    let szamolas = ((ertek * szazalek()) / 100).toFixed(1);
    return szamolas
}