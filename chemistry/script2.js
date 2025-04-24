class DrawingTool {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext("2d");
      this.currentShape = null;
  
      canvas.addEventListener("click", (e) => this.handleClick(e));
    }
  
    setShape(shape) {
      this.currentShape = shape;
    }
  
    handleClick(e) {
      const rect = this.canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      if (this.currentShape === 'line') {
        this.drawLine(x, y, x + 50, y);
      } else if (this.currentShape === 'doubleLine') {
        this.drawLine(x, y - 2, x + 50, y - 2);
        this.drawLine(x, y + 2, x + 50, y + 2);
      } else if (this.currentShape === 'hexagon') {
        this.drawHexagon(x, y, 30);
      }
    }
  
    drawLine(x1, y1, x2, y2) {
      this.ctx.beginPath();
      this.ctx.moveTo(x1, y1);
      this.ctx.lineTo(x2, y2);
      this.ctx.stroke();
    }
  
    drawHexagon(x, y, size) {
      const angle = Math.PI / 3;
      this.ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const dx = x + size * Math.cos(i * angle);
        const dy = y + size * Math.sin(i * angle);
        if (i === 0) this.ctx.moveTo(dx, dy);
        else this.ctx.lineTo(dx, dy);
      }
      this.ctx.closePath();
      this.ctx.stroke();
    }
  }
  
  let tool;
  
  document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById("drawingCanvas");
    if (canvas) {
      tool = new DrawingTool(canvas);
    }
  });
  
  function addShape(shape) {
    if (tool) {
      tool.setShape(shape);
    }
  }
  