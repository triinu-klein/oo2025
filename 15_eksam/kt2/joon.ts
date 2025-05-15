const kInput = document.getElementById("k") as HTMLInputElement;
const bInput = document.getElementById("b") as HTMLInputElement;
const canvas = document.getElementById("joon") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

function joonistaJoon(k: number, b: number) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.strokeStyle = "blue";

  for (let x = -50; x <= 50; x++) {
    const canvasX = canvas.width / 2 + x * 5;
    const y = k * x + b;
    const canvasY = canvas.height / 2 - y * 5;

    if (x === -50) ctx.moveTo(canvasX, canvasY);
    else ctx.lineTo(canvasX, canvasY);
  }

  ctx.stroke();
}

function uuenda() {
  const k = Number(kInput.value);
  const b = Number(bInput.value);
  joonistaJoon(k, b);
}

kInput.addEventListener("input", uuenda);
bInput.addEventListener("input", uuenda);

uuenda(); // alglaadimisel
