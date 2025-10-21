import LivroModel from "../models/livromodel.js";
import AutorModel from "../models/autorModel.js";
import CategoriaModel from "../models/categoriaModel.js";
export default class LivroController {
    static listar(req, res) {
        try {
            const livros = LivroModel.listar();
            if (livros) {
                res.status(400).json({ message: "erro ao listar os livros" });
                return

            }
            res.status(200).json(livros);


        } catch (error) {

            res.status(500).json({ msg: "erro interno", erro: error.message });
        }
    }

    static criar(req, res) {
        try {
            const { titulo, autorId, categoriaId, anoPublicacao, preco } = req.body;
            if (!titulo || !autorId || !categoriaId || !anoPublicacao || !preco) {
                res.status(400).json({ message: "todos os campos devem ser preenchidos" });
            }
            if (AutorModel.buscarPorId(autorId)) {
                res.status(400).json({ message: "Autor invalido" });
                return;

            }
            if (CategoriaModel.buscarPorId(categoriaId)) {
                res.status(400).json({ message: "categoria não encontrada" });
                return;
            }
            if (Number(anoPublicacao) <= 1800 || Number(anoPublicacao) > new Date().getFullYear()) {
                res.status(400).json({ message: "ano  invalido" });
                return;
            }
                if (Number(preco) <= 0) {
                    res.status(400).json({ message: "preço deve sr maior que zero" });
                    return;

                }
                const livros = LivroModel.listar();
                const novoLivro = {
                    id: livros.length + 1,
                    titulo: titulo,
                    autorId: autorId,
                    categoriaId: categoriaId,
                    anoPublicacao: anoPublicacao,
                    preco: preco
                };
                LivroModel.criar(novoLivro);
                res.status(201).json({ message: "livro criado com sucesso", livro: novoLivro });
            } catch (error) {
                res.status(500).json({ msg: "erro ao criar o livro", erro: error.message });
            }
        }

    }



        
