function krmivo() {
    krm = parseInt(document.objednavka.zradlo.value);
    krmKg = parseInt(document.objednavka.zradloKg.value);
    prubez = krm * krmKg;
    document.objednavka.pruCena.value = prubez;
}

function celkCena() {
    baseValue = document.objednavka.pruCena.value;
    base = parseInt(baseValue);
    if (!base) {
        alert("Namas vybrane krmivo a vahu")
    }
    if (document.objednavka.bio.checked) {
        base = base * 1.3
    }
    if (document.objednavka.prem.checked) {
        base = base * 1.5
    }
    if (document.objednavka.nek.checked) {
        base = base * 0.85
    }
    if (document.objednavka.darek.checked) {
        base = base + 500
    }
    if (document.getElementById("osob").checked) {
        base = base
    }
    if (document.getElementById("kur").checked) {
        base = base * 1.1
    }
    if (document.getElementById("pos").checked) {
        base = base + 250
    }
    document.objednavka.celkem.value = base;
}

function porovnej() {
    vysl = parseInt(document.objednavka.celkem.value);
    porovnavana = parseInt(document.objednavka.porov.value);
    if (!vysl) {
        alert("Nemas spocitanou cenu nakupu")

    } else if (!porovnavana) {
        alert("musis vlozit castku")
    } else {
        if (porovnavana < vysl) {
            document.objednavka.porov.value = "malo penez";
        } else {
            document.objednavka.porov.value = "OK";
        }
    }
}

function checkSpcialChar() {
    var iChars = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?";

    for (var i = 0; i < document.objednavka.mail.value.length; i++) {
        if (iChars.indexOf(document.objednavka.mail.value.charAt(i)) != -1) {
            alert("Nepovolene znaky \n Prosim odstrante je a zkuste znovu.");
            return false;
        }
    }
}