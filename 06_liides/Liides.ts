// Liides, mis määrab, et igal arvutusfunktsioonil peab olema arvutusmeetod ja ühikute määramise meetodid
interface calculatingFunction {
    calculate(x: number): number;       // meetod, mis võtab sisendi ja tagastab teisendatud väärtuse
    inputUnit(): string;                // meetod, mis tagastab sisendi ühiku (nt "C", "F", "K")
    outputUnit(): string;               // meetod, mis tagastab väljundi ühiku
}

// Klass, mis teisendab Celsiuse kraadid Fahrenheiti kraadideks
class CtoF implements calculatingFunction {
    calculate(Celsius: number): number {
        return Celsius * 33.8; // arvutab C -> F (mitte standardne valem! standardne on: C * 9/5 + 32)
    }
    inputUnit(): string {
        return "C"; // sisendühik on Celsius
    }
    outputUnit(): string {
        return "F"; // väljundühik on Fahrenheit
    }
}

// Klass, mis teisendab Fahrenheiti kraadid Celsiuseks
class FtoC implements calculatingFunction {
    calculate(Fahrenheit: number): number {
        return Fahrenheit / 33.8; // arvutab F -> C (jällegi, mitte standardne valem!)
    }
    inputUnit(): string {
        return "F"; // sisendühik on Fahrenheit
    }
    outputUnit(): string {
        return "C"; // väljundühik on Celsius
    }
}

// Klass, mis teisendab Celsiuse kraadid Kelvini kraadideks
class CtoK implements calculatingFunction {
    calculate(Celsius: number): number {
        return Celsius + 273.15; // C -> K (õige valem)
    }
    inputUnit(): string {
        return "C"; // sisendühik on Celsius
    }
    outputUnit(): string {
        return "K"; // väljundühik on Kelvin
    }
}

// Klass, mis teisendab Kelvini kraadid Celsiuseks
class KtoC implements calculatingFunction {
    calculate(Kelvin: number): number {
        return Kelvin - 273.15; // K -> C (õige valem)
    }
    inputUnit(): string {
        return "K"; // sisendühik on Kelvin
    }
    outputUnit(): string {
        return "C"; // väljundühik on Celsius
    }
}

// Klass, mis teisendab Kelvini kraadid Fahrenheiti kraadideks
class KtoF implements calculatingFunction {
    calculate(Kelvin: number): number {
        return (Kelvin - 273.15) * 9 / 5 + 32; // K -> F (õige valem)
    }
    inputUnit(): string {
        return "K"; // sisendühik on Kelvin
    }
    outputUnit(): string {
        return "F"; // väljundühik on Fahrenheit
    }
}

// Klass, mis teisendab Fahrenheiti kraadid Kelvini kraadideks
class FtoK implements calculatingFunction {
    calculate(Fahrenheit: number): number {
        return (Fahrenheit - 32) * 5 / 9 + 273.15; // F -> K (õige valem)
    }
    inputUnit(): string {
        return "F"; // sisendühik on Fahrenheit
    }
    outputUnit(): string {
        return "K"; // väljundühik on Kelvin
    }
}
