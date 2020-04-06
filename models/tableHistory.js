const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tableHistorySchema = new Schema({
    // start_at: Date(),
    // end_at: Date(),
    order: { type: String },
    order_quantity: { type: String },
    total_price:{ type: Number },
});

const TableHistory = mongoose.model("TableHistory", tableHistorySchema);

module.exports = TableHistory;

