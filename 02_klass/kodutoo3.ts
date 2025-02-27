declare var book1: Book;

class Book{
    protected title: string;
    protected author: string;
    protected g;
    constructor(title: string, author:string, g:object){
        this.title=title; 
        this.author=author;
        this.g=g;
        this.draw();
    }
    draw(){
        this.g.clearRect(0, 0, 400, 300);
        this.g.beginPath();
        this.g.rect(20, 10, 100, 200);
        this.g.stroke();
        this.g.textAlign = "center";
        this.g.font = "16px Arial";
        this.g.fillText(this.title, 70, 90);
        this.g.font = "12px Arial";
        this.g.fillText(this.author, 70, 130);
    }
        handleClick(event: MouseEvent) {
        let mouseX = event.offsetX;
        let mouseY = event.offsetY;
        console.log(`Clicked at: (${mouseX}, ${mouseY})`);
        if (mouseX >= 20 && mouseX <= 120 && mouseY >= 10 && mouseY <= 210) {
            this.title = "Glass Sword";
            this.author = "V. Aveyard";
            this.draw();
        }
    }
}