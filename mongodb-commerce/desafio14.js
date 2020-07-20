use commerce;
db.produtos.updateMany(
  {
    tags: {
      $in: ["bovino", "pão"]
    }
  },
  {
    $inc: {
      "vendasPorDia.6": 120
    }
  });
