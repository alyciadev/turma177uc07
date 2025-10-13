//importando com "default export"
import soma from "./math/soma.js";

//importando com "named exports"
import { subtracao } from "./math/subtracao.js";
import { multiplicacao,divisao,potencia } from "./math/utils.js";
import { percentual } from "./math/percentual.js";


//testando as funções


console.log(`soma :${soma(10,5)}`);
console.log(`subtracao:${subtracao(10,5)}`);
 console.log(`multiplicacao: ${multiplicacao(10,5)}`);
console.log(`divisao: ${divisao(6,3)}`);
console.log(`potencia: ${potencia(2,3)}`);
console.log(`percentual: ${percentual(20,100)}`);



    

