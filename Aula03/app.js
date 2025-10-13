import express from "express";
const app= express ()
const port=3000

app.get ('/',(req,res)=>{
    res.send ('hello world')
})


app.get ('/saudacao',(req,res)=>{
  
    res.send ('meu nome é alycia')

})
app.get ('/tchau',(req,res)=>{
    res.send ('ja vou')

})


app.get ('/saudacao/:nome',(req,res)=>{
   const nome= req.params.nome;
    res.send (`meu nome é ${nome}!`);

})




app.listen(port,()=>{
    console.log(`aplicação rodando em http://localhost:${port}`)
})