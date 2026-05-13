import express from "express";

const app = express();
app.use(express.json());

const livros = [
    {
        id: 1,
        titulo: "Senhor dos anéis"
    },
    {
        id: 2,
        titulo: "A divina comedia"
    }
];

function BuscaLivro(id) {
    return livros.findIndex(Livro => {
        return Livro.id === Number(id)
    });
}

app.get("/", (req, res) => {
    res.status(200).send("Curso de NodeJs");
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

app.get("/livros/:id", (req, res) => {
    const index = BuscaLivro(req.params.id);
    res.status(200).json(livros[index]);
})

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso");
});

export default app;