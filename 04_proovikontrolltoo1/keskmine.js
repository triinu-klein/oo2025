function aritKeskmine(a, b, c) {
    return (a + b + c) / 3;
}
console.log("aritmeetiline keskmine on ", aritKeskmine(3, 5, 4));
/*
let massiiv:number[]=[1, 7, 15, 22, 1989];
let uusMassiiv: number[] = [];

function asjandus(massiiv: number[]){
    for (let i=0; i<massiiv.length-2; i++){
        let keskmine=(massiiv[i]+massiiv[i+1]+massiiv[i+2])/3;
        uusMassiiv.push(keskmine);
        }
    return uusMassiiv;
massiiv:number[]=[1, 7, 15, 22, 1989];
    uusMassiiv:number[] = [];
    
    }
console.log("algne massiiv: ",massiiv);
console.log("uus massiiv: ", asjandus(massiiv));
*/
var arve = /** @class */ (function () {
    function arve() {
        this.arvud = [];
        this.keskmised = [];
    }
    arve.prototype.lisaArv = function (arv) {
        this.arvud.push(arv);
        this.arvudeKeskmine();
    };
    arve.prototype.arvudeKeskmine = function () {
        if (this.arvud.length >= 3) {
            var uusKeskmine = (this.arvud[this.arvud.length - 3] + this.arvud[this.arvud.length - 2] + this.arvud[this.arvud.length - 1]) / 3;
            this.keskmised.push(uusKeskmine);
        }
    };
    arve.prototype.getKeskmised = function () {
        return this.keskmised;
    };
    return arve;
}());
var arvud = new arve();
arvud.lisaArv(1);
arvud.lisaArv(7);
arvud.lisaArv(15);
arvud.lisaArv(22);
arvud.lisaArv(1989);
console.log("Algne massiiv: ", arvud.arvud);
console.log("Keskmised: ", arvud.getKeskmised());
