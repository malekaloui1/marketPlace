const Route = require("express").Router();
const controller3 = require("../controllers/Cproduct");






Route.post("/add", controller3.createOne);
Route.get("/get",controller3.getAllproduct)
Route.get("/getOne/:idp",controller3.getOne)
Route.get("/get/:id",controller3.getAll)
Route.delete("/del/:id",controller3.remove)
Route.put("/upd/:id",controller3.renew)


module.exports = Route;


