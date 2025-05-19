//Lisa takistile väli lubatud maksimumvõimsuse kohta. Selle sisestamine on vajalik konstruktoris.
//Loo käsk kontrollimaks, kas parameetrina antud pinge on vastava takisti puhul lubatud - st. kas pingestamisel eralduv võimsus jääb lubatud maksimuvõimsuse piiresse
//Koosta takistitest massiiv. Koosta funktsioon, mis loob uue massiivi takistitest, mille lubatud võimsus jääb etteantud pinge korral lubatud piiresse.
var Resistor = /** @class */ (function () {
    function Resistor(pinge, maxPower) {
        this.takistus = pinge;
        this.maxVoimsus = maxPower;
    }
    Resistor.prototype.lubatudPinge = function (pinge) {
        var voimsus = (pinge * pinge) / this.takistus;
        return voimsus <= this.maxVoimsus;
    };
    return Resistor;
}());
function takistiPinge(resistors, pinge) {
    return resistors.filter(function (resistor) { return resistor.lubatudPinge(pinge); });
}
var resistors = [
    new Resistor(100, 0.5),
    new Resistor(200, 1),
    new Resistor(50, 2),
];
var pinge = 10;
var lubatudTakistid = takistiPinge(resistors, pinge);
console.log("Takistid, mis sobivad:", lubatudTakistid);
