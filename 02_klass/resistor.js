var Resistor = /** @class */ (function () {
    function Resistor(r) {
        this.r = r;
        this.r = r;
    }
    Resistor.prototype.getCurrent = function (u) {
        return u / this.r;
    };
    return Resistor;
}());
var r1 = new Resistor(110);
console.log(r1.getCurrent(5));
var r2 = new Resistor(220);
console.log(r2.getCurrent(5));
var r3 = new Resistor(4700);
console.log(r3.getCurrent(5));
var takistid = [r1, r2, r3];
console.log(takistid);
var voolusumma = 0;
for (var _i = 0, takistid_1 = takistid; _i < takistid_1.length; _i++) {
    var takisti = takistid_1[_i];
    voolusumma = takisti.getCurrent(5);
}
console.log(voolusumma);
console.log(takistid.reduce(function (siiani, praegune) { return siiani + praegune.getCurrent(5); }, 0));
//console.log(r1.getCurrent(5)+r2.getCurrent(5)+r3.getCurrent(5))
