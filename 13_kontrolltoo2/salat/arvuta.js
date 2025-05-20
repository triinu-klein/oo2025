"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Impordime vajalikud klassid ja komponendid salat.ts failist
var salat_1 = require("./salat");
// Funktsioon tulemuste kuvamiseks HTML-is
function arvuta() {
    var mass = parseFloat(document.getElementById("kogus").value);
    if (isNaN(mass)) {
        alert("Palun sisesta korrektne kogus!");
        return;
    }
    // Arvutame salati komponentide uus kogus vastavalt kasutaja sisestatud massile
    var baasmass = salat_1.ceasariSalat100g.komponendid.map(function (k) { return k.kogus; }).reduce(function (a, b) { return a + b; });
    var kordaja = mass / baasmass;
    var uuedKomponendid = salat_1.ceasariSalat100g.korrutatud(kordaja);
    // Kuvame tulemused HTML-is
    var tulemusedHTML = "<p>Ceasari salati koostisosad ".concat(mass, " grammi jaoks:</p><ul>");
    uuedKomponendid.forEach(function (k) {
        tulemusedHTML += "<li>".concat(k.toiduaine.nimi, ": ").concat(k.kogus.toFixed(1), " g</li>");
    });
    tulemusedHTML += "</ul>";
    document.getElementById("tulemused").innerHTML = tulemusedHTML;
}
