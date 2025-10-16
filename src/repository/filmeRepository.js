import conexao from "./connection.js";

//salvar/ adiciona filme no banco de dados
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
    filme.genero,
  ]);

  let info = resposta[0];

  let idFilme = info.insertId;
  return idFilme;
}

//consulta
export async function consultarFilmes(nome) {
  let comando = `
  SELECT id_filme   Id,
         nome,
         avaliacao,
         lancamento,
         disponivel,
         genero
    FROM filme
   WHERE nome like ?;
    `;
  let resposta = await conexao.query(comando, ["%" + nome + "%"]);
  let registros = resposta[0];

  return registros;
}

export async function alteraCapaFilme(id, caminhoImagem) {
  let comando = `
  UPDATE filme
     SET img=?
   WHERE id_filme=?
  `;
  // coloca na ordem das interrogacoes
  let resposta = await conexao.query(comando, [caminhoImagem, id]);
  let info = resposta[0];
   
  let linhasAfetadas= info.affectedRows;
  return linhasAfetadas;
}
