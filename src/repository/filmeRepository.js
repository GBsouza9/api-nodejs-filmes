import conexao from "./connection.js";

export async function salvarFilme(filme) {
  let comando = `
    INSERT INTO filme (nome, sinopse, avaliacao, lancamento, disponivel, genero) 
           VALUES (?, ?, ?, ?, ?, ?);
    `;
  let resposta = await conexao.query(comando, [
    filme.nome,
    filme.sinopse,
    filme.avaliacao,
    filme.lancamento,
    filme.disponivel,
    filme.genero
  ]);

  let info = resposta[0];

  let idFilme = info.insertId;
  return idFilme;
}
