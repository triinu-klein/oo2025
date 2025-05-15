type Toiduaine = {
    nimi: string;
    valgud: number;
    rasvad: number;
    sysivesikud: number;
  };
  
  type Toidukomponent = {
    toiduaine: Toiduaine;
    mass: number;
  };
  
  const toidud: Toiduaine[] = [
    { nimi: "Kana", valgud: 27, rasvad: 3, sysivesikud: 0 },
    { nimi: "Tomat", valgud: 1, rasvad: 0, sysivesikud: 4 },
    { nimi: "Juust", valgud: 25, rasvad: 30, sysivesikud: 1 },
  ];
  
  function energia(toiduaine: Toiduaine): number {
    return 4 * toiduaine.valgud + 9 * toiduaine.rasvad + 4 * toiduaine.sysivesikud;
  }
  
  function komponentEnergia(k: Toidukomponent): number {
    return (energia(k.toiduaine) * k.mass) / 100;
  }
  
  const select = document.getElementById("toiduaine") as HTMLSelectElement;
  const massInput = document.getElementById("mass") as HTMLInputElement;
  const lisaBtn = document.getElementById("lisa") as HTMLButtonElement;
  const list = document.getElementById("komponendid") as HTMLUListElement;
  const koguEl = document.getElementById("koguenergia") as HTMLParagraphElement;
  
  toidud.forEach(t => {
    const opt = document.createElement("option");
    opt.value = t.nimi;
    opt.textContent = t.nimi;
    select.appendChild(opt);
  });
  
  const komponendid: Toidukomponent[] = [];
  
  lisaBtn.addEventListener("click", () => {
    const valitud = select.value;
    const toiduaine = toidud.find(t => t.nimi === valitud);
    if (!toiduaine) return;
  
    const mass = Number(massInput.value);
    const komponent: Toidukomponent = { toiduaine, mass };
    komponendid.push(komponent);
  
    const li = document.createElement("li");
    li.textContent = `${mass}g ${valitud} – ${komponentEnergia(komponent).toFixed(1)} kcal`;
    list.appendChild(li);
  
    const kogu = komponendid.reduce((sum, k) => sum + komponentEnergia(k), 0);
    koguEl.innerHTML = `Kokku energia: <strong>${kogu.toFixed(1)} kcal</strong>`;
  });
  