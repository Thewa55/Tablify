const router = require("express").Router();
const tableRoutes = require("./table");
const menuRoutes = require("./menu")

// Book routes
router.use("/table", tableRoutes);
router.use("/menu", menuRoutes);
router.use("/employee", employeeRoutes);

module.exports = router;
