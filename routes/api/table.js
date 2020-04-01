const router = require("express").Router();
const tableController = require("../../controller/TableControllers");

router.route("/")
  .get(tableController.findAllDishes)
  .get(tableController.finsAllTables)
  .create(tableController.createNewTable)
  .create(tableController.createTableData)
  .create(tableController.createDish)

router.route("/:id")
  .get(tableController.findTableById)
  .put(tableController.updateTable)
  .delete(tableController.removeDishById)
  .delete(tableController.removeTableById)


module.exports = router;
