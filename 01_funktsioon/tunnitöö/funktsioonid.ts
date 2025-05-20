function kmi(cm:number, kg:number):number{
    let m:number=cm/100
    return kg/(m*m);
}
console.log(kmi(181, 110))

let massid:number[]=[80, 90, 100, 110, 115]
for(let mass of massid){
    console.log(kmi(181,mass));
}

let indeksid:number[]=massid.map(mass => kmi(181, mass));
console.log("Algse valemiga: \n"+indeksid);

function kmi2(cm:number, kg:number):number{
    let m:number=cm/100
    return (kg*1.3)/Math.pow(m, 2.5);
}
let indeksid2:number[]=massid.map(mass => kmi2(181, mass));
console.log("Uue valemiga: \n"+indeksid2);

//let pikkused:number[]=[141, 150, 160, 170, 180]
let vastus:number[][]=[];
for(let pikkus=150; pikkus>190; pikkus+=2){
    //console.log("Kui pikkus on "+pikkus+"cm : ");
    //console.log("uue valemiga: "+kmi2(pikkus, 110));
    //console.log("algse valemiga: "+kmi(pikkus, 110));
    vastus.push([pikkus,kmi(pikkus,90),kmi2(pikkus,90)]);
}
console.log(vastus);
