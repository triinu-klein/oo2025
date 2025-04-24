interface calculatingFunction{
    calculate(x:number):number;
    inputUnit(): string;
    outputUnit(): string;
}

class CtoF implements calculatingFunction{
    calculate(Celsius:number):number{
        return Celsius*33.8;
    }
    inputUnit(): string {
        return "C";
    }
    outputUnit(): string {
        return "F";
    }
}
class FtoC implements calculatingFunction{
    calculate(Fahrenheit:number): number {
        return Fahrenheit/33.8;
    }
    inputUnit(): string {
        return "F";
    }
    outputUnit(): string {
        return "C";
    }
}
class CtoK implements calculatingFunction{
    calculate(Celsius:number):number{
        return Celsius+273.15;
    }
    inputUnit(): string {
        return "C";
    }
    outputUnit(): string {
        return "K";
    }
}
class KtoC implements calculatingFunction{
    calculate(Kelvin:number):number{
        return Kelvin-273.15;
    }
    inputUnit(): string {
        return "K";
    }
    outputUnit(): string {
        return "C";
    }
}
class KtoF implements calculatingFunction{
    calculate(Kelvin:number):number{
        return (Kelvin-273.15)*9/5+32;
    }
    inputUnit(): string {
        return "K";
    }
    outputUnit(): string {
        return "F";
    }
}
class FtoK implements calculatingFunction{
    calculate(Fahrenheit:number): number {
        return (Fahrenheit-32)*5/9+273.15;
    }
    inputUnit(): string {
        return "F";
    }
    outputUnit(): string {
        return "K";
    }
}