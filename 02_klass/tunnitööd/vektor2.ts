import { textSpanIsEmpty } from "typescript";

class Vektor{
    constructor(protected x:number, protected y:number){}
    kuva():void{
        console.log(this.x, this.y);
    }
    pikkus():number{
        return Math.sqrt(this.x*this.x+this.y*this.y);
    }
    liida(teine:Vektor):Vektor{
        return new Vektor(this.x+teine.x, this.y+teine.y);
    }
    korruta(koef:number):Vektor{
        return new Vektor(this.x*koef, this.y*koef);
    }
    suurendaX():void{
        this.x+=1;
    }
    //skalaarkorrutis
    skalaarkorrutis(teine:Vektor){
        return this.x*teine.x+this.y*teine.y
    }
}
let vektorid:Vektor[]=[
    new Vektor(3, 5),
    new Vektor(9, 0),
    new Vektor(1, 5),
    new Vektor(2, 8),
];
let asukoht=vektorid[0];
for(let i=1; i<vektorid.length; i++){
    asukoht=asukoht.liida(vektorid[i]);
}
asukoht.kuva();
let v1:Vektor=new Vektor(3, 5);
let v2:Vektor=new Vektor(9, 0);
let energia:number=v1.skalaarkorrutis(v2);
console.log(energia);
v1.suurendaX();
v1.korruta(4).kuva();
v1.kuva();
console.log(v1.pikkus());
let vKolmas:Vektor=v1.liida(new Vektor(1, 2));
vKolmas.kuva();
