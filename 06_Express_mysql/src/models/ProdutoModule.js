import db from "../conecxao.js";
import mysql from "mysql2/promise";

const conecxao = mysql.createPool(db);

const criandoProduto = async (nomeproduto) => {
  console.log("ProdutoModule :: criandoProduto");
  const sql = `INSERT INTO produto (nome_produto) VALUES (?)`;

  const params = [nomeproduto];
  try {
    const [resposta] = await conecxao.query(sql, params);
    console.log(resposta);
  } catch (error) {
    console.error(error);
  }
}

const mostrarProdutos = async () => {
  console.log("ProdutoModule :: mostrarProdutos");
  const sql = "SELECT * FROM produto";
  try {
    const [resposta] = ({} = await conecxao.query(sql));
    console.log(resposta);
  } catch (error) {
    console.error(error);
  }
};
 const atualizandoProduto = async (id_produto, nome_produto) => {
  console.log("ProdutoModule :: atualizandoProduto");
  const sql = `UPDATE produto SET nome_produto = ? WHERE id_produto = ?`;
  const params = [nome_produto, id_produto];
  try {
    const [resposta] = await conecxao.query(sql, params);
    console.log(resposta);
  } catch (error) {
    console.error(error);
  }
 }     
 const deletandoProduto = async (id_produto) => {
  console.log("ProdutoModule :: deletandoProduto");
  const sql = `DELETE FROM produto WHERE id_produto = ?`;
  const params = [id_produto];
  try {
    const [resposta] = await conecxao.query(sql, params);
 
      if(resposta.affectedRows > 1){
        return[404,{mensagem: 'Produto nao encontrado'}];
      }else{
        return[200,{mensagem: 'Produto deletado com sucesso'}]; 
      }
    } catch (error) {
      console.error(error);
    }
  }
 





// mostrarProdutos();
// criandoProduto('ameixa');
// atualizandoProduto(1, 'maça');
console.log(await deletandoProduto(2));
