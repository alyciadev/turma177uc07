import { livros } from "../models/livroModel.js";

export default class Livrocontroller {
    static listar(req, res) {
        res.status(200).json(livros);
    }
    static criar(req, res) {
        try {
            const { titulo, autor, ano } = req.body;
            if (!titulo || !autor || !ano) {
                res.status(400).json({ msg: "preencha todos os campos." });
                return;
            }
            const livro = livros.findIndex(f => f.titulo.toLowerCase()===titulo.toLowerCase());
            if (livro !== -1) {
                res.status(400).json({ msg: "titulo ja existente." });
                return;
            }
            if (Number(ano) <= 1800 || Number(ano) > new Date().getFullYear()) {
                res.status(400).json({ msg: "Ano invalido!" });
                return;
            }

            const novolivro = {
                id: livros.length + 1,
                titulo: titulo,
                autor: autor,
                ano: Number(ano)

            }
            livros.push(novolivro);
            res.status(201).json({msg:"livro adicionado com sucesso",livro:novolivro});
        } catch (error) {
            res.status(500).json({ msg: "erro ao criar o livro", erro: error.message });
        }
    }

}