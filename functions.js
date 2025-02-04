function vypocetVeku(datumNarozeni) {
    let dnes = new Date();
    let narozeni = new Date(datumNarozeni);
    let rozdil = dnes - narozeni;
    let vek = rozdil / (1000 * 60 * 60 * 24 * 365.2425); // Přepočet na roky
    return vek.toFixed(14); // 14 desetinných míst
}

function dnyDoNarozenin(datumNarozeni) {
    let dnes = new Date();
    let narozeni = new Date(datumNarozeni);
    let letosniNarozeniny = new Date(dnes.getFullYear(), narozeni.getMonth(), narozeni.getDate());

    // Pokud už letos byly narozeniny, vezmeme příští rok
    if (dnes > letosniNarozeniny) {
        letosniNarozeniny.setFullYear(dnes.getFullYear() + 1);
    }

    let rozdil = Math.ceil((letosniNarozeniny - dnes) / (1000 * 60 * 60 * 24)); // Počet dní
    return rozdil;
}

function aktualizovatVek() {
    let vekElement = document.getElementById("vek");
    let dnyElement = document.getElementById("dny");

    let datumNarozeni = "2007-03-07"; // Opravený formát na YYYY-MM-DD (přidána nula k měsíci a dni)

    vekElement.textContent = `${vypocetVeku(datumNarozeni)}`;
    dnyElement.textContent = `${dnyDoNarozenin(datumNarozeni)} dní`;
}

// Aktualizace každých 50 ms pro přesnost
setInterval(aktualizovatVek, 50);
aktualizovatVek(); // První načtení okamžitě
