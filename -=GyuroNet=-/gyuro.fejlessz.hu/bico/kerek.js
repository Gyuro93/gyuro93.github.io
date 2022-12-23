function calcAmount() {
    //Alaktrész számolás
    var alkat1 = parseInt(document.querySelector("#alkat1").value);
    var alkat2 = parseInt(document.querySelector("#alkat2").value);
    var alkat8 = parseInt(document.querySelector("#alkat3").value);
    var alkat3 = parseInt(document.querySelector("#alkat4").value);
    var alkat4 = parseInt(document.querySelector("#alkat5").value);
    var alkat5 = parseInt(document.querySelector("#alkat6").value);
    var alkat6 = parseInt(document.querySelector("#alkat7").value);
    var alkat7 = parseInt(document.querySelector("#alkat8").value);
    var ered = document.querySelector("#alkat2").value;
    var calculate;

    calculate = alkat1 + alkat2 + alkat3 + alkat4 + alkat5 + alkat6 + alkat7 + alkat8;

    document.querySelector("#alater").innerHTML = calculate;


    // Munkadij számolás
    var munkadij1 = parseInt(document.querySelector("#munkadij1").value);
    var munkadij2 = parseInt(document.querySelector("#munkadij2").value);
    var munkadij3 = parseInt(document.querySelector("#munkadij3").value);
    var munkadij4 = parseInt(document.querySelector("#munkadij4").value);
    var munkadij5 = parseInt(document.querySelector("#munkadij5").value);
    var munkadij6 = parseInt(document.querySelector("#munkadij6").value);
    var munkadij7 = parseInt(document.querySelector("#munkadij7").value);
    var munkadij8 = parseInt(document.querySelector("#munkadij8").value);
    var calculate2;

    calculate2 = munkadij1 + munkadij2 + munkadij3 + munkadij4 + munkadij5 + munkadij6 + munkadij7 + munkadij8;

    document.querySelector("#munkaer").innerHTML = calculate2;


    // öss
    var calculate3;

    calculate3 = calculate + calculate2;
    document.querySelector("#ossz").innerHTML = calculate3;
}

