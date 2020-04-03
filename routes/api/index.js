const router = require("express").Router();
const tableRoutes = require("./table");
const menuRoutes = require("./menu")
const tablehistoryRoutes = require("./tablehistory")

// Book routes
router.use("/table", tableRoutes);
router.use("/menu", menuRoutes)
router.use("/tablehistory", tablehistoryRoutes)

module.exports = router;
