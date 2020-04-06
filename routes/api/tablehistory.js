const router = require("express").Router();
const tableController = require("../../controller/TableControllers");


router.route("/")
  .post(tableController.createTableHistoryData)
  .get(tableController.findAllTableHistory)

router.route("/:id")
  .put(tableController.updateTableHistory)
  .get(tableController.findTableHistoryById)

  module.exports = router;
