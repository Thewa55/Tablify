const router = require("express").Router();
const tableController = require("../../controller/TableControllers");

router.route("/")
  .get(tableController.findAllTables)
  .post(tableController.createNewTable)

router.route("/:id")
  .get(tableController.findTableById)
  .delete(tableController.removeTableById)
  .put(tableController.updateTable)
  
module.exports = router;
