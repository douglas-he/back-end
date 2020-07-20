use dataFlights;
db.voos.find({ "empresa.nome": "GOL", "natureza": "Doméstica" }).count();
db.resumoVoos.insertOne({ "empresa": "GOL", "totalVoosDomesticos": 25805 });
