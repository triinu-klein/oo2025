//Andmete muutmist lubava klassi eksemplari kasutamine koordinaatidega kilpkonna näitel

class kilpkonn{
    constructor(public x:number, public y: number){
        this.x=x;
        this.y=y;
    }
    liigu(dx:number, dy:number):void{
        this.x += dx;
        this.y += dy;
    }
    kuvaAsukoht(): void {
    console.log("Kilpkonn asub koordinaadil (${this.x}, ${this.y})");
  }
}

const minuKilpkonn = new kilpkonn(0, 0);
minuKilpkonn.kuvaAsukoht(); 
minuKilpkonn.liigu(10, -5);
minuKilpkonn.kuvaAsukoht(); 