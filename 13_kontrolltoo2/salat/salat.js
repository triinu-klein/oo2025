"use strict";
// Salati koostisosade ja toiduainete klassid
Object.defineProperty(exports, "__esModule", { value: true });
exports.ceasariSalat100g = exports.Parmesan = exports.Tomat = exports.Kana = exports.Kaste = exports.Jääsalat = exports.Toit = exports.Toidukomponent = exports.Toiduaine = void 0;
var Toiduaine = /** @class */ (function () {
    function Toiduaine(nimi, valgud, rasvad, sysivesikud) {
        this.nimi = nimi;
        this.valgud = valgud;
        this.rasvad = rasvad;
        this.sysivesikud = sysivesikud;
        if (valgud + rasvad + sysivesikud > 100) {
            throw new Error("Toitainete kogus ei tohi ületada 100%");
        }
    }
    return Toiduaine;
}());
exports.Toiduaine = Toiduaine;
var Toidukomponent = /** @class */ (function () {
    function Toidukomponent(toiduaine, kogus) {
        this.toiduaine = toiduaine;
        this.kogus = kogus;
    }
    Toidukomponent.prototype.valgud = function () {
        return this.toiduaine.valgud * this.kogus / 100;
    };
    Toidukomponent.prototype.rasvad = function () {
        return this.toiduaine.rasvad * this.kogus / 100;
    };
    Toidukomponent.prototype.sysivesikud = function () {
        return this.toiduaine.sysivesikud * this.kogus / 100;
    };
    return Toidukomponent;
}());
exports.Toidukomponent = Toidukomponent;
var Toit = /** @class */ (function () {
    function Toit(nimetus, komponendid) {
        this.nimetus = nimetus;
        this.komponendid = komponendid;
    }
    Toit.prototype.mass = function () {
        return this.komponendid.reduce(function (sum, k) { return sum + k.kogus; }, 0);
    };
    Toit.prototype.valgud = function () {
        return this.komponendid.reduce(function (sum, k) { return sum + k.valgud(); }, 0);
    };
    Toit.prototype.rasvad = function () {
        return this.komponendid.reduce(function (sum, k) { return sum + k.rasvad(); }, 0);
    };
    Toit.prototype.sysivesikud = function () {
        return this.komponendid.reduce(function (sum, k) { return sum + k.sysivesikud(); }, 0);
    };
    Toit.prototype.korrutatud = function (kordaja) {
        return this.komponendid.map(function (k) { return new Toidukomponent(k.toiduaine, k.kogus * kordaja); });
    };
    return Toit;
}());
exports.Toit = Toit;
// Siin defineerime toiduained
exports.Jääsalat = new Toiduaine("Jääsalat", 0.8, 0.12, 2.1);
exports.Kaste = new Toiduaine("Caesari salatikaste", 1.53, 24.5, 8.1);
exports.Kana = new Toiduaine("Kanafilee", 31.1, 2, 0);
exports.Tomat = new Toiduaine("Tomat", 0.6, 0.3, 3.5);
exports.Parmesan = new Toiduaine("Parmesan", 40.6, 29.7, 0);
// Basa retsept Ceasari salati jaoks
exports.ceasariSalat100g = new Toit("Ceasari salat", [
    new Toidukomponent(exports.Kana, 35),
    new Toidukomponent(exports.Jääsalat, 30),
    new Toidukomponent(exports.Kaste, 20),
    new Toidukomponent(exports.Parmesan, 10),
    new Toidukomponent(exports.Tomat, 5),
]);
