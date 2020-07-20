use dataFlights;
db.voos.deleteMany({ "empresa.nome": "AZUL", "litrosCombustivel": { $lt: 400 } });
//{ "acknowledged" : true, "deletedCount" : 538 }
