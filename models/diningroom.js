const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tableHistorySchema = new Schema({
  start_at: { type: Number },
  end_at: { type: Number },
  table_color: { type: String, default: 'White'},
  order: { type: Text },
  order_quantity: { type: String }
});

const diningroomSchema = new Schema({
  seats: { type: Number, required: true },
  twoSeat: { type: Boolean, default: false },
  fourSeat: { type: Boolean, default: false },
  sixSeat: { type: Boolean, default: false },
  availability: { type: Boolean, default: true},
  tableHistory: [tableHistorySchema]
});

const Diningroom = mongoose.model("Diningroom", diningroomSchema);

module.exports = Diningroom;


