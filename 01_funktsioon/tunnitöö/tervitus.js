console.log("abc");
var eesnimi = "Juku";
var vanus = 7;
console.log("Tere, " + eesnimi);
if (vanus < 7) {
    console.log("Tasuta");
}
else {
    console.log("Osta pilet:");
    if (vanus >= 18) {
        console.log("lapsepilet");
    }
    else {
        console.log("täispilet");
    }
}
var symbolid = [];
for (var nr = 0; nr < vanus; nr++) {
    symbolid.push("*");
}
console.log(symbolid.join(""));
