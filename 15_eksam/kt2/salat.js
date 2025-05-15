var toidud = [
    { nimi: "Kana", valgud: 27, rasvad: 3, sysivesikud: 0 },
    { nimi: "Tomat", valgud: 1, rasvad: 0, sysivesikud: 4 },
    { nimi: "Juust", valgud: 25, rasvad: 30, sysivesikud: 1 },
];
function energia(toiduaine) {
    return 4 * toiduaine.valgud + 9 * toiduaine.rasvad + 4 * toiduaine.sysivesikud;
}
function komponentEnergia(k) {
    return (energia(k.toiduaine) * k.mass) / 100;
}
var select = document.getElementById("toiduaine");
var massInput = document.getElementById("mass");
var lisaBtn = document.getElementById("lisa");
var list = document.getElementById("komponendid");
var koguEl = document.getElementById("koguenergia");
toidud.forEach(function (t) {
    var opt = document.createElement("option");
    opt.value = t.nimi;
    opt.textContent = t.nimi;
    select.appendChild(opt);
});
var komponendid = [];
lisaBtn.addEventListener("click", function () {
    var valitud = select.value;
    var toiduaine = toidud.find(function (t) { return t.nimi === valitud; });
    if (!toiduaine)
        return;
    var mass = Number(massInput.value);
    var komponent = { toiduaine: toiduaine, mass: mass };
    komponendid.push(komponent);
    var li = document.createElement("li");
    li.textContent = "".concat(mass, "g ").concat(valitud, " \u2013 ").concat(komponentEnergia(komponent).toFixed(1), " kcal");
    list.appendChild(li);
    var kogu = komponendid.reduce(function (sum, k) { return sum + komponentEnergia(k); }, 0);
    koguEl.innerHTML = "Kokku energia: <strong>".concat(kogu.toFixed(1), " kcal</strong>");
});
