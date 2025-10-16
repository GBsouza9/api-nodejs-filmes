import { Router } from "express";
const endpoints = Router();

import multer from "multer";

import salvarFilmeService from "../service/filme/salvarFilmeService.js";
import consultarFilmesService from "../service/filme/consultarFilmesService.js";
//import consultarFilmesPorIdService from "../service/filme/consultarFilmesPorIdService.js";
import alteraCapaFilmeService from "../service/filme/alterarCapaFilmeService.js";

// inserir
endpoints.post("/filme", async (req, resp) => {
  try {
    let filmeObj = req.body;

    let id = await salvarFilmeService(filmeObj);

    resp.send({
      id: id,
    });
  } catch (err) {
    logErro(err);
    resp.status(400).send(criarErro(err));
  }
});

//
endpoints.get("/filme", async (req, resp) => {
  try {
    let nome = req.query.nome;
    let registros = await consultarFilmesService(nome);

    resp.send(registros);
  } catch (err) {
    logErro(err);
    resp.status(400).send(criarErro(err));
  }
});

let uploadCapa = multer({ dest: "./storage/capa" });

endpoints.put(
  "/filme/:id/imagem",
  uploadCapa.single("imagem"),
  async (req, resp) => {
    try {
      // entradas
      let id = req.params.id;
      let caminhoImagem = req.file.path;
      console.log("Arquivo recebido:", req.file);

      //processamento(service)
      // nao coloco em uma variavel pq essa funcao nao retorna nd
      await alteraCapaFilmeService(id, caminhoImagem);

      //saida(respose)
      resp.status(204).send();
    } catch (err) {
      logErro(err);
      resp.status(400).send(criarErro(err));
    }
  }
);

export default endpoints;
