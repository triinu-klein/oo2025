var Book = /** @class */ (function () {
    function Book(title, author, g) {
        this.title = title;
        this.author = author;
        this.g = g;
        this.draw();
    }
    Book.prototype.draw = function () {
        this.g.clearRect(0, 0, 400, 300);
        this.g.beginPath();
        this.g.rect(20, 10, 100, 200);
        this.g.stroke();
        this.g.textAlign = "center";
        this.g.font = "16px Arial";
        this.g.fillText(this.title, 70, 90);
        this.g.font = "12px Arial";
        this.g.fillText(this.author, 70, 130);
    };
    Book.prototype.handleClick = function (event) {
        var mouseX = event.offsetX;
        var mouseY = event.offsetY;
        console.log("Clicked at: (".concat(mouseX, ", ").concat(mouseY, ")"));
        if (mouseX >= 20 && mouseX <= 120 && mouseY >= 10 && mouseY <= 210) {
            this.title = "Glass Sword";
            this.author = "V. Aveyard";
            this.draw();
        }
    };
    return Book;
}());
