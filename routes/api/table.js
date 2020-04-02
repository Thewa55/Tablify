const router = require("express").Router();
const tableController = require("../../controller/TableControllers");
console.log(tableController)

router.route("/")
  .get(tableController.findAllTables)
  .post(tableController.createNewTable)

router.route("/:id")
  .get(tableController.findTableById)
  .delete(tableController.removeTableById)

router.route("/Menu/")
  .get(tableController.findAllDishes)
  .post(tableController.createDish)

router.route("/Menu/:id")
  .delete(tableController.removeDishById)

router.route("/TableHistory/")
  .post(tableController.createTableData)

router.route("/TableHistory/:id")
  .put(tableController.updateTable)
  
module.exports = router;
