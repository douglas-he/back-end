use commerce;
db.produtos.updateMany({}, {
  $set: { "criadoPor": "Douglas Henrique" }
});
