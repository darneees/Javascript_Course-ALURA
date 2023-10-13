import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);

const conta1 = new ContaCorrente(1001, cliente1);

conta1.depositar(500);
const conta2 = new ContaCorrente(102, cliente2);

let valor = 250;
conta1.tranferir(valor, conta2);

console.log("|  DADOS  |\n");
console.log(ContaCorrente.numeroDeContas, "\n");




