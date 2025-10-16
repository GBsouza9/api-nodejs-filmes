import mysql from "mysql2/promise.js";

let conexao = await mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PWD,
  database: process.env.MYSQL_DB,
});

const rosaClaro = "\x1b[38;5;205m";
const resetCor = "\x1b[0m";

console.log(
  `${rosaClaro}...: Conexão com Banco de Dados realizada :...${resetCor}`
);

export default conexao;
