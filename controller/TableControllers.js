const db = require("../models");

module.exports = {
  findAllDishes: function(req, res) {
    db.Menu
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findAllTables: function(req, res) {
    db.Diningroom
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  findTableById: function(req, res) {
    db.Diningroom
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  // createNewTable here means the tables be created by user should store in here
  createNewTable: function(req, res) {
    console.log("in the createNewTable function create dininiroom")
    db.Diningroom
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  // createTable here means the table be occupied by customer and finished the order
  createTableData: function(req, res) {
    db.TableHistory
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  createDish: function(req, res) {
    db.Menu
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  

  updateTable: function(req, res) {
    db.TableHistory
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  removeDishById: function(req, res) {
    db.Menu
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  removeTableById: function(req,res) {
    db.Diningroom
    .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
