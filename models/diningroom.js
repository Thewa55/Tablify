const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const diningroomSchema = new Schema({
  seats: { type: Number, required: true },
  twoSeat: { type: Boolean, default: false },
  fourSeat: { type: Boolean, default: false },
  sixSeat: { type: Boolean, default: false },
  availability: { type: Boolean, default: true}
});

const Diningroom = mongoose.model("Diningroom", diningroomSchema);

module.exports = Diningroom;


