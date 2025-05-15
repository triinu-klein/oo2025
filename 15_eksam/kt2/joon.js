var kInput = document.getElementById("k");
var bInput = document.getElementById("b");
var canvas = document.getElementById("joon");
var ctx = canvas.getContext("2d");
function joonistaJoon(k, b) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    for (var x = -50; x <= 50; x++) {
        var canvasX = canvas.width / 2 + x * 5;
        var y = k * x + b;
        var canvasY = canvas.height / 2 - y * 5;
        if (x === -50)
            ctx.moveTo(canvasX, canvasY);
        else
            ctx.lineTo(canvasX, canvasY);
    }
    ctx.stroke();
}
function uuenda() {
    var k = Number(kInput.value);
    var b = Number(bInput.value);
    joonistaJoon(k, b);
}
kInput.addEventListener("input", uuenda);
bInput.addEventListener("input", uuenda);
uuenda(); // alglaadimisel
