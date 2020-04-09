const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/tablify"
);

const MenuSeed = [
  {
    item:'Wagyu Meatballs',
    category:'Appetizer',
    price:'23.99',
    cook_time:'10',
    createdAt:Date(),
    upDatedAt:Date()
  },
  {
    item:'Pan Seared Scallops',
    category:'Appetizer',
    price:'24.99',
    cook_time:'10',
    createdAt:Date(),
    upDatedAt:Date()
  },
  {
    item:'Lobster Risotto',
    category:'Appetizer',
    price:'25.99',
    cook_time:'10',
    createdAt:Date(),
    upDatedAt:Date()
  },
  {
    item:'Beef Wellington',
    category:'Entree',
    price:'49.99',
    cook_time:'10',
    createdAt:Date(),
    upDatedAt:Date()
  },
  {
    item:'Roasted Rack of Lamb',
    category:'Entree',
    price:'39.99',
    cook_time:'10',
    createdAt:Date(),
    upDatedAt:Date()
  },
  {
    item:'Crispy Skin Salmon',
    category:'Entree',
    price:'37.99',
    cook_time:'10',
    createdAt:Date(),
    upDatedAt:Date()
  },
  {
    item:'Sticky Coffee Pudding',
    category:'Dessert',
    price:'19.99',
    cook_time:'10',
    createdAt:Date(),
    upDatedAt:Date()
  },
  {
    item:'Cranberry Souffle',
    category:'Dessert',
    price:'17.99',
    cook_time:'10',
    createdAt:Date(),
    upDatedAt:Date()
  }
];

db.Menu
  .remove({})
  .then(() => db.Menu.collection.insertMany(MenuSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
