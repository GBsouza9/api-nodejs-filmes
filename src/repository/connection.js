import mysql from "mysql2/promise.js";

let conexao = await mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PWD,
  database: process.env.MYSQL_DB,
  // retornar true e false e mostrar os valores numericos sem ""
  typeCast: function (field, next) {
    if (field.type === "TINY" && field.length === 1) {
      return field.string() === "1";
    } else if (field.type.includes("DECIMAL")) {
      return Number(field.string());
    } else {
      return next();
    }
  },
});

const rosaClaro = "\x1b[38;5;205m";
const resetCor = "\x1b[0m";

console.log(
  `${rosaClaro}...: Conexão com Banco de Dados realizada :...${resetCor}`
);

export default conexao;
