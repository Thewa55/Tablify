const router = require("express").Router();
const tableController = require("../../controller/TableControllers");

router.route("/")
    .get(tableController.findAllEmployee)

module.exports = router;