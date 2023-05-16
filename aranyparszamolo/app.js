// Az elemek eléréséhez szükséges ID-k
var selectId = 'hozzavalokEgy';
var tableId = 'tabla';
var createButtonId = 'tableCreateButton';
// Az adatokat tartalmazó tömb
var adatok = [
    { value: '1', hozzavalo: 'Tojas' },
    { value: '2', hozzavalo: 'Tej' },
    { value: '3', hozzavalo: 'Cukor' },
    { value: '4', hozzavalo: 'Piros Paprika' },
    { value: '5', hozzavalo: 'Liszt' },
    { value: '6', hozzavalo: 'Tejföl' },
    { value: '7', hozzavalo: 'Tejszin' },
    { value: '8', hozzavalo: 'Füszer' },
    { value: '9', hozzavalo: 'Alaplé' },
];
// Random ID generálása
function generateRandomId() {
    return "input-".concat(Math.random().toString(36).substr(2, 9));
}
function szazalek() {
    var ertekEgy = document.querySelector("#darabEgy").value;
    var ertekKetto = document.querySelector("#darabKetto").value;
    var calulate = (ertekEgy / 100);
    var szazalek = (ertekKetto / calulate).toFixed(2);
    return szazalek;
}
// Az adatok alapján táblázat generálása
function generateTable(selectedValue) {
    var _a;
    var selectElement = document.getElementById(selectId);
    var tableElement = document.getElementById(tableId);
    // Táblázat sorainak száma
    var rowCount = tableElement.rows.length;
    // Új sor hozzáadása
    var row = tableElement.insertRow(rowCount);
    // Hozzávaló oszlop
    var hozzavaloCell = row.insertCell();
    hozzavaloCell.textContent = ((_a = adatok.find(function (item) { return item.value === selectedValue; })) === null || _a === void 0 ? void 0 : _a.hozzavalo) || ""; //ide kell egy figyelpt amit a Tej Tojas Valami
    // Input mező oszlop
    var inputCell = row.insertCell();
    var inputId = generateRandomId();
    var input = document.createElement('input');
    input.type = 'text';
    input.value = '';
    input.id = inputId;
    inputCell.appendChild(input);
    // Számolás oszlop
    var szamolasCell = row.insertCell();
    szamolasCell.textContent = '';
    // Eseménykezelő hozzáadása az input mezőhöz
    input.addEventListener('input', function () {
        var _a;
        var nemTudom = (_a = adatok.find(function (item) { return item.value === selectedValue; })) === null || _a === void 0 ? void 0 : _a.hozzavalo;
        var inputValue = Number(input.value);
        var szamoltErtek = ((inputValue * szazalek()) / 100).toFixed(1);
        if (nemTudom == "Tojas") {
            szamolasCell.textContent = szamoltErtek.toString() + " /db";
        }
        ;
        if (nemTudom == "Tej") {
            szamolasCell.textContent = szamoltErtek.toString() + " /l";
        }
        ;
        if (nemTudom == "Cukor") {
            szamolasCell.textContent = szamoltErtek.toString() + " /kk";
        }
        ;
        if (nemTudom == "Piros Paprika") {
            szamolasCell.textContent = szamoltErtek.toString() + " /kk";
        }
        ;
        if (nemTudom == "Liszta") {
            szamolasCell.textContent = szamoltErtek.toString() + " /g";
        }
        ;
        if (nemTudom == "Tejföl") {
            szamolasCell.textContent = szamoltErtek.toString() + " /g";
        }
        ;
        if (nemTudom == "Tejszin") {
            szamolasCell.textContent = szamoltErtek.toString() + " /ml";
        }
        ;
        if (nemTudom == "Füszer") {
            szamolasCell.textContent = szamoltErtek.toString() + " /kk";
        }
        ;
        if (nemTudom == "Alaplé") {
            szamolasCell.textContent = szamoltErtek.toString() + " /dl";
        }
        ;
    });
}
// Gomb eseménykezelője
var createButton = document.getElementById(createButtonId);
createButton.addEventListener('click', function () {
    var selectElement = document.getElementById(selectId);
    var selectedValue = selectElement.value;
    generateTable(selectedValue);
});
