var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Abstraktne klass, mis määratleb muusikalise ajastu põhistruktuuri
var TaylorEra = /** @class */ (function () {
    // Ajastu või albumi nimi
    function TaylorEra(name, 
    // Ajastu kestvus aastates
    period) {
        this.name = name;
        this.period = period;
    }
    // Prindib konsooli kokkuvõtte: nime, perioodi, stiili ja laulu
    TaylorEra.prototype.summary = function () {
        console.log("".concat(this.constructor.name, " (").concat(this.period, "):"));
        console.log("Kirjeldus: ".concat(this.describeEra()));
        console.log("Tuntuim laul: ".concat(this.topSong()));
        console.log('---');
    };
    return TaylorEra;
}());
// Esimese albumi ajastu
var Taylor_Swift = /** @class */ (function (_super) {
    __extends(Taylor_Swift, _super);
    // Nimi “Taylor Swift”, ajavahemik 2006–2008
    function Taylor_Swift() {
        return _super.call(this, "Taylor Swift", "2006–2008") || this;
    }
    Taylor_Swift.prototype.describeEra = function () {
        return "Debüüdi puhul keskendub tugevale kantrirootsile ja otsekohesusele.";
    };
    Taylor_Swift.prototype.topSong = function () {
        return "Tim McGraw";
    };
    return Taylor_Swift;
}(TaylorEra));
// „Fearless“ ajastu
var Fearless = /** @class */ (function (_super) {
    __extends(Fearless, _super);
    function Fearless() {
        return _super.call(this, "Fearless", "2008–2010") || this;
    }
    Fearless.prototype.describeEra = function () {
        return "Romantika ja unistused, meeldejäävad refräänid ning kaunid armastuslaulud.";
    };
    Fearless.prototype.topSong = function () {
        return "You Belong With Me";
    };
    return Fearless;
}(TaylorEra));
// „Speak Now“ ajastu
var SpeakNow = /** @class */ (function (_super) {
    __extends(SpeakNow, _super);
    function SpeakNow() {
        return _super.call(this, "Speak Now", "2010–2012") || this;
    }
    SpeakNow.prototype.describeEra = function () {
        return "Täielikult ise kirjutatud lood, sirgumine superstaariks ja armastusteemad.";
    };
    SpeakNow.prototype.topSong = function () {
        return "Long Live";
    };
    return SpeakNow;
}(TaylorEra));
// Kogu muusikaliste ajastute loend
var eras = [
    new Taylor_Swift(),
    new Fearless(),
    new SpeakNow(),
];
// Iga ajastu kohta konsoolile kuvamiseks kokkuvõtte
eras.forEach(function (era) { return era.summary(); });
