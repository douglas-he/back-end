use dataFlights;
db.voos.find({ "litrosCombustivel": { $exists: true, $not: { $gt: 600 } }, "empresa.nome": { $nin: ["GOL", "AZUL"] } }).limit(1);
