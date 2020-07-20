use commerce;
db.produtos.updateMany(
  {
    $nor: [
      { nome: "McChicken" },
      { ingredientes: { $all: ["ketchup"] } }
    ]
  },
  {
    $push: { "ingredientes": "ketchup" }
  });

// Ou

use commerce;
db.produtos.updateMany(
  {
    nome: { $ne: "McChicken" }
  },
  {
    $addToSet: { "ingredientes": "ketchup" }
  });
