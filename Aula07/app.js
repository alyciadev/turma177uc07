import express from 'express'
import livroRoutes from './src/routes/livroRoutes.js';
const app= express();
const port =3000;

app .use(express.json()); //configuração de medidor

app.use('/livros', livroRoutes);
app.get ('/', (req,res)=>{
    res.status (200).send("rota home");

});

app.listen(port,()=> {
    console.log(`aplicação rodando em http://localhost:${port}`);
    });