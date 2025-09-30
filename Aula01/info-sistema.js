// importando módulos nativos do node.js
//'os"fornece informações sobre o sistema operacional
const os = require ('os');
//'path permite manipular e trabalhar com caminhos de arquivos diretórios
const path = require ('path');
// 'fs' permite interagir com o sistema de arquivos (ler,escrever, listar...)
const fs= require ('fs');


// exibindo informações do sistema operacional
console.log('=== INFORMAÇÕES DO SISTEMA ===');
console.log('plataforma:', os.platform());//exibe  sistema operacional
console.log('arquitetura',os.arch());//exibe a arquitetura do processador

console.log('Memória total:',Math.round (os.totalmem()/1024/1024/1024)+'GB');//memória RAM total em GB
 console.log('Memória livre:',Math.round (os.freemem()/1024/1024/1024)+'GB');// MEMÓRIA RAM livre em GB


//exibindo informações de arquivos e diretorios
 console.log('=== INFORMAÇÕES DE CAMINHO ===');
 console.log ('diretorio atual:',__filename);//caminho do arquivo atual

console.log('extensão de arquivo',path.extname(__filename));//extensão do arquivo atual.


console.log('/n === ARQUIVOS NO DIRETORIO ===');
  fs.readdir ('.',(err,files)=>{
    if(err){
   console.error('erro ao ler diretorio:',err) ;
    
   return;
    }
    files.forEach(file=>{
        console.log ('📁',file);

    })
  });



