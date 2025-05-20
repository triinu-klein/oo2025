// Impordime kõik vajalikud klassid ja koostisosad, et neid testis kasutada
import { Toiduaine, Toidukomponent, Toit, Jääsalat, Kaste, Kana, Parmesan, Tomat } from "./salat";

// Testime, kas "Toiduaine" valem töötab õigesti, kui toitaine kogus ületab 100%
try {
    
  const vigane = new Toiduaine("ValeToit", 50, 30, 30); // kokku 110%
  console.error("Viga: erandit ei visatud!");
} catch (e) {
  console.log("Test läbitud: visati oodatud viga:", (e as Error).message);
}

// Testime, kas tomati rasvakogus on õigesti arvutatud (150g tomat)
const komponent = new Toidukomponent(Tomat, 150);
console.log("Tomati rasvakogus 150g:", komponent.rasvad(), "g");
if (komponent.rasvad() !== 0.45) {
  console.error("Rasvakoguse arvutus vale!");
}

// Testime Ceasari salati valkude, rasvade ja süsivesikute arvestamist
const ceasariSalat = new Toit('Ceasari salat', [
  new Toidukomponent(Jääsalat, 100),
  new Toidukomponent(Kaste, 50),
  new Toidukomponent(Kana, 100),
  new Toidukomponent(Parmesan, 20),
]);

console.log("Valku kokku:", ceasariSalat.valgud(), "g");
console.log("Rasva kokku:", ceasariSalat.rasvad(), "g");
console.log("Süsivesikuid kokku:", ceasariSalat.sysivesikud(), "g");

// Testime massi korrutamist (soovitud mass 5000g)
const mass = 5000;
const baasmass = ceasariSalat.komponendid.map(k => k.kogus).reduce((a, b) => a + b);
const kordaja = mass / baasmass;
const uued = ceasariSalat.korrutatud(kordaja);

uued.forEach(k => {
  console.log(`${k.toiduaine.nimi}: ${k.kogus.toFixed(1)} g`);
});
