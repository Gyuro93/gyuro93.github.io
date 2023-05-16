// Az elemek eléréséhez szükséges ID-k
const selectId = 'hozzavalokEgy';
const tableId = 'tabla';
const createButtonId = 'tableCreateButton';

// Az adatokat tartalmazó tömb
const adatok = [
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
function generateRandomId(): string {
    return `input-${Math.random().toString(36).substr(2, 9)}`;
}
function szazalek(): any {
    let ertekEgy = document.querySelector("#darabEgy").value;
    let ertekKetto = document.querySelector("#darabKetto").value;
    let calulate = (ertekEgy / 100);
    let szazalek = (ertekKetto / calulate).toFixed(2);
    return szazalek
}
// Az adatok alapján táblázat generálása
function generateTable(selectedValue: string): void {
    const selectElement = document.getElementById(selectId) as HTMLSelectElement;
    const tableElement = document.getElementById(tableId) as HTMLTableElement;

    // Táblázat sorainak száma
    const rowCount = tableElement.rows.length;

    // Új sor hozzáadása
    const row = tableElement.insertRow(rowCount);

    // Hozzávaló oszlop
    const hozzavaloCell = row.insertCell();
    hozzavaloCell.textContent = adatok.find((item) => item.value === selectedValue)?.hozzavalo || ""; //ide kell egy figyelpt amit a Tej Tojas Valami

    // Input mező oszlop
    const inputCell = row.insertCell();
    const inputId = generateRandomId();
    const input = document.createElement('input');
    input.type = 'text';
    input.value = '';
    input.id = inputId;
    inputCell.appendChild(input);

    // Számolás oszlop
    const szamolasCell = row.insertCell();
    szamolasCell.textContent = '';

    // Eseménykezelő hozzáadása az input mezőhöz
    input.addEventListener('input', () => {
        const nemTudom = adatok.find((item) => item.value === selectedValue)?.hozzavalo;
        const inputValue = Number(input.value);
        const szamoltErtek = ((inputValue * szazalek()) / 100).toFixed(1);
        if (nemTudom == "Tojas") { szamolasCell.textContent = szamoltErtek.toString() + " /db" };
        if (nemTudom == "Tej") { szamolasCell.textContent = szamoltErtek.toString() + " /ml" };
        if (nemTudom == "Cukor") { szamolasCell.textContent = szamoltErtek.toString() + " /kk" };
        if (nemTudom == "Piros Paprika") { szamolasCell.textContent = szamoltErtek.toString() + " /ek" };
        if (nemTudom == "Liszt") { szamolasCell.textContent = szamoltErtek.toString() + " /g" };
        if (nemTudom == "Tejföl") { szamolasCell.textContent = szamoltErtek.toString() + " /g" };
        if (nemTudom == "Tejszin") { szamolasCell.textContent = szamoltErtek.toString() + " /ml" };
        if (nemTudom == "Füszer") { szamolasCell.textContent = szamoltErtek.toString() + " /kk" };
        if (nemTudom == "Alaplé") { szamolasCell.textContent = szamoltErtek.toString() + " /dl" };

    });
}

// Gomb eseménykezelője
const createButton = document.getElementById(createButtonId) as HTMLButtonElement;
createButton.addEventListener('click', () => {
    const selectElement = document.getElementById(selectId) as HTMLSelectElement;
    const selectedValue = selectElement.value;

    generateTable(selectedValue);
});


