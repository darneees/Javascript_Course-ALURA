console.log(`trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro =  `Rio de janeiro`;

const listDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de janeiro`,
    `Bahia`
);

listDeDestinos.push('curitiba'); //adcionando item na lista
console.log("Destinos possiveis: ");
//console.log(salvador, saoPaulo, rioDejaneiro)
console.log(listDeDestinos, "\n");


// listDeDestinos.splice(2,1);
listDeDestinos.splice(1,1); //SPLICE é utilizado para remover itens de uma lista, ou se caso voce deseja fazer com que ele nao seja mais lido é utilizado esse atributo
console.log(listDeDestinos, "- aqui você percebe que 'São Paulo' foi removido. \n");

console.log(listDeDestinos[1], "-" ,listDeDestinos[3]); //nesse caso é feita a exibição de um item em especifico













/*
 Alem de não ser recomendado tambem não é possível fazer atribuição ou uma reatrbuição de uma vaiavel CONST.

 exemplo: 
 listaDeDestinos = 2

 TypeError: Assignment to constant variable.

*/