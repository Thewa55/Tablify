const router = require("express").Router();
const tableRoutes = require("./table");

// Book routes
router.use("/table", tableRoutes);

module.exports = router;
