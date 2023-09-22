console.log(`Trabalhando com Condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de janeiro`
);

const idadeComprador = 19;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Lista de destinos possíveis: ");
console.log(listaDeDestinos, "\n");

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa viagem!!!");
    listaDeDestinos.splice(2, 1); //remove item
} else {
    console.log("Não é maior de idade e não posso vender");
}

console.log("Embarque: \n\n");

if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem!!!");
    listaDeDestinos.splice(2, 1); //remove item
} else {
    console.log("Você não pode embarcar");
}

console.log(listaDeDestinos);