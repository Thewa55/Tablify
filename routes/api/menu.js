const router = require("express").Router();
const tableController = require("../../controller/TableControllers");

router.route("/")
    .get(tableController.findAllDishes)
    .post(tableController.createNewDish)

router.route("/:id")
    .delete(tableController.removeDishById)


module.exports = router;