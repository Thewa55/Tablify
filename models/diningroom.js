const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const diningroomSchema = new Schema({
  seats: { type: Number, required: true },
  availability: { type: Boolean, default: true},
  order: {type: String},
  order_quantity: {type: String},
  color: {type: String, default:"primary"},
  status: {type: String, default:"Unoccupied"}
});

const Diningroom = mongoose.model("Diningroom", diningroomSchema);

module.exports = Diningroom;


