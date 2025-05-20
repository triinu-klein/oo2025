// Impordime vajalikud klassid ja komponendid salat.ts failist
import { ceasariSalat100g } from "./salat";

// Funktsioon tulemuste kuvamiseks HTML-is
function arvuta() {
  const mass = parseFloat((document.getElementById("kogus") as HTMLInputElement).value);
  if (isNaN(mass)) {
    alert("Palun sisesta korrektne kogus!");
    return;
  }

  // Arvutame salati komponentide uus kogus vastavalt kasutaja sisestatud massile
  const baasmass = ceasariSalat100g.komponendid.map(k => k.kogus).reduce((a, b) => a + b);
  const kordaja = mass / baasmass;
  const uuedKomponendid = ceasariSalat100g.korrutatud(kordaja);

  // Kuvame tulemused HTML-is
  let tulemusedHTML = `<p>Ceasari salati koostisosad ${mass} grammi jaoks:</p><ul>`;
  uuedKomponendid.forEach(k => {
    tulemusedHTML += `<li>${k.toiduaine.nimi}: ${k.kogus.toFixed(1)} g</li>`;
  });
  tulemusedHTML += "</ul>";
  
  document.getElementById("tulemused")!.innerHTML = tulemusedHTML;
}
