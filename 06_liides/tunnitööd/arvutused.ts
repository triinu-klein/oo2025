interface calculatingFunction{
    calculate(x:number):number;
    inputUnit(): string;
    outputUnit(): string;
}

class InchesToCM implements calculatingFunction{
    calculate(inches:number):number{
        return inches*2.54;
    }
    inputUnit(): string {
        return "in";
    }
    outputUnit(): string {
        return "cm";
    }
}

class CMtoInches implements calculatingFunction{
    calculate(cm:number): number {
        return cm/2.54;
    }
    inputUnit(): string {
        return "cm";
    }
    outputUnit(): string {
        return "in";
    }
}