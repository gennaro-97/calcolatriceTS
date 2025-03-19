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

function verificaStringa(): boolean {

    while (true) {
        let stringa = readlineSync.question("Vuoi continuare? (si/no): ")
        if (stringa === "si") {
            return true;
        } else if (stringa === "no") {
            return false;
        } else {
            console.log("Inserisci si o no");
            continue;
        }
    }
}

while (true) {
    console.log("CALCOLATRICE");
    let x = readlineSync.questionInt("Inserisci il primo numero: ");
    let y = readlineSync.questionInt("Inserisci il secondo numero: ");
    let operazione = readlineSync.question("Inserisci l'operazione(+, -, *, /): ");

    let risultato = calcola(x, y, operazione);
    console.log(`Il risultato di ${x} ${operazione} ${y} è ${risultato}`);

    if (!verificaStringa()) {
        console.log("Arrivederci!");
        break;
    }
}

