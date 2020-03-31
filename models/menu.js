const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  item: { type: Number, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  cookTime: { type: Number, required: true },
});

const Menu = mongoose.model("Diningroom", menuSchema);

module.exports = Menu;
