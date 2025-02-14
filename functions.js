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

function natydny(dnyDoNarozenin) {
    let tydny = Math.floor(dnyDoNarozenin / 7); // Počet celých týdnů
    let zbyvajicidny = dnyDoNarozenin % 7; // Počet zbývajících dní

    let tydnyText = "";
    let dnyText = "";

    // Skloňování týdnů
    if (tydny === 1) {
        tydnyText = "1 týden";
    } else if (tydny >= 2 && tydny <= 4) {
        tydnyText = `${tydny} týdny`;
    } else if (tydny >= 5) {
        tydnyText = `${tydny} týdnů`;
    }

    // Skloňování dnů
    if (zbyvajicidny === 1) {
        dnyText = "1 den";
    } else if (zbyvajicidny >= 2 && zbyvajicidny <= 4) {
        dnyText = `${zbyvajicidny} dny`;
    } else if (zbyvajicidny >= 5) {
        dnyText = `${zbyvajicidny} dní`;
    }

    // Výběr správného formátu výstupu
    if (tydny > 0 && zbyvajicidny > 0) {
        return `${tydnyText} a ${dnyText}`;
    } else if (tydny > 0) {
        return tydnyText;
    } else {
        return dnyText;
    }
}



function aktualizovatVek() {
    let vekElement = document.getElementById("vek");
    let dnyElement = document.getElementById("dny");

    let datumNarozeni = "2007-03-07"; // Opravený formát na YYYY-MM-DD (přidána nula k měsíci a dni)

    vekElement.textContent = `${vypocetVeku(datumNarozeni)}`; // Vloží vypočítaný věk
    dnyElement.textContent = `${dnyDoNarozenin(datumNarozeni)} dní (${natydny(dnyDoNarozenin(datumNarozeni))})`; // Zobrazí dny do narozenin včetně týdnů

}

// Aktualizace každých 50 ms pro přesnost
setInterval(aktualizovatVek, 50);
aktualizovatVek(); // První načtení okamžitě