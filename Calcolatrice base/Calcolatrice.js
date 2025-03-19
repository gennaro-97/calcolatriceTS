"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
function calcola(x, y, operazione) {
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
            }
            else {
                return x / y;
            }
        default:
            console.log("Operazione non valida");
            return 0;
    }
}
var x = readlineSync.questionInt("Inserisci il primo numero: ");
var y = readlineSync.questionInt("Inserisci il secondo numero: ");
var operazione = readlineSync.question("Inserisci l'operazione: ");
console.log(calcola(x, y, operazione));
