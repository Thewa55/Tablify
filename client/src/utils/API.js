import axios from "axios";

export default {
  // Gets all tables
  getTables: function() {
    return axios.get("/api/table");
  },
  // Gets the table with the given id
  getTable: function(id) {
    return axios.get("/api/table/" + id);
  },
  // Gets all items from Menu collection
  getMenu: function(){
      return axios.get("/api/table/Menu")
  },
  // Create new table in diningroom
  createNewTable: function(tableData){
      return axios.post("/api/table", tableData)
  },
  // Create new dish
  createNewDish: function(newDish){
      return axios.post("/api/table/Menu", newDish)
  },
  // Create new table data if change to occupied
  createTableHistory: function(newCustomer){
      return axios.post("/api/table/TableHistory", newCustomer)
  },

  // Change table status
  changeTableStatus: function(id, newStatus){
      return axios.put("apu/table/TableHistory/" + id, newStatus)
  },

  // Deletes the book with the given id
  deleteDish: function(id) {
    return axios.delete("/api/table/Menu/" + id);
  },
  // Deletes the existing table with the given id
  deleteTable: function(id) {
      return axios.delete("/api/table/" + id)
  }

};