
//            Raccolta dati dall'utente

// Km da percorrere utente
const chilometriInput = prompt(`Inserisci quanti chilometri intendi percorrere:`);
const chilometriNum = parseInt(chilometriInput);
if (Number.isNaN(chilometriNum)) {
    console.log("Non è un numero");
}
else {
    console.log(chilometriNum);
}

//Nome utente
const nome = prompt(`Inserisci il tuo nome:`);
console.log(nome);

// Età utente
const etaInput = prompt(`Inserisci la tua età:`);
const etaNum = parseInt(etaInput);
if (Number.isNaN(etaNum)) {
    console.log("Non è un numero");
}
else {
    console.log(etaNum);
}

// Elaborazione dati dell'utente

let prezzoBiglietto = chilometriNum * 0.21;
let prezzoBigliettoScontato;

if (etaNum < 18) {
    prezzoBigliettoScontato = prezzoBiglietto - (prezzoBiglietto * 0.2);
    console.log(prezzoBigliettoScontato.toFixed(2), `€`);
}
else if (etaNum > 65) {
    prezzoBigliettoScontato = prezzoBiglietto - (prezzoBiglietto * 0.4);
    console.log(prezzoBigliettoScontato.toFixed(2), `€`);

}
else {
    console.log(prezzoBiglietto.toFixed(2), `€`);
}
