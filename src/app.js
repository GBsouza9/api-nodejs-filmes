import "./utils/global.js";

import "dotenv/config.js";
import express from "express";
import cors from "cors";

import filmeController from './controller/filmeController.js'

const servidor = express();
servidor.use(cors());
servidor.use(express.json());

servidor.use(filmeController);

const PORT = process.env.PORT;

const rosaClaro = "\x1b[38;5;205m";
const resetCor = "\x1b[0m";

servidor.listen(PORT, () => {
  console.log(`${rosaClaro}...: API subiu na porta ${PORT} :..${resetCor}`);
});
