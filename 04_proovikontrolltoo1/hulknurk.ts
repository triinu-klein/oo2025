class triangleX{
    x1: number;
    x2: number;
    x3: number;
   
    constructor(x1:number, x2:number, x3:number){
        this.x1=x1;
        this.x2=x2;
        this.x3=x3;
        
    }
}
class triangleY{
    y1: number;
    y2: number;
    y3: number;
    constructor(y1:number, y2:number, y3:number){
        this.y1=y1;
        this.y2=y2;
        this.y3=y3;
    }
}    
const X:triangleX[]=[
    new triangleX(1, 2, 3),
    new triangleX(3, 3, 1)
];
const Y:triangleY[]=[
    new triangleY(0, 5, 6),
    new triangleY(4, 1, 3)
];

function addNewXCO(X: triangleX[], newx1: number, newx2: number, newx3: number) { 
    X.push(new triangleX(newx1, newx2, newx3));  
}
addNewXCO(X,3,8,1);

function addNewYCO(Y: triangleY[], newy1: number, newby: number, newy3: number) { 
    Y.push(new triangleY(newy1, newby, newy3));  
}
addNewYCO(Y,2,0,3);

function showCO(){
    distance(x1:number, y1:number, x2:number, y2:number, )
    for (let i = 0; i < X.length; i++) {
        console.log(`(${X[i].x1}, ${Y[i].y1}) (${X[i].x2}, ${Y[i].y2}) (${X[i].x3}, ${Y[i].y3})`);
        ABC():number(){

        }
    }
}

function circ(){
    ABC:number=
}