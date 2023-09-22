console.log("\n Product stock:");
const listaDeProdutos = new Array (
	`mobile`,
	`console`,
	`computer`
);

const idadeComprador = 18;
const estaAcompanhada = false;
const produto = "computer";


console.log("List of cataloged products: ");
console.log(listaDeProdutos, "\n");

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let produtoExiste = false;

while (contador < 3) {
    if (listaDeProdutos[contador] == produto) {
        produtoExiste = true;
        break;
    }
    contador+= 1;
}

console.log("Product exists: ", produtoExiste , "\n");

if (podeComprar && produtoExiste) {
    console.log("Good shopping");
} else { 
    console.log("Sorry, we cannot sell this product.");
}

for ( count = 0 ; count < 3 ;  count++) {
    if (listaDeProdutos[count] == produto) {
        produtoExiste = true;
        break;
    }
}

