/*
* koosta funktsioon, kus antakse ette kahe ainekursuse ainepunktid ja hinded. Arvuta nende põhjal kaalutud keskmine.

* klassile saab lisada sooritatud ainete hindeid ja ainepunkte, välja küsida nende andmete põhjal parasjagu arvutatud kaalutud keskmins.

* loo kasutajaliides: kasutaja valib hinde (A-F) ja sisestab ainepunktide arvu. Joonisel on näha ainete kaalutud keskmine,
    samuti ained ristkülikuna, mille laiuseks on ainepunktide arv ning kõrguseks hinde numbriline väärtus (A-5...F-1).
*/
// Klass, mis hoiab hinnete ja ainepunktide andmeid
var AinepunktidHinded = /** @class */ (function () {
    // Konstruktor, mis võtab vastu kursuste nimekirja
    function AinepunktidHinded(kursused) {
        this.kursused = kursused;
    }
    // Funktsioon, mis lisab kursuse hinde ja ainepunktide arvu
    AinepunktidHinded.prototype.lisaKursus = function (ainepunktid, hinne) {
        this.kursused.push({ ainepunktid: ainepunktid, hinne: hinne });
    };
    // Hinde numbriks teisendamise funktsioon
    AinepunktidHinded.prototype.hinneNumbriks = function (hinne) {
        var hinneteTabel = {
            "A": 5, "B": 4, "C": 3, "D": 2, "E": 1, "F": 0
        };
        return hinneteTabel[hinne.toUpperCase()];
    };
    // Funktsioon kaalutud keskmise arvutamiseks
    AinepunktidHinded.prototype.kaalutudKeskmine = function () {
        var punktideSumma = 0; // Kõikide kursuste ainepunktide summa
        var kaalutudSumma = 0; // Kõikide kaalutud hinnete summa
        // Läbib kõik kursused ja arvutab kaalutud keskmise
        for (var _i = 0, _a = this.kursused; _i < _a.length; _i++) {
            var _b = _a[_i], ainepunktid = _b.ainepunktid, hinne = _b.hinne;
            var hinneVäärtus = this.hinneNumbriks(hinne);
            // Arvutab kaalutud hinne * ainepunktid
            kaalutudSumma += hinneVäärtus * ainepunktid;
            punktideSumma += ainepunktid;
        }
        // Kui ainepunktide summa on 0, siis ei saa keskmist arvutada, tagastab 0
        return punktideSumma === 0 ? 0 : kaalutudSumma / punktideSumma;
    };
    return AinepunktidHinded;
}());
// AinepunktidHinded objekt, kus on kursused koos hinnetega
var kursused = [
    { ainepunktid: 3, hinne: "A" },
    { ainepunktid: 4, hinne: "B" },
    { ainepunktid: 2, hinne: "C" }
];
// Objekt, mille kaudu pääseb funktsioonide juurde
var ainepunktidHindedObjekt = new AinepunktidHinded(kursused);
// Kaalutud keskmise kuvamise funktsioon
function uuendaKaalutudKeskmine() {
    var kaalutudKeskmine = ainepunktidHindedObjekt.kaalutudKeskmine();
    document.getElementById('kaalutudKeskmine').textContent = kaalutudKeskmine.toFixed(2);
}
// Kursus on lisatud ja kaalutud keskmine uuendatakse
function lisaKursus() {
    const hinne = document.getElementById('hinne').value;
    const ainepunktid = parseInt(document.getElementById('ainepunktid').value);

    // Kontrollige, kas sisend on korrektne
    if (isNaN(ainepunktid) || ainepunktid <= 0) {
        alert("Palun sisesta korrektne ainepunktide arv!");
        return;
    }

    // Lisage kursus ja uuendage kaalutud keskmist
    ainepunktidHindedObjekt.lisaKursus(ainepunktid, hinne);
    uuendaKaalutudKeskmine();
}
