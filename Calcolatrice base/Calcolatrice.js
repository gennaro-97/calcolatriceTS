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
function verificaStringa() {
    while (true) {
        var stringa = readlineSync.question("Vuoi continuare? (si/no): ");
        if (stringa === "si") {
            return true;
        }
        else if (stringa === "no") {
            return false;
        }
        else {
            console.log("Inserisci si o no");
            continue;
        }
    }
}
while (true) {
    console.log("CALCOLATRICE");
    var x = readlineSync.questionInt("Inserisci il primo numero: ");
    var y = readlineSync.questionInt("Inserisci il secondo numero: ");
    var operazione = readlineSync.question("Inserisci l'operazione(+, -, *, /): ");
    var risultato = calcola(x, y, operazione);
    console.log("Il risultato di ".concat(x, " ").concat(operazione, " ").concat(y, " \u00E8 ").concat(risultato));
    if (!verificaStringa()) {
        console.log("Arrivederci!");
        break;
    }
}
