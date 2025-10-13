// calculadora simples


const argumentos = process.argv.slice(2);

console.log( [0]);
console.log(1);


 const n1 = parseFloat(argumentos[0]);
const n2  = parseFloat(argumentos[1]);


const soma =n1 + n2;
const multiplicacao= n1 * n2;
const subtracao = n1- n2;
const divisao= n1 / n2;

console.log(`soma: ${soma}`);
console.log(`multiplicação: ${multiplicacao}`);
console.log(`subtração: ${subtracao}`);
console.log(`divisao): ${divisao}`);




