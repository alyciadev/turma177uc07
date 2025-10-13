const http = require(`http`);

//definir a porta na qual o servidor irá escultar as requisições
const PORT=3000;

const servidor = http. createserver ((request,response)=>){

    reponse.end(`
<html>
<heard>
<title> Meu primeiro servidor </title>

</heard>


    )
}