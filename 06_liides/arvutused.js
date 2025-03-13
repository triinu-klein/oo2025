var InchesToCM = /** @class */ (function () {
    function InchesToCM() {
    }
    InchesToCM.prototype.calculate = function (inches) {
        return inches * 2.54;
    };
    InchesToCM.prototype.inputUnit = function () {
        return "in";
    };
    InchesToCM.prototype.outputUnit = function () {
        return "cm";
    };
    return InchesToCM;
}());
var CMtoInches = /** @class */ (function () {
    function CMtoInches() {
    }
    CMtoInches.prototype.calculate = function (cm) {
        return cm / 2.54;
    };
    CMtoInches.prototype.inputUnit = function () {
        return "cm";
    };
    CMtoInches.prototype.outputUnit = function () {
        return "in";
    };
    return CMtoInches;
}());
