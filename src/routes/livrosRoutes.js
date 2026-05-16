import express from "express";
import LivroControler from "../../controllers/livroController.js";

const routes = express.Router();

routes.get("/livros", LivroControler.listarlivros);
routes.get("/livros/:id", LivroControler.listarlivroPorId);

routes.post("/livros", LivroControler.cadastrarLivro);
routes.put("/livros/:id", LivroControler.atualizarLivro);

routes.delete("/livros/:id", LivroControler.excluirLivro);

export default routes;