use commerce;
db.produtos.updateMany(
  {
    tags: {
      $all: ["bovino"]
    }
  },
  {
    $inc: { "avaliacao": 5 }
  });
