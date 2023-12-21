const db = require("../../database-mysql/index");

exports.createOne = function (req, res) {
  db.Product.create(req.body)
    .then(() => {
      res.json("added");
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.getAllproduct = function (req, res) {
  db.Product.findAll()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
exports.getAll = function (req, res) {
  db.Product.findAll({where :{categorys_idcat:req.params.id}})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.getOne = function (req, res) {
  db.Product.findAll({where :{id:req.params.idp}})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.remove = function (req, res) {
    console.log(req.params.id);
  db.Product.destroy({where:{ id: req.params.id }})
    .then((result) => {
      res.send("deleted");
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.renew = function (req, res) {
    console.log(req.body);
    console.log(req.params.id);
  db.Product.update(req.body,{where:{id:req.params.id}})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
