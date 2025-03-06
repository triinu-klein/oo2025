"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auto_1 = require("chart.js/auto");
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
    var hinne = document.getElementById('hinne').value;
    var ainepunktid = parseInt(document.getElementById('ainepunktid').value);
    // Kontrollime, kas sisend on korrektne
    if (isNaN(ainepunktid) || ainepunktid <= 0) {
        alert("Palun sisesta korrektne ainepunktide arv!");
        return;
    }
    // Lisame kursuse
    ainepunktidHindedObjekt.lisaKursus(ainepunktid, hinne);
    // Kaalutud keskmine uuendamine
    uuendaKaalutudKeskmine();
    // Uuenda joonistatud diagrammi
    uuendaDiagramm();
}
// Funktsioon, mis uuendab diagrammi, et kuvada iga ainepunktide ja hinde suhet
function uuendaDiagramm() {
    var hindedAndAinepunktid = ainepunktidHindedObjekt.kursused.map(function (kursus) {
        var hinneNumbriks = ainepunktidHindedObjekt["hinneNumbriks"](kursus.hinne); // Privaatne funktsioon
        return {
            ainepunktid: kursus.ainepunktid,
            hinneVäärtus: hinneNumbriks
        };
    });
    var ctx = document.getElementById('diagramm').getContext('2d');
    if (ctx !== null) {
        // Kui kontekst on kehtiv, siis loo uus diagramm
        new auto_1.default(ctx, {
            type: 'bar',
            data: {
                labels: hindedAndAinepunktid.map(function (kursus) { return "".concat(kursus.ainepunktid, " ainepunkti"); }),
                datasets: [{
                        label: 'Kursus ja Hinne',
                        data: hindedAndAinepunktid.map(function (kursus) { return kursus.hinneVäärtus; }),
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}
