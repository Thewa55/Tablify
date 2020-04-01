const router = require("express").Router();
const tableController = require("../../controller/TableControllers");

router.route("/")
  .get(tableController.findAllTables)
  .create(tableController.createNewTable)

router.route("/:id")
  .get(tableController.findTableById)
  .delete(tableController.removeTableById)

router.route("/Menu/")
  .get(tableController.findAllDishes)
  .create(tableController.createDish)

router.route("/Menu/:id")
  .delete(tableController.removeDishById)

router.route("/TableHistory/")
  .create(tableController.createTableData)

router.route("/TableHistory/:id")
  .put(tableController.updateTable)
  
module.exports = router;
