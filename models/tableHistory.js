const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tableHistorySchema = new Schema({
    start_at: { type: Number },
    end_at: { type: Number },
    table_color: { type: String, default: 'White'},
    order: { type: Text },
    order_quantity: { type: String }
});

const TableHistory = mongoose.model("TableHistory", tableHistorySchema);

module.exports = TableHistory;

