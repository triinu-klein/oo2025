"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vektor = /** @class */ (function () {
    function Vektor(x, y) {
        this.x = x;
        this.y = y;
    }
    Vektor.prototype.kuva = function () {
        console.log(this.x, this.y);
    };
    Vektor.prototype.pikkus = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    Vektor.prototype.liida = function (teine) {
        return new Vektor(this.x + teine.x, this.y + teine.y);
    };
    Vektor.prototype.korruta = function (koef) {
        return new Vektor(this.x * koef, this.y * koef);
    };
    Vektor.prototype.suurendaX = function () {
        this.x += 1;
    };
    //skalaarkorrutis
    Vektor.prototype.skalaarkorrutis = function (teine) {
        return this.x * teine.x + this.y * teine.y;
    };
    return Vektor;
}());
var vektorid = [
    new Vektor(3, 5),
    new Vektor(9, 0),
    new Vektor(1, 5),
    new Vektor(2, 8),
];
var asukoht = vektorid[0];
for (var i = 1; i < vektorid.length; i++) {
    asukoht = asukoht.liida(vektorid[i]);
}
asukoht.kuva();
var v1 = new Vektor(3, 5);
var v2 = new Vektor(9, 0);
var energia = v1.skalaarkorrutis(v2);
console.log(energia);
v1.suurendaX();
v1.korruta(4).kuva();
v1.kuva();
console.log(v1.pikkus());
var vKolmas = v1.liida(new Vektor(1, 2));
vKolmas.kuva();
