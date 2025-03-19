import * as readlineSync from "readline-sync";

function calcola(x: number, y: number, operazione: string): number {

    switch (operazione) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            if (y === 0) {
                console.log("Non puoi dividere per 0");
                return 0;
            } else {
                return x / y;
            }
        default:
            console.log("Operazione non valida");
            return 0;
    }
}

let x = readlineSync.questionInt("Inserisci il primo numero: ");
let y = readlineSync.questionInt("Inserisci il secondo numero: ");
let operazione = readlineSync.question("Inserisci l'operazione: ");
console.log(calcola(x, y, operazione));
