class DrawingTool {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d"); //2D joonistuskontekst
    this.currentShape = null; // muutuja valitud kujundi tüübi salvestamiseks (nt joon, kuusnurk jne)

    //hiirekliki kuulaja – igal klikil kutsutakse välja handleClick meetod
    canvas.addEventListener("click", (e) => this.handleClick(e));
  }

  setShape(shape) {
    this.currentShape = shape; //valitud kujundi tüüp (nt 'joon', 'topeltjoon', 'heksagon')
  }

  handleClick(e) {
    //hiirekliki koordinaadid canvas'ile vastavalt
    const rect = this.canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    //milline kujund on valitud ja kutsun vastava joonistusmeetodi
    if (this.currentShape === 'line') {
      this.drawLine(x, y, x + 50, y); //horisontaalne joon
    } else if (this.currentShape === 'doubleLine') {
      //kaks paralleelset joont
      this.drawLine(x, y - 2, x + 50, y - 2);
      this.drawLine(x, y + 2, x + 50, y + 2);
    } else if (this.currentShape === 'hexagon') {
      this.drawHexagon(x, y, 30); //kuusnurk antud keskpunktist
    }
  }
//joon
  drawLine(x1, y1, x2, y2) {
    this.ctx.beginPath();    
    this.ctx.moveTo(x1, y1);   
    this.ctx.lineTo(x2, y2);  
    this.ctx.stroke();
  }
// heksagon
  drawHexagon(x, y, size) {
    const angle = Math.PI / 3; // Ühe nurga suurus

    this.ctx.beginPath();

    for (let i = 0; i < 6; i++) {
      //iga tipp-punkti koordinaadid
      const dx = x + size * Math.cos(i * angle);
      const dy = y + size * Math.sin(i * angle);

      if (i === 0) this.ctx.moveTo(dx, dy); 
      else this.ctx.lineTo(dx, dy); 
    }

    this.ctx.closePath(); 
    this.ctx.stroke(); 
  }
}

let tool; // siia salvestub DrawingTool objekt hiljem

// Kui kogu HTML sisu on laaditud, käivitub see funktsioon
document.addEventListener('DOMContentLoaded', function () {
  const canvas = document.getElementById("drawingCanvas"); 
  if (canvas) {
    tool = new DrawingTool(canvas); //uus DrawingTool objekt, kui canvas eksisteerib
  }
});

// Funktsioon, mille kaudu saab väljast muuta valitud kujundit
function addShape(shape) {
  if (tool) {
    tool.setShape(shape);
  }
}