import express from "express";
const app = new express();
const port = 3000;



// Meddieware para parser JSON
app.use(express.json());

// vetor que simula um banco de dados
let produtos = [
    { id: 1, nome: "Arroz", preco: 10.5 },
    { id: 2, nome: "feijao", preco: 8.5 }
];

app.get('/', (req, res) => {
    res.send("hello wold");

})

//READ- Listar todos os produtos
app.get('/produtos', (req, res) => {
    res.status(200).json(produtos);
});


//READ-buscar produto por ID
app.get('/produtos/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const produto = produtos.find(p => p.id === id);
        if (!produto) {
            res.status(404).json({ msg: "produto não encontrado" });

        }
        res.status(200).json(produto);
    }
    catch (error) {
        res.status(500).json({ erro: error.mensage });
    }

})


//CREATE- adicionar um novo produto 
app.post('/produtos', (req, res) => {
    try {
        const { nome, preco } = req.body;

        // valiação simples
        if (!nome || !preco) {
            res.status(400).json({ msg: "nome e preço são obrigatorios!" });
        }

            const novoProduto = {
                id: produtos.length + 1,
                nome,
                preco: Number(preco)
            }
            produtos.push(novoProduto);
   res.status(201).json({ msg:"produto criado com sucesso!", novoProduto});


        } catch (error) {
   res.status(500).json({ erro: error.mensage });
        }
    })



        
        
        
        
        
        
        app.listen(port, () => {
            console.log(`aplicação rodando em http://localhost:${port}`);


        })