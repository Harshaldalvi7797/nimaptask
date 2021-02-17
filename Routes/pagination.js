let express = require("express");
let router = express.Router();
let { productpagination } = require("../controller/productpagination")
router.post("/pagination/:page", productpagination);

module.exports = router