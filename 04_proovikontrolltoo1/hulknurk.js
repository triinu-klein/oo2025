var triangleX = /** @class */ (function () {
    function triangleX(ax, bx, cx) {
        this.ax = ax;
        this.bx = bx;
        this.cx = cx;
    }
    return triangleX;
}());
var triangleY = /** @class */ (function () {
    function triangleY(ay, by, cy) {
        this.ay = ay;
        this.by = by;
        this.cy = cy;
    }
    return triangleY;
}());
var X = [
    new triangleX(1, 2, 3),
    new triangleX(3, 3, 1)
];
var Y = [
    new triangleY(0, 5, 6),
    new triangleY(4, 1, 3)
];
for (var i = 0; i < X.length; i++) {
    console.log("(".concat(X[i].ax, ", ").concat(Y[i].ay, ") (").concat(X[i].bx, ", ").concat(Y[i].by, ") (").concat(X[i].cx, ", ").concat(Y[i].cy, ")"));
}
