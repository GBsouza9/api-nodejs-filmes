INSERT INTO filme (nome, sinopse, avaliacao, lancamento, disponivel, genero) 
           VALUES (?, ?, ?, ?, ?, ?);

INSERT INTO usuario (nome, email, senha) 
             VALUES (?, ?, ?, ?, ?, ?);

SELECT id_filme,
       nome,
       avaliacao,
       lancamento,
       disponivel,
       genero
  FROM filme
  WHERE nome like ?;
    
SELECT * FROM filme;