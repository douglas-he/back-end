use commerce;
db.produtos.updateOne(
  {
    nome: "Big Mac"
  },
  {
    $set: {
      "valorUnitario": "16.90",
    },
    $currentDate: {
      "ultimaModificacao": {
        $type: "date"
      }
    }
  });
