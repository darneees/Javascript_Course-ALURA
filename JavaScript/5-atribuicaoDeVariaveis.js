console.log("Trabalhando com atribuição de variáveis");

const idade = 24;
const primeiroNome = "Fulano";
const sobrenome = "de tal";

// console.log(nome + "" + sobrenome)
console.log(primeiroNome, sobrenome);
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`);
// atualmente é pssível fazer uma interpolação de variavel dentro de uma string ( apresentado na linha acima )

const nomecompleto = primeiroNome + sobrenome;
console.log(nomecompleto);
 

/*
 é recomendado manter sempre uma consistencia entre CONST ou LET, 
pra que assim o código seja mais legivel e de facil compreenção
*/

//é possivle seprar atribuições de variaveis

let age; //declarando variavel
age = 24; //atribuindo valor a variavel

console.log(`this is my age: ${age}`);
