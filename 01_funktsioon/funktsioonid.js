function kmi(cm, kg) {
    var m = cm / 100;
    return kg / (m * m);
}
console.log(kmi(181, 110));
var massid = [80, 90, 100, 110, 115];
for (var _i = 0, massid_1 = massid; _i < massid_1.length; _i++) {
    var mass = massid_1[_i];
    console.log(kmi(181, mass));
}
var indeksid = massid.map(function (mass) { return kmi(181, mass); });
console.log("Algse valemiga: \n" + indeksid);
function kmi2(cm, kg) {
    var m = cm / 100;
    return (kg * 1.3) / Math.pow(m, 2.5);
}
var indeksid2 = massid.map(function (mass) { return kmi2(181, mass); });
console.log("Uue valemiga: \n" + indeksid2);
//let pikkused:number[]=[141, 150, 160, 170, 180]
var vastus = [];
for (var pikkus = 150; pikkus > 190; pikkus += 2) {
    //console.log("Kui pikkus on "+pikkus+"cm : ");
    //console.log("uue valemiga: "+kmi2(pikkus, 110));
    //console.log("algse valemiga: "+kmi(pikkus, 110));
    vastus.push([pikkus, kmi(pikkus, 90), kmi2(pikkus, 90)]);
}
console.log(vastus);
