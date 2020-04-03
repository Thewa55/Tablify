const router = require("express").Router();
const tableController = require("../../controller/TableControllers");

router.route("/")
  .get(tableController.findAllTables)
  .post(tableController.createNewTable)

router.route("/:id")
  .get(tableController.findTableById)
  .delete(tableController.removeTableById)

// router.route("/menu/")
//   .get(tableController.findAllDishes)
//   .post(tableController.createDish)

// router.route("/menu/:id")
//   .delete(tableController.removeDishById)

router.route("/tablehistory/")
  .post(tableController.createTableData)

router.route("/tablehistory/:id")
  .put(tableController.updateTable)
  
module.exports = router;
