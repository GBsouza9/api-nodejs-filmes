import { alteraCapaFilme } from "../../repository/filmeRepository.js";

export default async function alteraCapaFilmeService(id,caminhoImagem) {
    let linhasAfetadas = await alteraCapaFilme(id,caminhoImagem);
    if(linhasAfetadas==0)
        throw new Error ('Nenhum filme foi alterado.');
}