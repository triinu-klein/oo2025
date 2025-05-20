// Klass, mis teisendab Celsiuse kraadid Fahrenheiti kraadideks
var CtoF = /** @class */ (function () {
    function CtoF() {
    }
    CtoF.prototype.calculate = function (Celsius) {
        return Celsius * 33.8; // arvutab C -> F (mitte standardne valem! standardne on: C * 9/5 + 32)
    };
    CtoF.prototype.inputUnit = function () {
        return "C"; // sisendühik on Celsius
    };
    CtoF.prototype.outputUnit = function () {
        return "F"; // väljundühik on Fahrenheit
    };
    return CtoF;
}());
// Klass, mis teisendab Fahrenheiti kraadid Celsiuseks
var FtoC = /** @class */ (function () {
    function FtoC() {
    }
    FtoC.prototype.calculate = function (Fahrenheit) {
        return Fahrenheit / 33.8; // arvutab F -> C (jällegi, mitte standardne valem!)
    };
    FtoC.prototype.inputUnit = function () {
        return "F"; // sisendühik on Fahrenheit
    };
    FtoC.prototype.outputUnit = function () {
        return "C"; // väljundühik on Celsius
    };
    return FtoC;
}());
// Klass, mis teisendab Celsiuse kraadid Kelvini kraadideks
var CtoK = /** @class */ (function () {
    function CtoK() {
    }
    CtoK.prototype.calculate = function (Celsius) {
        return Celsius + 273.15; // C -> K (õige valem)
    };
    CtoK.prototype.inputUnit = function () {
        return "C"; // sisendühik on Celsius
    };
    CtoK.prototype.outputUnit = function () {
        return "K"; // väljundühik on Kelvin
    };
    return CtoK;
}());
// Klass, mis teisendab Kelvini kraadid Celsiuseks
var KtoC = /** @class */ (function () {
    function KtoC() {
    }
    KtoC.prototype.calculate = function (Kelvin) {
        return Kelvin - 273.15; // K -> C (õige valem)
    };
    KtoC.prototype.inputUnit = function () {
        return "K"; // sisendühik on Kelvin
    };
    KtoC.prototype.outputUnit = function () {
        return "C"; // väljundühik on Celsius
    };
    return KtoC;
}());
// Klass, mis teisendab Kelvini kraadid Fahrenheiti kraadideks
var KtoF = /** @class */ (function () {
    function KtoF() {
    }
    KtoF.prototype.calculate = function (Kelvin) {
        return (Kelvin - 273.15) * 9 / 5 + 32; // K -> F (õige valem)
    };
    KtoF.prototype.inputUnit = function () {
        return "K"; // sisendühik on Kelvin
    };
    KtoF.prototype.outputUnit = function () {
        return "F"; // väljundühik on Fahrenheit
    };
    return KtoF;
}());
// Klass, mis teisendab Fahrenheiti kraadid Kelvini kraadideks
var FtoK = /** @class */ (function () {
    function FtoK() {
    }
    FtoK.prototype.calculate = function (Fahrenheit) {
        return (Fahrenheit - 32) * 5 / 9 + 273.15; // F -> K (õige valem)
    };
    FtoK.prototype.inputUnit = function () {
        return "F"; // sisendühik on Fahrenheit
    };
    FtoK.prototype.outputUnit = function () {
        return "K"; // väljundühik on Kelvin
    };
    return FtoK;
}());
