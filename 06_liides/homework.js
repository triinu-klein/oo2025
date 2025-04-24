var CtoF = /** @class */ (function () {
    function CtoF() {
    }
    CtoF.prototype.calculate = function (Celsius) {
        return Celsius * 33.8;
    };
    CtoF.prototype.inputUnit = function () {
        return "C";
    };
    CtoF.prototype.outputUnit = function () {
        return "F";
    };
    return CtoF;
}());
var FtoC = /** @class */ (function () {
    function FtoC() {
    }
    FtoC.prototype.calculate = function (Fahrenheit) {
        return Fahrenheit / 33.8;
    };
    FtoC.prototype.inputUnit = function () {
        return "F";
    };
    FtoC.prototype.outputUnit = function () {
        return "C";
    };
    return FtoC;
}());
var CtoK = /** @class */ (function () {
    function CtoK() {
    }
    CtoK.prototype.calculate = function (Celsius) {
        return Celsius + 273.15;
    };
    CtoK.prototype.inputUnit = function () {
        return "C";
    };
    CtoK.prototype.outputUnit = function () {
        return "K";
    };
    return CtoK;
}());
var KtoC = /** @class */ (function () {
    function KtoC() {
    }
    KtoC.prototype.calculate = function (Kelvin) {
        return Kelvin - 273.15;
    };
    KtoC.prototype.inputUnit = function () {
        return "K";
    };
    KtoC.prototype.outputUnit = function () {
        return "C";
    };
    return KtoC;
}());
var KtoF = /** @class */ (function () {
    function KtoF() {
    }
    KtoF.prototype.calculate = function (Kelvin) {
        return (Kelvin - 273.15) * 9 / 5 + 32;
    };
    KtoF.prototype.inputUnit = function () {
        return "K";
    };
    KtoF.prototype.outputUnit = function () {
        return "F";
    };
    return KtoF;
}());
var FtoK = /** @class */ (function () {
    function FtoK() {
    }
    FtoK.prototype.calculate = function (Fahrenheit) {
        return (Fahrenheit - 32) * 5 / 9 + 273.15;
    };
    FtoK.prototype.inputUnit = function () {
        return "F";
    };
    FtoK.prototype.outputUnit = function () {
        return "K";
    };
    return FtoK;
}());
