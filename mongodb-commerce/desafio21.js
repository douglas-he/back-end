use commerce;
db.produtos.createIndex({
  descricao: "text"
}, {
  default_language: "pt"
});
