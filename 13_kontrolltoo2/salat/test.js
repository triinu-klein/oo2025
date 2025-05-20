"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Impordime kõik vajalikud klassid ja koostisosad, et neid testis kasutada
var salat_1 = require("./salat");
// Testime, kas "Toiduaine" valem töötab õigesti, kui toitaine kogus ületab 100%
try {
    var vigane = new salat_1.Toiduaine("ValeToit", 50, 30, 30); // kokku 110%
    console.error("Viga: erandit ei visatud!");
}
catch (e) {
    console.log("Test läbitud: visati oodatud viga:", e.message);
}
// Testime, kas tomati rasvakogus on õigesti arvutatud (150g tomat)
var komponent = new salat_1.Toidukomponent(salat_1.Tomat, 150);
console.log("Tomati rasvakogus 150g:", komponent.rasvad(), "g");
if (komponent.rasvad() !== 0.45) {
    console.error("Rasvakoguse arvutus vale!");
}
// Testime Ceasari salati valkude, rasvade ja süsivesikute arvestamist
var ceasariSalat = new salat_1.Toit('Ceasari salat', [
    new salat_1.Toidukomponent(salat_1.Jääsalat, 100),
    new salat_1.Toidukomponent(salat_1.Kaste, 50),
    new salat_1.Toidukomponent(salat_1.Kana, 100),
    new salat_1.Toidukomponent(salat_1.Parmesan, 20),
]);
console.log("Valku kokku:", ceasariSalat.valgud(), "g");
console.log("Rasva kokku:", ceasariSalat.rasvad(), "g");
console.log("Süsivesikuid kokku:", ceasariSalat.sysivesikud(), "g");
// Testime massi korrutamist (soovitud mass 5000g)
var mass = 5000;
var baasmass = ceasariSalat.komponendid.map(function (k) { return k.kogus; }).reduce(function (a, b) { return a + b; });
var kordaja = mass / baasmass;
var uued = ceasariSalat.korrutatud(kordaja);
uued.forEach(function (k) {
    console.log("".concat(k.toiduaine.nimi, ": ").concat(k.kogus.toFixed(1), " g"));
});
