import express from "express";
const app = express();
const port = 3000;

//Rota com send(texto simples)
app.get('/texto', (req, res) => {
    res.send("resposta em texto simples");

})

// Rota com json
 app.get('/json',(req,res)=>{
    res.json({mensagem: 'Resposta em JSON', tempo:Date.now()})
 });


 // Rota com status + json
 app.post ('/criar',(req,res)=>{
    res.status.(201).json{sucesso:true, mensagem: 'recurso criado'});
 }
// Rota com erro 
app.get (/erro,)(req,res)=>{
  res.status.(400).json{erro: 'requisição invalida'});  
}


//Rota de direcionamento


app.listen(port, () => {
    console.log(`servidor rodando em http://localhost:${port}`);

});
